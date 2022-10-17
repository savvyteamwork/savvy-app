import React from 'react';
import {NativeBaseProvider, Box, HStack, Spinner, Heading} from 'native-base';

export default function Loader() {
  return (
    <NativeBaseProvider>
      <HStack space={8} justifyContent="center">
        <Spinner color="indigo.500" />
      </HStack>
    </NativeBaseProvider>
  );
}
