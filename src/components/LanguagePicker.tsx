import type React from "react"
import { Picker } from "@react-native-picker/picker"

interface LanguagePickerProps {
  value: string
  onValueChange: (lang: string) => void
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({ value, onValueChange }) => {
  return (
    <Picker selectedValue={value} onValueChange={onValueChange} style={{ height: 50, width: 150 }}>
      <Picker.Item label="English" value="en" />
      <Picker.Item label="Spanish" value="es" />
    </Picker>
  )
}

export default LanguagePicker

