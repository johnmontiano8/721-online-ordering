import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Table } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import AdminSidebar from "@/components/AdminSidebar";
import { ReactNode } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";

export default function OrdersContent({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper>
      <AdminSidebar>
        <div>
          <h1 className="text-3xl font-bold mb-6">Order Management</h1>
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
                    <Badge>Shipped</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          </div>
          {children}
        </div>
      </AdminSidebar>
    </MaxWidthWrapper>
  );
}
