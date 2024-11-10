"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

// Types
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Simulated API call
const fetchCartItems = async (): Promise<CartItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      name: "Premium T-Shirt",
      price: 599,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: 1999,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Phone Case",
      price: 299,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
  ];
};

export default function ResponsiveCheckout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
        setIsLoading(false);
      } catch {
        setError("Failed to load cart items. Please try again.");
        setIsLoading(false);
      }
    };

    loadCartItems();
  }, []);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert("Redirecting to GCash payment gateway...");
      setIsProcessing(false);
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="text-center text-red-500 p-4">
            {error}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Checkout</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Your Order</h3>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="flex-shrink-0 font-medium">
                      ₱{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {cartItems.length > 0 && (
              <div className="mt-6 text-right font-bold text-lg">
                Total: ₱{totalPrice}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <RadioGroup defaultValue="gcash">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gcash" id="gcash" checked />
                <Label htmlFor="gcash">GCash</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={handlePayment}
            disabled={isProcessing || cartItems.length === 0}
          >
            {isProcessing ? "Processing..." : "Pay with GCash"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
