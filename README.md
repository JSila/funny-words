# Funny Words

Package which shuffles word with fixed first and last letter and was inspired by the following:

    Aoccdrnig to rscheearch at Cmabrigde uinervtisy, it deosn’t mttaer waht oredr the ltteers in a wrod are, the olny iprmoetnt tihng is taht the frist and lsat ltteres are at the rghit pclae. The rset can be a tatol mses and you can sitll raed it wouthit a porbelm. Tihs is bcuseae we do not raed ervey lteter by it slef but the wrod as a wlohe.

As a not to that text, its legitimacy has been crushed to dust [Read this to know how](http://awesci.com/cambridge-university-says-spelling-does-not-matter/). Also my package confirmed it's actually not that simple to read with different text.

## Install

As of now this package is not hosted on npm but you can easily add package hosted on github to your package.json. Read [this](https://docs.npmjs.com/files/package.json#github-urls) for how to do that.

## How to use

```js
var funnyWords = require('funny-words');
console.log(funnyWords("Don't worry, be happy!")); // Output could be "D'not wrory, be hppay!"
```

## Test

```
npm test
```

## Author

Jernej Sila - jernej.sila@gmail.com

## License

MIT
