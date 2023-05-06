const mongoose = require("mongoose");

const schema = mongoose.Schema;

const recipeSchema = new schema(
  {
    recipe_name: {
      type: String,
      require: true,
    },
    recipe_type: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    main_ingredients: [
      {
        ingredient_name: { type: String, require: true },
        qty: { type: Number, require: true },
        type: { type: String, require: true },
      }
    ],
    sub_ingredients: [
      {
        ingredient_name: { type: String, require: true },
        qty: { type: Number, require: true },
        type: { type: String, require: true },
      }
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("recipe", recipeSchema);
