import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {Container} from '../../components/Container';
import {LinearGradient} from 'react-native-linear-gradient';
import {styles} from './style';
import {LoginBgLogo, LogoMedSempre} from '../../assets/images';
import Loading from '../../components/Loading';
import Input from '../../components/Input';
import CheckBox from '../../components/Checkbox';
import {Button} from '../../components/Button';

export default function LoginScreen() {
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image source={LogoMedSempre} style={styles.imageLogoSmall} />
        </View>
        <LinearGradient
          colors={['#400101', '#E80000']}
          style={styles.container}
          locations={[0.2, 1]}
          start={{x: 1.3, y: -1.5}}
          end={{x: 0, y: 1}}></LinearGradient>
        <ImageBackground
          source={LoginBgLogo}
          resizeMode="cover"
          style={styles.imageLogo}></ImageBackground>
      </View>

      <View style={styles.containerForm}>
        <View
          style={{
            height: '100%',
            backgroundColor: '#fff',
            borderTopLeftRadius: 45,
            paddingTop: 64,
            paddingLeft: 16,
            paddingRight: 16,
            gap: 24,
          }}>
          <View>
            <Input
              value={null}
              onChange={() => ''}
              placeholder={'Digite o seu email'}
              label="Email"
            />

            <CheckBox label={'Lembrar minhas informações'} />
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}>
            <Input
              value={null}
              onChange={() => ''}
              type="password"
              placeholder={'Digite a sua senha'}
              label="Senha"
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: '700',
                lineHeight: 20,
                color: '#2196F3',
                textAlign: 'right',
              }}
              onPress={() => console.log('ok')}>
              Esqueci minha senha
            </Text>
          </View>

          <Button onPress={() => console.log('button')} title={'Login'} />
        </View>
      </View>

      <Loading loading={false} />
    </Container>
  );
}
