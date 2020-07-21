# jest-styled-jsx-transformer

A Jest transformer using the styled-jsx/webpack loader under the hood to include external CSS files in a Jest testing environment.

## Installation

```
// with npm
npm i --save-dev jest-styled-jsx-transformer

// with yarn
yarn add --dev jest-styled-jsx-transformer
```

## Configuration

### Jest config
Add the `transform` option to your Jest config file and specify `jest-styled-jsx-transformer` as the transformer for CSS files. Make sure to also specify the transformer for your Javascript files because by adding the `transform` option the defaults get overriden.

```js
// jest.config.js
module.exports = {
    transform: {
        '^.+\\.css$': 'jest-styled-jsx-transformer',
        '^.+\\.(t|j)sx?': 'babel-jest'
    }
}
```

### Babel config

Add `@babel/preset-env` to the list of babel presets and set its `modules` option to `commonjs`.
Make sure you add `styled-jsx/babel` to the list of babel plugins and **not** `styled-jsx/babel-test`.

```json
// .babelrc
{
    "env": {
        "test": {
            "presets": ["@babel/preset-env", {modules: "commonjs"}],
            "plugins": ["styled-jsx/babel"]
        }
    }
}
```