import { AiFillProduct } from "react-icons/ai";
import { BsFillGrid1X2Fill, BsFillPeopleFill } from "react-icons/bs";
import { CiGrid41} from "react-icons/ci";
import { FaBox } from "react-icons/fa";
import { GiNecklaceDisplay } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
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
        key: "orders",
        label: "Orders",
        href: "/admin/orders",
        icon: <FaBox/>
    },
    {
        key: "customers",
        label: "Customers",
        href: "/admin/customers",
        icon: <BsFillPeopleFill/>
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
        key: "adminSettings",
        label: "Admin",
        href: "/admin/adminSettings",
        icon: <RiAdminFill/>
    },
    {
        key: "settings",
        label: "Settings",
        href: "/admin/settings",
        icon: <IoMdSettings/>
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