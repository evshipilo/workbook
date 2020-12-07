import map from "./mock";

describe('mock should:', () => {
    let arr,
        mockFn
    beforeEach(
        () => {
            arr = [2, 3, 4]
            mockFn = jest.fn((it) => it * 2)
        }
    )
    test('return right with mock', () => {
            map(arr, mockFn)
        expect(mockFn.mock.calls.length).toBe(3)
        expect(mockFn.mock.results[0].value).toBe(4)
        }

    )
})
