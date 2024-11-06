import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ImageSlider from "@/components/ImageSlider";
import ProductItem from "@/components/products/ProductItem";
import productService from "@/lib/services/productService";
import { convertDocToObj } from "@/lib/utils";

export default async function Home() {
  const featuredProducts = await productService.getFeatured();
  const latestProducts = await productService.getLatest();

  console.log("Featured products:", featuredProducts);
  console.log("Latest products:", latestProducts);

  return (
    <MaxWidthWrapper>
      <div></div>
      <ImageSlider />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <ProductItem
              key={product.slug}
              product={convertDocToObj(product)}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
