import { Card,Link } from "@nextui-org/react";

export interface CustomCardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  views?: string;
  duration?: string;
}

export const CustomCard = ({
  title,
  description,
  imageUrl,
  videoUrl,

}: CustomCardProps) => (
  <Card className="w-[300px] h-[400px] p-6" radius="lg">
    <div className="space-y-6">
      {/* 图片区域 */}
      <div className="relative h-[260px] rounded-lg overflow-hidden">
        <Link 
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative h-50 rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      {/* 文字内容区域 */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold line-clamp-2">{title}</h3>
        <p className="text-lg line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  </Card>
);

export const CardRow = ({ cards }: { cards: CustomCardProps[] }) => (
  <div className="w-full"> 
    {/* 滚动容器 - 只在这一层滚动 */}
    <div className="flex gap-6 overflow-x-auto pb-4
      snap-x snap-mandatory
      hover:cursor-grab active:cursor-grabbing
      scrollbar-hide
      px-4" 
    >
      {cards.map((card, index) => (
        <div key={index} 
          className="flex-none snap-center"
        >
          <CustomCard {...card} />
        </div>
      ))}
    </div>
  </div>
);

export default CustomCard;