/* global describe, it, before */

// test/library.spec.js
import { expect } from 'chai';
import { compare, compareEwts } from '../src/index.js';

describe('Given two equal strings', () => {
  describe('comparing', () => {
    it('should return 0', () => {
      expect(compare("ཀ་","ཀ་")).to.be.equal(0);
      expect(compare("abc","abc")).to.be.equal(0);
      expect(compare("ཀ་a","ཀ་a")).to.be.equal(0);
    });
  });
});

describe('Comparing non-tibetan and Tibetan', () => {
  describe('compring a to ཀ', () => {
    it('should return -1', () => {
      expect(compare("a","ཀ་")).to.be.equal(-1);
    });
  });
});

describe('Comparing Tibetan Unicode strings', () => {
  describe('sorting', () => {
    it('should return the correct order', () => {
      expect(compare("བརྐ","ག")).to.be.equal(-1);
      expect(compare("ག", "བ",)).to.be.equal(-1);
      expect(compare("ག་བརྐ","ག་ག")).to.be.equal(-1);
      expect(compare("ལ","ཀ")).to.be.equal(1);
      expect(compare("ལ","ཤ")).to.be.equal(-1);
      expect(compare("ཁ་","ཁྱ་")).to.be.equal(-1);
      expect(compare("ཁ","ཁྱ")).to.be.equal(-1);
      expect(compare("གད་","ག་")).to.be.equal(1);
      expect(compare("ཐར་","ཐུགས་")).to.be.equal(-1);
      // vowels before subscripts (https://github.com/buda-base/tibetan-sort-js/issues/33)
      expect(compare("ཀ་བཀོལ་མ་", "ཀ་བཀྱག་")).to.be.equal(-1);
      expect(compare("ཕི་པ་", "ཕྱི་རོ་")).to.be.equal(-1);
      expect(compare("ཀོ་སྐོ", "ཀོ་སྐྱི")).to.be.equal(-1);
      expect(compare("ཀོ་ཁུག", "ཀོ་ཁྲོལ")).to.be.equal(-1);
      expect(compare("ཀོ་ཕུབ", "ཀོ་ཕྱར")).to.be.equal(-1);
    });
  });
});

describe('Comparing Ewts strings', () => {
  describe('sorting', () => {
    it('should return the correct order', () => {
      expect(compareEwts("ka","o")).to.be.equal(-1);
      expect(compareEwts("brka","ga")).to.be.equal(-1);
      expect(compareEwts("g", "b")).to.be.equal(-1);
      expect(compareEwts("la", "ki")).to.be.equal(1);
      expect(compareEwts("le", "li")).to.be.equal(1);
      expect(compareEwts("e", "i")).to.be.equal(1);
      expect(compareEwts("spyod", "rje")).to.be.equal(1);
      expect(compareEwts("don", "rje")).to.be.equal(1);
      expect(compareEwts("kra", "gra")).to.be.equal(-1);
      expect(compareEwts("brkya", "gra")).to.be.equal(-1);
      expect(compareEwts("brkya", "brka")).to.be.equal(1);
      expect(compareEwts("ga brka","ga ga")).to.be.equal(-1);
      expect(compareEwts("dag","dgar")).to.be.equal(1);
      expect(compareEwts("kha ","khra ")).to.be.equal(-1);
      expect(compareEwts("kha","khra")).to.be.equal(-1);
      expect(compareEwts("gad","ga")).to.be.equal(1);
      expect(compareEwts("thar","thugs")).to.be.equal(-1);
    });
  });
});

describe('Unicode and EWTS sort consistently', () => {
  describe('vowel and suffix pairs', () => {
    it('should return the same sign for equivalent Unicode and EWTS strings', () => {
      // https://github.com/buda-base/tibetan-sort-js/issues/28
      expect(compare("ཐ","ཐུ")).to.be.equal(compareEwts("tha","thu"));
      expect(compare("ཐར","ཐུགས")).to.be.equal(compareEwts("thar","thugs"));
      expect(compare("ཕི","ཕྱི")).to.be.equal(compareEwts("phi","phyi"));
      expect(compare("ཀོ","ཀྱ")).to.be.equal(compareEwts("ko","kya"));
      expect(compare("བཀོལ","བཀྱག")).to.be.equal(compareEwts("bkol","bkyag"));
    });
  });

  describe('relative order of ka / kar / ki / kya', () => {
    it('should match in both encodings', () => {
      const uni = ["ཀ", "ཀར", "ཀི", "ཀྱ"];
      const ewts = ["ka", "kar", "ki", "kya"];
      const uniSorted = uni.slice().sort(compare).map((s) => ewts[uni.indexOf(s)]);
      const ewtsSorted = ewts.slice().sort(compareEwts);
      expect(uniSorted).to.deep.equal(ewtsSorted);
      expect(ewtsSorted).to.deep.equal(["ka", "kar", "ki", "kya"]);
    });
  });
});
