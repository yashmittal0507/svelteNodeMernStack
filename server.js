const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
	res.send(`API is running`);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The app is running on PORT ${PORT}`));
