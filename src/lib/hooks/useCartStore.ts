import { create } from "zustand";
import { round2 } from "../utils";
import { Address, OrderItem } from "../models/OrderModel";
import { persist } from "zustand/middleware";

type Cart = {
  items: OrderItem[];
  itemsPrice: number;
  totalPrice: number;

  paymentMethod: string;
  address: Address;
};

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  totalPrice: 0,
  paymentMethod: "GCash",
  address: {
    firstName: "",
    lastName: "",
    address: "",
  },
};

export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: "cartStore",
  })
);

export default function useCartService() {
  const { items, itemsPrice, totalPrice, paymentMethod, address } = cartStore();

  return {
    items,
    itemsPrice,
    totalPrice,
    paymentMethod,
    address,
    increase: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);
      const updatedCartItems = exist
        ? items.map((x) =>
            x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x
          )
        : [...items, { ...item, qty: 1 }];
      const { itemsPrice, totalPrice } = calcPrice(updatedCartItems);
      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        totalPrice,
        paymentMethod,
        address,
      });
    },

    decrease: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);
      if (!exist) return;
      const updatedCartItems =
        exist.qty === 1
          ? items.filter((x: OrderItem) => x.slug !== item.slug)
          : items.map((x) =>
              x.slug === item.slug ? { ...exist, qty: exist.qty - 1 } : x
            );
      const { itemsPrice, totalPrice } = calcPrice(updatedCartItems);
      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        totalPrice,
      });
    },

    saveAddress: (address: Address) => {
      cartStore.setState({ address });
    },

    savePaymentMethod: (paymentMethod: string) => {
      cartStore.setState({ paymentMethod });
    },
  };
}

const calcPrice = (items: OrderItem[]) => {
  const itemsPrice = round2(
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    shippingPrice = round2(itemsPrice > 100 ? 0 : 100),
    taxPrice = round2(Number(0.15 * itemsPrice)),
    totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};
