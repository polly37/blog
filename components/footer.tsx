"use client";

import {Tooltip, Button, User, Link} from "@nextui-org/react";
import clsx from "clsx"; 
const Footer = () => {
  const contacts = [
    { label: '抖音:1945635292', url: 'https://www.douyin.com/user/MS4wLjABAAAAhyR2vsv8LfSJt9Wk0wNjYru-bmv6cT_hfxXAmL0nx6U?from_tab_name=main' },
    { label: '小红书:966671127', url: 'https://www.xiaohongshu.com/user/profile/5c8ba51700000000110306da?xsec_token=ABvgBoQ3fALA4yL-JnlTaIoWp0wj98zqWzaFf3DwTvpj8%3D&xsec_source=pc_search' },
    { label: '即刻', url: 'https://okjk.co/5MfSKY' }, 
  ];

  return (
    <footer className={clsx(
      "py-8 mt-auto",
      "relative w-full" 
    )}>
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-8 text-center">更多渠道联系我</h2>
        <div className="flex justify-between gap-4">
           {/* 左侧栏 - 占据 1/4 宽度 */}
          <div className="w-1/4">
            <div className="space-y-2">
              {/* 上方图片 */}
              <div className="flex items-center gap-2">
                <img
                  src="/images/mingjie.jpg"
                  alt="图片1描述"
                  className="w-14 h-14 object-contain rounded-lg"
                />
                <p>
                  公众号:鸣姐拥抱AI
                </p>
              </div>
              {/* 下方图片 */}
              <div className="flex items-center gap-2">
                <img
                  src="/images/shipinhao.png"
                  alt="图片2描述"
                  className="w-14 h-14 object-contain rounded-lg"
                />
                <p>
                视频号:鸣姐.AI进阶
                </p>
              </div>
            </div>
          </div>

          {/* 中间栏 - 占据 1/1 宽度 */}
          <div className="w-1/2 flex justify-center">
            <div className="flex flex-col items-start space-y-2">
              {contacts.map((contact) => (
                <Tooltip key={contact.label} color="secondary" content={contact.label}>
                  <Button className={clsx(
                                "w-80",
                                "bg-amber-200 hover:bg-yellow-300", // 自定义背景色
                                "dark:bg-violet-800 dark:hover:bg-violet-400" // 暗色模式下的颜色
                              )} variant="flat"
                              as={Link}
                              href={contact.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                      {contact.label}
                  </Button>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* 右侧栏 - 占据 1/4 宽度 */}
          <div className="w-1/4">
            <div className="space-y-2">
              <User
                avatarProps={{
                  src: "/images/mingjiewechat.png",
                }}
                description={
                  "公众号后台留言【入群】"
                }
                name="鸣姐的AI交流群"
              />
              <img
                  src="/images/shequn.jpeg"
                  alt="图片2描述"
                  className="w-20 h-20 object-contain rounded-lg"
                />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

