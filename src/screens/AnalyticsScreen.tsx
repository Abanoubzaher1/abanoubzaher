import { ScrollView, StyleSheet, View } from "react-native"
import { useTranslation } from "react-i18next"
import PerformanceChart from "../components/PerformanceChart"
import InventoryStatus from "../components/InventoryStatus"
import CustomerAnalyticsDashboard from "../components/CustomerAnalyticsDashboard"
import SalesReport from "../components/SalesReport"
import MaintenanceReport from "../components/MaintenanceReport"

const AnalyticsScreen = () => {
  const { t } = useTranslation()

  return (
    <ScrollView style={styles.container}>
      <PerformanceChart />
      <View style={styles.row}>
        <View style={styles.halfWidth}>
          <InventoryStatus />
        </View>
        <View style={styles.halfWidth}>
          <CustomerAnalyticsDashboard />
        </View>
      </View>
      <SalesReport />
      <MaintenanceReport />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "48%",
  },
})

export default AnalyticsScreen

