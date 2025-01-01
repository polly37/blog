import { Card, CardBody, CardFooter, CardHeader, Chip, Link,Image } from "@nextui-org/react";

export interface ArticleProps {
  title: string;
  summary: string;
  publishDate: string;
  author:string;
  tags: string[];
  articleUrl?: string;
}

export const ArticleCard = ({
  title,
  summary,
  publishDate,
  author,
  tags,
  articleUrl
}: ArticleProps) => (
  <Card className="w-full">
    <CardHeader className="flex flex-col items-start gap-4 px-6 pt-6">
      {/* 标题部分 */}
      <h1 className="text-2xl font-bold text-left">
          {title}
      </h1>
      
      {/* 作者和日期信息 */}
      <div className="flex items-center gap-3 text-base text-default-500">
        <span>{author}</span>
        <span>•</span>
        <div className="flex items-center gap-1">
          <Image 
            src="/images/calendar.png"
            alt="calendar"
            width={16}
            height={16}
            className="opacity-60"
          />
          <time>{publishDate}</time>
        </div>
      </div>
    </CardHeader>
    <CardBody className="px-6 py-4">
      <div className="flex items-baseline"> {/* 使用 flex 布局 */}
        <span className="text-default-500">
          {summary}
          {/* 添加一个空格 */}
          &nbsp;&nbsp;&nbsp;
          <Link 
            href={articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center text-primary text-lg group relative"
            >
              <span>阅读全文</span>
              <div className="h-0.5 w-full bg-gray-200 group-hover:bg-yellow-400 transition-colors" />
          </Link>
        </span>
      </div>
    </CardBody>
    
    <CardFooter className="px-6 pb-6">
      <div className="flex gap-2">
        {tags.map((tag) => (
          <Chip key={tag} size="sm" variant="flat">
            {tag}
          </Chip>
        ))}
      </div>
    </CardFooter>
  </Card>
);

export const ArticleRow = ({ articles }: { articles: ArticleProps[] }) => (
  <div className="grid grid-cols-1 gap-6">
    {articles.map((article) => (
      <ArticleCard key={article.title} {...article} />
    ))}
  </div>
);

export default ArticleCard;