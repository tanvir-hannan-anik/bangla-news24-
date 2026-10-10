import Link from 'next/link';

interface Navs{
    slug:string
    title: string
    topicId  :string|null
    url: string
    scrapable: boolean
}

const NavLinks = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories")
    const data = await res.json()
    const navs:Navs[] = data.data
    const filterData = navs.filter(n => n.scrapable)
    return (
        <div className='flex justify-center items-center gap-5 mt-2'>
            <Link href={"/"} className="whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-red-50 hover:text-red-700">হোম</Link>
            {
                filterData.map((n, i) => {
                    return <Link className="whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-red-50 hover:text-red-700" key={i} href={`/category/${n.slug}`}>{n.title}</Link>
                })
            }
        </div>
    );
};

export default NavLinks;