/** 
 * @private
 * @module tibetan-sort-js
 * @license MIT
 * @author Elie Roux (Buddhist Digital Resource Center)
 */

/**
 * The source of data, a decorated prefix tree (or Trie), that we will fill in
 * the init() function.
 *
 * A trie node is as follows:
 *  {
 *    p: primary weight of the node (optional)
 *    s: secondary weight of the node (optional)
 *    char1: trieNode1,
 *    char2: trieNode2,
 *    ...
 *  }
 */
var trieUni = null;

/**
 * @private
 * Adding a string to the Trie t, with primary weight p and
 * secondary weight s.
 */
function addToTrie(t, p, s, str) {
    var current = t;
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i);
        if (current[c])
            current = current[c];
        else {
            current[c] = {};
            current = current[c];
        }
    }
    current.p = p;
    current.s = s;
}

/**
 * @private
 * Adds a serie of strings (in an Array) to the Trie. The strings
 * are added with:
 *   - primary weight is the Unicode char code of the first string
 *   - secondary weight is the 
 */
function addBatch(t, a) {
    var primary = a[0].charCodeAt(0);
    var arrayLength = a.length;
    for (var i = 0; i < arrayLength; i++) {
        addToTrie(t, primary, i, a[i]);
    }
}

/**
 * @private
 * Fills the tree. Data comes from https://github.com/eroux/tibetan-collation.
 */
