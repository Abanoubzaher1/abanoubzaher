import { ScrollView, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import LiveCameraFeed from "../components/LiveCameraFeed"
import AlertsList from "../components/AlertsList"
import UserFeedback from "../components/UserFeedback"
import SocialSharing from "../components/SocialSharing"
import WeatherWidget from "../components/WeatherWidget"

const HomeScreen = () => {
  const { t } = useTranslation()

  return (
    <ScrollView style={styles.container}>
      <LiveCameraFeed />
      <WeatherWidget latitude={40.7128} longitude={-74.006} />
      <AlertsList />
      <UserFeedback />
      <SocialSharing />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default HomeScreen

