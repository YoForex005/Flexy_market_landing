import os
import re

root_dir = r'c:\Users\YoForex\OneDrive - yoaccount\Desktop\Flexy_market_landing'
app_dir = os.path.join(root_dir, 'app')
components_dir = os.path.join(root_dir, 'components')

# 1. Discover valid routes
valid_routes = set(['/'])
for root, dirs, files in os.walk(app_dir):
    if 'page.tsx' in files:
        rel_path = os.path.relpath(root, app_dir)
        if rel_path == '.':
            route = '/'
        else:
            route = '/' + rel_path.replace('\\', '/')
        
        # Handle dynamic routes like [slug] - this is just a heuristic
        route = re.sub(r'\[([^\]]+)\]', r'{\1}', route)
        valid_routes.add(route)

results = []

def audit_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    rel_filepath = os.path.relpath(filepath, root_dir)
    file_results = {
        'path': rel_filepath,
        'legacy_imgs': [],
        'missing_alt': [],
        'missing_priority': [],
        'invalid_internal_links': [],
        'unsafe_external_links': []
    }
    
    # Legacy <img> tags
    img_matches = re.finditer(r'<img\b([^>]*)>', content, re.IGNORECASE)
    for match in img_matches:
        file_results['legacy_imgs'].append(match.group(0))
    
    # <Image /> checks
    next_image_matches = re.finditer(r'<Image\b([^>/]*)(/?>)', content)
    for match in next_image_matches:
        img_tag = match.group(0)
        attrs = match.group(1)
        
        # Check alt
        if 'alt=' not in attrs:
            file_results['missing_alt'].append(img_tag)
        
        # Check priority
        # Heuristic: Priority should be on Hero, Logo, or if specified in the requirement
        # We flag if it looks like a Hero or Logo but lacks priority
        is_above_fold = any(keyword in img_tag.lower() or keyword in rel_filepath.lower() 
                            for keyword in ['hero', 'logo', 'banner'])
        if is_above_fold and 'priority' not in attrs:
            file_results['missing_priority'].append(img_tag)

    # Link checks
    link_matches = re.finditer(r'<(?:Link|a)\b([^>]*)>', content, re.IGNORECASE)
    for match in link_matches:
        attrs = match.group(1)
        href_match = re.search(r'href=["\']([^"\']+)["\']', attrs)
        if not href_match:
            continue
            
        href = href_match.group(1)
        
        # Internal links
        if href.startswith('/') and not href.startswith('//'):
            # Basic validation: strip hash and query
            clean_href = href.split('#')[0].split('?')[0].rstrip('/')
            if clean_href == '': clean_href = '/'
            
            # This is a very basic check. Dynamic routes will often fail this simple check.
            # We skip segments that look like dynamic params in the href (if any)
            if '{' not in clean_href:
                # Check if it matches any valid route
                # We allow exact match or prefix match for dynamic routes
                found = False
                for r in valid_routes:
                    if r == clean_href:
                        found = True
                        break
                    # Simple dynamic route check: /blog/{slug} -> /blog/anything
                    regex_r = re.sub(r'\{[^}]+\}', r'[^/]+', r)
                    if re.fullmatch(regex_r, clean_href):
                        found = True
                        break
                
                if not found and not clean_href.startswith('/images/') and not clean_href.startswith('/videos/') and not clean_href.endswith(('.pdf', '.png', '.jpg')):
                    file_results['invalid_internal_links'].append(href)
        
        # External links
        elif href.startswith(('http://', 'https://')):
            if 'target="_blank"' not in attrs or 'rel=' not in attrs or 'noopener' not in attrs or 'noreferrer' not in attrs:
                # Specific check as requested: target="_blank" OR rel="noopener noreferrer"
                # Actually the prompt says: missing target="_blank" OR rel="noopener noreferrer"
                has_safety = 'target="_blank"' in attrs and 'rel=' in attrs and 'noopener' in attrs and 'noreferrer' in attrs
                if not has_safety:
                    file_results['unsafe_external_links'].append(href)

    return file_results

tsx_files = []
for root, dirs, files in os.walk(root_dir):
    if 'node_modules' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith('.tsx'):
            tsx_files.append(os.path.join(root, file))

all_results = []
for f in tsx_files:
    res = audit_file(f)
    # Only append if there were any finding
    if any(res[k] for k in res if k != 'path'):
        all_results.append(res)

import json
print(json.dumps(all_results, indent=2))
