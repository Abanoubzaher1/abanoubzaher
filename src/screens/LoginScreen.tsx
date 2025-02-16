"use client"

import type React from "react"
import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { login } from "../store/authSlice"
import AuthService from "../services/authService"
import { loginSchema } from "../utils/validationMiddleware"

const LoginScreen: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const { error } = loginSchema.validate({ email, password })
      if (error) {
        Alert.alert(t("login.validationError"), error.details[0].message)
        return
      }

      const { user, token } = await AuthService.login(email, password)
      dispatch(login({ username: user.email!, token }))
    } catch (error) {
      Alert.alert(t("login.error"), error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("login.title")}</Text>
      <TextInput
        style={styles.input}
        placeholder={t("login.email")}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder={t("login.password")}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={t("login.submit")} onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
})

export default LoginScreen

