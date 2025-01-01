"use client";

import {Card,Tabs, Tab, CardBody,Link} from "@nextui-org/react";
import { CustomCard,CardRow } from "@/components/videoscard";
import { ArticleRow } from "@/components/articlecard";


export default function AIPage() {
  return (
    <div className="-mt-8 w-full">
      <div className="flex w-full flex-col gap-6">
        <Tabs aria-label="Options" classNames={{
          tabList: "w-3/4 ml-8",
          panel: "w-full px-8 pt-0",
          base: "w-full",
          }}>
          <Tab key="photos" title="AI入门视频合集">
            {/* <div className="flex gap-2 mt-1"> */}
            <CardRow 
              cards={[
                {
                  title: "AI行业的一些术语｜AI入门 11",
                  description: "AI术语",
                  imageUrl: "/images/rumen11.jpeg",
                  videoUrl: "https://www.xiaohongshu.com/discovery/item/65f6d47e000000001203c795?source=webshare&xhsshare=pc_web&xsec_token=ABvh-0-AYKSd6PrJZgYx5RN-Gp2TqOTJCtRBSzXTWCMjo=&xsec_source=pc_share"
                },
                {
                  title: " 人工智能体简介｜AI入门 10",
                  description: "AI Agent 是什么",
                  imageUrl: "/images/rumen10.jpeg",
                  videoUrl: "https://www.xiaohongshu.com/discovery/item/65f57e48000000000d00e4dd?source=webshare&xhsshare=pc_web&xsec_token=ABzXJzfv0w8PFN_jmrOwMzOt3m-siB2nTcAziTnMSSx6Y=&xsec_source=pc_share"
                },
                {
                  title: "AI绘画入门｜AI入门 9",
                  description: "AI绘画有什么技巧",
                  imageUrl: "/images/rumen9.jpeg",
                  videoUrl: "https://www.xiaohongshu.com/discovery/item/65f3002f000000001202029c?source=webshare&xhsshare=pc_web&xsec_token=ABFru3sUgQEmyWXjfs5ufmBKKZAugFcb7z7DrwXYbSiKI=&xsec_source=pc_share"
                },
                {
                  title: " 优质的AI提示词｜AI入门 8",
                  description: "AI提示词",
                  imageUrl: "/images/rumen8.jpeg",
                  videoUrl: "https://www.xiaohongshu.com/discovery/item/65f19f5a000000001203f539?source=webshare&xhsshare=pc_web&xsec_token=ABg4OUfGmWTwJ5VVWl4JNJ-5_CfGIXjtYc6BgjEG7CWU4=&xsec_source=pc_share"
                },
                {
                  title: "好用的AI写作工具｜AI入门 7",
                  description: "AI写作工具",
                  imageUrl: "/images/rumen7.jpeg",
                  videoUrl: "https://www.xiaohongshu.com/discovery/item/65f03cf40000000012020f40?source=webshare&xhsshare=pc_web&xsec_token=ABSsHjqtqVZL0v9uGs8JA53D0bZbOBNLEJKwvGfDMPQr0=&xsec_source=pc_share"
                },
                {
                  title: "电商人在用的AI工具｜AI入门 6",
                  description: "电商AI工具",
                  imageUrl: "/images/rumen6.jpeg",
                  videoUrl: "https://www.xiaohongshu.com/discovery/item/65eeedf40000000012020435?source=webshare&xhsshare=pc_web&xsec_token=ABCqGd9ZxHJMLsw3TNqHgkq0pHx0PhlGy0kqv4yyI3Y8Q=&xsec_source=pc_share"
                },
                {
                  title:"AI视频实用技巧｜AI入门 5",
                  description: "AI视频技巧",
                  imageUrl: "/images/rumen5.jpeg",
                  videoUrl:  "https://www.xiaohongshu.com/discovery/item/65ed9cf20000000012021452?source=webshare&xhsshare=pc_web&xsec_token=ABdfCSLtwmCOq5BR36K2nW2kI7Zr76rENun9Yvh7r8Ix8=&xsec_source=pc_share"
                },
                {
                  title: "大厂出品的AI工具｜AI入门 4",
                  description: "分享大厂AI工具",
                  imageUrl: "/images/rumen4.jpeg",
                  videoUrl: "https://www.xiaohongshu.com/discovery/item/65ec4ec500000000030379a4?source=webshare&xhsshare=pc_web&xsec_token=AB4GZEtEgDqsP1Cjs8YRXmPYY2NhuJOvRIkugjZMHWLUE=&xsec_source=pc_share"
                },
                {
                  title: "好用的AI神器｜AI入门 3",
                  description: "分享AI神器",
                  imageUrl: "/images/rumen3.jpeg",
                  videoUrl: "https://www.xiaohongshu.com/discovery/item/65eafd3800000000040020da?source=webshare&xhsshare=pc_web&xsec_token=ABu5etRZAa3iRv-4y6VopL01qF_opDiw_BIkux0-sMYdI=&xsec_source=pc_share"
                },
                {
                  title: "玩转AI的优质资料｜AI入门 2",
                  description: "分享AI优质资料",
                  imageUrl: "/images/rumen2.jpeg",
                  videoUrl: "https://www.xiaohongshu.com/discovery/item/65e9a6c10000000003037db3?source=webshare&xhsshare=pc_web&xsec_token=ABkSi9k3JV0-mxfCC-G25ctURrfegYFpk5MIhHHBZ1q3Q=&xsec_source=pc_share"
                },
                {
                  title: "大白话说AI发展史｜AI入门 1",
                  description: "讲述AI的发展和应用",
                  imageUrl: "/images/rumen1.jpeg",
                  videoUrl: "https://www.douyin.com/user/MS4wLjABAAAAhyR2vsv8LfSJt9Wk0wNjYru-bmv6cT_hfxXAmL0nx6U?from_tab_name=main&modal_id=7343211331996192019"
                },
              ]}
            />

          </Tab>
          <Tab key="music" title="待更新">
            <Card>
              <CardBody>
                更多视频合集，正在精心制作中......
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="待更新">
            <Card>
              <CardBody>
                更多视频合集，正在精心制作中......
              </CardBody>
            </Card>
          </Tab>
        </Tabs>

        <Link 
          href="/ai/videos" 
          className="text-primary hover:text-primary-dark transition-colors px-4 -mt-2 ml-12"
        >
          查看更多视频 →
        </Link>
      </div>

      <div className="flex w-full flex-col gap-6 mt-12">
        <Tabs aria-label="Options" classNames={{
            tabList: "w-3/4 ml-12",
            panel: "w-full px-12 pt-0",
            base: "w-full",
            }}>
          <Tab key="photos" title="最近热文">
            <ArticleRow 
              articles={[
                {
                  title: "2024 年回顾：用心的人，会在AI 时代有胜算",
                  summary: "本文分享我 2024 年的经历，通过几个运营的项目、AI 自学编程的经历，我发现之后掌握很多技能都不难、未来属于有自学能力、用心发现需求的人",
                  publishDate: "2024-12-30",
                  author:"鸣姐",
                  tags: ["成长", "运营", "AI"],
                  articleUrl:"https://mp.weixin.qq.com/s/3pPN0Yr56mKMiAkRIamW0g"
                },
                {
                  title: "用上豆包拍照写代码的功能，我无代码开发了个人网站【多图解析过程】",
                  summary: "本文分享我作为一个编程小白，在AI 的帮助下，没有写一行代码，做出了自己的个人网站 1.0 版本，多图拆解了我的制作过程",
                  publishDate: "2024-12-23",
                  author:"鸣姐",
                  tags: ["AI", "编程", "教程"],
                  articleUrl:"https://mp.weixin.qq.com/s/EJ2CTGqy4UeBJHm19ZGFWg"
                },
              ]}/>
          </Tab>

          <Tab key="music" title="往期好文">
          <ArticleRow 
              articles={[
                {
                  title: "泪目的拥抱亲人AI视频怎么做？详细教程分享",
                  summary: "本文分享我用AI 制作拥抱视频的经验，值得注意的是：市面上因为这个需求大，推出了一些付费的工具，但是效果并不好，不推荐尝试",
                  publishDate: "2024-07-23",
                  author:"鸣姐",
                  tags: ["AI", "视频", "教程"],
                  articleUrl:"https://mp.weixin.qq.com/s/WV_31jbjb10IMqYzL1T9Pw"
                },
                {
                  title: "5个头部AI剪辑工具怎么选，一键成大片",
                  summary: "本文分享我用AI 剪辑工具提高视频制作效率的经验",
                  publishDate: "2024-07-17",
                  author:"鸣姐",
                  tags: ["AI", "视频", "剪辑"],
                  articleUrl:"https://mp.weixin.qq.com/s/r_PbZQKsCa5tSSBt78oKzg"
                },
                {
                  title: "国内头部10家大模型产品，怎么选（用户体验分享）",
                  summary: "本文分享我使用国内头部的大模型产品的经验",
                  publishDate: "2024-12-23",
                  author:"鸣姐",
                  tags: ["AI", "编程", "教程"],
                  articleUrl:"https://mp.weixin.qq.com/s/N6984t9r3f5Bazr6e-eKhA"
                },
              ]}/>
          </Tab>
        </Tabs>

        <Link 
          href="/ai/articles" 
          className="text-primary hover:text-primary-dark transition-colors px-4 -mt-2 ml-12"
        >
          查看更多文章 →
        </Link>
      </div>
    </div>
  );
}