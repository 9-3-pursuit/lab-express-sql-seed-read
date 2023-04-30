// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 4321;

// LISTEN
app.listen(PORT, () => {
  console.log(`Right by your side, on port ${PORT}`);
});
