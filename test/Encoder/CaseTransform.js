
import { describe } from 'mocha'

import EncoderTester from '../Helper/EncoderTester'
import CaseTransformEncoder from '../../src/Encoder/CaseTransform'

/** @test {CaseTransformEncoder} */
describe('CaseTransformEncoder', () => EncoderTester.test(CaseTransformEncoder, [
  {
    settings: { case: 'lower' },
    direction: 'encode',
    content: 'Hello π World',
    expectedResult: 'hello π world'
  },
  {
    settings: { case: 'upper' },
    direction: 'encode',
    content: 'Hello π World',
    expectedResult: 'HELLO π WORLD'
  },
  {
    settings: { case: 'capitalize' },
    direction: 'encode',
    content: 'HElLo πβwORLd',
    expectedResult: 'Hello πβWorld'
  },
  {
    settings: { case: 'alternating' },
    direction: 'encode',
    content: 'Hello π World',
    expectedResult: 'hElLo π wOrLd'
  },
  {
    settings: { case: 'inverse' },
    direction: 'encode',
    content: 'Hello π World',
    expectedResult: 'hELLO π wORLD'
  }
]))
