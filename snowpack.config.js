/** @type {import('snowpack').SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  packageOptions: {
    installTypes: true,
    knownEntrypoints: [],
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@prefresh/snowpack',
  ],
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    },
  ],
  devOptions: { },
  alias: {
    'react': 'preact/compat',
    'react-dom': 'preact/compat'
  },
};
