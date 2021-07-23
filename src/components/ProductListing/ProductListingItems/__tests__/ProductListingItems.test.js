import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import ProductListingItems from "../ProductListingItems";

describe("ProductListingItems", () => {
  const defaultProps = {
    productItems: [
      {
        id: "1",
        deviceName: "test device 1",
        price: "312",
      },
      {
        id: "2",
        deviceName: "test device 2",
        price: "212",
      },
    ],
  };
  it("should render correct number of items", () => {
    render(
      <BrowserRouter>
        <ProductListingItems {...defaultProps} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("productItemsId").children.length).toBe(2);
  });
  it("should render No items found if item list is empty", () => {
    render(<ProductListingItems {...{ ...defaultProps, productItems: [] }} />);
    expect(screen.getByText(/No/i).textContent).toBe("No item found");
  });
});
