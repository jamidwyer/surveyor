const app = require("./app.js");
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`listening on port: ${port}`));
