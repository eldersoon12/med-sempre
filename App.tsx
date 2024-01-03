import type {PropsWithChildren} from 'react';
import {useState, useEffect} from 'react';
import {PaperProvider} from 'react-native-paper';
import {Routes} from './src/routes';
import {theme} from './src/theme';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [isReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    // await Font.loadAsync({
    //   "Inter-Black": require("./src/assets/fonts/Inter-Black.ttf"),
    //   Inter: require("./src/assets/fonts/Inter.ttf"),
    //   "Inter-medium": require("./src/assets/fonts/Inter-Medium.ttf"),
    //   "Inter-semibold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
    //   "Inter-thin": require("./src/assets/fonts/Inter-Thin.ttf"),
    // });
    SetIsReady(true);
  };

  useEffect(() => {
    LoadFonts();
  }, [LoadFonts]);
  if (!isReady) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}

export default App;
