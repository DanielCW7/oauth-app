

const GithubBtn = () => {
    const githubHandleSignIn = () => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=Iv1.a58f03a7798c0a05&redirect_uri=localhost:3000/pages/api/github-callback&scope=repo`
    } 
    return (
        <div className="text-center m-2">
            <button className="border-2 py-2 px-4 rounded" onClick={githubHandleSignIn}> Sign in with Github </button>
        </div>
    )
}

export default GithubBtn