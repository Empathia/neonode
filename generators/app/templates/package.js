{
  "name": "<%= name %>",
  "description": "<%= description %>",
  "repository": "",
  "version": "0.0.1",
  "keywords": [],
  "engines": {
    "node": ">=0.10.33"
  },
  "scripts": {
    "start": "node bin/server.js",
    "build": "tarima -fdV",
    "watch": "tarima -wdVP localhost:3000"
  },
  "tarima": {
    "rollupFile": "./rollup.config.js",
    "bundle": true,
    "src": "src/**/*",
    "dest": "./public/build",
    "ignoreFiles": [".gitignore"],
    "filter": ["**/_entries/**"],
    "rename": "**:{filepath/1}/{filename}.{extname}",
    "bundleOptions": {
      "extensions": {
        "js": "es6",
        "css": "post"
      },
      "postcss": {
        "plugins": [
          "postcss-import",
          "postcss-cssnext"
        ]
      }
    }
  }
}
