import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css"
interface Headlines{
    id: string
    title: string
}

const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
    const data = await res.json()
    const headlines:Headlines[]= data.data
    return (
        <div className=" bg-red-600 text-white">
            <div className="container mx-auto flex justify-center items-center">
                <div className="bg-red-800 text-white p-1">
                    সর্বশেষ
                </div>
                <MarqueeText
                    direction="right"
                    duration={10}
                >
                    {
                        headlines.map((h) => <Link href={`/news/${h.id}`} key={h.id}>
                            <span className="mx-5">•</span>
                            <span className="hover:underline">{h.title}</span>
                        </Link>)
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;