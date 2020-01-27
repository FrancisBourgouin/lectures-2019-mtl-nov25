import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

// Building a rock paper scissor game

// 🗿 🪓 🌴

// Axe beats tree
// Tree beats Moai Statue
// Moai Statue beats the Axe

// 2 players
// each choose between the three possibilities
// hidden from each other

// compare, choose a winner based on result

// DEATHMATCH

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should show start screen at initial load", () => {
  const { getByText, getByRole } = render(<App />);

  expect(getByRole("heading")).toHaveTextContent(
    "Welcome to Moai vs Axe vs Tree"
  );
  expect(getByText("Welcome to Moai vs Axe vs Tree"));
  expect(getByText("Start game"));
});

it("should show player 1 the three options", () => {
  const { getByText, getByRole, queryByText } = render(<App />);

  fireEvent.click(getByText("Start game"));

  expect(queryByText("Start game")).toBeNull();
  expect(queryByText("🌴")).toBeTruthy();
  expect(queryByText("🪓")).toBeTruthy();
  expect(queryByText("🗿")).toBeTruthy();
});

// it("should show player 2 the three options, and hide player 1 option");

// it("should show the winner based on the options");

it("should be able to play a full game without crashing", () => {
  const { getByText, getByRole, queryByText } = render(<App />);

  fireEvent.click(getByText("Start game"));

  expect(queryByText("Start game")).toBeNull();
  expect(queryByText("🌴")).toBeTruthy();
  expect(queryByText("🪓")).toBeTruthy();
  expect(queryByText("🗿")).toBeTruthy();

  fireEvent.click(getByText("🗿"));

  expect(queryByText("🌴")).toBeTruthy();
  expect(queryByText("🪓")).toBeTruthy();
  expect(queryByText("🗿")).toBeTruthy();

  fireEvent.click(getByText("🗿"));

  expect(queryByText("Tied"));
});
