import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image mt={"20%"} maxW={"50%"} position={"absolute"} right={1} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"2xl"}>
        Note Taking App
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        Welcome to NoteEase, the cutting-edge note-making app designed to
        streamline your productivity and enhance your organizational skills.
        Whether you're a student, professional, or creative thinker, NoteEase
        empowers you to capture, organize, and access your ideas effortlessly.
        With a sleek and intuitive interface, this app is your go-to tool for
        transforming scattered thoughts into well-structured notes.
      </Text>
    </Box>
  );
}
