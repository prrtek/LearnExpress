import express from "express";
import authenticationMiddleware from "./middlewares/authentication.middleware.js";
import router from "./routes/user.js";
import usermiddle from "./middlewares/user.middleware.js";

const app = express();
const PORT = 3000;
app.use(express.json());
//GET REQUESTS
//list of fake users with id and email name 5 users

app.use("/", authenticationMiddleware, usermiddle, router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
