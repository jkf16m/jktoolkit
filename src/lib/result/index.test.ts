import jk from '@src/index';

describe("RESULT", ()=>{
    it("success", ()=>{
        const result = jk.result.success(10);

        if(result.fail) throw new Error("Should not fail");

        expect(result.value).toBe(10);
    });

    it("error", ()=>{
        const result = jk.result.error("Error, there's no number 10");

        if(result.ok) throw new Error("Should fail");

        expect(result.error).toBe("Error, there's no number 10");
    });

})