import { deepFreeze } from "./object"

describe('object unit test', () => {
    it('should be a immutable object', () => {
        const obj = deepFreeze({prop1: "value1", deep: {prop2: "value2", prop3: new Date()}});

        expect(() => (obj as any).prop1 = 'aaaa').toThrow(
            "Cannot assign to read only property 'prop1' of object '#<Object>'"
        );
    })
})