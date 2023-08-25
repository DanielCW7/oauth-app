import Link from "next/link"


const TopNav = () => {
    return (
        <div>

            <span> logo </span>
            <Link href="/"><button className="nav-btn"> Home </button></Link>
            <Link href="/login"><button className="nav-btn"> Login </button></Link>

        </div>
    )
}

export default TopNav