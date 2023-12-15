import React from "react";
import { shallow } from "enzyme";
import BiomaMap from "./BiomaMap";

describe("BiomaMap", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BiomaMap />);
    expect(wrapper).toMatchSnapshot();
  });
});
