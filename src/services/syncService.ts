import { ref, onValue, set } from "firebase/database"
import { database } from "../config/firebase"
import store from "../store"
import { setMachines } from "../store/machinesSlice"
import { setInventory } from "../store/inventorySlice"

class SyncService {
  private machinesRef = ref(database, "machines")
  private inventoryRef = ref(database, "inventory")

  startSync() {
    this.syncMachines()
    this.syncInventory()
  }

  private syncMachines() {
    onValue(this.machinesRef, (snapshot) => {
      const machines = snapshot.val()
      if (machines) {
        store.dispatch(setMachines(Object.values(machines)))
      }
    })
  }

  private syncInventory() {
    onValue(this.inventoryRef, (snapshot) => {
      const inventory = snapshot.val()
      if (inventory) {
        store.dispatch(setInventory(inventory))
      }
    })
  }

  updateMachineStatus(machineId: string, status: string) {
    const machineRef = ref(database, `machines/${machineId}/status`)
    set(machineRef, status)
  }

  updateInventoryItem(item: string, quantity: number) {
    const itemRef = ref(database, `inventory/${item}`)
    set(itemRef, quantity)
  }
}

export default new SyncService()

