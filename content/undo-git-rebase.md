---
title: "Undo Git Rebase"
tags: ["git"]
---

## Step #1 - Find head commit of branch before rebase started

```sh
git reflog

a109aa318 (origin/main, main) HEAD@{X}: rebase (start): checkout main
```

## Step #2 - Reset the branch to the head commit

```sh
git reset --hard HEAD@{X}
```

**Beware!** Uncommitted changes (regardless of whethey they are staged or not) and commits in between the current and target head will be lost.

## Pro tip - Create a backup tag

```sh
git tag BACKUP
```

If needed, you can restore it:

```sh
git reset --hard BACKUP
```

## Resources

- [Undoing a git rebase](https://stackoverflow.com/questions/134882/undoing-a-git-rebase)
- [What's the difference between git reset --mixed, --soft, and --hard?](https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard)
