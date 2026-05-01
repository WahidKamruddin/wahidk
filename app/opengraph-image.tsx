import { ImageResponse } from 'next/og'

export const alt = 'Wahid Kamruddin — Full-Stack Developer & Designer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const fontSemiBold = await fetch(
    'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-SemiBold.ttf'
  ).then((res) => res.arrayBuffer())

  const fontLight = await fetch(
    'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Light.ttf'
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#D5AA81',
          padding: '70px 80px',
          fontFamily: 'Poppins',
        }}
      >
        {/* Brand tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ fontSize: 38 }}>☕</div>
          <div style={{ fontSize: 28, color: '#9C6F44', fontWeight: 600, letterSpacing: '-0.5px' }}>
            Code Café.
          </div>
        </div>

        {/* Name */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          <div
            style={{
              fontSize: 112,
              fontWeight: 600,
              color: '#563517',
              lineHeight: 1.0,
              letterSpacing: '-3px',
            }}
          >
            Wahid
          </div>
          <div
            style={{
              fontSize: 112,
              fontWeight: 600,
              color: '#563517',
              lineHeight: 1.05,
              letterSpacing: '-3px',
            }}
          >
            Kamruddin
          </div>
        </div>

        {/* Footer row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 30, color: '#724E2C', fontWeight: 300 }}>
            Full-Stack Developer & Designer
          </div>
          <div style={{ fontSize: 18, color: '#724E2C', opacity: 0.6 }}>
            wahidkamruddin.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Poppins', data: fontSemiBold, style: 'normal', weight: 600 },
        { name: 'Poppins', data: fontLight, style: 'normal', weight: 300 },
      ],
    }
  )
}
