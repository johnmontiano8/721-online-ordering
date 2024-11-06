import { cache } from "react";
import dbConnect from "@/lib/dbConnect";
import ProductModel, { Product } from "@/lib/models/ProductModel";

export const revalidate = 3600;

const getLatest = cache(async () => {
  await dbConnect();
  console.log("Fetching latest products...");
  const products = await ProductModel.find({})
    .sort({ _id: -1 })
    .limit(6)
    .lean();
  console.log("Latest products fetched:", products);
  return products as Product[];
});

const getFeatured = cache(async () => {
  await dbConnect();
  console.log("Fetching featured products...");
  const products = await ProductModel.find({ isFeatured: true })
    .limit(3)
    .lean();
  console.log("Featured products fetched:", products);
  return products as Product[];
});

const getBySlug = cache(async (slug: string) => {
  await dbConnect();
  console.log(`Fetching product by slug: ${slug}`);
  const product = await ProductModel.findOne({ slug }).lean();
  console.log("Product fetched:", product);
  return product as Product;
});

const getCategories = cache(async () => {
  await dbConnect();
  console.log("Fetching categories...");
  const categories = await ProductModel.find().distinct("category");
  console.log("Categories fetched:", categories);
  return categories;
});

const productService = {
  getLatest,
  getFeatured,
  getBySlug,
  getCategories,
};
export default productService;
