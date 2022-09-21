import { useEffect, useState } from 'react';
import axios from 'axios';

//~ Chakra
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';

//~ LINKS
import { links } from '../API/Links';

export const JobApplications = () => {
  let { expertiaLink } = links;
  let userDetails = localStorage.getItem('expertiaUser') || '';

  //! Getting dota for the logged in user
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let URL = expertiaLink + `/jobs/${userDetails}`;
    axios
      .get(URL)
      .then(res => {
        console.log('res:', res.data);
        setJobs(res.data);
      })
      .catch(err => {
        console.log('err:', err);
      });
  }, []);

  //! Removing a job application
  const removeApplication = jobName => {
    let URL = expertiaLink + `/jobs/${userDetails}/${jobName}`;

    axios
      .delete(URL)
      .then(res => {
        console.log('res:', res.data);
        setJobs(res.data);
      })
      .catch(err => {
        console.log('err:', err);
      });
  };

  return (
    <Box textAlign="center">
      {/* {!userDetails && (
            <Text fontSize="2xl" as="b" color={'#0b86a1'}>
            Login to see the Jobs you applied to.
            </Text>
        )} */}

      {jobs.length > 0 && (
        <Text fontSize="2xl" as="samp" borderBottom={'2px dashed green'}>
          Jobs you applied to.
        </Text>
      )}

      {jobs.length > 0 ? (
        jobs.map((elem, index) => {
          return (
            <HStack
              key={index}
              w="30%"
              m={' 1rem auto'}
              justifyContent="space-between"
              boxShadow="outline"
              p={'0.5rem 2rem'}
              rounded="md"
            >
              <Text fontSize="xl">{elem}</Text>

              <Button
                colorScheme="red"
                onClick={() => {
                  removeApplication(elem);
                }}
              >
                Remove
              </Button>
            </HStack>
          );
        })
      ) : jobs.length === 0 && userDetails !== '' ? (
        <Text fontSize="2xl" as="b" color={'#0b86a1'}>
          !! Not applied to any of the Jobs !!
        </Text>
      ) : (
        userDetails === '' && (
          <Text fontSize="2xl" as="b" color={'#0b86a1'}>
            Login to see the Jobs you applied to.
          </Text>
        )
      )}

      {/* ----------------------------------------------- */}
    </Box>
  );
};
