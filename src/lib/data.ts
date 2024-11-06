import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      firstName: "Admin",
      lastName: "User",
      middleInitial: "A",
      address: "123 Admin St",
      contactNo: "1234567890",
      email: "admin@example.com",
      username: "adminuser",
      password: bcrypt.hashSync("123456"),
      role: "admin",
    },
  ],

  products: [
    {
      name: "Jersey Sando",
      price: 19.99,
      image: "/jersey-sando.png",
      slug: "jersey-sando",
      description: "nice sando",
      countInStock: 10,
      numReviews: 8,
      rating: 4.5,
      isFeatured: true,
      size: ["S", "M", "L", "XL"],
    },
    {
      name: "Jersey Shorts",
      price: 24.99,
      image: "/jersey-shorts.png",
      slug: "jersey-shorts",
      description: "nice shorts",
      countInStock: 10,
      numReviews: 8,
      rating: 4.5,
      isFeatured: true,
      size: ["S", "M", "L", "XL"],
    },
    {
      name: "T-Shirt",
      price: 14.99,
      image: "/t-shirt.jpg",
      slug: "t-shirt",
      description: "nice tshirt",
      countInStock: 10,
      numReviews: 8,
      rating: 4.5,
      isFeatured: true,
      size: ["S", "M", "L", "XL"],
    },
    {
      name: "Hoodie",
      price: 29.99,
      image: "/hoodie.jpg",
      slug: "hoodie",
      description: "nice hoodie",
      countInStock: 10,
      numReviews: 8,
      rating: 4.5,
      isFeatured: true,
      size: ["S", "M", "L", "XL"],
    },
  ],
};

export default data;
