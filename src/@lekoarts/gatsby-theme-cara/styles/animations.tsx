import { keyframes, css } from "@emotion/react"
import styled from "@emotion/styled"

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const waveAnimation = (length: string) => css`
  animation: ${wave} ${length} linear infinite alternate;
`
export const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const glow = keyframes`
  from {
    text-shadow: 0 0 10px #eeeeee, 0 0 20px #000000, 0 0 30px #000000, 0 0 40px #000000, 0 0 50px #9554b3, 0 0 60px #9554b3, 0 0 70px #9554b3;
  }
  to {
    text-shadow: 0 0 20px #eeeeee, 0 0 30px #EB212E, 0 0 40px #EB212E, 0 0 50px #EB212E, 0 0 60px #EB212E, 0 0 70px #EB212E, 0 0 80px #EB212E;
  }
`

export const Glow = styled.h1`
  animation: ${glow}
  font-size: 70px;
  font-style: italic;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
  -webkit-animation: ${glow} 1s ease-in-out infinite alternate;
  -moz-animation: ${glow} 1s ease-in-out infinite alternate;
  animation: ${glow} 1s ease-in-out infinite alternate;
`

const glowButton = keyframes`
  from {
    box-shadow: 0 0 10px #eeeeee, 0 0 20px #000000, 0 0 30px #000000, 0 0 40px #EB212E, 0 0 50px #EB212E, 0 0 60px #EB212E, 0 0 70px #EB212E;
  }
  to {
    box-shadow: 0 0 20px #eeeeee, 0 0 30px #2E67F8, 0 0 40px #2E67F8, 0 0 50px #2E67F8, 0 0 60px #2E67F8, 0 0 70px #2E67F8, 0 0 80px #2E67F8;
  }
`

export const GlowButton = styled.button`
  animation: ${glowButton}
  text-align: center;
  -webkit-animation: ${glowButton} 1s ease-in-out infinite alternate;
  -moz-animation: ${glowButton} 1s ease-in-out infinite alternate;
  animation: ${glowButton} 1s ease-in-out infinite alternate;
`