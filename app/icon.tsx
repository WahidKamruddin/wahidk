import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const font = await fetch(
    'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-SemiBold.ttf'
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#9C6F44',
          borderRadius: 7,
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: 14,
          color: '#FFFFFF',
          letterSpacing: '0.5px',
        }}
      >
        WK
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Poppins', data: font, style: 'normal', weight: 600 }],
    }
  )
}
