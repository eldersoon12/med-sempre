import {View, Image, StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {LoadingBgLogo, LogoMedSempre} from '../../assets/images';
import {ActivityIndicator} from 'react-native-paper';

interface PLoading {
  loading: boolean;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  imageLogoSmall: {
    width: 161,
    height: 138,
    position: 'absolute',
    top: 251,
  },
  imageLogo: {
    width: '100%',
    height: '75%',
    position: 'absolute',
    objectFit: 'center',
    zIndex: 1000,
  },
} as any);

export default function Loading({loading}: PLoading) {
  return (
    <View
      style={[
        styles.container,
        {
          display: loading ? 'flex' : 'none',
        },
      ]}>
      <LinearGradient
        colors={['#400101', '#E80000']}
        style={styles.linearGradient}
        locations={[0.2, 1]}
        start={{x: 1.3, y: -1.5}}
        end={{x: 0, y: 1}}>
        <ImageBackground
          source={LoadingBgLogo}
          style={styles.imageLogo}></ImageBackground>
        <Image source={LogoMedSempre} style={styles.imageLogoSmall} />

        <View
          style={{
            zIndex: 3000,
            top: 578,
          }}>
          <ActivityIndicator size="large" color={'#fff'} />
        </View>
      </LinearGradient>
    </View>
  );
}
