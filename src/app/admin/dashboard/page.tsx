import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AdminSidebar from "@/components/AdminSidebar";

export default function Page() {
  return (
    <AdminSidebar>
      <MaxWidthWrapper>
        <div>
          <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
          {/* Add your dashboard content here */}
        </div>
      </MaxWidthWrapper>
    </AdminSidebar>
  );
}
