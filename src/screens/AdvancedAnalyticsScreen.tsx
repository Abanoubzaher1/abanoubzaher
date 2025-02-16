"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { useTranslation } from "react-i18next"
import { LineChart, BarChart, PieChart } from "react-native-chart-kit"
import { useSelector } from "react-redux"
import type { RootState } from "../store"
import AnimatedTransition from "../components/AnimatedTransition"

const AdvancedAnalyticsScreen: React.FC = () => {
  const { t } = useTranslation()
  const machines = useSelector((state: RootState) => state.machines.list)
  const [salesData, setSalesData] = useState<number[]>([])
  const [maintenanceData, setMaintenanceData] = useState<number[]>([])
  const [productPopularity, setProductPopularity] = useState<{ name: string; population: number; color: string }[]>([])

  useEffect(() => {
    // Fetch real data from API in a production app
    setSalesData([300, 450, 400, 550, 500, 600, 700])
    setMaintenanceData([5, 3, 4, 2, 1, 3, 2])
    setProductPopularity([
      { name: "Product A", population: 30, color: "#FF5733" },
      { name: "Product B", population: 25, color: "#33FF57" },
      { name: "Product C", population: 20, color: "#3357FF" },
      { name: "Product D", population: 15, color: "#FF33E9" },
      { name: "Others", population: 10, color: "#33FFF6" },
    ])
  }, [])

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
  }

  return (
    <ScrollView style={styles.container}>
      <AnimatedTransition>
        <Text style={styles.title}>{t("advancedAnalytics.title")}</Text>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>{t("advancedAnalytics.salesTrend")}</Text>
          <LineChart
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              datasets: [{ data: salesData }],
            }}
            width={350}
            height={220}
            chartConfig={chartConfig}
            bezier
          />
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>{t("advancedAnalytics.maintenanceFrequency")}</Text>
          <BarChart
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              datasets: [{ data: maintenanceData }],
            }}
            width={350}
            height={220}
            chartConfig={chartConfig}
          />
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>{t("advancedAnalytics.productPopularity")}</Text>
          <PieChart
            data={productPopularity}
            width={350}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>{t("advancedAnalytics.keyStats")}</Text>
          <Text>
            {t("advancedAnalytics.totalMachines")}: {machines.length}
          </Text>
          <Text>
            {t("advancedAnalytics.activeMachines")}: {machines.filter((m) => m.status === "active").length}
          </Text>
          <Text>
            {t("advancedAnalytics.totalSales")}: ${salesData.reduce((a, b) => a + b, 0)}
          </Text>
        </View>
      </AnimatedTransition>
    </ScrollView>
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
  chartContainer: {
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  statsContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
})

export default AdvancedAnalyticsScreen

