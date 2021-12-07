## Setup

To run each child application locally, you need to symlink them. Run the following commands in order:

```
npm run link:vue
npm run link:react
npm run link:host
```

## Installation

You need to install each of the application's dependencies, so run the commands in order:

```
cd ./vue-app && npm install
cd ../react-app && npm install
cd ../host-app && npm install && cd ..
```

## Build

You need to build each of the child applications, so that they are available for the host to run. Run the following commands in order:

```
cd ./vue-app && npm run build
cd ../react-app && npm run build && cd ..
```

## Start the host app

```
npm run start
```