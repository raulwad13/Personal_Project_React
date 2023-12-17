import React from "react";
import { shallow } from "enzyme";
import BiomaDetails from "./BiomaDetails";

describe("BiomaDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BiomaDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
