// @flow

var trie: any = null;

function addToTrie(p: any, s: number, str: string) {
    var current = trie;
    for (let i: number = 0; i < str.length; i++) {
        let c = str[i];
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

function addBatch(a: Array<string>) {
    var primary: string = a[0];
    var arrayLength: number = a.length;
    for (var i: number = 0; i < arrayLength; i++) {
        addToTrie(primary, i, a[i]);
    }
}

function init() {
    trie = {};
    addBatch(['ཀ', 'ྈྐ', 'ཫ', 'དཀ', 'བཀ', 'རྐ', 'ལྐ', 'སྐ', 'བརྐ', 'བསྐ']);
}

function getLongestMatch(str: string, off: number): any {
    var strLength: number = str.length;
    var i: number;
    var current = trie;
    var saveNbChars: number = 0;
    var savePrimary: number = 0;
    var saveSecondary: number = 0;
    for (i = off; i < strLength; i++) {
        let curChar = str[i];
        if (current[curChar]) {
            current = current[curChar];
            if (current.p) {
                saveNbChars = saveNbChars +1;
                savePrimary = current.p;
                saveSecondary = current.s;
            }
        } else {
            if (saveNbChars === 0) {
                return {i: 1, p: curChar, s: 0};
            }
            return {i: saveNbChars, p: savePrimary, s: saveSecondary};
        }
    }
    return {i: 0, p: 0, s: 0};
}

// a < b -> -1
// a > b -> 1

function compare(a: string, b: string): number {
    if (trie == null) init();
    var aOffset: number = 0;
    var bOffset: number = 0;
    var i: number = 0;
    while (true) {
        let alm = getLongestMatch(a, aOffset);
        let blm = getLongestMatch(a, aOffset);
        if (alm.i === 0 && blm.i === 0) return 0;
        if (alm.i === 0) return -1;
        if (blm.i === 0) return 1;
        if (alm.p < blm.p) return -1;
        if (alm.p > blm.p) return 1;
        if (alm.s < blm.s) return -1;
        if (alm.s > blm.s) return 1;
        aOffset = aOffset + alm.i;
        bOffset = bOffset + blm.i;
        console.log("iteration "+i);
        if (i > 50) return 0;
    }

	return 0;
}

export { compare };
