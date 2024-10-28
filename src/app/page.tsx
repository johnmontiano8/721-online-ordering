import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main>
        <h2>Carousel dine sa taas</h2>
        <h2 className="text-2xl py-2">Our Products</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-2"></div>
      </main>
    </MaxWidthWrapper>
  );
}
