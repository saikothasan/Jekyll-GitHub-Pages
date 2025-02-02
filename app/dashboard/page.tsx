import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <p className="mb-4">Welcome, {session.user?.name || session.user?.email}!</p>
      <h2 className="text-2xl font-semibold mb-4">Your Themes</h2>
      {/* Add a list of the user's themes here */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Analytics</h2>
      {/* Add analytics data here */}
    </div>
  )
}

