"use client"

import type React from "react"
import { useEffect } from "react"
import { Provider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { I18nextProvider } from "react-i18next"
import { StripeProvider } from "@stripe/stripe-react-native"

import store from "./src/store"
import i18n from "./src/localization/i18n"
import AppNavigator from "./src/navigation/AppNavigator"
import { setupNotifications } from "./src/utils/notifications"
import SyncService from "./src/services/syncService"
import MLService from "./src/services/mlService"
import PaymentService from "./src/services/paymentService"

const App: React.FC = () => {
  useEffect(() => {
    const initializeApp = async () => {
      await setupNotifications()
      SyncService.startSync()
      await MLService.init()
      await PaymentService.init()
    }

    initializeApp()
  }, [])

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <SafeAreaProvider>
          <StripeProvider publishableKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </StripeProvider>
        </SafeAreaProvider>
      </I18nextProvider>
    </Provider>
  )
}

export default App

