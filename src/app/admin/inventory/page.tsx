import AdminSidebar from "@/components/AdminSidebar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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

export default function InventoryContent() {
  return (
    <MaxWidthWrapper>
      <AdminSidebar>
        <div>
          <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
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
                  <TableRow key={"product"}>
                    <TableCell>{"name"}</TableCell>
                    <TableCell>{"quantity"}</TableCell>
                    <TableCell>{"unit"}</TableCell>
                    <TableCell>{"reorderLevel"}</TableCell>
                    <TableCell>
                      <Button>Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div>
                <Button>Edit Raw Material</Button>
                <Button>Save</Button>
              </div>
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
                    <TableHead>In Stock</TableHead>
                    <TableHead>Reorder Level</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow key={"product"}>
                    <TableCell>{"name"}</TableCell>
                    <TableCell>{"quantity"}</TableCell>
                    <TableCell>{"reorderLevel"}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div>
                <h2>Edit Product</h2>
                <Input />

                <Button>Save</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </AdminSidebar>
    </MaxWidthWrapper>
  );
}
