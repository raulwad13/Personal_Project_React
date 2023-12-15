import React from "react";
import { shallow } from "enzyme";
import Bioma from "./Bioma";

describe("Bioma", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Bioma />);
    expect(wrapper).toMatchSnapshot();
  });
});
