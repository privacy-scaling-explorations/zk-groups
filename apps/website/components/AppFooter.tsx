import Image from "next/image"
import Link from "next/link"
import { classed } from "@tw-classed/react"
import { LINKS, MENU_ITEMS, SOCIAL_LINKS } from "@/common/settings"
import { Icons } from "./elements/Icons"
import { Label } from "./elements/Label"
import { Divider } from "./elements/Divider"
import { AppContainer } from "./AppContainer"
import { LABELS } from "@/shared/labels"

const MenuWrapper = classed.div(
    "flex flex-col items-center md:items-start gap-6 md:flex-row flex-wrap"
)

function AppFooter() {
    return (
        <div className="bg-baltic-sea-950">
            <AppContainer className="flex flex-col gap-12 pt-20 pb-12">
                <div className="mx-auto md:ml-0">
                    <Image
                        src="/icons/bandada-logo-small.svg"
                        width={144}
                        height={144}
                        alt="bandada logo small"
                    />
                </div>
                <div className="flex">
                    <div className="flex flex-col gap-12 mg:gap-0 md:flex-row w-full md:justify-between">
                        <MenuWrapper>
                            {MENU_ITEMS.map(
                                ({ label, href, external }, index) => (
                                    <Link
                                        href={href}
                                        key={index}
                                        target={external ? "_blank" : undefined}
                                    >
                                        <Label.MenuItem className="flex items-center">
                                            {label}

                                            {external && (
                                                <Icons.ExternalLink size={20} />
                                            )}
                                        </Label.MenuItem>
                                    </Link>
                                )
                            )}
                        </MenuWrapper>
                        <MenuWrapper>
                            {SOCIAL_LINKS.map(
                                ({ label, href, icon }, index) => {
                                    const Icon: any = icon
                                    return (
                                        <Link
                                            key={index}
                                            href={href}
                                            target="_blank"
                                        >
                                            <Label.MenuItem
                                                key={index}
                                                className="flex items-center"
                                            >
                                                <Icon />
                                                <span>{label}</span>
                                            </Label.MenuItem>
                                        </Link>
                                    )
                                }
                            )}
                        </MenuWrapper>
                    </div>
                </div>
                <Divider.Line color="dark" />
                <div className="w-full flex gap-4 flex-col items-center md:justify-between md:flex-row">
                    <span className="text-baltic-sea-600 text-[13px] font-normal tracking-[0.26px] font-sans order-2 md:order-2">
                        {LABELS.FOOTER.COPYRIGHT}
                    </span>
                    <Link
                        href={LINKS.WEBSITE_FEEDBACK}
                        target="_blank"
                        className="order-1 md:order-2 py-2"
                    >
                        <Label.MenuItem className="flex gap-2">
                            {LABELS.FOOTER.FEEDBACK}
                            <Icons.ExternalLink size={20} />
                        </Label.MenuItem>
                    </Link>
                </div>
            </AppContainer>
        </div>
    )
}

AppFooter.displayName = "AppFooter"

export { AppFooter }
