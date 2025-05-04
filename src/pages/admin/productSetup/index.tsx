import DashboardLayout from "@/components/layouts/DashboardLayout";
import ProductSetup from "@/components/views/Admin/ProductSetup";

const AdminProductSetupPage = () => {
    return (
        <DashboardLayout title="Product Setup" description="Manage your brands and categories product" type="admin">
            <ProductSetup/>
        </DashboardLayout>
    )
};

export default AdminProductSetupPage