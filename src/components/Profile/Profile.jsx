import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {

  const { user } = useSelector(
    (state) => state.user
  );

  const [imgprev, setImgprev] = useState(user?.avatar?.url || "");
  const [image,setImage]=useState('');
  const inputRef = useRef(null);
  //function for chose photos from file...
  const handelImageClick = () => {
    inputRef.current.click();
  };
  const cahngeImageHandler=(e)=>
  {
      const file=e.target.files[0];
      const reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend=()=>
      {
        setImgprev(reader.result);
        setImage(file);
      }
  }
  // console.log(imgprev)
  // console.log({image})
  




  // console.log(user)

  const removeCourseHandler = (id) => {
    console.log(id);
  };

  return (
    <Container minH={"95vh"} maxW={"container.lg"} py={"8"}>
      <Heading m={8} textTransform={"uppercase"}>
        Profile
      </Heading>
      <Stack
        justifyContent={"flex-start"}
        direction={["column", "row"]}
        alignItems={"center"}
        spacing={["8", "16"]}
        padding={8}
      >
        <VStack>
          <Box display={"flex"} justifyContent={"center"}>
            <Avatar size={"2xl"} src={imgprev} />
            <div onClick={handelImageClick}>
              <MdEdit className="mt-20 cursor-pointer -ml-3 text-3xl" />
              <input
                type="file"
                ref={inputRef}
                p={1.5}
                accept="image/*"
                onChange={cahngeImageHandler}
                className="hidden invisible"
              />
            </div>
          </Box>
        </VStack>
        <VStack spacing={4} alignItems={["center", "flex-start"]}>
          <HStack>
            <Text children="Name" fontWeight={"bold"} />
            <Text children={user?.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={"bold"} />
            <Text children={user?.email} />
          </HStack>
          <HStack>
            <Text children="CreatedAt" fontWeight={"bold"} />
            <Text children={user?.creaatedAt.split("T")[0]} />
          </HStack>
          {
            <HStack>
              {user?.subscription?.status === "active" ? (
                <Button color="red">Cancel Subscription</Button>
              ) : (
                <Link to="/subscribe">
                  {" "}
                  <Button colorScheme="green">Subscribe</Button>
                </Link>
              )}
            </HStack>
          }
          <Stack direction={["column", "row"]} alignItems={"center"}>
            <Link to="/updateProfile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changePassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children={"Playlist"} size={"md"} my={8} />
      {user.playlist.length > 0 && (
        <Stack
          direction={["column", "row"]}
          alignItems={"center"}
          flexWrap={"wrap"}
          p={4}
        >
          {user.playlist.map((element, index) => (
            <VStack w={48} m={2} key={index}>
              <Image
                boxSize={"full"}
                objectFit={"contain"}
                src={element.poster}
              />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={"ghost"} colorScheme="green">
                    Watch Now
                  </Button>
                </Link>
                <Button onClick={() => removeCourseHandler(element.course)}>
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      

    </Container>
  );
};

export default Profile;
