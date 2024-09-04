import jk from '@src/index';

describe("MERGE", ()=>{
    it("merges two objects", ()=>{
        let obj1 = {
            a: 1,
            b: 2
        }

        const obj2 = {
            c: 3,
            d: 4,
        }

        obj1 = jk.obj.merge.std(obj1, obj2);

        expect(obj1).toEqual({
            a: 1,
            b: 2,
            c: 3,
            d: 4
        })
    }) 

    it("merges two objects by key", ()=>{
        let obj1 = {
            a: 1,
            b: 2
        }

        const obj2 = {
            c: 3,
            d: 4,
        }

        obj1 = jk.obj.merge.byUniqueKey(obj1, obj2, "key");
    })
});