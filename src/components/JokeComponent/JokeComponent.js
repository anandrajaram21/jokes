import { Box, Stack, Center, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import JokeBox from '../JokeBox/JokeBox';

import './JokeComponent.css';

export default function JokeComponent({ jokeType, firstFace, secondFace }) {
  const [joke, setJoke] = useState('');
  const [delivery, setDelivery] = useState('');
  const [nextJoke, setNextJoke] = useState(true);
  const [avatar, setAvatar] = useState(firstFace);
  const [rotateImg, setRotateImg] = useState(0);

  const clickAvatarOrBox = () => {
    if (nextJoke === true) {
      fetchJoke(jokeType);
      setAvatar(firstFace);
    } else {
      setDelivery(joke.delivery);
      setNextJoke(true);
      setAvatar(secondFace);
    }
    setRotateImg(1);
  };

  const fetchJoke = jokeType => {
    fetch(
      `https://v2.jokeapi.dev/joke/${jokeType}?blacklistFlags=explicit&type="twopart"`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        setJoke(data);
        setNextJoke(false);
        setDelivery('');
      });
  };

  useEffect(() => {
    fetchJoke(jokeType);
  }, [jokeType]);

  return (
    <Center marginTop={'5%'}>
      <Stack direction={{ base: 'column', lg: 'row' }} spacing="150px">
        <Box
          marginX={'auto'}
          marginY={'auto'}
          onClick={clickAvatarOrBox}
          cursor="pointer"
        >
          <JokeBox setup={joke.setup} delivery={delivery} />
        </Box>

        <Box marginX={'auto'} marginY={'auto'}>
          <Box
            className={`image ${avatar}`}
            cursor="pointer"
            onClick={clickAvatarOrBox}
            rotateimg={rotateImg}
            onAnimationEnd={() => setRotateImg(0)}
          ></Box>
          <Text
            textAlign={'center'}
            margin="5px"
            fontStyle={'italic'}
            fontWeight="semibold"
          >
            Click me!
          </Text>
        </Box>
      </Stack>
    </Center>
  );
}
