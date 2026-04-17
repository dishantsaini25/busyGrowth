import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0e1a, #141a2e)',
          borderRadius: '100px',
          border: '8px solid rgba(255, 215, 0, 0.4)',
        }}
      >
        {/* Decorative circles instead of text */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            background: 'linear-gradient(135deg, #ffd700, #ffe44d)',
            borderRadius: '30px',
          }} />
          <div style={{ 
            width: '80px', 
            height: '80px', 
            background: '#00e5ff',
            borderRadius: '20px',
            opacity: 0.8,
          }} />
        </div>
      </div>
    ),
    { ...size }
  );
}