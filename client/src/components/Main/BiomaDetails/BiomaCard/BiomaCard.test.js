import React from "react";
import { shallow } from "enzyme";
import BiomaCard from "./BiomaCard";

describe("BiomaCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BiomaCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
