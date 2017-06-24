# JS Library to sort Tibetan

After exploring different options for [tibetan collation](https://github.com/eroux/tibetan-collation) in JavaScript, there seems to be no viable option to sort Unicode Tibetan strings. This library hopes to fullfill this purpose in an elegant, modern and efficient manner.

### State of the art

The most logical option to sort Tibetan would by using [Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator). The problem is that all browsers seems to use [ICU](http://site.icu-project.org/) to implement this object, and ICU has a [bug on Tibetan collation](http://bugs.icu-project.org/trac/ticket/13224), which won't be fixed in the short term. It will take even more time for the fix to appear in mainstream browsers, so it's not even a middle term solution. Bugs have been filled for [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1370185), [ChakraCore](https://github.com/Microsoft/ChakraCore/issues/3175), [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=729508) and Safari.

Pure Javascript implementations of `Intl.Collator` don't seem to exist, as the only `Intl` [polyfill](https://github.com/andyearnshaw/Intl.js/) [doesn't support it](https://github.com/andyearnshaw/Intl.js/#what-about-intlcollator).

The only library we found that would be of possible use is [lasca](https://github.com/atomgomba/lasca), but it proved very buggy and extremely inefficient.

## Installation

## Use

## License

The code is Copyright 2017 Buddhist Digital Resource Center, and is provided under [Apache License 2.0](LICENSE).
