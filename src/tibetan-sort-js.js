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
var trie = null;

/**
 * @private
 * Adding a string to the Trie, with primary weight p and
 * secondary weight s.
 */
function addToTrie(p, s, str) {
    var current = trie;
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
function addBatch(a) {
    var primary = a[0].charCodeAt(0);
    var arrayLength = a.length;
    for (var i = 0; i < arrayLength; i++) {
        addToTrie(primary, i, a[i]);
    }
}

/**
 * @private
 * Fills the tree. Data comes from https://github.com/eroux/tibetan-collation.
 */
function init() {
    trie = {};
    addBatch(['ཀ', 'ྈྐ', 'ཫ', 'དཀ', 'བཀ', 'རྐ', 'ལྐ', 'སྐ', 'བརྐ', 'བསྐ']);
    addBatch(['ཁ', 'ྈྑ', 'མཁ', 'འཁ']);
    addBatch(['ག', 'དགག', 'དགང', 'དགད', 'དགན', 'དགབ', 'དགཝ', 'དགའ', 'དགར', 'དགལ', 'དགས', 'དགི', 'དགུ', 'དགེ', 'དགོ', 'དགྭ', 'དགྱ', 'དགྲ', 'བགག', 'བགང', 'བགད', 'བགབ', 'བགམ', 'བགཾ', 'བགཝ', 'བགའ', 'བགར', 'བགལ', 'བགི', 'བགུ', 'བགེ', 'བགོ', 'བགྭ', 'བགྱ', 'བགྲ', 'བགླ', 'མགག', 'མགང', 'མགད', 'མགབ', 'མགའ', 'མགར', 'མགལ', 'མགི', 'མགུ', 'མགེ', 'མགོ', 'མགྭ', 'མགྱ', 'མགྲ', 'འགག', 'འགང', 'འགད', 'འགན', 'འགབ', 'འགམ', 'འགཾ', 'འགའ', 'འགར', 'འགལ', 'འགས', 'འགི', 'འགུ', 'འགེ', 'འགོ', 'འགྭ', 'འགྱ', 'འགྲ', 'རྒ', 'ལྒ', 'སྒ', 'བརྒ', 'བསྒ']);
    addBatch(['ང', 'ྂ', 'ྃ', 'དངག', 'དངང', 'དངད', 'དངན', 'དངབ', 'དངའ', 'དངར', 'དངལ', 'དངི', 'དངུ', 'དངེ', 'དངོ', 'མངག', 'མངང', 'མངད', 'མངན', 'མངབ', 'མངའ', 'མངར', 'མངལ', 'མངི', 'མངུ', 'མངེ', 'མངོ', 'རྔ', 'ལྔ', 'སྔ', 'བརྔ', 'བསྔ']);
    addBatch(['ཅ', 'གཅ', 'བཅ', 'ལྕ', 'བལྕ']);
    addBatch(['ཆ', 'མཆ', 'འཆ']);
    addBatch(['ཇ', 'མཇ', 'འཇ', 'རྗ', 'ལྗ', 'བརྗ']);
    addBatch(['ཉ', 'ྋྙ', 'གཉ', 'མཉ', 'རྙ=ཪྙ', 'སྙ', 'བརྙ=བཪྙ', 'བསྙ']);
    addBatch(['ཏ', 'ཊ', 'ཏྭ', 'ཏྲ', 'གཏ', 'བཏ', 'རྟ', 'ལྟ', 'སྟ', 'བརྟ', 'བལྟ', 'བསྟ']);
    addBatch(['ཐ', 'ཋ', 'མཐ', 'འཐ']);
    addBatch(['ད', 'ཌ', 'གདག', 'གདང', 'གདད', 'གདན', 'གདབ', 'གདམ', 'གདཾ', 'གདའ', 'གདར', 'གདལ', 'གདས', 'གདི', 'གདུ', 'གདེ', 'གདོ', 'གདྭ', 'བདག', 'བདང', 'བདད', 'བདབ', 'བདམ', 'བདཾ', 'བདའ', 'བདར', 'བདལ', 'བདས', 'བདི', 'བདུ', 'བདེ', 'བདོ', 'བདྭ', 'མདག', 'མདང', 'མདད', 'མདན', 'མདབ', 'མདའ', 'མདར', 'མདལ', 'མདས', 'མདི', 'མདུ', 'མདེ', 'མདོ', 'མདྭ', 'འདག', 'འདང', 'འདད', 'འདན', 'འདབ', 'འདམ', 'འདཾ', 'འདཝ', 'འདའ', 'འདར', 'འདལ', 'འདས', 'འདི', 'འདུ', 'འདེ', 'འདོ', 'འདྭ', 'འདྲ', 'རྡ', 'ལྡ', 'སྡ', 'བརྡ', 'བལྡ', 'བསྡ']);
    addBatch(['ན', 'ཎ', 'གནག', 'གནང', 'གནད', 'གནན', 'གནབ', 'གནམ', 'གནཾ', 'གནཝ', 'གནའ', 'གནར', 'གནལ', 'གནས', 'གནི', 'གནུ', 'གནེ', 'གནོ', 'གནྭ', 'མནག', 'མནང', 'མནད', 'མནན', 'མནབ', 'མནམ', 'མནཾ', 'མནའ', 'མནར', 'མནལ', 'མནས', 'མནི', 'མནུ', 'མནེ', 'མནོ', 'མནྭ', 'རྣ', 'སྣ', 'བརྣ', 'བསྣ']);
    addBatch(['པ', 'ྉྤ', 'དཔག', 'དཔང', 'དཔད', 'དཔབ', 'དཔའ', 'དཔར', 'དཔལ', 'དཔས', 'དཔི', 'དཔུ', 'དཔེ', 'དཔོ', 'དཔྱ', 'དཔྲ', 'ལྤ', 'སྤ']);
    addBatch(['ཕ', 'ྉྥ', 'འཕ']);
    addBatch(['བ', 'དབག', 'དབང', 'དབད', 'དབན', 'དབབ', 'དབའ', 'དབར', 'དབལ', 'དབས', 'དབི', 'དབུ', 'དབེ', 'དབོ', 'དབྱ', 'དབྲ', 'འབག', 'འབང', 'འབད', 'འབན', 'འབབ', 'འབམ', 'འབཾ', 'འབའ', 'འབར', 'འབལ', 'འབས', 'འབི', 'འབུ', 'འབེ', 'འབོ', 'འབྱ', 'འབྲ', 'རྦ', 'ལྦ', 'སྦ']);
    addBatch(['མ', 'ཾ', 'དམག', 'དམང', 'དམད', 'དམན', 'དམབ', 'དམཝ', 'དམའ', 'དམར', 'དམལ', 'དམས', 'དམི', 'དམུ', 'དམེ', 'དམོ', 'དམྭ', 'དམྱ', 'རྨ', 'སྨ']);
    addBatch(['ཙ', 'གཙ', 'བཙ', 'རྩ', 'སྩ', 'བརྩ', 'བསྩ']);
    addBatch(['ཚ', 'མཚ', 'འཚ']);
    addBatch(['ཛ', 'མཛ', 'འཛ', 'རྫ', 'བརྫ']);
    addBatch(['ཞ', 'གཞ', 'བཞ']);
    addBatch(['ཟ', 'གཟ', 'བཟ']);
    addBatch(['ཞ', 'གཞ', 'བཞ']);
    addBatch(['ཡ', 'གཡ']);
    addBatch(['ར', 'ཪ', 'ཬ', 'བརླ', 'བཪླ']);
    addBatch(['ཤ', 'ཥ', 'གཤ', 'བཤ']);
    addBatch(['ས', 'གསག', 'གསང', 'གསད', 'གསན', 'གསབ', 'གསའ', 'གསར', 'གསལ', 'གསས', 'གསི', 'གསུ', 'གསེ', 'གསོ', 'གསྭ', 'བསག', 'བསང', 'བསད', 'བསབ', 'བསམ', 'བསཾ', 'བསའ', 'བསར', 'བསལ', 'བསས', 'བསི', 'བསུ', 'བསེ', 'བསོ', 'བསྭ', 'བསྲ', 'བསླ']);
    addBatch(['ཧ', 'ལྷ']);
    addBatch(['ཱ', 'ི', 'ཱི', 'ྀ', 'ཱྀ', 'ུ', 'ཱུ', 'ེ', 'ཻ', 'ོ', 'ཽ']);
    addBatch(['།', '༎', '༏', '༐', '༑', '༔', '༴', '\u0F0B']);
    // we want 0F0B = OF0C
    let tshegprops = getLongestMatch('\u0F0B', 0);
    addToTrie(tshegprops.p, tshegprops.s, '\u0F0C');
}

/**
 * @private
 * Gets the longest match in the trie for the characters of the string after offset off.
 * For instance if the Trie contains decorations for "a" and "abc",
 * calling getLongestMatch("abcd", 0) will return data corresponding to "abc".
 *
 * Returns an object corresponding to the match, with three values:
 *  - i: the number of characters of the match
 *  - p: the primary weight of the match
 *  - s: the secondary weight of the match
 *
 * If no character were analyzed (off > str.length for instance), returns {i: 0, p: 0, s: 0}.
 * If the caracters of the string do not match anything in the Trie, returns:
 * {i: 1, p: pValue, s: 0} where pValue is the unicode code point of the first character analyzed.
 */
function getLongestMatch(str, off) {
    var strLength = str.length;
    var i;
    var current = trie;
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
 * Compares two strings, can be used as argument of Array.compare(). 
 * The behavior is undefined if the arguments are not strings. Works
 * reasonably well with non-Tibetan strings.
 * 
 * @param {string} a - first string to be compared.
 * @param {string} b - second string to be compared.
 * @returns {number} - 0 if equivalent, 1 if a > b, -1 if a < b
 * @summary compares two strings.
 */
function compare(a, b) {
    if (trie == null) init();
    var aOffset = 0;
    var bOffset = 0;
    var i = 0;
    while (true) {
        let alm = getLongestMatch(a, aOffset);
        let blm = getLongestMatch(b, bOffset);
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

export { compare };
