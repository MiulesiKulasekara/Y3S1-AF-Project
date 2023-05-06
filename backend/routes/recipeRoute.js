const express=require('express');
const router =express.Router();

const {
    creatRecipe,
    getRecipes,
    getRecipe,
    deleteRecipe,
    updateRecipe
} = require('../controllers/recipeController');

router.post('/',creatRecipe);
router.get('/',getRecipes);
router.get('/:id',getRecipe);
router.delete('/:id',deleteRecipe);
router.patch('/:id',updateRecipe);


module.exports = router;