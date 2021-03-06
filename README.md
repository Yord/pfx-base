![pxi-dust teaser][teaser]

🧚:sparkles:`pxi-dust` is a plugin with basic operations for `pxi` (pixie), the small, fast, and magical command-line data processor.

See the [`pxi` github repository][pxi] for more details!

[![node version][shield-node]][node]
[![npm version][shield-npm]][npm-package]
[![license][shield-license]][license]
[![PRs Welcome][shield-prs]][contribute]
[![linux unit tests status][shield-unit-tests-linux]][actions]
[![macos unit tests status][shield-unit-tests-macos]][actions]
[![windows unit tests status][shield-unit-tests-windows]][actions]

## Installation

> :ok_hand: `pxi-dust` comes preinstalled in `pxi`.
> No installation necessary.
> If you still want to install it, proceed as described below.

`pxi-dust` is installed in `~/.pxi/` as follows:

```bash
npm install pxi-dust
```

The plugin is included in `~/.pxi/index.js` as follows:

```js
const dust = require('pxi-dust')

module.exports = {
  plugins:  [dust],
  context:  {},
  defaults: {}
}
```

For a much more detailed description, see the [`.pxi` module documentation][pxi-module].

## Extensions

This plugin comes with the following `pxi` extensions:

|                     | Description                                                                                                                                                                                      |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `line` chunker      | Divides data on line breaks. A lot of data formats like CSV, TSV, and JSON line build on this separation.                                                                                        |
| `map` applier       | Applies `pxi`'s functions to each individual line. Always returns a single result, unless an error is thrown during function application.                                                        |
| `flatMap` applier   | Applies `pxi`'s functions to each individual line. May return any number of results, including none, thus being able to change the length of a file.                                             |
| `filter` applier    | Treats `pxi`'s functions as a conjunction of predicates and applies it to each individual line. If any predicate is false, the line is dropped, if all predicates return true, the line is kept. |
| `string` serializer | Serializes each transformed JSON into a string separated by newlines.                                                                                                                            |

## Reporting Issues

Please report issues [in the tracker][issues]!

## License

`pxi-dust` is [MIT licensed][license].

[actions]: https://github.com/Yord/pxi-dust/actions
[contribute]: https://github.com/Yord/pxi
[issues]: https://github.com/Yord/pxi/issues
[license]: https://github.com/Yord/pxi-dust/blob/master/LICENSE
[node]: https://nodejs.org/
[npm-package]: https://www.npmjs.com/package/pxi-dust
[pxi]: https://github.com/Yord/pxi
[pxi-module]: https://github.com/Yord/pxi#pxi-module
[shield-license]: https://img.shields.io/npm/l/pxi-dust?color=yellow&labelColor=313A42
[shield-node]: https://img.shields.io/node/v/pxi-dust?color=red&labelColor=313A42
[shield-npm]: https://img.shields.io/npm/v/pxi-dust.svg?color=orange&labelColor=313A42
[shield-prs]: https://img.shields.io/badge/PRs-welcome-green.svg?labelColor=313A42
[shield-unit-tests-linux]: https://github.com/Yord/pxi-dust/workflows/linux/badge.svg?branch=master
[shield-unit-tests-macos]: https://github.com/Yord/pxi-dust/workflows/macos/badge.svg?branch=master
[shield-unit-tests-windows]: https://github.com/Yord/pxi-dust/workflows/windows/badge.svg?branch=master
[teaser]: https://github.com/Yord/pxi/blob/master/teaser.gif?raw=true