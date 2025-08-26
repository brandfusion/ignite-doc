# Update Repository

This is the sequence to follow to update the repository's main branch with the latest **Ignite** features.

```ps
git pull --rebase
git fetch upstream
git switch main
git checkout -b update/ignite
git merge upstream/main
git switch main
git merge update/ignite --ff-only
git branch --delete update/ignite 
```

