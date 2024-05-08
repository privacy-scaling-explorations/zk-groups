"use client"

import React from "react"
import { AppContainer } from "@/components/AppContainer"
import { ArticleCard } from "@/components/cards/ArticleCard"
import { VideoCard } from "@/components/cards/VideoCard"
import { Divider } from "@/components/elements/Divider"
import { Label } from "@/components/elements/Label"
import { ShowMore } from "@/components/ShowMore"
import useContent from "@/hooks/useContent"
import { Accordion } from "@/components/elements/Accordion"
import { LABELS } from "@/shared/labels"

export default function LearnPage() {
    const { articles, videos } = useContent()

    return (
        <div className="flex flex-col">
            <div className="bg-classic-rose-100 py-28">
                <AppContainer className="max-w-screen-xl">
                    <div className=" flex flex-col gap-6">
                        <Label.Section size="md" className="text-center">
                            {LABELS.LEARN.TITLE}
                        </Label.Section>
                        <Label.SubTitle>
                            {LABELS.LEARN.DESCRIPTION}
                        </Label.SubTitle>
                    </div>
                    <Divider.Bird />
                    <div className="flex flex-col gap-6">
                        <Label.ParagraphTitle>
                            {LABELS.LEARN.HOW_IT_WORKS.TITLE}
                        </Label.ParagraphTitle>
                        <Label.Paragraph>
                            {LABELS.LEARN.HOW_IT_WORKS.DESCRIPTION}
                        </Label.Paragraph>
                    </div>
                    <Divider.Bird />
                    <div className="flex flex-col gap-6">
                        <Label.ParagraphTitle>
                            {LABELS.LEARN.KEY_CONCEPTS.TITLE}
                        </Label.ParagraphTitle>
                        <div className="flex flex-col divide-baltic-sea-300 divide-y">
                            {LABELS.LEARN.ITEMS.map(
                                ({ TITLE, DESCRIPTION }, index) => (
                                    <Accordion key={index} label={TITLE}>
                                        {DESCRIPTION}
                                    </Accordion>
                                )
                            )}
                        </div>
                    </div>
                </AppContainer>
            </div>

            <div className="bg-baltic-sea-950 py-28 ">
                <AppContainer className="flex flex-col gap-24">
                    <div className="flex flex-col gap-14">
                        <h3 className="text-baltic-sea-50 font-unbounded font-normal text-3xl">
                            {LABELS.LEARN.VIDEOS}
                        </h3>
                        <ShowMore className="grid grid-cols-1 gap-x-[30px] gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                            {videos.map((video, index) => (
                                <VideoCard key={index} {...video} />
                            ))}
                        </ShowMore>
                    </div>
                    <div className="flex flex-col gap-14">
                        <h3 className="text-baltic-sea-50 font-unbounded font-normal text-3xl">
                            {LABELS.LEARN.ARTICLES}
                        </h3>
                        <ShowMore className="grid grid-cols-1 gap-x-[30px] gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                            {articles.map((article, index) => (
                                <ArticleCard key={index} {...article} />
                            ))}
                        </ShowMore>
                    </div>
                </AppContainer>
            </div>
        </div>
    )
}
