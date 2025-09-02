import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigation = useNavigate();

return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
    <button onClick={() => navigation("/login")} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Go to Login</button>
    </div>
    </div>
)

}
