import { getData, storeData } from "./storage"
import type { RootState } from "../store"

interface OfflineAction {
  type: string
  payload: any
}

export async function saveOfflineAction(action: OfflineAction) {
  const offlineActions = (await getData("offlineActions")) || []
  offlineActions.push(action)
  await storeData("offlineActions", offlineActions)
}

export async function syncOfflineActions(dispatch: any, getState: () => RootState) {
  const offlineActions = (await getData("offlineActions")) || []

  for (const action of offlineActions) {
    try {
      // Dispatch the action
      dispatch(action)

      // If the action requires an API call, make it here
      // Example: if (action.type === 'UPDATE_MACHINE_STATUS') { await api.updateMachineStatus(action.payload); }
    } catch (error) {
      console.error("Error syncing offline action:", error)
      // Handle the error (e.g., retry later or notify the user)
    }
  }

  // Clear the offline actions after successful sync
  await storeData("offlineActions", [])
}

