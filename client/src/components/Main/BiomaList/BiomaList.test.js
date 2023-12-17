import React from "react";
import { shallow } from "enzyme";
import BiomaList from "./BiomaList";

describe("BiomaList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BiomaList />);
    expect(wrapper).toMatchSnapshot();
  });
});
