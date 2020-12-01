import Lodash from "./sync"
import {beforeEach, describe, test} from "@jest/globals";

const _ = new Lodash()

describe('function compact', () => {
    let array
    let resultArray

    beforeEach(() => {
        array = [2, true, '', ' ', undefined, false, 0, null]
        resultArray = [2, true, ' ']
    })

    test('defined', () => {
        expect(_.compact).toBeDefined()
    })

    test('return array with no falsy elements', () => {
        expect(_.compact(array)).toEqual(resultArray)
    })

    test('contain', () => {
        expect(_.compact(array)).toContain(' ')
        expect(_.compact(array)).toContain(2)
        expect(_.compact(array)).toContain(true)
    })
})

describe('groupBy function', () => {
    test('define', () => {
        expect(_.groupBy).toBeDefined()
    })
    test('return object', () => {
        expect(_.groupBy([], Math.floor)).toBeInstanceOf(Object)
        expect(_.groupBy([], Math.floor)).not.toBeInstanceOf(Array)
    })
    test('return right object twith function parametr', () => {
        let array = [1.2, 1.3, 4.2, 5.6, 4.6]
        let result = {
            '1': [1.2, 1.3],
            '4': [4.2, 4.6],
            '5': [5.6]
        }
        expect(_.groupBy(array, Math.floor)['1']).toEqual([1.2, 1.3])
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })
    test('return right object twith string parametr', () => {
        let array = ['111','4444','6','666']
        let result = {
            '3': ['111', '666'],
            '4': ['4444'],
            '1': ['6']
        }
        expect(_.groupBy(array, 'length')['1']).toEqual(['6'])
        expect(_.groupBy(array, 'length')).toEqual(result)
    })
})