function initUni() {
    trieUni = {};
    addBatch(trieUni, ['ཀ', 'ྈྐ', 'ཫ', 'དཀ', 'བཀ', 'རྐ', 'ལྐ', 'སྐ', 'བརྐ', 'བསྐ']);
    addBatch(trieUni, ['ཁ', 'ྈྑ', 'མཁ', 'འཁ']);
    addBatch(trieUni, ['ག', 'དགག', 'དགང', 'དགད', 'དགན', 'དགབ', 'དགཝ', 'དགའ', 'དགར', 'དགལ', 'དགས', 'དགི', 'དགུ', 'དགེ', 'དགོ', 'དགྭ', 'དགྱ', 'དགྲ', 'བགག', 'བགང', 'བགད', 'བགབ', 'བགམ', 'བགཾ', 'བགཝ', 'བགའ', 'བགར', 'བགལ', 'བགི', 'བགུ', 'བགེ', 'བགོ', 'བགྭ', 'བགྱ', 'བགྲ', 'བགླ', 'མགག', 'མགང', 'མགད', 'མགབ', 'མགའ', 'མགར', 'མགལ', 'མགི', 'མགུ', 'མགེ', 'མགོ', 'མགྭ', 'མགྱ', 'མགྲ', 'འགག', 'འགང', 'འགད', 'འགན', 'འགབ', 'འགམ', 'འགཾ', 'འགའ', 'འགར', 'འགལ', 'འགས', 'འགི', 'འགུ', 'འགེ', 'འགོ', 'འགྭ', 'འགྱ', 'འགྲ', 'རྒ', 'ལྒ', 'སྒ', 'བརྒ', 'བསྒ']);
    addBatch(trieUni, ['ང', 'ྂ', 'ྃ', 'དངག', 'དངང', 'དངད', 'དངན', 'དངབ', 'དངའ', 'དངར', 'དངལ', 'དངི', 'དངུ', 'དངེ', 'དངོ', 'མངག', 'མངང', 'མངད', 'མངན', 'མངབ', 'མངའ', 'མངར', 'མངལ', 'མངི', 'མངུ', 'མངེ', 'མངོ', 'རྔ', 'ལྔ', 'སྔ', 'བརྔ', 'བསྔ']);
    addBatch(trieUni, ['ཅ', 'གཅ', 'བཅ', 'ལྕ', 'བལྕ']);
    addBatch(trieUni, ['ཆ', 'མཆ', 'འཆ']);
    addBatch(trieUni, ['ཇ', 'མཇ', 'འཇ', 'རྗ', 'ལྗ', 'བརྗ']);
    addBatch(trieUni, ['ཉ', 'ྋྙ', 'གཉ', 'མཉ', 'རྙ', 'སྙ', 'བརྙ', 'བསྙ']);
    addBatch(trieUni, ['ཏ', 'ཊ', 'ཏྭ', 'ཏྲ', 'གཏ', 'བཏ', 'རྟ', 'ལྟ', 'སྟ', 'བརྟ', 'བལྟ', 'བསྟ']);
    addBatch(trieUni, ['ཐ', 'ཋ', 'མཐ', 'འཐ']);
    addBatch(trieUni, ['ད', 'ཌ', 'གདག', 'གདང', 'གདད', 'གདན', 'གདབ', 'གདམ', 'གདཾ', 'གདའ', 'གདར', 'གདལ', 'གདས', 'གདི', 'གདུ', 'གདེ', 'གདོ', 'གདྭ', 'བདག', 'བདང', 'བདད', 'བདབ', 'བདམ', 'བདཾ', 'བདའ', 'བདར', 'བདལ', 'བདས', 'བདི', 'བདུ', 'བདེ', 'བདོ', 'བདྭ', 'མདག', 'མདང', 'མདད', 'མདན', 'མདབ', 'མདའ', 'མདར', 'མདལ', 'མདས', 'མདི', 'མདུ', 'མདེ', 'མདོ', 'མདྭ', 'འདག', 'འདང', 'འདད', 'འདན', 'འདབ', 'འདམ', 'འདཾ', 'འདཝ', 'འདའ', 'འདར', 'འདལ', 'འདས', 'འདི', 'འདུ', 'འདེ', 'འདོ', 'འདྭ', 'འདྲ', 'རྡ', 'ལྡ', 'སྡ', 'བརྡ', 'བལྡ', 'བསྡ']);
    addBatch(trieUni, ['ན', 'ཎ', 'གནག', 'གནང', 'གནད', 'གནན', 'གནབ', 'གནམ', 'གནཾ', 'གནཝ', 'གནའ', 'གནར', 'གནལ', 'གནས', 'གནི', 'གནུ', 'གནེ', 'གནོ', 'གནྭ', 'མནག', 'མནང', 'མནད', 'མནན', 'མནབ', 'མནམ', 'མནཾ', 'མནའ', 'མནར', 'མནལ', 'མནས', 'མནི', 'མནུ', 'མནེ', 'མནོ', 'མནྭ', 'རྣ', 'སྣ', 'བརྣ', 'བསྣ']);
    addBatch(trieUni, ['པ', 'ྉྤ', 'དཔག', 'དཔང', 'དཔད', 'དཔབ', 'དཔའ', 'དཔར', 'དཔལ', 'དཔས', 'དཔི', 'དཔུ', 'དཔེ', 'དཔོ', 'དཔྱ', 'དཔྲ', 'ལྤ', 'སྤ']);
    addBatch(trieUni, ['ཕ', 'ྉྥ', 'འཕ']);
    addBatch(trieUni, ['བ', 'དབག', 'དབང', 'དབད', 'དབན', 'དབབ', 'དབའ', 'དབར', 'དབལ', 'དབས', 'དབི', 'དབུ', 'དབེ', 'དབོ', 'དབྱ', 'དབྲ', 'འབག', 'འབང', 'འབད', 'འབན', 'འབབ', 'འབམ', 'འབཾ', 'འབའ', 'འབར', 'འབལ', 'འབས', 'འབི', 'འབུ', 'འབེ', 'འབོ', 'འབྱ', 'འབྲ', 'རྦ', 'ལྦ', 'སྦ']);
    addBatch(trieUni, ['མ', 'ཾ', 'དམག', 'དམང', 'དམད', 'དམན', 'དམབ', 'དམཝ', 'དམའ', 'དམར', 'དམལ', 'དམས', 'དམི', 'དམུ', 'དམེ', 'དམོ', 'དམྭ', 'དམྱ', 'རྨ', 'སྨ']);
    addBatch(trieUni, ['ཙ', 'གཙ', 'བཙ', 'རྩ', 'སྩ', 'བརྩ', 'བསྩ']);
    addBatch(trieUni, ['ཚ', 'མཚ', 'འཚ']);
    addBatch(trieUni, ['ཛ', 'མཛ', 'འཛ', 'རྫ', 'བརྫ']);
    addBatch(trieUni, ['ཞ', 'གཞ', 'བཞ']);
    addBatch(trieUni, ['ཟ', 'གཟ', 'བཟ']);
    addBatch(trieUni, ['ཞ', 'གཞ', 'བཞ']);
    addBatch(trieUni, ['ཡ', 'གཡ']);
    addBatch(trieUni, ['ར', 'ཪ', 'ཬ', 'བརླ', 'བཪླ']);
    addBatch(trieUni, ['ཤ', 'ཥ', 'གཤ', 'བཤ']);
    addBatch(trieUni, ['ས', 'གསག', 'གསང', 'གསད', 'གསན', 'གསབ', 'གསའ', 'གསར', 'གསལ', 'གསས', 'གསི', 'གསུ', 'གསེ', 'གསོ', 'གསྭ', 'བསག', 'བསང', 'བསད', 'བསབ', 'བསམ', 'བསཾ', 'བསའ', 'བསར', 'བསལ', 'བསས', 'བསི', 'བསུ', 'བསེ', 'བསོ', 'བསྭ', 'བསྲ', 'བསླ']);
    addBatch(trieUni, ['ཧ', 'ལྷ']);
    addBatch(trieUni, ['ཱ', 'ི', 'ཱི', 'ྀ', 'ཱྀ', 'ུ', 'ཱུ', 'ེ', 'ཻ', 'ོ', 'ཽ']);
    addBatch(trieUni, ['།', '༎', '༏', '༐', '༑', '༔', '༴', '\u0F0B']);
    // we want 0F0B = OF0C
    let tshegprops = getLongestMatch('\u0F0B', 0, trie);
    addToTrie(trieUni, tshegprops.p, tshegprops.s, '\u0F0C');
}

