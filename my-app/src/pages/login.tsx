import { useState } from "react"
import { useNavigate } from "react-router-dom"


interface LoginFormValues {
  email: string;
  password: string;
}


export default function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigation = useNavigate()
  const submitform= (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formdata: LoginFormValues={
      email,
      password
    }
    console.log(formdata)
  }
  


  return (
  

<div className="bg-white-400">

<div className="min-h-screen flex items-center justify-center p-4">
  <div className="w-full max-w-lg aspect-square rounded-full ring-8 ring-teal-100 ring-offset-7 ring-offset-transparent flex items-center justify-center">
    <div className="size-[90%] rounded-full bg-white flex items-center justify-center overflow-hidden">
      <div className="min-w-0 w-[90%] max-w-sm aspect-square px-4 sm:px-6 py-4 sm:py-6 overflow-auto">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
          <form onSubmit={submitform} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700"> Email </label>
            <input id="email" type="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700"> Password </label>
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} minLength={8} required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"/>
          </div>
          <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors" >
            Submit
          </button>
        </form>
        <button onClick={() => navigation("/")} className="mt-4 w-full text-teal-600 hover:underline text-sm" > Home </button>
      </div>
    </div>
  </div>
</div>

        </div>

  )
}
