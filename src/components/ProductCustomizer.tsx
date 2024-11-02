import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component({ productId = "1" }: { productId?: string }) {
  const [text, setText] = useState("");
  const [font, setFont] = useState("Arial");
  const [color, setColor] = useState("#000000");

  // This would typically come from an API or database
  const product = {
    id: productId,
    name: "Jersey Sando",
    image: "/placeholder.svg?height=600&width=400",
  };

  const fonts = ["Arial", "Helvetica", "Times New Roman", "Courier", "Verdana"];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Custom Design: {product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
          {/* This is where you'd typically have a canvas for live editing */}
          <p className="mt-4 text-center">
            Preview of custom design would appear here
          </p>
        </div>
        <div>
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Custom Text
            </label>
            <Input
              type="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter custom text"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="font"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Font
            </label>
            <Select value={font} onValueChange={setFont}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                {fonts.map((f) => (
                  <SelectItem key={f} value={f}>
                    {f}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Color
            </label>
            <Input
              type="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-10"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Add Image (Logo, PNG)
            </label>
            <Input type="file" id="image" accept="image/*" />
          </div>

          <div className="mb-4">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Additional Notes
            </label>
            <Textarea
              id="notes"
              placeholder="Any additional customization requests"
            />
          </div>

          <Button className="w-full">Submit Custom Design</Button>
        </div>
      </div>
    </div>
  );
}
