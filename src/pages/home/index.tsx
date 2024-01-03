import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import {Text, View, ImageBackground, Image} from 'react-native';
import {styles} from './styles';
import {BackgroundImage, LogoMedSempre} from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../../components/Button';

export default function HomeScreen({
  navigation,
}: StackScreenProps<ParamListBase>) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        imageStyle={styles.image}>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0.50)',
            'rgba(0, 0, 0, 0.50)',
            'rgba(0, 0, 0, 0.80)',
          ]}
          style={[styles.container, styles.linearGradient]}>
          <Image source={LogoMedSempre} style={styles.imageLogo} />

          <View style={styles.boxContent}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}>
              <Text style={styles.titleWelcome}>Boas vindas!</Text>

              <Text style={styles.welcomeDescription}>
                Sua saúde é nossa prioridade. Faça login e inicie sua jornada
                para um bem-estar completo.
              </Text>
            </View>

            <View>
              <Button
                title="Entrar"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
