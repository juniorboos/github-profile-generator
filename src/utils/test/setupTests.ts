import "@testing-library/jest-dom/extend-expect";
import "node-fetch";
import "text-encoding";

global.CSS = {
  escape: jest.fn(),
  supports: jest.fn().mockImplementation(() => {
    return false;
  }),
};

export {};
