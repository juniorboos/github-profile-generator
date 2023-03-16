import "@testing-library/jest-dom/extend-expect";

global.CSS = {
  escape: jest.fn(),
  supports: jest.fn().mockImplementation(() => {
    return false;
  }),
};

export {};
