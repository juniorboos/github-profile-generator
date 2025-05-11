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
  basePath: "/gh-profile-generator",
  async redirects() {
    return [
      {
        source: "/",
        basePath: false,
        destination: "https://miltonj.dev/gh-profile-generator",
        permanent: true,
      },
    ];
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
