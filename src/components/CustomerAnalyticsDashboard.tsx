import { View, Text, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import { PieChart } from "react-native-chart-kit"

const CustomerAnalyticsDashboard = () => {
  const { t } = useTranslation()

  const data = [
    {
      name: "New",
      population: 30,
      color: "#FF5733",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Returning",
      population: 70,
      color: "#33FF57",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("analytics.customerTitle")}</Text>
      <PieChart
        data={data}
        width={300}
        height={200}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
})

export default CustomerAnalyticsDashboard

