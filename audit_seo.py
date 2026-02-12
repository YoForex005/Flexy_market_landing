import os
import re

app_dir = r'c:\Users\YoForex\OneDrive - yoaccount\Desktop\Flexy_market_landing\app'
results = []

def audit_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    relative_path = os.path.relpath(filepath, app_dir)
    
    # 1. Metadata Completeness
    # Check for: export const metadata: Metadata
    # We allow some flexibility in whitespace, but require the type : Metadata if requested literally
    # Prompt says: missing the "export const metadata: Metadata" object
    has_metadata_obj = 'export const metadata' in content
    has_metadata_type = re.search(r'export\s+const\s+metadata\s*:\s*Metadata', content) is not None
    
    og_present = 'openGraph' in content if has_metadata_obj else False
    twitter_present = 'twitter' in content if has_metadata_obj else False
    
    # 2. Semantic HTML - H1 count
    # Check for <h1> tags in the file
    h1_matches = re.findall(r'<h1.*?>', content, re.IGNORECASE)
    h1_count = len(h1_matches)
    
    # 3. Nested <a> tags
    # Illegal HTML: <a>...<a>...</a>...</a>
    # We look for an <a> that is followed by another <a> before a </a>
    nested_a = False
    # Simple state machine to find nested tags
    depth = 0
    # Match <a> or </a>
    tokens = re.finditer(r'<(/?a)\b.*?>', content, re.IGNORECASE)
    for token in tokens:
        tag = token.group(1).lower()
        if tag == 'a':
            depth += 1
            if depth > 1:
                nested_a = True
                break
        elif tag == '/a':
            depth = max(0, depth - 1)

    # 4. JSON-LD for Organization or Product
    has_organization = 'Organization' in content and 'application/ld+json' in content
    has_product = 'Product' in content and 'application/ld+json' in content
    has_json_ld = has_organization or has_product
    
    return {
        'path': relative_path,
        'has_metadata_obj': has_metadata_obj,
        'has_metadata_type': has_metadata_type,
        'og_present': og_present,
        'twitter_present': twitter_present,
        'h1_count': h1_count,
        'nested_a': nested_a,
        'has_json_ld': has_json_ld
    }

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file == 'page.tsx':
            filepath = os.path.join(root, file)
            results.append(audit_file(filepath))

# Audit root layout separately
layout_path = os.path.join(app_dir, 'layout.tsx')
layout_audit = {}
if os.path.exists(layout_path):
    with open(layout_path, 'r', encoding='utf-8') as f:
        l_content = f.read()
    layout_audit = {
        'metadataBase': 'metadataBase' in l_content,
        'titleTemplate': 'template' in l_content and 'title' in l_content
    }

print("### LAYOUT AUDIT ###")
import json
print(json.dumps(layout_audit, indent=2))
print("### PAGE AUDIT ###")
print(json.dumps(results, indent=2))
