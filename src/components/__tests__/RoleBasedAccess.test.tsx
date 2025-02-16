import { render } from "@testing-library/react-native"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import RoleBasedAccess from "../RoleBasedAccess"
import { describe, it, expect } from "@jest/globals" // Added import for describe, it, and expect

const mockStore = configureStore([])

describe("RoleBasedAccess", () => {
  it("renders children when user has allowed role", () => {
    const store = mockStore({
      auth: { role: "manager" },
    })

    const { getByText } = render(
      <Provider store={store}>
        <RoleBasedAccess allowedRoles={["manager", "admin"]}>
          <div>Authorized Content</div>
        </RoleBasedAccess>
      </Provider>,
    )

    expect(getByText("Authorized Content")).toBeTruthy()
  })

  it("does not render children when user does not have allowed role", () => {
    const store = mockStore({
      auth: { role: "operator" },
    })

    const { queryByText } = render(
      <Provider store={store}>
        <RoleBasedAccess allowedRoles={["manager", "admin"]}>
          <div>Authorized Content</div>
        </RoleBasedAccess>
      </Provider>,
    )

    expect(queryByText("Authorized Content")).toBeNull()
  })
})

