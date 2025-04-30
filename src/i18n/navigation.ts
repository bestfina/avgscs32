import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link: LocaleLink, getPathname, redirect, usePathname, useRouter} = createNavigation(routing);
