import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigate()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email:", email)
    console.log("Password:", password)
    // TODO: send to backend API
  }
    const [blocks, setBlocks] = useState([1, 2, 3]);

  

  return (
    <div className="min-h-screen flex items-center justify-center ">

      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-wrap">
              {blocks.map((n) => (
                <div key={n} className="flex-1 bg-blue-500 text-white p-4 rounded">
                  {n}
                </div>
              ))}

              <button
                className="ml-4 px-2 py-1 bg-gray-700 text-white rounded"
                onClick={() => setBlocks([...blocks, blocks.length + 1])}
              >
                Add
              </button>
           </div>
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
            <button onClick={() => navigation("/") } className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Go to Home</button>

        </form>
      </div>
      </div>
  )
}
