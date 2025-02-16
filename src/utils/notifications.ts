import messaging from "@react-native-firebase/messaging"
import { Platform } from "react-native"
import PushNotification from "react-native-push-notification"

export async function requestUserPermission() {
  if (Platform.OS === "ios") {
    const authStatus = await messaging().requestPermission()
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (enabled) {
      console.log("Authorization status:", authStatus)
    }
  }
}

export async function getFCMToken() {
  const fcmToken = await messaging().getToken()
  console.log("FCM Token:", fcmToken)
  return fcmToken
}

export function subscribeToTopic(topic: string) {
  messaging()
    .subscribeToTopic(topic)
    .then(() => console.log("Subscribed to topic:", topic))
}

export function unsubscribeFromTopic(topic: string) {
  messaging()
    .unsubscribeFromTopic(topic)
    .then(() => console.log("Unsubscribed from topic:", topic))
}

export function setupNotifications() {
  PushNotification.configure({
    onRegister: (token) => {
      console.log("TOKEN:", token)
    },
    onNotification: (notification) => {
      console.log("NOTIFICATION:", notification)
      // Process the notification
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  })
}

export function scheduleLocalNotification(title: string, message: string, date: Date) {
  PushNotification.localNotificationSchedule({
    title,
    message,
    date,
  })
}

