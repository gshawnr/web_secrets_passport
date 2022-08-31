const mongoose = require("mongoose");

const localUrl = `mongodb://localhost:27017/SecretsPassportDB`;
const onlineUrl = `mongo+srv://${process.env.MONGO_USER}:${process.env.MONGO_KEY}@gsr-mongo-cluster.kkuknqw.mongodb.net/SecretsPassportDB`;

mongoose.connect(localUrl);

const createModel = (name, schema, plugin) => {
  const Schema = new mongoose.Schema(schema);

  if (plugin) {
    Schema.plugin = plugin;
  }

  return mongoose.model(name, Schema);
};
