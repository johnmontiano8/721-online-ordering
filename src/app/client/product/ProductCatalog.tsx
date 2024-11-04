"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Jersey Sando",
    price: 19.99,
    image: "/jersey-sando.png",
  },
  {
    id: 2,
    name: "Jersey Shorts",
    price: 24.99,
    image: "/jersey-shorts.png",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 14.99,
    image: "/t-shirt.jpg",
  },
  {
    id: 4,
    name: "Hoodie",
    price: 29.99,
    image: "/hoodie.jpg",
  },
];

export default function ProductCatalog() {
  const handleAddToCart = (productId: number) => {
    // Add your add to cart logic here
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden border border-gray-200 shadow-md"
          >
            <CardContent className="p-4">
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="object-contain"
                />
              </div>

              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">Php{product.price}</p>
            </CardContent>

            <CardFooter className="bg-gray-100 p-4 flex justify-between">
              <Link href={`/product/ProductForm${product.id}`} passHref>
                <Button className="w-full mr-2">View Details</Button>
              </Link>
              <Link href={"/cart"} passHref>
                <Button
                  onClick={() => handleAddToCart(product.id)}
                  className="w-full mr-2"
                >
                  Add to Cart
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
