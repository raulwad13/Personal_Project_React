import React from "react";
import { shallow } from "enzyme";
import GlobalMap from "./GlobalMap";

describe("GlobalMap", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GlobalMap />);
    expect(wrapper).toMatchSnapshot();
  });
});
