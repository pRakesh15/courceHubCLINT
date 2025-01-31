import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/actions/userAction";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  const changePasswordHandler = (e) => {
    e.preventDefault();
    dispatch(changePassword({ oldPassword, newPassword }));
    setNewPassword("")
    setOldPassword("")
  };

  const item = useSelector((state) => state.user);

  return (
    <Container py={16} minH={"75vh"}>
      <form>
        <Heading
          children="Change password"
          textTransform={"uppercase"}
          my={8}
          textAlign={["center", "left"]}
        />
        <VStack spacing={8}>
          <input
            required
            type="password"
            placeholder="Old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="p-3 border rounded-none border-black w-full"
          />

          <input
            required
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="p-3 border rounded-none border-black w-full"
          />
          <Button
            onClick={changePasswordHandler}
            colorScheme="green"
            isDisabled={item.isLoading}
            isLoading={item.isLoading}
          >
            Change Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
