import { signIn } from "next-auth/react"

const Login = () => {
    async function handleGithubSignin() {
        signIn("github", { callbackUrl: "http://localhost:3000" })
    }

    return (
        <div className="text-center flex flex-col justify-center h-screen">
            <button onClick={handleGithubSignin} className="m-auto border-2 border-gray-200 p-2 rounded-md"> Sign in with Github </button>  
        </div>
    )
}

export default Login