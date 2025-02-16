"use client"

import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import { Rating } from "react-native-ratings"

const UserFeedback = () => {
  const { t } = useTranslation()
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")

  const handleSubmit = () => {
    // TODO: Implement API call to submit feedback
    console.log("Submitting feedback:", { rating, feedback })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("feedback.title")}</Text>
      <Rating showRating onFinishRating={setRating} style={styles.rating} />
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder={t("feedback.placeholder")}
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title={t("feedback.submit")} onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  rating: {
    paddingVertical: 16,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
})

export default UserFeedback

