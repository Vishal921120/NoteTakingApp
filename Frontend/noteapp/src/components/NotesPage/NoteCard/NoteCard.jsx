import { Button, Card, CardBody, Flex, Heading, VStack , Text} from "@chakra-ui/react";
import "./style.css"
import { useDispatch } from "react-redux";
import { deleteNotes } from "../../../Redux/notes/note.actions";
export default function NoteCard({title, body , user, _id}){

    const dispatch = useDispatch()
    return <Card className="card" >
        <CardBody>
            <VStack>
                <Heading>{title}</Heading>
                <Text>{body}</Text>

                <Flex gap={2}>
                    <Button>Update</Button>
                    <Button 
                        onClick={() =>{
                            dispatch(deleteNotes(_id))
                        }}
                    >Delete</Button>
                </Flex>


            </VStack>
        </CardBody>
    </Card>
}