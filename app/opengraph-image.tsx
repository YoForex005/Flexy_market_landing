import { ImageResponse } from 'next/og';

export const alt = 'Flexy Markets — Forex & CFD Trading';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', padding: '64px 72px', color: '#ffffff',
        background: 'linear-gradient(135deg, #082a22 0%, #0f4941 60%, #0f664a 100%)',
      }}>
        <div style={{ display: 'flex', fontSize: 32, fontWeight: 700, letterSpacing: 5 }}>
          FLEXY MARKETS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
            Forex & CFD Trading
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#b9ecd9' }}>
            Markets. Platforms. Trading education.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 24, color: '#b9ecd9' }}>
          flexymarkets.com
        </div>
      </div>
    ),
    size,
  );
}
