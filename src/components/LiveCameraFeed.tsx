import { View, StyleSheet } from "react-native"
import { RNCamera } from "react-native-camera"

const LiveCameraFeed = () => {
  return (
    <View style={styles.container}>
      <RNCamera style={styles.camera} type={RNCamera.Constants.Type.back} captureAudio={false} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginBottom: 16,
  },
  camera: {
    flex: 1,
  },
})

export default LiveCameraFeed

