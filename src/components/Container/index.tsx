import React, {FunctionComponent, ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface PContainer {
  children: ReactNode;
}

export const Container: FunctionComponent<PContainer> = ({children}) => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          backgroundColor: '#fff',
        }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
