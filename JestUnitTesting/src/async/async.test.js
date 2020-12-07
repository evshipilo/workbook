import asyncData from "./async";
import {describe, test} from "@jest/globals";

describe('async function', () => {
    test('return data', async () => {
        expect(await asyncData('hello')).toBe('hello')
    })

    test('return data', () => {
        return asyncData('hello').then(data => expect(data).toBe('hello'))
    })
    test('return data', () => {
        return expect(asyncData('hello')).resolves.toBe('hello')
    })
    test('return data', async () => {
        await expect(asyncData('hello')).resolves.toBe('hello')
    })
    test('catch error', async () => {
        try {
            await asyncData()
        } catch (e) {
            expect(e.message).toBe('error')
        }
    })
    test('catch error', () => {
        return asyncData().catch(data => expect(data).toBeInstanceOf(Error))
    })
    test('return data', () => {
        return expect(asyncData()).rejects.toThrow('error')
    })
    test('return data', async () => {
        await expect(asyncData()).rejects.toThrow('error')
    })
})
