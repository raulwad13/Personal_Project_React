import React from "react";
import { shallow } from "enzyme";
import Components from "./components";

describe("Components", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Components />);
    expect(wrapper).toMatchSnapshot();
  });
});
