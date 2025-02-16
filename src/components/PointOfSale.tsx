"use client"

import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"

const PointOfSale = () => {
  const { t } = useTranslation()
  const [amount, setAmount] = useState("")

  const handleTransaction = () => {
    // TODO: Implement actual POS integration
    console.log("Processing transaction for:", amount)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("pos.title")}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder={t("pos.amountPlaceholder")}
        value={amount}
        onChangeText={setAmount}
      />
      <Button title={t("pos.process")} onPress={handleTransaction} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
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
})

export default PointOfSale

