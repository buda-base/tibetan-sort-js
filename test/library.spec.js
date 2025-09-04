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
