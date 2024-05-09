import { MenuItem, SocialLink } from "@/types"
import { Icons } from "@/components/elements/Icons"

export const APP_SETTINGS = {
    APP_TITLE: "Bandada",
    APP_DESCRIPTION:
        "plug-and-play infrastructure that empowers anyone to create and manage privacy-preserving groups of anonymous individuals."
}

export const MENU_ITEMS: MenuItem[] = [
    {
        label: "Projects",
        href: "/projects"
    },
    {
        label: "Build",
        href: "/build"
    },
    {
        label: "Learn",
        href: "/learn"
    },
    {
        label: "Documentation",
        href: "#",
        external: true
    },
    {
        label: "Github",
        href: "#",
        external: true
    },
    {
        label: "Design kit",
        href: "#",
        footerOnly: true,
        showInMobile: true,
        external: true
    }
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: "Discord",
        href: "#",
        icon: Icons.discord
    },
    {
        label: "Twitter",
        href: "#",
        icon: Icons.twitter
    }
]

export const LINKS: Record<string, string> = {
    WEBSITE_FEEDBACK:
        "https://github.com/orgs/bandada-infra/discussions/new?category=website",
    SUBMIT_PROJECT: "https://github.com/bandada-infra/bandada/issues/new ",
    DISCORD: "#",
    GET_INSPIRED: "#"
}
