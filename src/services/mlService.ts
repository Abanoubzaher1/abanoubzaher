import * as tf from "@tensorflow/tfjs"
import { bundleResourceIO } from "@tensorflow/tfjs-react-native"

class MLService {
  private maintenanceModel: tf.LayersModel | null = null
  private inventoryModel: tf.LayersModel | null = null

  async init() {
    await tf.ready()
    await this.loadModels()
  }

  private async loadModels() {
    const maintenanceModelJson = require("../assets/models/maintenance_model.json")
    const maintenanceModelWeights = require("../assets/models/maintenance_model.weights.bin")
    this.maintenanceModel = await tf.loadLayersModel(bundleResourceIO(maintenanceModelJson, maintenanceModelWeights))

    const inventoryModelJson = require("../assets/models/inventory_model.json")
    const inventoryModelWeights = require("../assets/models/inventory_model.weights.bin")
    this.inventoryModel = await tf.loadLayersModel(bundleResourceIO(inventoryModelJson, inventoryModelWeights))
  }

  async predictMaintenance(machineData: number[]): Promise<number> {
    if (!this.maintenanceModel) {
      throw new Error("Maintenance model not loaded")
    }

    const inputTensor = tf.tensor2d([machineData])
    const prediction = this.maintenanceModel.predict(inputTensor) as tf.Tensor
    const result = await prediction.data()
    return result[0]
  }

  async predictInventory(salesData: number[]): Promise<number[]> {
    if (!this.inventoryModel) {
      throw new Error("Inventory model not loaded")
    }

    const inputTensor = tf.tensor2d([salesData])
    const prediction = this.inventoryModel.predict(inputTensor) as tf.Tensor
    const result = await prediction.data()
    return Array.from(result)
  }
}

export default new MLService()

