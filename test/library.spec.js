/* global describe, it, before */

import chai from 'chai';
import {compare} from '../lib/tibetan-sort-js.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given two equal tibetan strings', () => {
  describe('sorting', () => {
    it('should return 0', () => {
      expect(compare("ཀ་","ཀ་")).to.be.equal(0);
    });
  });
});
