# content-disposition-parse

[![NPM Version][npm-image]][npm-url] [![NPM Downloads][downloads-image]][downloads-url]

Parse HTTP `Content-Disposition` header based on this [content-disposition][git-url]

### Installation

```sh
$ npm install content-disposition-parse
```
### Example

```js
const { ContentDisposition } = require('content-disposition-parse');

const result = ContentDisposition.parse('attachment; filename="example.txt"');
console.log(result);

//output result 
{ type: 'attachment', parameters: { filename: 'example.txt' } }
```

### Usage

Specifies the disposition type, defaults to `"attachment"`. This can also be
`"inline"`, or any other value (all values except inline are treated like
`attachment`, but can convey additional information if both parties agree to
it). The type is normalized to lower-case.

Parse a `Content-Disposition` header string. This automatically handles extended
("Unicode") parameters by decoding them and providing them under the standard
parameter name. This will return an object with the following properties (examples
are shown for the string `'attachment; filename="EURO rates.txt"; filename*=UTF-8\'\'%e2%82%ac%20rates.txt'`):

 - `type`: The disposition type (always lower case). Example: `'attachment'`

 - `parameters`: An object of the parameters in the disposition (name of parameter
   always lower case and extended versions replace non-extended versions). Example:
   `{filename: "€ rates.txt"}`

### References

- [RFC 2616: Hypertext Transfer Protocol -- HTTP/1.1][rfc-2616]
- [RFC 5987: Character Set and Language Encoding for Hypertext Transfer Protocol (HTTP) Header Field Parameters][rfc-5987]
- [RFC 6266: Use of the Content-Disposition Header Field in the Hypertext Transfer Protocol (HTTP)][rfc-6266]
- [Test Cases for HTTP Content-Disposition header field (RFC 6266) and the Encodings defined in RFCs 2047, 2231 and 5987][tc-2231]

[rfc-2616]: https://tools.ietf.org/html/rfc2616
[rfc-5987]: https://tools.ietf.org/html/rfc5987
[rfc-6266]: https://tools.ietf.org/html/rfc6266
[tc-2231]: http://greenbytes.de/tech/tc2231/

### License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/content-disposition-parse.svg?
[npm-url]: https://npmjs.org/package/content-disposition-parse
[downloads-image]: https://img.shields.io/npm/dm/content-disposition-parse.svg
[npm-badge]: https://img.shields.io/badge/npm-red?logo=npm&label=%20
[git-badge]: https://img.shields.io/badge/github-blue?logo=github&label=%20
[npm-orig-url]: https://npmjs.org/package/content-disposition
[git-url]: https://github.com/jshttp/content-disposition
[downloads-url]: https://npmjs.org/package/content-disposition-parse

