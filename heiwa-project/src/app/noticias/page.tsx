import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import newslist from "@/lib/newslist";
import { Badge } from "@/components/ui/badge";

export default function Noticias() {
  return (
    <main>
      <div className="flex justify-between items-center">
        <h1 className="text-primary">Notícias</h1>
        <div>
          <Badge variant={"default"} className="text-sm font-light hover:bg-primary">Mais recentes</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-2/3">
        {newslist.map((news) => (
          <Card key={news.id} className="flex flex-row items-center p-4 gap-4">
            <div>
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src={`/news-img/`}
                  alt={`Imagem da notícia ${news.id}`}
                />
                <AvatarFallback>{`Notícia ${news.id}`}</AvatarFallback>
              </Avatar>
            </div>
            <CardContent className="flex flex-col p-0">
              <div className="text-xl font-semibold">{news.title}</div>
              <div className="text-base">{news.description}</div>
              <div className="text-sm text-foreground/70">{news.date}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
