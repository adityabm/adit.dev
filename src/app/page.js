import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Heading,
  IconButton,
  Stack,
  Tag,
  Text,
  Image,
  Container,
  Tooltip,
  Icon,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";
import {
  FaCss3,
  FaGithub,
  FaInstagram,
  FaLaravel,
  FaLinkedin,
  FaPhp,
  FaSquareTwitter,
  FaVuejs,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { randomColor } from "@chakra-ui/theme-tools";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import LogoStack from "@/components/LogoStack";

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/items/Homepage", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });
  const data = await res.json();

  return data.data;
}

async function getExperiences() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/items/experiences?sort=-id",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  const data = await res.json();

  return data.data;
}

async function getProjects() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/items/Projects?sort=-id",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  const data = await res.json();

  return data.data;
}

export default async function Home() {
  const data = await getData();
  const experiences = await getExperiences();
  const projects = await getProjects();
  const colors = ["teal", "blue", "green", "red", "orange", "yellow"];

  return (
    <Box>
      <Box bg="linear-gradient(to right top, #5568a6, #7080b7, #8a99c8, #a6b2d8, #c2cce9, #d0cff2, #e0d1f9, #f3d3fc, #ffb9dd, #ffa3a5, #ff9d61, #d2a517)">
        <Container maxW="7xl">
          <Flex
            align={"center"}
            justify={"space-between"}
            py={{ base: 12, md: 32 }}
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Flex
              flexDirection={"column"}
              gap={2}
              maxW={{ base: "100%", md: "50%" }}
            >
              <Text fontWeight={"bold"}>Hello i am</Text>
              <Heading as="h1" size={"3xl"}>
                <Text as="span">Aditya</Text>
                <br />
                <Text
                  as="span"
                  color={"#fff"}
                  sx={{
                    WebkitTextStroke: ".07rem black", // Add text stroke
                  }}
                >
                  Dewantara
                </Text>
              </Heading>
              <Divider borderColor="brand.500" borderWidth={2} w={"50%"} />
              <Flex fontSize={"2xl"} fontWeight={"bold"}>
                <Typewriter
                  words={["Web Developer", "Fullstack Engineer", "Freelancer"]}
                  loop={false}
                  cursor
                  cursorStyle=" |"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Flex>
              <Flex gap={2} mt={3} flexWrap={"wrap"}>
                {data.hero_stacks.map((tag) => (
                  <Tag colorScheme={randomColor({ colors })} key={tag}>
                    #{tag}
                  </Tag>
                ))}
              </Flex>
            </Flex>
            <Flex>
              <Image
                src="/about.png"
                alt="Aditya Dewantara"
                width={500}
                height={"auto"}
              />
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box id="about">
        <Container maxW="7xl">
          <Flex
            align={"center"}
            justify={"space-between"}
            py={{ base: 8, md: 12 }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex>
              <Image
                src="/profile.png"
                alt="Aditya Dewantara"
                width={500}
                height={"auto"}
              />
            </Flex>
            <Flex
              flexDirection={"column"}
              gap={2}
              maxW={{ base: "100%", md: "50%" }}
            >
              <Heading as="h2" size="2xl">
                About Me
              </Heading>
              <Divider borderColor="brand.500" borderWidth={2} w={"10%"} />
              <Text mt={3}>{data.about_me}</Text>
              <Flex>
                <Button
                  as={Link}
                  href="https://docs.google.com/document/d/1lkzmBaRjM4KhO0BzqDY5pG0bXYM0BgX-jCp5JAwwmTU/edit?usp=sharing"
                  target="_blank"
                  leftIcon={<FaFileDownload size={20} />}
                >
                  Download CV
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box id="skills" bg="brand.100">
        <Container maxW="7xl">
          <Flex
            align={"center"}
            py={{ base: 8, md: 12 }}
            flexDirection={"column"}
          >
            <Heading as="h2" size="2xl">
              My Skills
            </Heading>
            <Divider borderColor="brand.500" borderWidth={2} w={"10%"} mt={3} />
            <Flex gap={8} mt={16} flexWrap={"wrap"} justifyContent={"center"}>
              {data.skills.map((skill, index) => (
                <Tooltip
                  label={`${skill.percentage}%`}
                  aria-label="A tooltip"
                  key={index}
                >
                  <CircularProgress
                    value={skill.percentage}
                    color={skill.color}
                    size="100px"
                    trackColor="white"
                  >
                    <CircularProgressLabel
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <LogoStack
                        stack={skill.name}
                        size="30"
                        color={skill.color}
                      />
                    </CircularProgressLabel>
                  </CircularProgress>
                </Tooltip>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box id="experiences">
        <Container maxW="7xl">
          <Flex
            align={"center"}
            py={{ base: 8, md: 12 }}
            flexDirection={"column"}
          >
            <Heading as="h2" size="2xl">
              Experiences
            </Heading>
            <Divider borderColor="brand.500" borderWidth={2} w={"20%"} mt={3} />
            <Flex gap={8} mt={16} flexWrap={"wrap"}>
              <Timeline experiences={experiences} />
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box id="projects">
        <Container maxW="7xl">
          <Flex
            align={"center"}
            py={{ base: 8, md: 12 }}
            flexDirection={"column"}
          >
            <Heading as="h2" size="2xl">
              Projects
            </Heading>
            <Divider borderColor="brand.500" borderWidth={2} w={"10%"} mt={3} />
            <Flex gap={8} mt={16} flexWrap={"wrap"}>
              {projects.map((project) => (
                <Card maxW="sm" key={project.id}>
                  <CardBody>
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_API_URL +
                        "/assets/" +
                        project.preview
                      }
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{project.name}</Heading>
                      <Text>{project.description}</Text>
                    </Stack>
                    <Flex gap={2} mt={3} flexWrap={"wrap"}>
                      {project.stack.map((tag) => (
                        <Tag key={tag} colorScheme={randomColor({ colors })}>
                          {tag}
                        </Tag>
                      ))}
                    </Flex>
                  </CardBody>
                  {project.url && (
                    <CardFooter>
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        as={Link}
                        href={project.url}
                        target="_blank"
                        leftIcon={<FaExternalLinkAlt size={14} />}
                      >
                        View Website
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box bg="brand.100">
        <Container maxW="7xl">
          <Flex
            gap={{ base: 8, md: 16 }}
            py={{ base: 8, md: 12 }}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex
              gap={3}
              direction={"column"}
              maxW={{ base: "100%", md: "50%" }}
            >
              <Heading as="h2" size="2xl">
                Let's Collab!
              </Heading>
              <Divider borderColor="brand.500" borderWidth={2} w={"5%"} />
              <Text mt={3}>
                I am currently available for freelance work. If you have any
                project that you want to get started, think of me!
              </Text>
              <Flex gap={2} mt={3} flexWrap={"wrap"}>
                <IconButton
                  colorScheme="brand"
                  as={Link}
                  href="https://www.instagram.com/adityaxt/"
                  target="_blank"
                  icon={<FaInstagram size={20} />}
                />

                <IconButton
                  colorScheme="brand"
                  as={Link}
                  href="https://x.com/dwntradit"
                  target="_blank"
                  icon={<FaSquareTwitter size={20} />}
                />

                <IconButton
                  colorScheme="brand"
                  as={Link}
                  href="https://www.linkedin.com/in/aditya-dewantara/"
                  target="_blank"
                  icon={<FaLinkedin size={20} />}
                />

                <IconButton
                  colorScheme="brand"
                  as={Link}
                  href="https://github.com/adityabm"
                  target="_blank"
                  icon={<FaGithub size={20} />}
                />
                <Button
                  colorScheme="brand"
                  as={Link}
                  href="mailto:&#109;&#101;&#064;&#097;&#100;&#105;&#116;&#046;&#100;&#101;&#118;"
                  target="_blank"
                  leftIcon={<MdEmail size={20} />}
                >
                  Contact Me
                </Button>
              </Flex>
            </Flex>
            <Flex
              direction={"column"}
              maxW={{ base: "100%", md: "50%" }}
              w={"100%"}
              alignItems={"center"}
              display={{ base: "none", md: "flex" }}
            >
              <Image src="/agree.svg" alt="agreement" w={"50%"} />
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
