import { ReactComponentElement } from "react";
import renderer from "react-test-renderer";
import axios from "axios";
import { jest } from "@jest/globals";

export const renderComponentTest = (description, component) => {
  test(description, () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

jest.mock("axios");

export const requestApiTest = (rescription, serviceObject) => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: "My First Album",
      },
      {
        userId: 1,
        id: 2,
        title: "Album: The Sequel",
      },
    ],
  });

  it(rescription, async () => {
    const response = await serviceObject;
    expect(response.status).toEqual(200);
  });
};
