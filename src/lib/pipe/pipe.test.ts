import jk from '@src/index';

describe("PIPE", ()=>{
    it("works", ()=>{
        const fn = (x: number)=>x+1
        const fn2 = (x: number)=>x*2
        const fn3 = (x: number)=>x.toString()

        const p = jk.pipe.std(fn)
            .f(fn2)
            .f(fn3)
            .build();

        expect(p(1)).toBe("4");
    })
})