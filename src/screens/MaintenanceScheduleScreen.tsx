"use client"

import { useState } from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import type { RootState } from "../store"
import DateTimePicker from "@react-native-community/datetimepicker"

const MaintenanceScheduleScreen = () => {
  const { t } = useTranslation()
  const machines = useSelector((state: RootState) => state.machines.list)
  const [selectedMachine, setSelectedMachine] = useState(null)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [maintenanceDate, setMaintenanceDate] = useState(new Date())

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || maintenanceDate
    setShowDatePicker(false)
    setMaintenanceDate(currentDate)
  }

  const scheduleMaintenanceForMachine = (machineId) => {
    // TODO: Implement API call to schedule maintenance
    console.log(`Scheduling maintenance for machine ${machineId} on ${maintenanceDate}`)
  }

  const renderMachineItem = ({ item }) => (
    <TouchableOpacity
      style={styles.machineItem}
      onPress={() => {
        setSelectedMachine(item)
        setShowDatePicker(true)
      }}
    >
      <Text style={styles.machineName}>{item.name}</Text>
      <Text style={styles.machineStatus}>{item.status}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("maintenance.title")}</Text>
      <FlatList data={machines} renderItem={renderMachineItem} keyExtractor={(item) => item.id} />
      {showDatePicker && (
        <DateTimePicker value={maintenanceDate} mode="date" display="default" onChange={handleDateChange} />
      )}
      {selectedMachine && (
        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={() => scheduleMaintenanceForMachine(selectedMachine.id)}
        >
          <Text style={styles.scheduleButtonText}>{t("maintenance.schedule")}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  machineItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  machineName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  machineStatus: {
    fontSize: 14,
    color: "#666",
  },
  scheduleButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 16,
  },
  scheduleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default MaintenanceScheduleScreen

