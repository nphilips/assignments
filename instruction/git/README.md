Github
    1. git add -A
    2. git commit -m "commit message"
        2.5 git status    (to see what is staged for pushing)
            2.75 if (node_modules, .env, api-key)  git reset
    3. git push ( Push up my local repo to update the Remote)


Creating a Repo starting with the Local
    1. git init (Initializes a local repository)
    2. git remote add origin url-to-remote-repo

git clone https://github.com/njensen58/test-repo.git
git clone url-to-git-repo

git pull ( Pull down remote repo and update my local repo with the changes)


Branching (local first):
    1. git branch <branch-name/>
    2. git checkout <branch-name/>
        3. // write some code
    4. git add
    5. commit,
    6. push --set-upstream origin <branch-name>
        (creates remote branch. only required first time pushing new branch)