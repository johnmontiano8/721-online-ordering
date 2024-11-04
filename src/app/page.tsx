import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ImageSlider from "@/components/ImageSlider";
import ProductCatalog from "@/app/client/product/ProductCatalog";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main>
        <ImageSlider />
        <ProductCatalog />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-2"></div>
      </main>
    </MaxWidthWrapper>
  );
}
