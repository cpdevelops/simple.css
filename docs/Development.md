_simple.css_ is an open source project, meaning that anyone can contribute and make changes. To become a contributor to _simple.css_, follow these steps:


> Basic information:

- Pick an issue that you're willing to work on
- Open new issue if it's an improvement instead of a problem, wait for response of repository owner, before you begin


> Prerequisites

This project uses `Gulp JS` as its task-runner. It will basically take all of the `scss` and `js`, pre-process, compile, minify and do all of 
the boring things that you shouldn't do, so you must have Node JS and NPM installed. 

- [Visit Node JS](https://nodejs.org/en/) and download the latest version _(current, not LTS)_


> Fork and clone:

- [Fork](https://github.com/cpdevelops/simple.css#fork-destination-box) the repository
- Clone forked repository `git clone https://github.com/username/simple.css.git` _(make sure to replace `username` with your actual GitHub username)_


> Before you start making any contributions:

Now that you have Node JS and NPM installed, you can access it through `terminal/cmd`. Commands below are required for development and contribution.

| COMMAND | DESCRIPTION |
| ------- | ----------- |
| `npm install` | it will install all dependencies of this project and its development |
| `npm run dev` | it will trigger `npm script` that runs `gulp` task-runner and compiles everything for the first time for development |
| `npm run prod` | it will trigger `npm script` that runs `gulp` with `--production` flag; which compiles everything for production |
| `npm run clean` | it removes the `dist` directory; you mostlikely won't need to run this command ever, it will ran automatically on each compile `dev` or `prod` |
| `npm run watch` | it will watch for any changes you make in `src` directory while developing |

To sum it up, you will basically need to follow these commands after you `forked` and `cloned` repository...

- `cd ~/Sites/simple.css/` _(change directory to where you cloned the repository, this most likely might not be your path)_
- `npm install` _(to install all dependencies for the first time)_
- `npm run dev && npm run watch` _(to compile it for development for the first time and to watch for further changes)_


> Begin with work:

Every source file is located within `src` directory and that's where you should be making your changes, unless it's `index.html` or `docs` improvement.
Once you finish with all your changes that solves an `issue`, push your changes to github and submit a pull request.
