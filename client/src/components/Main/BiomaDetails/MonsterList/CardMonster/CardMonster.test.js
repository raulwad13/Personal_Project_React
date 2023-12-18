import React from "react";
import { shallow } from "enzyme";
import CardMonster from "./CardMonster";

describe("CardMonster", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardMonster />);
    expect(wrapper).toMatchSnapshot();
  });
});
