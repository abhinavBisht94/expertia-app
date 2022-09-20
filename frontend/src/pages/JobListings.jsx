import React from 'react';

//~ Chakra
import { Box, Text, Flex, Image, Button, HStack } from '@chakra-ui/react';

//~ LINKS
//

//~ DATA
import data from '../API/db.json';

export const JobListings = () => {
  const { jobs } = data;

  //! Applying for job
  const handleApply = jobName => {
    console.log('jobName:', jobName);
  };

  return (
    <Box>
      {jobs.map((elem, index) => {
        return (
          <HStack
            key={elem.id}
            w={'40%'}
            m={'1rem auto 0rem'}
            justifyContent={'space-between'}
          >
            <Text as="b" fontSize="xl">
              {elem.job_name}
            </Text>

            <Button
              colorScheme="cyan"
              onClick={() => {
                handleApply(elem.job_name);
              }}
            >
              Apply
            </Button>
            {/* <Text>Login to apply</Text> */}
          </HStack>
        );
      })}
    </Box>
  );
};
