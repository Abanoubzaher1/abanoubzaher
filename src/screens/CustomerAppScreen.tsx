"use client"

import type React from "react"
import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useTranslation } from "react-i18next"
import MapView, { Marker } from "react-native-maps"
import { useSelector } from "react-redux"
import type { RootState } from "../store"
import PaymentProcessor from "../components/PaymentProcessor"

interface VendingMachine {
  id: string
  name: string
  latitude: number
  longitude: number
}

const CustomerAppScreen: React.FC = () => {
  const { t } = useTranslation()
  const machines = useSelector((state: RootState) => state.machines.list)
  const [selectedMachine, setSelectedMachine] = useState<VendingMachine | null>(null)
  const [showPayment, setShowPayment] = useState(false)

  const handleMachineSelect = (machine: VendingMachine) => {
    setSelectedMachine(machine)
    setShowPayment(false)
  }

  const handlePurchase = () => {
    setShowPayment(true)
  }

  const handlePaymentSuccess = () => {
    setShowPayment(false)
    setSelectedMachine(null)
    // TODO: Update inventory and notify the vending machine
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {machines.map((machine) => (
          <Marker
            key={machine.id}
            coordinate={{ latitude: machine.latitude, longitude: machine.longitude }}
            title={machine.name}
            onPress={() => handleMachineSelect(machine)}
          />
        ))}
      </MapView>
      {selectedMachine && (
        <View style={styles.machineInfo}>
          <Text style={styles.machineName}>{selectedMachine.name}</Text>
          <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
            <Text style={styles.purchaseButtonText}>{t("customer.purchase")}</Text>
          </TouchableOpacity>
        </View>
      )}
      {showPayment && <PaymentProcessor amount={500} onSuccess={handlePaymentSuccess} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  machineInfo: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  machineName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  purchaseButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  purchaseButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})

export default CustomerAppScreen

