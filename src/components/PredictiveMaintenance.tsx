"use client"

import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import { LineChart } from "react-native-chart-kit"
import AnimatedTransition from "./AnimatedTransition"
import MLService from "../services/mlService"

const PredictiveMaintenance: React.FC<{ machineId: string }> = React.memo(({ machineId }) => {
  const { t } = useTranslation()
  const [prediction, setPrediction] = useState<number | null>(null)
  const [historicalData, setHistoricalData] = useState<number[]>([])

  useEffect(() => {
    const fetchData = async () => {
      // In a real app, fetch this data from an API
      const mockHistoricalData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100))
      setHistoricalData(mockHistoricalData)

      try {
        const result = await MLService.predictMaintenance(mockHistoricalData)
        setPrediction(result)
      } catch (error) {
        console.error("Error predicting maintenance:", error)
      }
    }

    fetchData()
  }, []) // Removed machineId from dependencies

  if (prediction === null) {
    return <Text>{t("predictiveMaintenance.loading")}</Text>
  }

  const chartData = {
    labels: ["6 days ago", "5 days ago", "4 days ago", "3 days ago", "2 days ago", "Yesterday", "Today"],
    datasets: [{ data: historicalData }],
  }

  return (
    <AnimatedTransition>
      <View style={styles.container}>
        <Text style={styles.title}>{t("predictiveMaintenance.title")}</Text>
        <Text style={styles.prediction}>
          {t("predictiveMaintenance.nextMaintenance", { days: Math.round(prediction) })}
        </Text>
        <LineChart
          data={chartData}
          width={300}
          height={200}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>
    </AnimatedTransition>
  )
})

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
    marginBottom: 8,
  },
  prediction: {
    fontSize: 16,
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
})

export default PredictiveMaintenance

