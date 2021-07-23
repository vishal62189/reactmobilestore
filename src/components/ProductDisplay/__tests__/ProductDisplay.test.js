import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDisplay from "../ProductDisplay";

describe("ProductDisplay", () => {
  const defaultProps = {
    productItem: {
      deviceName: "test device",
      modelNumber: "test model",
      price: "212",
      colors: "Silver",
      screenSize: "5 inch",
      ram: "8 GB",
      storage: "128 GB",
      operatingSystem: "Android",
    },
  };
  it("should render correct device name", () => {
    render(<ProductDisplay {...defaultProps} />);
    expect(screen.getByTestId("deviceNameId").textContent).toBe("test device");
  });
  it("should render correct price", () => {
    render(<ProductDisplay {...defaultProps} />);
    expect(screen.getByTestId("priceId").textContent).toBe("$ 212");
  });
});
