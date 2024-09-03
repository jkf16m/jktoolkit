import wh from '@src/index';

describe("WH", ()=>{
    it("boxing a primitive", ()=>{
        const myNum = 8;

        const boxed = wh.box(myNum);

        boxed.v = 80;

        expect(boxed.v).toBe(80);
        expect(myNum).toBe(8);
    })

    it("unboxing a primitive", ()=>{
        const boxed = wh.box(8);

        let myNum = wh.unbox(boxed);
        myNum = 20;

        expect(myNum).toBe(20);
        expect(boxed.v).toBe(8);
    });
})