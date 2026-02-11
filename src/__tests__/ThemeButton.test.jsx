import { render, screen, fireEvent } from "@testing-library/react";
import ThemeButton from "../components/ThemeButton";
import { describe, it, expect, vi, beforeEach } from "vitest";
import * as reactRedux from "react-redux";

// 1. Tell Vitest to mock the entire react-redux module
vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

describe("ThemeButton Component", () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    // 2. Reset mocks before each test
    vi.clearAllMocks();
    reactRedux.useDispatch.mockReturnValue(mockDispatch);
  });

  it("should render in Light Mode", () => {
    // 3. Mock the selector to return "false" (light mode)
    reactRedux.useSelector.mockReturnValue(false);

    render(<ThemeButton />);

    // Assertion (adjust text to match your actual button)
    expect(screen.getByText(/dark/i)).toBeInTheDocument();
  });

  it("should render in Dark Mode", () => {
    // 4. Mock the selector to return "true" (dark mode)
    reactRedux.useSelector.mockReturnValue(true);

    render(<ThemeButton />);

    // Assertion (adjust text to match your actual button)
    expect(screen.getByText(/light/i)).toBeInTheDocument();
  });

  it("should dispatch an action when clicked", () => {
    reactRedux.useSelector.mockReturnValue(false);

    render(<ThemeButton />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    // 4. Verify that dispatch was called
    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should render a Button", () => {
    reactRedux.useSelector.mockReturnValue(false);

    render(<ThemeButton />);

    // Now your assertions will work
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
