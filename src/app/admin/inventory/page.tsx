import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Table } from "lucide-react";
import { Input } from "@/components/ui/input"; // Adjust the import path according to your project structure
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AdminSidebar from "@/components/AdminSidebar";
import { ReactNode } from "react";

export default function InventoryContent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AdminSidebar>
      <MaxWidthWrapper>
        <div>
          <h2 className="text-3xl font-bold mb-6">Inventory Management</h2>
          <Tabs defaultValue="raw-materials" className="space-y-4">
            <TabsList>
              <TabsTrigger value="raw-materials">Raw Materials</TabsTrigger>
              <TabsTrigger value="product-stocks">Product Stocks</TabsTrigger>
            </TabsList>
            <TabsContent value="raw-materials" className="space-y-4">
              <div className="flex justify-between">
                <Input
                  className="max-w-sm"
                  placeholder="Search raw materials..."
                />
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
          {children}
        </div>
      </MaxWidthWrapper>
    </AdminSidebar>
  );
}
