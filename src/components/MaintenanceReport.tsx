import { View, Text, StyleSheet, FlatList } from "react-native"
import { useTranslation } from "react-i18next"

const MaintenanceReport = () => {
  const { t } = useTranslation()

  // TODO: Replace with actual data from API or Redux store
  const maintenanceData = [
    { id: "1", machine: "Machine 1", date: "2023-05-15", issue: "Routine checkup" },
    { id: "2", machine: "Machine 3", date: "2023-05-18", issue: "Replace filter" },
    { id: "3", machine: "Machine 2", date: "2023-05-20", issue: "Software update" },
  ]

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.machine}>{item.machine}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.issue}>{item.issue}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("analytics.maintenanceReport")}</Text>
      <FlatList data={maintenanceData} renderItem={renderItem} keyExtractor={(item) => item.id} />
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
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  machine: {
    fontWeight: "bold",
  },
  date: {
    color: "#666",
  },
  issue: {
    flex: 1,
    marginLeft: 8,
  },
})

export default MaintenanceReport

