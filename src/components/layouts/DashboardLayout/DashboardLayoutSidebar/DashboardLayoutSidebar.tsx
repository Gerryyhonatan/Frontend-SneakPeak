import { cn } from "@/utils/cn";
import { Button, Listbox, ListboxItem } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiLogoutBoxFill } from "react-icons/ri";

interface SidebarItem {
    key: string;
    label: string;
    href: string;
    icon: JSX.Element;
}

interface PropTypes {
    sidebarItems: SidebarItem[];
    isOpen: boolean;
};

const DashboardLayoutSidebar = (props: PropTypes) => {
    const {sidebarItems, isOpen} = props;
    const router = useRouter();
    return (
        <div className={cn("fixed z-50 flex h-screen w-full max-w-[300px] -translate-x-full flex-col justify-between border-r-1 border-default-200 bg-white px-4 py-6 transition-all lg:relative lg:translate-x-0", {"translate-x-0" : isOpen},)}>
            <div>
                <div className="flex justify-start mx-2 w-full">
                    <h1 className="mb-4 w-32 cursor-pointer font-bold text-primary text-3xl" onClick={() => router.push("/")}>SneakPeak</h1>
                </div>
                <Listbox items={sidebarItems} variant="solid" aria-label="Dashboard Menu">{(item) => (
                        <ListboxItem key={item.key} className={cn("my-0.5 h-12 text-2xl", {
                            "bg-primary text-white": router.pathname.startsWith(item.href),
                        })}
                            startContent={item.icon}
                            textValue={item.label}
                            aria-label={item.label}
                            aria-describedby={item.label}
                            as={Link}
                            href={item.href}
                        >

                            <p className="text-base ml-2">{item.label}</p>
                        </ListboxItem>
                        ) }
                    </Listbox>
            </div>
            <div className="flex justify-start px-1">
                <Button fullWidth variant="light" className="flex justify-start px-2 gap-4 font-semibold text-primary" size="lg" onPress={() => signOut()}>
                    <RiLogoutBoxFill className="text-2xl text-primary"/>
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default DashboardLayoutSidebar;