import React from "react";
import logo from '../../images/image2.jpeg'

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

export const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <img src={logo} />
  </div>
);

