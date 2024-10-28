"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const NavItem = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
  }) => (
    <Button
      variant={activeTab === value ? "secondary" : "ghost"}
      className="w-full justify-start"
      onClick={() => setActiveTab(value)}
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );

  return (
    <MaxWidthWrapper>
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-white p-4 shadow-md">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
          </div>
          <nav className="space-y-2">
            <NavItem icon={LayoutDashboard} label="Overview" value="overview" />
            <NavItem icon={Package} label="Inventory" value="inventory" />
            <NavItem icon={ShoppingCart} label="Orders" value="orders" />
            <NavItem icon={Users} label="Customers" value="customers" />
            <NavItem icon={Settings} label="Settings" value="settings" />
          </nav>
        </aside>
        <main className="flex-1 p-8 overflow-y-auto">
          {activeTab === "overview" && <OverviewContent />}
          {activeTab === "inventory" && <InventoryContent />}
          {activeTab === "orders" && <OrdersContent />}
          {activeTab === "customers" && <CustomersContent />}
          {activeTab === "settings" && <SettingsContent />}
        </main>
      </div>
    </MaxWidthWrapper>
  );
}

function OverviewContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InventoryContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Inventory Management</h2>
      <Tabs defaultValue="raw-materials" className="space-y-4">
        <TabsList>
          <TabsTrigger value="raw-materials">Raw Materials</TabsTrigger>
          <TabsTrigger value="product-stocks">Product Stocks</TabsTrigger>
        </TabsList>
        <TabsContent value="raw-materials" className="space-y-4">
          <div className="flex justify-between">
            <Input className="max-w-sm" placeholder="Search raw materials..." />
            <Button>Add Raw Material</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Reorder Level</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Cotton Fabric</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>yards</TableCell>
                <TableCell>200</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Polyester Thread</TableCell>
                <TableCell>5000</TableCell>
                <TableCell>spools</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="product-stocks" className="space-y-4">
          <div className="flex justify-between">
            <Input className="max-w-sm" placeholder="Search products..." />
            <Button>Add Product</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>In Stock</TableHead>
                <TableHead>Reorder Level</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>T-Shirt (Large, Blue)</TableCell>
                <TableCell>TSH-L-BLU</TableCell>
                <TableCell>250</TableCell>
                <TableCell>50</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jeans (32, Black)</TableCell>
                <TableCell>JNS-32-BLK</TableCell>
                <TableCell>100</TableCell>
                <TableCell>30</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function OrdersContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Order Management</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <Input className="max-w-sm" placeholder="Search orders..." />
          <Button>Export Orders</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>#1001</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>2023-05-15</TableCell>
              <TableCell>$129.99</TableCell>
              <TableCell>
                <Badge>Processing</Badge>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#1002</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>2023-05-14</TableCell>
              <TableCell>$79.50</TableCell>
              <TableCell>
                <Badge variant="secondary">Shipped</Badge>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function CustomersContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Customer Management</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <Input className="max-w-sm" placeholder="Search customers..." />
          <Button>Add Customer</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Total Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Alice Johnson</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>5</TableCell>
              <TableCell>$450.00</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Smith</TableCell>
              <TableCell>bob@example.com</TableCell>
              <TableCell>3</TableCell>
              <TableCell>$275.50</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function SettingsContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>
            Manage your store&apos;s general settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label
              htmlFor="store-name"
              className="block text-sm font-medium text-gray-700"
            >
              Store Name
            </label>
            <Input id="store-name" defaultValue="My Awesome Store" />
          </div>
          <div>
            <label
              htmlFor="store-email"
              className="block text-sm font-medium text-gray-700"
            >
              Store Email
            </label>
            <Input
              id="store-email"
              type="email"
              defaultValue="contact@myawesomestore.com"
            />
          </div>
          <div>
            <label
              htmlFor="currency"
              className="block text-sm font-medium text-gray-700"
            >
              Currency
            </label>
            <select
              id="currency"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base  border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue="USD"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
