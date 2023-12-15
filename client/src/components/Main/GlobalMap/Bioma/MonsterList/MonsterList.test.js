import React from "react";
import { shallow } from "enzyme";
import MonsterList from "./MonsterList";

describe("MonsterList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MonsterList />);
    expect(wrapper).toMatchSnapshot();
  });
});
