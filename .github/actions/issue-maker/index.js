const core = require("@actions/core")
const github = require("@actions/github")

async function run() {
    try {
        const issueTitle = core.getInput("issue-title")
        const jokeBody = core.getInput("joke")
        const token = core.getInput("repo-token")

        const octoKit = new github.GitHub(token)

        const newIssue = await octoKit.issues.create({
            repo: github.context.repo.repo,
            owner: github.context.repo.owner,
            title: issueTitle,
            body: jokeBody
        })
    } catch (err) {
        core.setFailed(err.message)
    }
}

run()
