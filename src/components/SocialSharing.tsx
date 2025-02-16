import { View, Button, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import Share from "react-native-share"

const SocialSharing = () => {
  const { t } = useTranslation()

  const handleShare = async () => {
    try {
      await Share.open({
        title: t("sharing.title"),
        message: t("sharing.message"),
        url: "https://your-app-url.com",
      })
    } catch (error) {
      console.error("Error sharing:", error)
    }
  }

  return (
    <View style={styles.container}>
      <Button title={t("sharing.button")} onPress={handleShare} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
})

export default SocialSharing

