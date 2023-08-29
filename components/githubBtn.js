
const GithubBtn = () => {        


    const githubHandleSignIn = () => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&scope=repo`
    } 

    return (
        <div className="text-center m-2">
            <button className="border-2 py-2 px-4 rounded" onClick={githubHandleSignIn}> Sign in with Github </button>
        </div>
    )

}

export default GithubBtn