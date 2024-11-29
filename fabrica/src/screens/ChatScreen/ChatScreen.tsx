import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import { WebView } from 'react-native-webview'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://apitypebot.aidadpdf.cloud/homepage' }}
        style={styles.webview}
        startInLoadingState={true}
        javaScriptEnabled={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#345237',
  },
  webview: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
})

export default ChatScreen
