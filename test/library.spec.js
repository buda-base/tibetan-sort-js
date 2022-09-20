/* global describe, it, before */

import chai from 'chai';

require('../dist/main.js');
const sortjs = window["tibetan-sort-js"].default;

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
      expect(sortjs.compare("ལ","ཀ")).to.be.equal(1);
      expect(sortjs.compare("ལ","ཤ")).to.be.equal(-1);
    });
  });
});

describe('Comparing Ewts strings', () => {
  describe('sorting', () => {
    it('should return the correct order', () => {
      expect(sortjs.compareEwts("ka","o")).to.be.equal(-1);
      expect(sortjs.compareEwts("brka","ga")).to.be.equal(-1);
      expect(sortjs.compareEwts("g", "b")).to.be.equal(-1);
      expect(sortjs.compareEwts("la", "ki")).to.be.equal(1);
      expect(sortjs.compareEwts("le", "li")).to.be.equal(1);
      expect(sortjs.compareEwts("e", "i")).to.be.equal(1);
      expect(sortjs.compareEwts("spyod", "rje")).to.be.equal(1);
      expect(sortjs.compareEwts("don", "rje")).to.be.equal(1);
      expect(sortjs.compareEwts("kra", "gra")).to.be.equal(-1);
      expect(sortjs.compareEwts("brkya", "gra")).to.be.equal(-1);
      expect(sortjs.compareEwts("brkya", "brka")).to.be.equal(1);
      expect(sortjs.compareEwts("ga brka","ga ga")).to.be.equal(-1);
      expect(sortjs.compareEwts("dag","dgar")).to.be.equal(1);
    });
  });
});
