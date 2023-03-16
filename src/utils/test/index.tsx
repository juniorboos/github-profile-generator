import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { InputsProvider } from "../../context/InputsProvider";
import { ThemeProvider } from "@primer/react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider colorMode="night">
      <InputsProvider>{children}</InputsProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
