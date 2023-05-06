const Recipe = require("../models/recipeModel");
const mongoose = require("mongoose");

const creatRecipe = async (req, res) => {
  const {
    recipe_name,
    recipe_type,
    description,
    main_ingredients,
    sub_ingredients,
  } = req.body;
  try {
    const recipe = await Recipe.create({
      recipe_name,
      recipe_type,
      description,
      main_ingredients,
      sub_ingredients,
    });
    res.status(200).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

const getRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.find({}).sort({ createAt: -1 });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid mongodb id" });
  }
  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe is not available" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid mongodb id" });
  }

  try {
    const recipe = await Recipe.findOneAndDelete({ _id: id });

    if (!recipe) {
      return res.status(404).json({ error: "Recipe is not available" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

//update order
const updateRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid mongodb id" });
  }
  try {
    const recipe = await Recipe.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!recipe) {
      return res.status(404).json({ error: "Recipe is not available" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};


module.exports = {
    creatRecipe,
    getRecipes,
    getRecipe,
    deleteRecipe,
    updateRecipe
}