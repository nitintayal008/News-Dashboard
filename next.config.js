const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Alias configuration
    config.resolve.alias['@'] = path.resolve(__dirname);

    // Fallback for 'net' module (only for client-side)
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
      };
    }

    return config;
  },
};
