---
title: "npm ci"
tags: ["npm"]
---

Functionality-wise, the command is similar to `npm install` however it serves different purposes.

- named after Continuous Integration
- installations are deterministic
- performs a clean installation of dependencies
- respects the lock file to install the specific version of each package
- never writes to `package.json` or `package-lock.json`
- uses `package.json` to validate that there are no mismatched versions
- throws an error if dependencies are missing or have incompatible versions
- automatically removes the `node_modules` folder before begins its install

## Resources

- [StackOverflow: What is the difference between "npm install" and "npm ci"?](https://stackoverflow.com/questions/52499617/what-is-the-difference-between-npm-install-and-npm-ci)
- [Official docs](https://docs.npmjs.com/cli/v8/commands/npm-ci)
