it.todo("jest setup");
const calculator = require("./src/mapper/calculator");
describe('calculator testing',()=>{
    it("addition check",()=>{
        expect(calculator('addition',1,2,3)).toBe(6);
    })
    it("subtraction check",()=>{
        expect(calculator('subtraction',2,3)).toBe(-1);
    })
    it("multiplication check",()=>{
        expect(calculator('multiplication',1,2,3)).toBe(6);
    })
    it("division check",()=>{
        expect(calculator('division',1,2)).toBe(2);
    })
})
