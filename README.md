# Dawn Type File
What this repo is:
This repo is designed to manage TypeScript interfaces between the front end applications and the backend applications. Common types and objects can be written in this file and then published to NPM to be pulled down into the repo's. Still trying to figure out a roadmap for how to deal with productionalizing this. In other words, how we can maintain this project with different environments and versions. 
___
Current Steps to Publish
1. Assuming you have the mobile, service, and DAI repos in the same level of your local folder structure-
2. `npm run go-platform` will commit your changes, push to npm, and then update your service and front end.


Original Steps to Publish
1. Update the version number.
2. Push updates to github.
3. `npm run build`
4. `npm publish`
