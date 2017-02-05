# connect picture application

## Dependencies
- You must have `node` and `npm` installed (via `brew install node` or [NodeJS.org](https://nodejs.org/en/));
- You must also have `typings` installed globally via `npm i -g typings`
- Be sure that you have `typings` version `1.x`

## Getting Started


```bash
cd connect-picture
npm run initDev
```

Then navigate your browser to [http://localhost:3001](http://localhost:3001) and use the app.

## Just start server
```bash
npm start
```

## build
```bash
cd connect-picture
npm run initDev
npm run build

copy following files in to build folder:
css
data
index

in index.html
set base href accordingly
	example: href="build"
```