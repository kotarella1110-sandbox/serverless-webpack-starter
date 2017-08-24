# Serverless Webpack StarterKit

This is a simple starterkit for Serverless applications.

This starterkit is based on:

* [Serverless](https://serverless.com/ "Serverless - The Serverless Application Framework powered by AWS Lambda and API Gateway")
    * [Serverless Offline Plugin](https://github.com/dherault/serverless-offline "Serverless Offline Plugin")
    * [Serverless Webpack](https://github.com/elastic-coders/serverless-webpack "elastic-coders/serverless-webpack: Serverless plugin to bundle your lambdas with Webpack")
* [Webpack3](https://webpack.js.org/ "webpack")
* [Babel](https://babeljs.io/ "Babel · The compiler for writing next generation JavaScript")

## Installation

Install `yarn` if you don't have.

```bash
$ npm install -g yarn
```

Download or clone this repo, then install Node.js using [nvm](https://github.com/creationix/nvm "creationix/nvm: Node Version Manager - Simple bash script to manage multiple active node.js versions").

```bash
$ cd to/this/dir
$ nvm install
$ nvm use
```

Install package.

```bash
$ yarn install
```

## Run locally

```bash
$ yarn start
```

Open the URL shown in your browser.

## Build

### Development

```bash
$ yarn build
```

### Production

```bash
$ yarn build:prod
```

## Deploy

### Development

```bash
$ yarn deploy
```

### Production

```bash
$ yarn deploy:prod
```

## Single Function Deploy

### Development

```bash
$ yarn deploy:func -- --function functionName
```

### Production

```bash
$ yarn deploy:func:prod -- --function functionName
```

## License

MIT
