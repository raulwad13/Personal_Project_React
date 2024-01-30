import React from "react";
import { shallow } from "enzyme";
import MapOverlayImage from "./MapOverlayImage";

describe("MapOverlayImage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MapOverlayImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
