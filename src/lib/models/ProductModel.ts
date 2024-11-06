import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    colors: { type: [String], default: [] },
    size: { type: [String], default: [] },
    isFeatured: { type: Boolean, default: false }, // Ensure this field is included
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel;

export type Product = {
  _id?: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  color?: string[];
  size?: string[];
  isFeatured?: boolean; // Ensure this field is included
};
