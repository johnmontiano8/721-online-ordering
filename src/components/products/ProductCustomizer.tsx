"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { RotateCw, Upload } from "lucide-react";

export default function DesignCustomizer() {
  const [clothingType, setClothingType] = useState("t-shirt");
  const [designPosition, setDesignPosition] = useState({ x: 50, y: 50 });
  const [designSize, setDesignSize] = useState(50);
  const [designRotation, setDesignRotation] = useState(0);
  const [clothingColor, setClothingColor] = useState("#ffffff");
  const [designImage, setDesignImage] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDesignImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-4xl mx-auto">
      <Card className="flex-1">
        <CardContent className="p-6">
          <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: clothingColor }}
            >
              <img
                src={`/placeholder.svg?height=400&width=400&text=${clothingType}`}
                alt={clothingType}
                className="w-full h-full object-cover"
              />
            </div>
            {designImage && (
              <div
                className="absolute"
                style={{
                  left: `${designPosition.x}%`,
                  top: `${designPosition.y}%`,
                  width: `${designSize}%`,
                  height: `${designSize}%`,
                  transform: `translate(-50%, -50%) rotate(${designRotation}deg)`,
                }}
              >
                <img
                  src={designImage}
                  alt="Custom design"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardContent className="space-y-4 p-6">
          <div>
            <Label htmlFor="clothing-type">Clothing Type</Label>
            <Select
              value={clothingType}
              onValueChange={(value) => setClothingType(value)}
            >
              <SelectTrigger id="clothing-type">
                <SelectValue placeholder="Select clothing type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="t-shirt">T-Shirt</SelectItem>
                <SelectItem value="hoodie">Hoodie</SelectItem>
                <SelectItem value="tank-top">Tank Top</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="design-upload">Upload Design</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="design-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button asChild variant="outline">
                <label htmlFor="design-upload" className="cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Image
                </label>
              </Button>
              {designImage && (
                <span className="text-sm text-green-600">Image uploaded</span>
              )}
            </div>
          </div>
          <div>
            <Label>Design Position</Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="position-x">X</Label>
                <Slider
                  id="position-x"
                  min={0}
                  max={100}
                  step={1}
                  value={[designPosition.x]}
                  onValueChange={([value]) =>
                    setDesignPosition((prev) => ({ ...prev, x: value }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="position-y">Y</Label>
                <Slider
                  id="position-y"
                  min={0}
                  max={100}
                  step={1}
                  value={[designPosition.y]}
                  onValueChange={([value]) =>
                    setDesignPosition((prev) => ({ ...prev, y: value }))
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <Label htmlFor="design-size">Design Size</Label>
            <Slider
              id="design-size"
              min={10}
              max={100}
              step={1}
              value={[designSize]}
              onValueChange={([value]) => setDesignSize(value)}
            />
          </div>
          <div>
            <Label htmlFor="design-rotation">Design Rotation</Label>
            <div className="flex items-center space-x-2">
              <Slider
                id="design-rotation"
                min={0}
                max={360}
                step={1}
                value={[designRotation]}
                onValueChange={([value]) => setDesignRotation(value)}
              />
              <RotateCw className="w-4 h-4" />
            </div>
          </div>
          <div>
            <Label htmlFor="clothing-color">Clothing Color</Label>
            <Input
              id="clothing-color"
              type="color"
              value={clothingColor}
              onChange={(e) => setClothingColor(e.target.value)}
              className="w-full h-10"
            />
          </div>
          <Button className="w-full">Add to Cart</Button>
        </CardContent>
      </Card>
    </div>
  );
}
