import removeImports from "next-remove-imports";

const isProd = process.env.NODE_ENV === "production";

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
  async redirects() {
    return isProd
      ? [
          {
            source: "/",
            destination: "https://miltonj.dev/gh-profile-generator",
            permanent: true,
          },
        ]
      : [];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/gh-profile-generator/_next/:path+",
          destination: "/_next/:path+",
        },
      ],
    };
  },
};

export default removeImports({})(nextConfig);
