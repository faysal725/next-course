const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {

    // this file is to configure what the setting should be for different development environemnt


    
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_connection: "mongodb://localhost:27017",
        mongodb_blog_database: "blog",
      },
    };
  }

  return {
    env: {
      mongodb_connection: "mongodb://localhost:27017",
      mongodb_blog_database: "blog",
    },
  };
};
