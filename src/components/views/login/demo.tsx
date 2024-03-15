import React from 'react'

const demo = () => {
  return (
    <div>
      
    </div>
  )
}

export default demo


/*

loginpage

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import LoginView from "./login";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
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

describe("LoginPage Component", () => {
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
            <LoginPage />
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


  test(" 2 input field interaction", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale="en" defaultLocale="en" messages={{}}>
          <LoginPage />
          </IntlProvider>
        </MemoryRouter>
      </Provider>
    );
  
    const emailInput = screen.getByPlaceholderText("Enter your email ID") as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText("Enter Password") as HTMLInputElement;
  
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password123@" } });
  
    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("Password123@");
  });


  test("3 form submission test", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale="en" defaultLocale="en" messages={{}}>
          <LoginPage />
          </IntlProvider>
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("Enter your email ID") as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText("Enter Password") as HTMLInputElement;
    const signInButton = screen.getByText("Sign In");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password123@" } });
    fireEvent.click(signInButton);


    // //Assert loading state changes
    // expect(screen.getByText("Loading...")).toBeInTheDocument();



    // // Simulate successful API response
    // await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));



    // // Mocking successful login response
    // (axios.post as jest.Mock).mockResolvedValueOnce({ data: "access_token" });



    // // Ensure redirection to dashboard
    // await waitFor(() => expect(screen.getByText("Dashboard")).toBeInTheDocument());

  });

});

*/

  // Add more test cases here...


  //   await waitFor(() => {
  //     expect(axios.post).toHaveBeenCalledWith("http://localhost:9898/auth/login", {
  //       username: "test@example.com",
  //       password: "password123",
  //     });
  //     expect(document.cookie).toContain("accessToken=accessToken123");
  //   });
  // });

///////////////////////////////////////////////////////////////////////////////////

/*  login
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import LoginView from "./login";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import axios from "axios";

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





  test("2 successfully logs in on form submission", async () => {
    const mockLoginAction = jest.fn();
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
   // fireEvent.click(signInButton);

    // await waitFor(() => {
    //   expect(mockLoginAction).toHaveBeenCalledWith({
    //     username: "test@example.com",
    //     password: "password123",
    //   });
    // });
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

//     await waitFor(() => {
//       expect(mockLoginAction).toHaveBeenCalled();
//       expect(screen.getByText("User not found or incorrect password.")).toBeInTheDocument();
//     });
  });

});

*/

  /*
  test("displays success message when password changed", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale="en" defaultLocale="en" messages={{}}>
            <LoginView />
          </IntlProvider>
        </MemoryRouter>
      </Provider>
    );

    const location = {
      state: { passwordFlag: true },
      pathname: "/login",
    };

    fireEvent.load(window);
    fireEvent.popstate(window, { state: location.state });

    await waitFor(() => {
      expect(
        screen.getByText("Password changed successfully!")
      ).toBeInTheDocument();
    });
  });
*/





///////////////////////////////////////////////////////////////////////////////////////


/*
create paaword
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import CreatePasswordPage from "./create-password";
//  "./create-password-card";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";  

const mockStore = configureMockStore();
const store = mockStore({
  login: { 
    loading: false,
  },
});

describe("CreatePasswordPage Component", () => {
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

  test("renders component properly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider locale="en" defaultLocale="en" messages={{}}>
            <CreatePasswordPage />
          </IntlProvider>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Create Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("New Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Re-enter New Password")
    ).toBeInTheDocument();
    expect(screen.getByText("Update")).toBeInTheDocument();
  });

//   test("successfully updates password on form submission", async () => {
//     const mockAxiosPost = jest.fn(() =>
//       Promise.resolve({ data: "Password changed successfully" })
//     );
//     jest.mock("axios", () => ({
//       post: mockAxiosPost,
//     }));

//     render(
//       <Provider store={store}>
//       <MemoryRouter>
//         <IntlProvider locale="en" defaultLocale="en" messages={{}}>
//           <CreatePasswordPage />
//         </IntlProvider>
//       </MemoryRouter>
//     </Provider>
//     );

//     const newPasswordInput = screen.getByPlaceholderText("New Password");
//     const confirmPasswordInput =
//       screen.getByPlaceholderText("Re-enter New Password");
//     const updateButton = screen.getByText("Update");

//     fireEvent.change(newPasswordInput, { target: { value: "Welcome@123" } });
//     fireEvent.change(confirmPasswordInput, {
//       target: { value: "Welcome@123" },
//     });
//     fireEvent.click(updateButton);

//     await waitFor(() => {
//       expect(mockAxiosPost).toHaveBeenCalledWith(
//         "http://localhost:9898/reset-password/reset?token=2cb2ecc2-99c8-4674-afe5-30e2a5799d84&newPassword=Welcome@123"
//       );
//     });

//     expect(
//       screen.getByText("password chandes successfully")
//     ).toBeInTheDocument();
//   });

//   test("handles error during password update", async () => {
//     const mockAxiosPost = jest.fn(() =>
//       Promise.reject(new Error("Password update failed"))
//     );
//     jest.mock("axios", () => ({
//       post: mockAxiosPost,
//     }));

//     render( <Provider store={store}>
//       <MemoryRouter>
//         <IntlProvider locale="en" defaultLocale="en" messages={{}}>
//           <CreatePasswordPage />
//         </IntlProvider>
//       </MemoryRouter>
//     </Provider>);

//     const newPasswordInput = screen.getByPlaceholderText("New Password");
//     const confirmPasswordInput =
//       screen.getByPlaceholderText("Re-enter New Password");
//     const updateButton = screen.getByText("Update");

//     fireEvent.change(newPasswordInput, { target: { value: "Welcome@123" } });
//     fireEvent.change(confirmPasswordInput, {
//       target: { value: "Welcome@123" },
//     });
//     fireEvent.click(updateButton);

//     await waitFor(() => {
//       expect(mockAxiosPost).toHaveBeenCalled();
//     });

//     expect(screen.getByText("Error to reset pass")).toBeInTheDocument();
//   });


});


*/