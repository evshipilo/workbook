import {sum, getNull} from "./sum";
import {describe, test} from "@jest/globals";

describe('sum function:', function () {
    test('return sum of two values',()=>{
        expect(sum(5,2)).toBe(7)
        expect(sum(4,5)).toEqual(9)
    })
    test('return value correctly comparing to over values',()=>{
        expect(sum(5,2)).toBeGreaterThan(0)
        expect(sum(4,5)).toBeGreaterThanOrEqual(9)
        expect(sum(4,5)).toBeLessThan(10)
        expect(sum(4,5)).toBeLessThanOrEqual(9)
    })
    test('return sum of two float values',()=>{
        expect(sum(0.1,0.2)).toBeCloseTo(0.3)

    })
});

describe('getNull function:', function () {
    test('return null or falsy',()=>{
        expect(getNull()).toBe(null)
        expect(getNull()).toBeNull()
        expect(getNull()).toBeFalsy()
        expect(getNull()).not.toBeTruthy()
        expect(getNull()).not.toBeUndefined()
        expect(getNull()).toBeDefined()
    })

});
