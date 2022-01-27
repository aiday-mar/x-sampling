# x-sampling

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Package used to sample elements in an array or create samples from a starting point to an ending point using a certain distribution.

## Installation

`$ npm i ml-x-sampling`

## Usage

```js
import xSampling from 'ml-x-sampling';

let result = xSampling({
  startPoint: 1,
  endPoint: 100,
  nbPoints: 10,
  includeEnd: true,
  distribution: 'uniform',
});

// result is: [1, 12, 23, 34, 45, 56, 67, 78, 89, 100]
```

## [API Documentation](https://mljs.github.io/x-sampling/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-x-sampling.svg
[npm-url]: https://www.npmjs.com/package/ml-x-sampling
[ci-image]: https://github.com/mljs/x-sampling/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/mljs/x-sampling/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/mljs/x-sampling.svg
[codecov-url]: https://codecov.io/gh/mljs/x-sampling
[download-image]: https://img.shields.io/npm/dm/ml-x-sampling.svg
[download-url]: https://www.npmjs.com/package/ml-x-sampling
