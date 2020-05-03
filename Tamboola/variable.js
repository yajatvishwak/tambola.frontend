import Constants from "expo-constants";

const ENV = {
  dev: {
    exp: {
      apiUrl: "http://192.168.43.1:3000",
    },
    ws: {
      apiUrl: "ws://192.168.43.1:2222",
    },
  },
  prod: {
    exp: {
      apiUrl: "http://172.105.55.249:3000",
    },

    ws: {
      apiUrl: "ws://172.105.55.249:2222",
    },
  },
};

function getEnvVars(env = "") {
  if (env === null || env === undefined || env === "") return ENV.dev;
  if (env.indexOf("dev") !== -1) return ENV.dev;
  if (env.indexOf("prod") !== -1) return ENV.prod;
}

export default getEnvVars(Constants.manifest.releaseChannel);
