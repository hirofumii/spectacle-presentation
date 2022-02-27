# Spectacle Boilerplate SWC

[Spectacle](https://github.com/FormidableLabs/spectacle) Boilerplate based on SWC for high speed.

![Screen Shot 2022-02-27 at 12 17 59](https://user-images.githubusercontent.com/7459529/155866744-b1c9f04a-f8fd-460d-be21-ad27a47a656b.png)

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
