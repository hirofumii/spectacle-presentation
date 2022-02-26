# Spectacle Boilerplate

Spectacle presentation based on custom themes and SWC

## Useage

1. Install dependencies

   ```sh
   $ yarn install
   ```

2. Start the webpack server. The server will run at the default `webpack-dev-server` address, [`localhost:8080`](http://localhost:8080).

   ```sh
   $ yarn start

   # Or with a specific port!
   $ yarn start --port=3000
   ```

## Build & Deployment

Building the dist version of the project is as easy as running

```sh
$ yarn build
```

From there you can deploy the built slides in `dist` to services like Netlify, Surge, etc!
