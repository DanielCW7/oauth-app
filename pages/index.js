import Link from "next/link";
import Image from "next/image";
import { signOut, useSession, getSession } from "next-auth/react"

export default function Home() {

  function handleSignOut() {
    signOut("github")
  }
  
  const { data: session } = useSession()

  return (
    <>
      <p> home page </p>
      <button onClick={handleSignOut}> Sign out </button>

      {session ? User({ session }) : Guest()}
    </>
  )


  function Guest() {
    return (
      <>
        <h1 className="text-2xl border-2"> GUEST HOMEPAGE </h1>
        <Link href={"/login"}> log in </Link>      
      </>
    )
  }


  function User({ session }) {
    
    return (
      // header
      <div>
        <div className="bg-gray-600 border-2 text-center min-h-full h-96 flex flex-col justify-center">
          <Image src={session.user.image} width={200} height={200} className="rounded-full border-4 border-white mx-auto"/>
          <h1 className="text-3xl font-bold text-white"> Welcome, {session.user.name}! </h1>  
          <div>
            <button onClick={handleSignOut}> Sign out </button>
          </div>        
        </div>

      </div>
      
      
    )
  }
}

export async function getServerSideProps({req}) {
  const session = await getSession({req})


  if(!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }
  return {
    props: {session}
  }
}