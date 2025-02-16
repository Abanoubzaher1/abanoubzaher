"use client"

import { useState, useCallback, useEffect } from "react"
import { View, StyleSheet } from "react-native"
import { GiftedChat } from "react-native-gifted-chat"
import { useTranslation } from "react-i18next"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

const SupportChatScreen = () => {
  const { t } = useTranslation()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: t("support.welcome"),
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "AI Support",
          avatar: "https://placeimg.com/140/140/tech",
        },
      },
    ])
  }, [t])

  const onSend = useCallback(async (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages))

    const userMessage = newMessages[0].text

    try {
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: `User: ${userMessage}\nAI:`,
        system:
          "You are a helpful AI assistant for a vending machine management app. Provide concise and relevant answers.",
      })

      const aiResponse = {
        _id: Math.round(Math.random() * 1000000),
        text: text.trim(),
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "AI Support",
          avatar: "https://placeimg.com/140/140/tech",
        },
      }
      setMessages((previousMessages) => GiftedChat.append(previousMessages, [aiResponse]))
    } catch (error) {
      console.error("Error generating AI response:", error)
      // Handle error (e.g., show an error message to the user)
    }
  }, [])

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default SupportChatScreen

