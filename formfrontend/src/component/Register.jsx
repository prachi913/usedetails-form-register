import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  GridItem,
  Select,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";


const initialdata = {
  firstname: "",
  lastname: "",
  email: "",
  country: "",
  state: "",
  city: "",
  gender: "",
  dateOfBirth: "",
  age: "",
};

export function Register() {
  
  const [formdata,setformdata]=useState(initialdata)
  const toast = useToast();
   const { isOpen, onOpen, onClose } = useDisclosure();
  const handlechange = (e) => {
    let {name,value}=e.target
    setformdata((pre) => {
      return {
        ...pre,[name]:value
      }
    })

  }
  // console.log(formdata);
  const handleclick = () => {

    console.log(formdata)
     fetch("https://funny-red-rhinoceros.cyclic.app/users/register", {
       method: "POST",
       headers: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(formdata),
     })
       //  .then((res) => res.json())
       .then((res) => {
         console.log(res);
         toast({
           title: "Account created.",
           description: "We've created your account for you.",
           status: "success",
           duration: 4000,
           position: "top",
           isClosable: true,
         });

         onClose();
       })
       .catch((err) => {
          
         console.log(err);
          
       });
  
    
}

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Register here
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName">
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    onChange={handlechange}
                    name={"firstname"}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    onChange={handlechange}
                    name={"lastname"}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handlechange} name={"email"} />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor="country"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Country
              </FormLabel>
              <Select
                id="country"
                name="country"
                autoComplete="country"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
                onChange={handlechange}
              >
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </Select>
            </FormControl>
            <FormControl as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor="state"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                State
              </FormLabel>
              <Select
                id="state"
                name="state"
                autoComplete="state"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
                onChange={handlechange}
              >
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option> Madhya Pradesh</option>
                <option>Uttar Pradesh</option>

                <option>England</option>
                <option> Scotland</option>
                <option>Wales and Northern Ireland</option>
                <option>Alberta</option>
                <option>Manitoba</option>
                <option>Ontario</option>
                <option>Saskatchewan</option>
                <option>Baja California</option>
                <option>Campeche</option>
                <option>Chiapas</option>
              </Select>
            </FormControl>
            <FormControl as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor="city"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                City
              </FormLabel>
              <Select
                id="city"
                name="city"
                autoComplete="city"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
                onChange={handlechange}
              >
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Indore</option>
                <option>Patna</option>
                <option>Prayagraj</option>
                <option>Guwahati</option>
                <option>Noida</option>
                <option>London</option>
                <option>Manchester</option>
                <option>Birmingham</option>
                <option>Bristol</option>
                <option>Toronto</option>
                <option>Québec City</option>
                <option>Montreal</option>
                <option>Nahuatl México</option>
                <option>Spanish</option>
                <option>Ciudad de</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <input
                type="radio"
                name="option"
                onChange={(e) =>
                  setformdata({ ...formdata, gender: e.target.value })
                }
                value={"male"}
              />
              Male :
              <input
                type="radio"
                name="option"
                onChange={(e) =>
                  setformdata({ ...formdata, gender: e.target.value })
                }
                value={"female"}
              />
              Female :
              <input
                type="radio"
                name="option"
                onChange={(e) =>
                  setformdata({ ...formdata, gender: e.target.value })
                }
                value={"other"}
              />
              Othere
            </FormControl>
            <FormControl>
              <FormLabel>Date of Birth</FormLabel>

              <input type="date" onChange={handlechange} name={"dateOfBirth"} />
            </FormControl>
            <FormControl id="">
              <FormLabel>Age</FormLabel>
              <InputGroup>
                <Input type="text" onChange={handlechange} name={"age"} />
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleclick}
              >
                Register
              </Button>
            </Stack>
            <Stack pt={6}></Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
