import Link from "next/link"
import { useSession, getSession } from "next-auth/react"


// need to acquire session details in order to determine the user's logged in status and toggle visibility
const Nav = () => {
    const { data: session } = useSession();

    // function isLoggedIn() {
    //     if(!session) {
    //       console.log("session: ", session)
    //       return <div> logged out </div>
    //     } else {
    //       console.log("session: ", session)
    //       return <Nav />
    
    //     }
    //   }
    
    //   isLoggedIn()

    return (
    <nav className="shadow-xl p-5 bg-red-800">
        {/* have the app title here and the nav visible when the user is logged in */}
        {session ? <Link href="/test"><button> test page </button></Link> : null}
    </nav>
    )
}

export default Nav