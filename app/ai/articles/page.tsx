// app/blog/page.tsx
"use client";

import { Card } from "@nextui-org/react";
import clsx from "clsx";  


interface Article {
  title: string;
  publishDate: string;
  articleUrl?: string;
}

interface GroupedArticles {
  [year: string]: Article[];
}

const ArticlesPage = () => {

  const articles: Article[] = [
    { title: "国内头部10家大模型产品，怎么选（用户体验分享）", publishDate: "2024-07-04", articleUrl: "https://mp.weixin.qq.com/s/N6984t9r3f5Bazr6e-eKhA" },
    { title: "5个头部AI剪辑工具怎么选，一键成大片", publishDate: "2024-07-17", articleUrl: "https://mp.weixin.qq.com/s/r_PbZQKsCa5tSSBt78oKzg" },
    { title: "泪目的拥抱亲人AI视频怎么做？详细教程分享", publishDate: "2024-07-23", articleUrl: "https://mp.weixin.qq.com/s/WV_31jbjb10IMqYzL1T9Pw" },
    { title: "用上豆包拍照写代码的功能，我无代码开发了个人网站【多图解析过程】", publishDate: "2024-12-22", articleUrl: "https://mp.weixin.qq.com/s/3pPN0Yr56mKMiAkRIamW0g" },
    { title: "2024 年回顾：用心的人，会在AI 时代有胜算", publishDate: "2024-12-30", articleUrl: "https://mp.weixin.qq.com/s/3pPN0Yr56mKMiAkRIamW0g" },
    { title: "火爆的deepseek，1/10的价格追赶 ChatGPT 的性能｜AI 产品测评", publishDate: "2025-01-08", articleUrl: "https://mp.weixin.qq.com/s/A_ZiTKQLq2vPds66z3RFdw" },
  ];

  // 按年份分组
  const groupedArticles = articles.reduce((acc: GroupedArticles, article) => {
    const year = article.publishDate.split('-')[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(article);
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {Object.entries(groupedArticles)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, articles]) => (
          <div key={year} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-left">{year} 年</h2>
            <div className="space-y-4">
              {articles
                .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
                .map((article) => (
                  <Card 
                    key={article.title}
                    className={clsx(
                      "p-4 w-full transition-colors",
                      "hover:bg-gray-200 dark:hover:bg-gray-800" // 添加暗色主题样式
                    )}
                    isPressable
                    onPress={() => window.open(article.articleUrl, '_blank')} 
                  >
                    <div className="flex gap-6">
                      <time className="text-default-500 flex-shrink-0">
                        {new Date(article.publishDate).toLocaleDateString('zh-CN', {
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <h3 className="text-lg font-medium truncate flex-1">
                        {article.title}
                      </h3>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ArticlesPage;
