import { View, Text, FlatList, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import type { RootState } from "../store"

const AlertsList = () => {
  const alerts = useSelector((state: RootState) => state.alerts.list)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerts</Text>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alertItem}>
            <Text style={styles.alertTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  alertItem: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  alertTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
})

export default AlertsList

