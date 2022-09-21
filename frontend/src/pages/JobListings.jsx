import { useEffect, useState } from 'react';
import axios from 'axios';

//~ Chakra
import { Box, Text, Flex, Image, Button, HStack } from '@chakra-ui/react';

//~ LINKS
import { links } from '../API/Links';

//~ DATA
import data from '../API/db.json';

export const JobListings = () => {
  let { expertiaLink } = links;
  const { jobs } = data;
  let userDetails = localStorage.getItem('expertiaUser') || '';
  //! jobs Applied for
  const [jobsApplied, setJobsApplied] = useState([]);
  useState(() => {
    let URL = expertiaLink + `/jobs/${userDetails}`;
    axios
      .get(URL)
      .then(res => {
        console.log('res:', res.data);
        setJobsApplied(res.data);
      })
      .catch(err => {
        console.log('err:', err);
      });
  }, []);

  //! Applying for job
  const handleApply = jobName => {
    let URL = expertiaLink + `/jobs/${userDetails}`;
    console.log('expertiaLink:', expertiaLink);

    let sendjob = {
      jobsApplied: jobName,
    };
    axios
      .post(URL, sendjob)
      .then(res => {
        console.log('res:', res.data);
        setJobsApplied(res.data);
        console.log('jobsApplied:', jobsApplied);
      })
      .catch(err => {
        console.log('err:', err);
      });
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

            {jobsApplied.reduce((acc, ele) => {
              if (elem.job_name === ele) acc++;

              return acc;
            }, 0) === 0 && userDetails !== '' ? (
              <Button
                colorScheme="cyan"
                onClick={() => {
                  handleApply(elem.job_name);
                }}
              >
                Apply
              </Button>
            ) : jobsApplied.reduce((acc, ele) => {
                if (elem.job_name === ele) acc++;

                return acc;
              }, 0) !== 0 && userDetails !== '' ? (
              <Button colorScheme="gray" cursor={'no-drop'}>
                Applied
              </Button>
            ) : (
              <Text>Login to apply</Text>
            )}

            {/* <Button colorScheme="gray" cursor={'no-drop'}>
              Applied
            </Button> */}

            {/* //* If user is not loggged in */}
            {/* {userDetails === '' && <Text>Login to apply</Text>} */}
          </HStack>
        );
      })}
    </Box>
  );
};
