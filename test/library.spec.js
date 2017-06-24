/* global describe, it, before */

import chai from 'chai';
import {compare} from '../lib/tibetan-sort-js.js';

chai.expect();

const expect = chai.expect;

let lib;

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
  describe('compring a to b', () => {
    it('should return -1', () => {
      expect(compare("a","b")).to.be.equal(-1);
    });
  });
});

// describe('Comparing Tibetan strings', () => {
//   describe('sorting', () => {
//     it('should return 0', () => {
//       expect(compare("a","ཀ་")).to.be.equal(1);
//     });
//   });
// });
