import DataTable from "@/components/ui/DataTable";
import { Tabs, Tab, Dropdown, DropdownTrigger, DropdownMenu, Button, DropdownItem } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Key, ReactNode, useCallback } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { COLUMN_LISTS_BRAND, COLUMN_LISTS_CATEGORY } from "./Category.constant";
import { desc } from "framer-motion/client";

const ProductSetup = () => {
    const {push} = useRouter()
    const renderCell = useCallback((category: Record<string, unknown>, columnKey: Key) => {
        const cellValue = category[columnKey as keyof typeof category];

        switch (columnKey) {
            case "actions":
                return (
                    <Dropdown>
                        <DropdownTrigger>
                            <Button isIconOnly size="sm" variant="light"><CiMenuKebab className="text-default-700"/></Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem key="detail-category-button" onPress={() => push(`/admin/category/${category.id}`)}>Detail Category</DropdownItem>
                            <DropdownItem key="delete-category-button" className="text-danger-500">Delete Category</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                );
            default:
                return cellValue as ReactNode;
        }
    }, [push]);
    return (
        <Tabs aria-label="Product Setup">
            <Tab key="Brands" title="Brands">
            <section>
            <DataTable renderCell={renderCell} columns={COLUMN_LISTS_CATEGORY} data={[
                {
                    _id: "123",
                    name: "Category 1",
                    description: "Description 1",
                }
            ]}></DataTable>
        </section>
            </Tab>
            <Tab key="Categories" title="Categories">
            <section>
            <DataTable renderCell={renderCell} columns={COLUMN_LISTS_BRAND} data={[
                {
                    _id: "123",
                    icon: "../../../public/images/login.png",
                    name: "Category 1",
                    description: "Description 1",
                }
            ]}></DataTable>
        </section>
            </Tab>
        </Tabs>
        
    );
};

export default ProductSetup;