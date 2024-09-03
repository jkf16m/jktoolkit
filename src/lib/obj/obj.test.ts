import wh from '@src/index';

describe("OBJ", ()=>{
    it("deep cloning", ()=>{
        const obj = {
            a: 1,
            b: {
                c: 2
            }
        }

        const clone = wh.obj.fn.deepClone(obj);
        expect(clone).not.toBe(obj);
        expect(clone).toEqual(obj);
    })
    it("deep cloning array", ()=>{
        const arr = [1, 2, 3];
        const clone = wh.obj.fn.deepClone(arr);
        expect(clone).not.toBe(arr);
        expect(clone).toEqual(arr);
    })


    it("wrap an primitive and modify it", ()=>{
        const myNum = 8;

        const wrapped = wh.box(myNum);

        const procedure = (x: any)=>{
            x.v = x.v + 2;
        }

        procedure(wrapped);

        expect(wrapped.v).toBe(10);
    
    })

    it("unwraps a wrapped primitive", ()=>{
        const wrapped = {v: 10}

        const primitive = wh.unbox(wrapped);

        expect(primitive).toBe(10);
    })
})