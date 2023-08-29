import GithubBtn from "@/components/githubBtn";

const homePage = () => {
    return (
        <div className="flex flex-col justify-center border-8 h-screen">
            <h1 className="text-center"> Login page is the homepage by default </h1>
            <GithubBtn />         
        </div>
    )
}

export default homePage