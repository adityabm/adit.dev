import { Box } from "@chakra-ui/react/box";
import Image from "next/image";

export default function Logo({ color, ...props }) {
  return (
    <Box {...props}>
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />
    </Box>
  );
}
