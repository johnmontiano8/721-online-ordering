import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  colors: [{ type: String }],
  sizes: [{ type: String }],
  customizationOptions: [{ type: String }],
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);