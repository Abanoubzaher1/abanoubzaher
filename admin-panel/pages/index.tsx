import type React from "react"
import { useSession, signIn } from "next-auth/react"
import Link from "next/link"

const AdminPanel: React.FC = () => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button
          onClick={() => signIn()}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Sign in
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/users">
            <a className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Manage Users</h5>
              <p className="font-normal text-gray-700">View and manage user accounts and permissions.</p>
            </a>
          </Link>
          <Link href="/roles">
            <a className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Manage Roles</h5>
              <p className="font-normal text-gray-700">Create and edit user roles and their associated permissions.</p>
            </a>
          </Link>
          <Link href="/settings">
            <a className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Global Settings</h5>
              <p className="font-normal text-gray-700">Configure global application settings and preferences.</p>
            </a>
          </Link>
        </div>
      </main>
      <footer className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2023 Vending Machine Management. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default AdminPanel

