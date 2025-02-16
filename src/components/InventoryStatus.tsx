import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import type { RootState } from "../store"

const InventoryStatus = () => {
  const inventory = useSelector((state: RootState) => state.inventory)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory Status</Text>
      {Object.entries(inventory).map(([item, quantity]) => (
        <View key={item} style={styles.item}>
          <Text>{item}</Text>
          <Text>{quantity}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
})

export default InventoryStatus

