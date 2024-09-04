import wh from "@src/index";

describe("ARRAY", ()=>{
    it("deleting elements", ()=>{
        const arr = [1, 2, 3];
        const res = wh.array.filter(arr, (x)=>x!==2);
        expect(res).toEqual([2]);
    })
    it("transforming primitives correctly", ()=>{
        const arr = [1,2,3];
        const res = wh.array.box(arr);
        wh.array.map(res, (q)=>{
            q.v = q.v + 2
        });
        const transformed = wh.array.unbox(res);
        expect(transformed).toEqual([3,4,5]);
    })
    it("wraps an array of primitives", ()=>{
        const arr = [1,2,true];
        const wrapped = wh.array.box(arr);
        expect(wrapped).toEqual([{v: 1}, {v: 2}, {v: true}])
    })
    it("unwraps an array of primitives", ()=>{
        const arr = [{v: 1}, {v: 2}, {v: true}];
        const unwrapped = wh.array.unbox<number|boolean>(arr);
        expect(unwrapped).toEqual([1,2,true]);
    })
    it("merge two arrays", ()=>{
        const arr1 = [1,2,3]; // it becomes invalid type after merge
        const arr2 = [3,4,5];
        const modifiedArr1 = wh.array.merge(arr1, arr2);
        expect(modifiedArr1).toEqual([1,2,3,3,4,5]);
    })
})