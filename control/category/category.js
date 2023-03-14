const Category = require("../../model/category");

const addNewCategory = async (req, res) => {
  req.body.category_name = req.body.category_name.trim().toLowerCase();
  const addCategory = new Category(req.body);
  const response_from_db = await addCategory.save();
  if (response_from_db) {
    return res
      .status(200)
      .json({ message: "New Category Saved", response: response_from_db });
  } else return res.status(401).json({ message: "Something went wrong" });
};

const getAllCategory = async (req, res) => {
  const response_from_db = await Category.find();
  res.json({ response: response_from_db });
};

const removeCategory = async (req, res) => {
  const response_from_db = await Category.deleteOne({ _id: req.params.id });
  res.send({ message: "Successfully deleted...", response: response_from_db });
};

module.exports = { addNewCategory, getAllCategory, removeCategory };
