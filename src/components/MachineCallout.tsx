import { View, Text, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"

const MachineCallout = ({ machine }) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{machine.name}</Text>
      <Text style={styles.status}>{t(`machineStatus.${machine.status}`)}</Text>
      <Text>
        {t("machine.lastMaintenance")}: {machine.lastMaintenance}
      </Text>
      <Text>
        {t("machine.revenue")}: ${machine.revenue}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    marginBottom: 4,
  },
})

export default MachineCallout

