import React from "react";
import CartDetails from "./CartDetails";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const metadata = {
  title: "Cart",
  description: "Your cart details",
};

const CartPage = () => {
  return (
    <MaxWidthWrapper>
      <CartDetails />
    </MaxWidthWrapper>
  );
};

export default CartPage;
