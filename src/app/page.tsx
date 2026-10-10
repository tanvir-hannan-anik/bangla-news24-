import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IotherSection {
  curationId: string
  title: string
  articles: {
    id: string
    title: string
    imageUrl: string
    imageAlt: string
    category: string
    description: string
  }[]
}

export default async function Home() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );
  const data = await res.json();
  const news = data.data[0].articles;

  const otherSection: IotherSection[] = data.data.slice(1)


  return (
    <div>
     

      <div className="container mx-auto grid grid-cols-3">
        <div className="col-span-2">
          <MainNews news={news} />
          <div>
            {
              otherSection.map((os) => <div key={os.curationId} className="py-2 mt-2"><h1 className="border-b-2 border-red-700 font-bold text-2xl">{os.title}</h1>
                <div className="grid grid-cols-3 gap-2">
                  {
                    os.articles.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                  }
                </div>
              </div>)
            }
          </div>
        </div>

        <div className="col-span-1">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}