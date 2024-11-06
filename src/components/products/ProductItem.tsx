import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Product } from "@/lib/models/ProductModel";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden border border-gray-200 shadow-md">
      <CardContent className="p-4">
        <div className="w-full h-48 relative mb-4">
          <Link href={`/client/product/${product.slug}`}>
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="object-contain"
            />
          </Link>
        </div>
      </CardContent>

      <CardFooter className="bg-gray-100 p-4">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">₱{product.price}</p>
        </Link>
      </CardFooter>
    </Card>
  );
}
