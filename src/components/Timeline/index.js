"use client";
import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Tag,
  Image,
} from "@chakra-ui/react";
import { randomColor } from "@chakra-ui/theme-tools";
import formatDate from "@/helpers/formatDate";

const Timeline = ({ experiences }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      {experiences.map((milestone, index) => (
        <Flex key={index} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && (index + 1) % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card experience={milestone} index={index + 1} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card experience={milestone} index={index + 1} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && (index + 1) % 2 !== 0 && (
            <>
              <Card experience={milestone} index={index + 1} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ experience, index }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = index % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }
  const colors = ["teal", "blue", "green", "red", "orange", "yellow"];

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <VStack spacing={2} mb={3} textAlign="left" alignItems={"flex-start"}>
          {experience.positions.length == 1 && (
            <chakra.h2
              fontSize="2xl"
              lineHeight={1.2}
              fontWeight="bold"
              w="100%"
            >
              {experience.positions[0].name}
            </chakra.h2>
          )}
          <Flex gap={2} alignItems={"center"}>
            <Image
              src={
                process.env.NEXT_PUBLIC_API_URL + "/assets/" + experience.logo
              }
              alt={experience.company_name}
              width={"25px"}
              height={"25px"}
              style={{ objectFit: "contain" }}
            />
            <chakra.h2
              fontSize="xl"
              lineHeight={1.2}
              fontWeight="bold"
              w="100%"
            >
              {experience.company_name}
            </chakra.h2>
          </Flex>

          <Text fontSize="md" color="gray.600">
            {experience.location}
          </Text>
          {experience.positions.length == 1 && (
            <>
              <Text fontSize="md" color="gray.500">
                {formatDate(new Date(experience.positions[0].start_date))} -{" "}
                {experience.positions[0]
                  ? formatDate(new Date(experience.positions[0].end_date))
                  : "Present"}
              </Text>
              <Text fontSize="md">{experience.positions[0].description}</Text>
              <Flex gap={1} flexWrap={"wrap"} mb={3} flexDirection={"column"}>
                <Text fontSize="md" fontWeight={"bold"}>
                  Skills
                </Text>
                <Text fontWeight={"bold"} fontSize="sm">
                  {experience.positions[0]?.skills.join(", ")}
                </Text>
              </Flex>
            </>
          )}

          {experience.positions.length > 1 && (
            <>
              {experience.positions.map((position, index) => (
                <React.Fragment key={index}>
                  <chakra.h2
                    fontSize="xl"
                    lineHeight={1.2}
                    fontWeight="bold"
                    w="100%"
                  >
                    {position.name}
                  </chakra.h2>
                  <Text fontSize="md" color="gray.500">
                    {formatDate(new Date(position.start_date))} -{" "}
                    {position.end_date
                      ? formatDate(new Date(position.end_date))
                      : "Present"}
                  </Text>
                  <Text fontSize="md">{position.description}</Text>
                  <Flex
                    gap={1}
                    flexWrap={"wrap"}
                    mb={3}
                    flexDirection={"column"}
                  >
                    <Text fontSize="md" fontWeight={"bold"}>
                      Skills
                    </Text>
                    <Text fontWeight={"bold"} fontSize="sm">
                      {position?.skills.join(", ")}
                    </Text>
                  </Flex>
                </React.Fragment>
              ))}
            </>
          )}
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Timeline;
