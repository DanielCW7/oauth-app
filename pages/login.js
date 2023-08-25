// pages/_app.js (or _app.tsx for TypeScript)

const Login = () => {
  return (
    <div className="flex flex-col justify-center border-8 h-screen">
      <form className="flex flex-col p-10 border-2 rounded m-auto">
        <h1 className="mb-5"> Log in to Github </h1>

        <fieldset className="flex flex-col">
          <label> Email: </label>
          <input className="border-2" type="text" id="email" />

          <label> Password: </label>
          <input className="border-2" type="password" id="password" />          
        </fieldset>

      </form>
    </div>    
  )

}

export default Login;
