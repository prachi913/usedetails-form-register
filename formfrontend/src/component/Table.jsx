import { Box, Button, Center, Flex, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

import { useEffect } from "react";

function Table() {
 
  const [data,setdata]=useState([])
  const getdata = () => {
    fetch("https://funny-red-rhinoceros.cyclic.app/users").then((res)=>res.json()).then((res)=>setdata(res))
  }
  useEffect(() => {
  getdata()  
  }, [])
  
  return (
    <Flex
      justifyContent={"center"}
      flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
      maxWidth={"98%"}
      margin="auto"
    >
      <Box
        justifyContent={"center"}
        mt={{ md: "130px", lg: "130px", sm: "none", base: "none" }}
      >
       
      </Box>

      <Box width={"auto"}>
        <Text fontSize="4xl">User Details</Text>
        
          <SimpleGrid
            columns={[1, 2, 2, 4]}
            gap={"50px"}
            spacing={10}
            margin={10}
          >
            {data.map((el, i) => {
              return (
                <Box
                  display={"grid"}
                  gap={"1"}
                  p={4}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 0px 2px"
                  key={el.id}
                >
                  <Box>
                    <Box
                      h={"auto"}
                      display="grid"
                      alignItems={"center"}
                      overflow={"hidden"}
                    ></Box>
                    <Box>
                      <Text fontSize="lg">
                        <b style={{ color: "green" }}>
                          <i>{el.firstname}</i> <i>{el.lastname}</i>😊
                        </b>
                      </Text>

                      <Text fontSize="md">
                        <b style={{ color: "black" }}>
                          email: <i style={{ color: "teal" }}>{el.email}</i>
                        </b>
                      </Text>
                      <Text fontSize="md">
                        <b style={{ color: "black" }}>
                          Country: <b style={{ color: "teal" }}>{el.country}</b>
                        </b>
                      </Text>
                      <Text fontSize="md">
                        <b style={{ color: "black" }}>
                          State: <b style={{ color: "teal" }}>{el.state}</b>
                        </b>
                      </Text>
                      <Text fontSize="md">
                        <b style={{ color: "black" }}> City: </b>{" "}
                        <b style={{ color: "teal" }}>{el.city}</b>
                      </Text>
                      <Text fontSize="md">
                        <b style={{ color: "black" }}> Gender: </b>{" "}
                        <b style={{ color: "teal" }}>{el.gender}</b>
                      </Text>
                      <Text fontSize="md">
                        <b style={{ color: "black" }}>DOB: </b>{" "}
                        <b style={{ color: "teal" }}>{el.dateOfBirth}</b>
                      </Text>
                      <Text fontSize="md">
                        <b style={{ color: "black" }}>Age: </b>{" "}
                        <b style={{ color: "teal" }}>{el.age}</b>
                      </Text>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
      
      </Box>
    </Flex>
  );
}

export {Table};
