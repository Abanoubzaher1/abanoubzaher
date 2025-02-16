import { View, Text, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import type { RootState } from "../store"

const MachineStatusSummary = () => {
  const { t } = useTranslation()
  const machines = useSelector((state: RootState) => state.machines.list)

  const activeMachines = machines.filter((machine) => machine.status === "active").length
  const maintenanceMachines = machines.filter((machine) => machine.status === "maintenance").length
  const inactiveMachines = machines.filter((machine) => machine.status === "inactive").length

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("machineStatus.title")}</Text>
      <View style={styles.statusContainer}>
        <View style={styles.statusItem}>
          <Text style={styles.statusNumber}>{activeMachines}</Text>
          <Text style={styles.statusLabel}>{t("machineStatus.active")}</Text>
        </View>
        <View style={styles.statusItem}>
          <Text style={styles.statusNumber}>{maintenanceMachines}</Text>
          <Text style={styles.statusLabel}>{t("machineStatus.maintenance")}</Text>
        </View>
        <View style={styles.statusItem}>
          <Text style={styles.statusNumber}>{inactiveMachines}</Text>
          <Text style={styles.statusLabel}>{t("machineStatus.inactive")}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusItem: {
    alignItems: "center",
  },
  statusNumber: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statusLabel: {
    fontSize: 14,
    color: "#666",
  },
})

export default MachineStatusSummary

