import removeImports from "next-remove-imports";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/gh-profile-generator",
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default removeImports({})(nextConfig);
