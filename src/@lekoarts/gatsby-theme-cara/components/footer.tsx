/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import SVG from "./svg"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Check out the DarkSide"
      >
        {isDark ? `Visit the Light` : `Visit the DarkSide`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
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
