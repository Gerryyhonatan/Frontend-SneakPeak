import { AiFillProduct } from "react-icons/ai";
import { BsBoxFill, BsFillGrid1X2Fill, BsPeopleFill } from "react-icons/bs";
import { CiGrid41} from "react-icons/ci";
import { GiNecklaceDisplay } from "react-icons/gi";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { PiSneakerMoveFill } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import { TbShirtFilled } from "react-icons/tb";

const SIDEBAR_ADMIN = [
    {
        key: "dashboard",
        label: "Dashboard",
        href: "/admin/dashboard",
        icon: <BsFillGrid1X2Fill/>
    },
    {
        key: "productSetup",
        label: "Product Setup",
        href: "/admin/productSetup",
        icon: <MdOutlineDisplaySettings/>
    },
    {
        key: "sneakers",
        label: "Sneakers",
        href: "/admin/sneakers",
        icon: <PiSneakerMoveFill/>
    },
    {
        key: "apparel",
        label: "Apparel",
        href: "/admin/apparel",
        icon: <TbShirtFilled/>
    },
    {
        key: "accessories",
        label: "Accessories",
        href: "/admin/accessories",
        icon: <GiNecklaceDisplay/>
    },
    {
        key: "moreCategories",
        label: "More Categories",
        href: "/admin/moreCategories",
        icon: <AiFillProduct/>
    },
    {
        key: "orders",
        label: "Orders",
        href: "/admin/orders",
        icon: <BsBoxFill/>
    },
    {
        key: "adminSettings",
        label: "Admin",
        href: "/admin/adminSettings",
        icon: <RiAdminFill/>
    },
    {
        key: "customers",
        label: "Customers",
        href: "/admin/customers",
        icon: <BsPeopleFill/>
    },
]

const SIDEBAR_MEMBER = [
    {
        key: "dashboard",
        label: "Dashboard",
        href: "/member/dashboard",
        icon: <CiGrid41/>
    }
]

export { SIDEBAR_ADMIN, SIDEBAR_MEMBER };