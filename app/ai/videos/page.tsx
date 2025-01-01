// app/ai/videos/page.tsx
"use client";

import { CustomCard, CardRow } from "@/components/videoscard";

interface Video {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

interface VideoCollection {
  title: string;
  videos: Video[];
}

export default function VideosPage() {
  const videoCollections: VideoCollection[] = [
    {
      title: "AI 入门合集",
      videos: [
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
      ]
    },
    {
      title: "AI 应用合集",
      videos: [
        {
          title: "用AI快速读完一本书",
          description: "我把过程拆解成了 4 步",
          imageUrl: "/images/reading.jpeg",
          videoUrl: "https://www.xiaohongshu.com/discovery/item/66095d52000000001a011a83?source=webshare&xhsshare=pc_web&xsec_token=ABW2qaeuz4W0jInyQyEbNxUlobsRA_DqqGlS2gfHUZGFI=&xsec_source=pc_share"
        },
        {
          title: " 用AI把视频转成文字",
          description: "更高效地获取视频信息",
          imageUrl: "/images/shipin.jpeg",
          videoUrl: "https://www.xiaohongshu.com/discovery/item/66193103000000001a0154c9?source=webshare&xhsshare=pc_web&xsec_token=ABEihV8bmeSmFZSSTOKaYj0vDArPGi0RXo9oABIcEkZnk=&xsec_source=pc_share"
        },
        {
          title: " 用AI 高效处理表格",
          description: "更高效地获取视频信息",
          imageUrl: "/images/excel.jpeg",
          videoUrl: "https://www.xiaohongshu.com/discovery/item/6628fd1300000000010321d7?source=webshare&xhsshare=pc_web&xsec_token=ABZtxndd00H0lQFDZwJuok8z6_NSmECU2KjuCK4SLPRkE=&xsec_source=pc_share"
        },
        {
          title: " 用AI 做PPT",
          description: "AI做ppt，又快又好看",
          imageUrl: "/images/ppt.jpeg",
          videoUrl: "https://www.xiaohongshu.com/discovery/item/66435ec6000000001e034f34?source=webshare&xhsshare=pc_web&xsec_token=AB3sr9aYz9Vq6yddgNBTmB5ZvWrhxWoNf2pL6Q-4XC4LY=&xsec_source=pc_share"
        },
      ]
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-8">
        {videoCollections.map((collection, index) => (
          <div key={collection.title} className={index > 0 ? 'mt-16' : ''}>
            <h1 className="text-3xl font-bold mb-8 text-left">{collection.title}</h1>
            <CardRow cards={collection.videos} />
          </div>
        ))}
      </div>
    </div>
  );
}