/**
 * @private
 * Fills the tree. Data comes from https://github.com/eroux/tibetan-collation.
 */
function initEwts() {
    trieEwts = {};
    addBatch(trieEwts, ['k', '\\u0f88+k', '\\u0f6b', 'dk', 'bk', 'rk', 'lk', 'sk', 'brk', 'bsk']);
    addBatch(trieEwts, ['kh', '\\u0f88+kh', 'mkh', '\'kh']);
    addBatch(trieEwts, ['g', 'dg', 'bg', 'mg', '\'g', 'rg', 'lg', 'sg', 'brg', 'bsg']);
    addBatch(trieEwts, ['ng', '~M', '~M`', 'dng', 'mng', 'rng', 'lng', 'sng', 'brng', 'bsng']);
    addBatch(trieEwts, ['c', 'gc', 'bc', 'lc', 'lbc']);
    addBatch(trieEwts, ['ch', 'mch', '\'ch']);
    addBatch(trieEwts, ['j', 'mj', '\'j', 'rj', 'lj', 'brj']);
    addBatch(trieEwts, ['ny', '\\u0f8b\\u0f99', 'gny', 'mny', 'rny', 'sny', 'brny', 'bsny']);
    addBatch(trieEwts, ['t', 'T', 'tw', 'tr', 'gt', 'bt', 'rt', 'lt', 'st', 'brt', 'blt', 'bst']);
    addBatch(trieEwts, ['th', 'Th', 'mth', '\'th']);
    addBatch(trieEwts, ['d', 'D', 'gd', 'bd', 'md', '\'d', 'rd', 'ld', 'sd', 'brd', 'bld', 'bsd']);
    addBatch(trieEwts, ['n', 'N', 'gn', 'mn', 'rn', 'sn', 'brn', 'bsn']);
    addBatch(trieEwts, ['p', '\\u0f89+p', 'dp', 'lp', 'sp']);
    addBatch(trieEwts, ['ph', '\\u0f89+ph', '\'ph']);
    addBatch(trieEwts, ['b', 'db', '\'b', 'rb', 'lb', 'sb']);
    addBatch(trieEwts, ['m', 'M', 'dm', 'rm', 'sm']);
    addBatch(trieEwts, ['ts', 'gts', 'bts', 'rts', 'sts', 'brts', 'bsts']);
    addBatch(trieEwts, ['tsh', 'mtsh', '\'tsh']);
    addBatch(trieEwts, ['dz', 'mdz', '\'dz', 'rdz', 'brdz']);
    addBatch(trieEwts, ['sh', 'gsh', 'bsh']);
    addBatch(trieEwts, ['z', 'gz', 'bz']);
    addBatch(trieEwts, ['zh', 'gzh', 'bzh']);
    addBatch(trieEwts, ['y', 'g.y']);
    addBatch(trieEwts, ['r', 'R', '\\u0f6c', 'brl']);
    addBatch(trieEwts, ['sh', 'Sh', 'gsh', 'bsh']);
    addBatch(trieEwts, ['s', 'gs', 'bs']);
    addBatch(trieEwts, ['h', 'lh']);
    addBatch(trieEwts, ['a', 'A', 'i', 'I', '-i', '-I', 'u', 'U', 'e', 'ai', 'o', 'au']);
    addBatch(trieEwts, ['/', ';', '|', ':', '=', ' ']);
    // we want space = *
    let tshegprops = getLongestMatch(' ', 0, trieEwts);
    addToTrie(trieEwts, tshegprops.p, tshegprops.s, '*');
}

