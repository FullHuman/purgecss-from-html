import purgehtml from "./../index.js"
import { TEST_1_CONTENT, TEST_1_TAG, TEST_1_CLASS, TEST_1_ID } from "./data"
import { TEST_2_CONTENT, TEST_2_TAG, TEST_2_CLASS, TEST_2_ID } from "./data"

describe("purgehtml", () => {
    it("finds tag selectors", () => {
        const received = purgehtml.extract(TEST_1_CONTENT)
        for (let item of TEST_1_TAG) {
            expect(received.includes(item)).toBe(true)
        }
    })

    it("finds classes selectors", () => {
        const received = purgehtml.extract(TEST_1_CONTENT)
        for (let item of TEST_1_CLASS) {
            expect(received.includes(item)).toBe(true)
        }
    })

    it("finds id selectors", () => {
        const received = purgehtml.extract(TEST_1_CONTENT)
        for (let item of TEST_1_ID) {
            expect(received.includes(item)).toBe(true)
        }
    })

    it("finds all selectors", () => {
        const received = purgehtml.extract(TEST_1_CONTENT)
        const selectors = [...TEST_1_TAG, ...TEST_1_CLASS, ...TEST_1_ID]
        for (let item of selectors) {
            expect(received.includes(item)).toBe(true)
        }
    })

    describe("from a template tag", () => {
        it("finds tag selectors", () => {
            const received = purgehtml.extract(TEST_2_CONTENT)
            for (let item of TEST_2_TAG) {
                expect(received.includes(item)).toBe(true)
            }
        })

        it("finds classes selectors", () => {
            const received = purgehtml.extract(TEST_2_CONTENT)
            for (let item of TEST_2_CLASS) {
                expect(received.includes(item)).toBe(true)
            }
        })

        it("finds id selectors", () => {
            const received = purgehtml.extract(TEST_2_CONTENT)
            for (let item of TEST_2_ID) {
                expect(received.includes(item)).toBe(true)
            }
        })

        it("finds all selectors", () => {
            const received = purgehtml.extract(TEST_2_CONTENT)
            const selectors = [...TEST_2_TAG, ...TEST_2_CLASS, ...TEST_2_ID]
            for (let item of selectors) {
                expect(received.includes(item)).toBe(true)
            }
        })
    })
})
