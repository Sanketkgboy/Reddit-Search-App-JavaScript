# Reddit-Search-App-JavaScript


# Things used to build this app.
This is a Reddit Search App build with the help of 
ES6, Fetch & Parcel, bootstrap
Parcel is a package manager similar to webpack but it a zero configuration.


# What does the app do?
1. An app that will search articles using the Reddit API.
2. Shows error if no search input is given.
3. Displays reddit image if article is not having any image.
4. Read more link that will allow to read full article.
5. You can see name of subreddit and score down at the bottom
6. Limit the posts per page.
7. Sort by relevance or latest.


# Install Parcel and Setup package.json file
Install the Parcel using below steps.
1. create a folder.
2. Open VS Code
2. Open the terminal tab.
3. use the command: npm install -g parcel-bundler
Or yu can go to https://parceljs.org/getting_started.html and foloow the istallation instructions.
4. Create package.json file, command: npm init
5. Enter the values wherever needed.
some of the fields I filled in.
description: Reddit search app
entry point: (index.js)
author: Sanket Kawale (Your Name)
license: MIT

# Running the server
1. create required files, in my case I created index.html and index.js
2. Go to index.html and reference index.js
3. On the terminal run (quotes excluded): 'parcel index.html'
Now what parcel does is that it compiles everything in dist directory. We don't touch the directory.



