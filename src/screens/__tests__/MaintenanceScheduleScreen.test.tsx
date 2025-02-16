import { render, fireEvent, waitFor } from "@testing-library/react-native"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import MaintenanceScheduleScreen from "../MaintenanceScheduleScreen"
import { describe, it, expect } from "@jest/globals" // Added import for describe, it, and expect

const mockStore = configureStore([])

describe("MaintenanceScheduleScreen", () => {
  it("renders correctly and allows scheduling maintenance", async () => {
    const initialState = {
      machines: {
        list: [
          { id: "1", name: "Machine 1", status: "active" },
          { id: "2", name: "Machine 2", status: "maintenance" },
        ],
      },
    }
    const store = mockStore(initialState)

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <MaintenanceScheduleScreen />
      </Provider>,
    )

    // Check if the screen title is rendered
    expect(getByText("Maintenance Schedule")).toBeTruthy()

    // Check if machine items are rendered
    expect(getByText("Machine 1")).toBeTruthy()
    expect(getByText("Machine 2")).toBeTruthy()

    // Select a machine and schedule maintenance
    fireEvent.press(getByText("Machine 1"))
    fireEvent.press(getByTestId("schedule-button"))

    // Wait for the scheduling action to complete
    await waitFor(() => {
      const actions = store.getActions()
      expect(actions).toContainEqual(
        expect.objectContaining({
          type: "machines/scheduleMaintenance",
          payload: expect.objectContaining({ machineId: "1" }),
        }),
      )
    })
  })
})

