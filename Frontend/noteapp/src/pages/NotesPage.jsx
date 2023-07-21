import { Box, Grid, IconButton, Input, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import NoteCard from "../components/NotesPage/NoteCard/NoteCard";
import { BsPlusLg } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

export default function NotesPage() {
  const { loading, error, data } = useSelector((state) => state.noteReducer);
  console.log(data);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  const createNote = () =>{
    dispatch(createNotes({title,body}))
    onClose()
  }

  return (
    <Box mt={20} padding={8}>
      <Grid
        gap={10}
        w={"90%"}
        margin={"auto"}
        gridTemplateColumns="repeat(4, 1fr)"
      >
        {notes?.map((e1) => (
          <NoteCard {...e1} />
        ))}
      </Grid>

      <>
        <IconButton
          position={"fixed"}
          textColor={"white"}
          bottom={0}
          right={0}
          onClick={onOpen}
          margin={16}
          w={"80px"}
          h={"80px"}
          bg={"grey"}
          borderRadius={50}
          icon={<BsPlusLg />}
        ></IconButton>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Input value={title} placeholder="Please enter title" onChange={(e)=> setTitle(e.target.value) }></Input>
                <Textarea mt={8} value={body} placeholder="Please enter description" onChange={(e)=> setBody(e.target.value) }></Textarea>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createNote}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
}
