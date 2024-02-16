import express from "express";

let users = [
  { id: 1, email: "user1@example.com", name: "User 1" },
  { id: 2, email: "user2@example.com", name: "User 2" },
  { id: 3, email: "user3@example.com", name: "User 3" },
  { id: 4, email: "user4@example.com", name: "User 4" },
  { id: 5, email: "user5@example.com", name: "User 5" },
];

const getUserwithID = (request, response) => {
  const userId = parseInt(request.params.id);
  const user = users.find((users) => users.id === userId);
  response.send(user);
};
//Post
const postUsers = (request, response) => {
  const newUser = request.body;
  users = [...users, newUser];
  response.send(users);
};

const getUsers = (request, response) => {
  response.send(users);
};

export { getUsers, getUserwithID, postUsers };
//how to import it to other file
//import { getUsers, getUserwithID, postUsers } from "./controllers/user.controller.js";
