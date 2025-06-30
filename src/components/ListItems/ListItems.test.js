import React from "react";
import { shallow } from "enzyme";
import ListItems from "./ListItems";

describe("ListItems", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListItems />);
    expect(wrapper).toMatchSnapshot();
  });
});
