const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

mongoose.connect(process.env.LOCAL_URL, {
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
