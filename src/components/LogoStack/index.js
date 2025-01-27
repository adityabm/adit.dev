"use server";
import { FaCss3, FaLaravel, FaPhp, FaVuejs } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { Box, Icon } from "@chakra-ui/react";
import React from "react";

export default async function LogoStack({ stack, ...props }) {
  const skillLogo = {
    PHP: <FaPhp />,
    Laravel: <FaLaravel />,
    NextJS: <RiNextjsLine />,
    Javascript: <IoLogoJavascript />,
    VueJS: <FaVuejs />,
    CSS: <FaCss3 />,
  };

  const IconComponent = skillLogo[stack];

  if (!IconComponent) {
    return <Box>Icon not found</Box>;
  }

  const IconWithProps = React.cloneElement(IconComponent, props);

  return IconWithProps;
}
