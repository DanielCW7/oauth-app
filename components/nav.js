import Link from "next/link"
import { getSession } from "next-auth/react"


// need to acquire session details in order to determine the user's logged in status and toggle visibility
const Nav = () => {

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
    <div className="shadow-xl p-5 bg-red-800">
        <Link href="/test"><button> test page </button></Link>
        {/* nav list here */}
    </div>
    )
}

export default Nav