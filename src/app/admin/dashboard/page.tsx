import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AdminSidebar from "@/components/AdminSidebar";

export default async function Page() {
  return (
    <MaxWidthWrapper>
      <AdminSidebar>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      </AdminSidebar>
    </MaxWidthWrapper>
  );
}
