
interface MostReadNews{
    id: string
    title: string
}
const MostRead = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read")
    const data = await res.json()
    const news : MostReadNews[] = data.data
    return (
        <div className="card m-2 p-6 border border-gray-500">
            <h1 className="font-bold text-2xl ">
                সর্বাধিক পঠিত
            </h1>
            <div className="grid gap-4 mt-4">
                {
                    news.map((n,i)=> <div key={n.id} className="flex gap-2">
                        <p className="font-bold text-red-600 text-xl">{i+1}</p>
                        <h1 className="font-semibold text-xl hover:text-red-500 hover:cursor-pointer">{n.title}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MostRead;