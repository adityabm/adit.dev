"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../themes";

const customTheme = {
  ...theme,
};

export function Provider({ children }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}
