/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import { Glow, GlowButton } from "../styles/animations"
import SVG from "./svg"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    const next = isDark ? `light` : `dark`
    setColorMode(next)
  }

  const ButtonLabel = isDark ? "Be the Light" : "Enter the Dark Side"

  return (
    <Box as="footer" variant="footer">
      <GlowButton
        sx={{
          variant: `buttons.toggle`, 
          fontWeight: `semibold`, 
          display: `block`, 
          mx: `auto`, 
          mb: 3
        }}
        onClick={toggleColorMode}
        type="button"
        aria-label={ButtonLabel}
        data-testid="color-mode-toggle"
      >
        {ButtonLabel}
      </GlowButton>
      <br />
      <Glow>MAY THE FORCE BE WITH YOU</Glow>
      {/* Copyright &copy; {new Date().getFullYear()}. All rights reserved. */}
      
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 4,
          color: `text`,
          fontWeight: `semibold`,
          height: '40px',
          a: { color: `text` },
          outerHeight: 100
        }}
      >
        <SVG icon="keyy" width={60} color="icon_purple" left="40%" top="10" />

      </Flex>
    </Box>
  )
}

export default Footer
