import asyncData from "./async";
import {describe, test} from "@jest/globals";

describe('async function', () => {
    test('return data', async () => {
        expect(await asyncData('hello')).toBe('hello')
    })
    test('return data', () => {
        asyncData('hello').then(data => expect(data).toBe('hello'))
    })
    test('catch error', async () => {
        try {await asyncData()}
        catch (e) {expect(e.message).toBe('error')
        }
    })
    test('catch error', () => {
        asyncData().catch(data => expect(data).toBeInstanceOf(Error))
    })
})
