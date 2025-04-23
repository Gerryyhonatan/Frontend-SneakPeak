// cn(class name) -> mengutilies setiap class name agar lebih mufah mengkombinasikan dengan tailwind
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
};