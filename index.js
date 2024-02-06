import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());
//GET REQUESTS
//list of fake users with id and email name 5 users
let users = [
  { id: 1, email: "user1@example.com", name: "User 1" },
  { id: 2, email: "user2@example.com", name: "User 2" },
  { id: 3, email: "user3@example.com", name: "User 3" },
  { id: 4, email: "user4@example.com", name: "User 4" },
  { id: 5, email: "user5@example.com", name: "User 5" },
];

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Hellowwww</h1>");
});

app.get("/api/v1/users", (request, response) => {
  response.send(users);
});
//Route params
app.get("/api/v1/users/:id", (request, response) => {
  const userId = parseInt(request.params.id);
  const user = users.find((users) => users.id === userId);
  response.send(user);
});
//Post
app.post("/api/v1/users", (request, response) => {
  const newUser = request.body;
  users = [...users, newUser];
  response.send(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
