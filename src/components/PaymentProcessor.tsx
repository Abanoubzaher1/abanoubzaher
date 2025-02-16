"use client"

import type React from "react"
import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native"
import { useTranslation } from "react-i18next"
import PaymentService from "../services/paymentService"

const PaymentProcessor: React.FC<{ amount: number; onSuccess: () => void }> = ({ amount, onSuccess }) => {
  const { t } = useTranslation()
  const [cardNumber, setCardNumber] = useState("")
  const [expMonth, setExpMonth] = useState("")
  const [expYear, setExpYear] = useState("")
  const [cvc, setCvc] = useState("")

  const handlePayment = async () => {
    try {
      const token = await PaymentService.createPaymentMethod({
        number: cardNumber,
        expMonth: Number.parseInt(expMonth, 10),
        expYear: Number.parseInt(expYear, 10),
        cvc,
      })

      await PaymentService.processPayment(amount, "USD", token.id)
      Alert.alert(t("payment.success"))
      onSuccess()
    } catch (error) {
      Alert.alert(t("payment.error"), error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("payment.title")}</Text>
      <TextInput
        style={styles.input}
        placeholder={t("payment.cardNumber")}
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="number-pad"
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfWidth]}
          placeholder={t("payment.expMonth")}
          value={expMonth}
          onChangeText={setExpMonth}
          keyboardType="number-pad"
        />
        <TextInput
          style={[styles.input, styles.halfWidth]}
          placeholder={t("payment.expYear")}
          value={expYear}
          onChangeText={setExpYear}
          keyboardType="number-pad"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder={t("payment.cvc")}
        value={cvc}
        onChangeText={setCvc}
        keyboardType="number-pad"
      />
      <Button title={t("payment.process")} onPress={handlePayment} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "48%",
  },
})

export default PaymentProcessor

