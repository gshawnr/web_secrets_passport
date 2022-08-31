const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const localUrl = `mongodb://localhost:27017/SecretsPassportDB`;
const onlineUrl = `mongo+srv://${process.env.MONGO_USER}:${process.env.MONGO_KEY}@gsr-mongo-cluster.kkuknqw.mongodb.net/SecretsPassportDB`;

mongoose.connect(localUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

exports.createModel = (name, schema, plugins = []) => {
  const Schema = new mongoose.Schema(schema);

  if (plugins.length > 0) {
    plugins.forEach((plugin) => {
      Schema.plugin(plugin);
    });
  }

  return mongoose.model(name, Schema);
};
