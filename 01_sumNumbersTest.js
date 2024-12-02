import { expect } from 'chai';
import { sum } from '../01.SumNumbers.js';

describe ("Sum function test", function(){
    it ("should return the sum of an array of numbers", function() {
        // arange
        let testData = [1, 2, 3]
        let result;

        //act 
        result = sum (testData);

        //assert
        expect(result).to.equal(6)

    })
})
