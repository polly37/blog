'use client' 

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

const highlightWords = {
  "500 万+ ": true,
  "百万销售": true,
  "3000+": true,
  "期待与你链接......": true
};

const AnimatedLine = ({ text, lineIndex }: { text: string, lineIndex: number }) => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };


  const highlightPositions = new Set<number>();
  for (const word of Object.keys(highlightWords)) {
    let startPos = text.indexOf(word);
    while (startPos !== -1) {
      // 将这个词的每个位置都标记为高亮
      for (let i = 0; i < word.length; i++) {
        highlightPositions.add(startPos + i);
      }
      startPos = text.indexOf(word, startPos + 1);
    }
  }

  return (
    <div className="overflow-hidden text-xl font-regular">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.3,  // 每个字的动画持续时间
            delay: lineIndex * 2 + index * 0.1,  // 行延迟 + 字符延迟
            ease: [0.22, 1, 0.36, 1]  // 使用自定义缓动函数使动画更丝滑
          }}
          className={highlightPositions.has(index) ? "text-yellow-500" : ""}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default function Home() {
  
  const lines = [
    "Hi，我是鸣姐，一个 7 年从业经验的新媒体运营",
    "曾经在大厂运营过 500 万+ 粉丝的商业媒体矩阵",
    "也曾从 0 到 1 做短视频矩阵，直播+短视频策略达成百万销售",
    "我的 AI 自媒体，分享实战经验，收获 3000+粉丝",
    "借助 AI 做了个人网站，分享关于AI和运营的更多经验",
    "期待与你链接......"
  ];

  return (
    <section className="flex flex-col items-center justify-center py-8 px-6">
      <div className="max-w-4xl mx-auto text-left space-y-4">
        {lines.map((line, index) => (
          <AnimatedLine key={index} text={line} lineIndex={index} />
        ))}
      </div>

      <motion.div 
        className="flex gap-3 mt-12 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: lines.length * 2 }} // 等所有文字动画完成后显示按钮
      >

        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          欢迎浏览我的中文简历
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          欢迎浏览我的英文简历
        </Link>
      </motion.div>
    </section>
  );
}
