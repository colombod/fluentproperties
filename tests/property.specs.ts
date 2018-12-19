import * as chai from "chai";
import { CreateFluentProperty } from "../src/property";
chai.should();

class TestType {
    public intValue = CreateFluentProperty(this, { initialValue: 0 });
    public stringValue = CreateFluentProperty(this, { initialValue: "this text" });
}

describe("fluent property", () => {
    it("can set value", () => {

        let t = new TestType();
        t.intValue(2)

        let v = t.intValue();
        v.should.equal(2);
    });

    it("can set value as fluent api", () => {

        let t = new TestType();
        t.intValue(2)
            .intValue(12)
            .stringValue("newText")

        t.intValue().should.equal(12);
        t.stringValue().should.equal("newText");
    });
});