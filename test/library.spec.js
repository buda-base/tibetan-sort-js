/* global describe, it, before */

import chai from 'chai';
import sortjs from '../dist/main.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given two equal strings', () => {
  describe('comparing', () => {
    it('should return 0', () => {
      expect(sortjs.compare("ཀ་","ཀ་")).to.be.equal(0);
      expect(sortjs.compare("abc","abc")).to.be.equal(0);
      expect(sortjs.compare("ཀ་a","ཀ་a")).to.be.equal(0);
    });
  });
});

describe('Comparing non-tibetan and Tibetan', () => {
  describe('compring a to ཀ', () => {
    it('should return -1', () => {
      expect(sortjs.compare("a","ཀ་")).to.be.equal(-1);
    });
  });
});

describe('Comparing Tibetan Unicode strings', () => {
  describe('sorting', () => {
    it('should return the correct order', () => {
      expect(sortjs.compare("བརྐ","ག")).to.be.equal(-1);
      expect(sortjs.compare("ག", "བ",)).to.be.equal(-1);
      expect(sortjs.compare("ག་བརྐ","ག་ག")).to.be.equal(-1);
    });
  });
});

describe('Comparing Ewts strings', () => {
  describe('sorting', () => {
    it('should return the correct order', () => {
      expect(sortjs.compareEwts("brka","ga")).to.be.equal(-1);
      expect(sortjs.compareEwts("g", "b")).to.be.equal(-1);
      expect(sortjs.compareEwts("kra", "gra")).to.be.equal(-1);
      expect(sortjs.compareEwts("brkya", "gra")).to.be.equal(-1);
      expect(sortjs.compareEwts("ga brka","ga ga")).to.be.equal(-1);
      expect(sortjs.compareEwts("dag","dgar")).to.be.equal(1);
    });
  });
});