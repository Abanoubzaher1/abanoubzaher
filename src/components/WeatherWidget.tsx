"use client"

import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import axios from "axios"

const WeatherWidget = ({ latitude, longitude }) => {
  const { t } = useTranslation()
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=YOUR_API_KEY`,
        )
        setWeather(response.data)
      } catch (error) {
        console.error("Error fetching weather:", error)
      }
    }

    fetchWeather()
  }, [latitude, longitude])

  if (!weather) return null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("weather.title")}</Text>
      <Text>{`${weather.main.temp}°C`}</Text>
      <Text>{weather.weather[0].description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
})

export default WeatherWidget

