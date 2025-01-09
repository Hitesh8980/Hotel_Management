const express = require("express");
const { addPantryStaff, getPantryStaff, updatePantryStaff, deletePantryStaff } = require("../controllers/pantryControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addPantryStaff);
router.get("/", authMiddleware, getPantryStaff);
router.put("/:id", authMiddleware, updatePantryStaff);  
router.delete("/:id", authMiddleware, deletePantryStaff);  

module.exports = router;
