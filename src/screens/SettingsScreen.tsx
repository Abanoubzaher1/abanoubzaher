import { View, Text, StyleSheet, Switch, Button } from "react-native"
import { useTranslation } from "react-i18next"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../store"
import { toggleDarkMode, setLanguage } from "../store/settingsSlice"
import LanguagePicker from "../components/LanguagePicker"
import * as FileSystem from "expo-file-system"
import * as Sharing from "expo-sharing"

const SettingsScreen = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { darkMode, language } = useSelector((state: RootState) => state.settings)

  const exportData = async () => {
    // TODO: Fetch actual data to export
    const data = JSON.stringify({
      machines: [
        { id: 1, name: "Machine 1", status: "Active" },
        { id: 2, name: "Machine 2", status: "Maintenance" },
      ],
      sales: [
        { date: "2023-05-01", amount: 1000 },
        { date: "2023-05-02", amount: 1200 },
      ],
    })

    const fileName = `export_${Date.now()}.json`
    const filePath = `${FileSystem.documentDirectory}${fileName}`

    try {
      await FileSystem.writeAsStringAsync(filePath, data)
      await Sharing.shareAsync(filePath)
    } catch (error) {
      console.error("Error exporting data:", error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("settings.title")}</Text>
      <View style={styles.setting}>
        <Text>{t("settings.darkMode")}</Text>
        <Switch value={darkMode} onValueChange={() => dispatch(toggleDarkMode())} />
      </View>
      <View style={styles.setting}>
        <Text>{t("settings.language")}</Text>
        <LanguagePicker value={language} onValueChange={(lang) => dispatch(setLanguage(lang))} />
      </View>
      <Button title={t("settings.exportData")} onPress={exportData} />
    </View>
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
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
})

export default SettingsScreen

