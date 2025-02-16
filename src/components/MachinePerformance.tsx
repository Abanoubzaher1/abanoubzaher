import { View, Text, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import { LineChart } from "react-native-chart-kit"

const MachinePerformance = ({ machineId }) => {
  const { t } = useTranslation()

  // TODO: Fetch real data from API
  const performanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("machinePerformance.title", { machineId })}</Text>
      <LineChart
        data={performanceData}
        width={300}
        height={200}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={styles.chart}
      />
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>{t("machinePerformance.uptime")}: 98%</Text>
        <Text style={styles.stat}>{t("machinePerformance.sales")}: $1,234</Text>
        <Text style={styles.stat}>
          {t("machinePerformance.maintenance")}: 2 {t("machinePerformance.issues")}
        </Text>
      </View>
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
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  statsContainer: {
    marginTop: 16,
  },
  stat: {
    fontSize: 14,
    marginBottom: 8,
  },
})

export default MachinePerformance

