import type React from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import type { RootState } from "../store"
import MachineStatusSummary from "../components/MachineStatusSummary"
import RevenueChart from "../components/RevenueChart"
import AlertsList from "../components/AlertsList"
import PredictiveMaintenance from "../components/PredictiveMaintenance"
import InventoryOptimization from "../components/InventoryOptimization"

const DashboardScreen: React.FC = () => {
  const { t } = useTranslation()
  const { username } = useSelector((state: RootState) => state.auth)
  const machines = useSelector((state: RootState) => state.machines.list)

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>{t("dashboard.welcome", { username })}</Text>
      <MachineStatusSummary />
      <RevenueChart />
      <View style={styles.row}>
        <View style={styles.column}>
          <PredictiveMaintenance machineId={machines[0]?.id} />
        </View>
        <View style={styles.column}>
          <InventoryOptimization />
        </View>
      </View>
      <AlertsList limit={5} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  column: {
    flex: 1,
    marginHorizontal: 8,
  },
})

export default DashboardScreen

