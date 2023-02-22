export default {
  webpack: (config) => {
    config.resolve.fallback = {
      "styled-components": false,
      "rehype-highlight": false,
      unified: false,
    };
    return config;
  },
  experimental: {
    reactRoot: true,
    appDir: true,
    esmExternals: "loose",
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};
