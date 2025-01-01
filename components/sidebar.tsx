// components/Sidebar.tsx
"use client";

import { Card, CardBody, Avatar, CardHeader,Link } from "@nextui-org/react";

const Sidebar = () => {
  // 最新文章数据
  const recentPosts = [
    { title: "2024 年回顾：用心的人，会在AI 时代有胜算",url: "https://mp.weixin.qq.com/s/3pPN0Yr56mKMiAkRIamW0g" },
    { title: "用上豆包拍照写代码的功能，我无代码开发了个人网站【多图解析过程】",url: "https://mp.weixin.qq.com/s/EJ2CTGqy4UeBJHm19ZGFWg" },
  ];

  return (
    <aside className="space-y-6">
      {/* 个人信息卡片 */}
      <Card className="p-4">
        <CardHeader className="flex gap-3">
          <Avatar src="/images/mingjiewechat.png" size="lg" />
          <div className="flex flex-col">
            <p className="text-lg font-bold">鸣姐</p>
            <p className="text-sm text-gray-500">资深新媒体运营/A实践者</p>
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-sm">
            专注于内容运营、AI实战，用AI创造更多好玩的产品。
          </p>
        </CardBody>
      </Card>

      {/* 最新文章卡片 */}
      <Card className="p-4">
        <CardHeader>
          <h3 className="text-lg font-bold">最新文章</h3>
        </CardHeader>
        <CardBody>
          <div className="space-y-3">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex justify-between">
                <Link
                  href={post.url}
                  className="text-sm text-default-600 hover:text-primary transition-colors"
                  target="_blank"  // 在新标签页打开
                  rel="noopener noreferrer"  // 安全属性
                >
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* 公告卡片 */}
      <Card className="p-4">
        <CardHeader>
          <h3 className="text-lg font-bold">公告</h3>
        </CardHeader>
        <CardBody>
          <p className="text-sm">
            待更新
          </p>
        </CardBody>
      </Card>
    </aside>
  );
};

export default Sidebar;