/**
 * @private
 * Gets the longest match in the trie for the characters of the string after offset off.
 * For instance if the Trie contains decorations for "a" and "abc",
 * calling getLongestMatch("abcd", 0) will return data corresponding to "abc".
 *
 * The third argument must be an initialized trie (variable trie or trieEwts).
 *
 * Returns an object corresponding to the match, with three values:
 *  - i: the number of characters of the match
 *  - p: the primary weight of the match
 *  - s: the secondary weight of the match
 *
 * If no character were analyzed (off > str.length for instance), returns {i: 0, p: 0, s: 0}.
 * If the caracters of the string do not match anything in the trieUni, returns:
 * {i: 1, p: pValue, s: 0} where pValue is the unicode code point of the first character analyzed.
 */
function getLongestMatch(str, off, t) {
    var strLength = str.length;
    var i;
    var current = t;
    var saveNbChars = 0;
    var savePrimary = 0;
    var saveSecondary = 0;
    for (i = off; i < strLength; i++) {
        let curChar = str.charAt(i);
        if (current[curChar]) {
            current = current[curChar];
            if (current.p) {
                saveNbChars = saveNbChars +1;
                savePrimary = current.p;
                saveSecondary = current.s;
            } else if (savePrimary === 0) {
                savePrimary = str.charCodeAt(i);
                saveNbChars = 1;
            }
        } else {
            if (saveNbChars === 0) {
                return {i: 1, p: str.charCodeAt(i), s: 0};
            }
            return {i: saveNbChars, p: savePrimary, s: saveSecondary};
        }
    }
    return {i: saveNbChars, p: savePrimary, s: saveSecondary};
}

/**
 * @private
 * Compares two strings encoded in Tibetan Unicode.
 * It can be used as argument of Array.compare(). 
 * The behavior is undefined if the arguments are not strings. Works
 * reasonably well with non-Tibetan strings.
 *
 * The third argument must be a Trie (trie or trieEwts).
 * 
 * @param {string} a - first string to be compared.
 * @param {string} b - second string to be compared.
 * @returns {number} - 0 if equivalent, 1 if a > b, -1 if a < b
 * @summary compares two strings.
 */
function compareInTrie(a, b, t) {
    var aOffset = 0;
    var bOffset = 0;
    var i = 0;
    while (true) {
        let alm = getLongestMatch(a, aOffset, t);
        let blm = getLongestMatch(b, bOffset, t);
        if (alm.i < 1 && blm.i < 1) return 0;
        if (alm.i < 1) return -1;
        if (blm.i < 1) return 1;
        if (alm.p < blm.p) return -1;
        if (alm.p > blm.p) return 1;
        if (alm.s < blm.s) return -1;
        if (alm.s > blm.s) return 1;
        aOffset = aOffset + alm.i;
        bOffset = bOffset + blm.i;
    }

    return 0;
}

/**
 * @private
 * Compares two strings encoded in Tibetan Unicode.
 * It can be used as argument of Array.compare(). 
 * The behavior is undefined if the arguments are not strings. Works
 * reasonably well with non-Tibetan strings.
 * 
 * @param {string} a - first string to be compared.
 * @param {string} b - second string to be compared.
 * @returns {number} - 0 if equivalent, 1 if a > b, -1 if a < b
 * @summary compares two strings.
 */
function compare(a, b) {
    if (trieUni == null) initUni();
    return compare(a, b, trieUni);
}

/**
 * Compares two strings encoded in EWTS.
 * It can be used as argument of Array.compare(). 
 * The behavior is undefined if the arguments are not strings. Works
 * reasonably well with non-Tibetan strings.
 * 
 * @param {string} a - first string to be compared.
 * @param {string} b - second string to be compared.
 * @returns {number} - 0 if equivalent, 1 if a > b, -1 if a < b
 * @summary compares two strings.
 */
function compareEwts(a, b) {
    if (trieEwts == null) initEwts();
    return compare(a, b, trieEwts);
}



export default { compare , compareEwts };
