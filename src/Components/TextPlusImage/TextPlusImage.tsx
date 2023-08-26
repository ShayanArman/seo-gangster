import {
  createStyles,
  Box,
  Flex,
  Text
} from '@mantine/core';
import React from 'react';


const useStyles = createStyles((theme) => ({
  container: {
    width: '95%',
    height: '95%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
  }
}))

export default function TextPlusImage() {
  return (
    <Flex justify="space-between" wrap="wrap" gap={100} ml={"10%"} mr={"20%"} style={{border: "1px solid black"}}>
      <Flex direction="column" justify="center">
        <Text>
          This is some text explaining how great Zero Inbox is.
        </Text>
      </Flex>
      <Box mih={"250px"} miw={"200px"} style={{backgroundColor: "black"}}>
        
      </Box>
    </Flex>
  );
}


