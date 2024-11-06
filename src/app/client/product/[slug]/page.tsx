import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import AddToCart from "@/components/products/AddToCart";
import productsService from "@/lib/services/productService";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productsService.getBySlug(params.slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: product.name,
    description: product.description,
    image: product.image,
  };
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productsService.getBySlug(params.slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <MaxWidthWrapper>
      <div className="my-2">
        <Link href="/">Back to Products</Link>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="mb-4">
              {product.rating} of {product.numReviews} reviews
            </p>
            <p className="mb-4">Description: {product.description}</p>

            <div className="mb-4">
              <label
                htmlFor="size"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Size
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {Array.isArray(product.size) &&
                    product.size.map((size: string) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="note"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Note/Comment
              </label>
              <Textarea
                id="note"
                placeholder="Add any special instructions here"
              />
            </div>

            <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
              <div className="card-body">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>₱{product.price}</div>
                </div>
              </div>

              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </div>
              </div>

              <div className="flex justify-center">
                {product.countInStock != 0 && (
                  <div className="card-actions flex justify-center items-center">
                    <AddToCart
                      item={{ ...product, qty: 0, color: "", size: "" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
