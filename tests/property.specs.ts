import * as chai from "chai";
import { CreateFluentProperty } from "..";
chai.should();

class TestType{
    public intValue = CreateFluentProperty(this,0);
}

describe("fluent property", ()=>{
    it("can set value", ()=>{

        let t = new TestType();
        t.intValue(2)
        .intValue(12);

        let v = t.intValue();
        v.should.equal(12);
    });
});