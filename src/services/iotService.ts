import { Platform } from "react-native"
import { BleManager, type Device } from "react-native-ble-plx"
import { updateMachineStatus } from "../store/machinesSlice"
import store from "../store"

class IoTService {
  private bleManager: BleManager
  private connectedDevices: Map<string, Device>

  constructor() {
    this.bleManager = new BleManager()
    this.connectedDevices = new Map()
  }

  async startScanning() {
    if (Platform.OS === "android" && Platform.Version >= 23) {
      const granted = await this.bleManager.requestPermissions()
      if (!granted) {
        console.log("BLE permission not granted")
        return
      }
    }

    this.bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error("BLE scan error:", error)
        return
      }

      if (device && this.isVendingMachine(device)) {
        this.connectToDevice(device)
      }
    })
  }

  private isVendingMachine(device: Device): boolean {
    // Implement logic to identify vending machines
    // This could be based on the device name, manufacturer data, or service UUIDs
    return device.name?.startsWith("VM-") || false
  }

  private async connectToDevice(device: Device) {
    try {
      const connectedDevice = await device.connect()
      await connectedDevice.discoverAllServicesAndCharacteristics()
      this.connectedDevices.set(device.id, connectedDevice)
      this.startMonitoring(connectedDevice)
    } catch (error) {
      console.error("Error connecting to device:", error)
    }
  }

  private startMonitoring(device: Device) {
    // Implement logic to monitor device characteristics
    // This is a simplified example; adjust based on your IoT device's specifications
    device.monitorCharacteristicForService("YOUR_SERVICE_UUID", "YOUR_CHARACTERISTIC_UUID", (error, characteristic) => {
      if (error) {
        console.error("Error monitoring characteristic:", error)
        return
      }

      if (characteristic?.value) {
        const status = this.parseStatus(characteristic.value)
        store.dispatch(updateMachineStatus({ id: device.id, status }))
      }
    })
  }

  private parseStatus(value: string): string {
    // Implement logic to parse the status from the characteristic value
    // This is a simplified example; adjust based on your IoT device's data format
    const decodedValue = Buffer.from(value, "base64").toString("utf-8")
    return decodedValue === "1" ? "active" : "inactive"
  }

  stopScanning() {
    this.bleManager.stopDeviceScan()
  }

  disconnectAll() {
    this.connectedDevices.forEach((device) => {
      device.cancelConnection()
    })
    this.connectedDevices.clear()
  }
}

export default new IoTService()

