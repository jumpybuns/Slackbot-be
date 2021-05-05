const { App } = require("@slack/bolt");

// Initializes your app with your bot token and signing secret
const app = new App({
  token:
    "xoxp-2020354734098-2005581802407-2040523958260-5b982ff1eb3f5644acd62e9b0b71141b",
  signingSecret: "xoxb-2020354734098-2031285094117-U3bzZCDpqTtsB1T1XgseJAsq",
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
