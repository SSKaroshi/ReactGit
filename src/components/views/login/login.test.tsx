import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import LoginView from "./login";
import Dashboard from "./dashboard";
import { IntlProvider } from "react-intl";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import axios from "axios";
import LoginPage from "./loginpage";

const mockStore = configureMockStore();
const store = mockStore({
  login: {
    loading: false,
  },
});

jest.mock("axios");

describe("LoginView Component", () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  test(" 1 renders component properly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale="en" defaultLocale="en" messages={{}}>
            <LoginView />
          </IntlProvider>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Log In")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your email ID")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Password")
    ).toBeInTheDocument();
    expect(screen.getByText("Forgot password?")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });





  test("2 successfully logs in on form submission and redirect to /dashboard page", async () => {
   // const mockLoginAction = jest.fn();
    render(
      <Provider store={store}>
        <MemoryRouter  initialEntries={['/login']}>
          <IntlProvider locale="en" defaultLocale="en" messages={{}}>
          <Routes> {/* Wrap Routes around Route components */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />

             </Routes>
          </IntlProvider>
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("Enter your email ID");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
  const signInButton = screen.getByText("Sign In");


    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password123@" } });

});


  test("3 displays error message on failed login", async () => {
    const mockLoginAction = jest.fn(() => {
      throw new Error("Invalid credentials");
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale="en" defaultLocale="en" messages={{}}>
            <LoginView />
          </IntlProvider>
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("Enter your email ID");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const signInButton = screen.getByText("Sign In");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(signInButton);

  });

});
