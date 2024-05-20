module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "5777",
      gas: 6721975,
      from: "0xEb6D46cA50a6228CB5e76611EFDAE8b1516a21c0",
    },
  },
  contracts_directory: "./testing/",
  contracts_build_directory: "./src/build/",
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100,
        },
      },
    },
  },
};
