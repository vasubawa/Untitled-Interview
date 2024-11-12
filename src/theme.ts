import { createSystem, defaultTheme } from "@chakra-ui/react"
export const system = createSystem(defaultTheme, {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default defaultTheme
