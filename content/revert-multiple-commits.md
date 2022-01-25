---
title: "Reverting Multiple Commits"
tags: ["git"]
---

```sh
git revert --no-commit HEAD~N..
```

- `N` refers to the number of commits to revert (e.g. `HEAD~2` reverts the last 2 commits)
- the command does not rewrite history and so no force push is required
- the [`--no-commit`](https://git-scm.com/docs/git-revert#Documentation/git-revert.txt---no-commit) flag applies the changes necessary to revert the commit(s) without making the commits

## Resources
- [StackOverflow: How to revert multiple git commits?](https://stackoverflow.com/a/43081965/9599137)
- [Briana's Blog: Reverting multiple merged commits](https://brianasz.com/2019/11/26/Reverting_merged_commits.html)
