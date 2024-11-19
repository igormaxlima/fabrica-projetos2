import React from 'react'
import { Image, StyleSheet, ImageStyle } from 'react-native'

interface LogoProps {
  widht?: number
  height?: number
  style?: ImageStyle
}

const Logo: React.FC<LogoProps> = ({ widht = 100, height = 100, style }) => {
  return (
    <Image
      source={require('../../assets/images/dpu-logo.png')}
      style={[styles.logo, { width: widht, height: height }, style]}
      resizeMode="contain"
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
})

export default Logo
