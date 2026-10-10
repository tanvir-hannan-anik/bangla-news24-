import NewsCard from '@/components/NewsCard';
import { notFound } from 'next/navigation';
interface News {
    id: string;
    imageUrl: string;
    imageAlt: string;
    title: string;
    category: string;
    description: string;
}


interface CategoryNewsPageProps {
    params: Promise<{
        categoryId: string;
    }>;
}
const CategoryNewsPage = async ({ params }: CategoryNewsPageProps) => {
    const { categoryId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json()
    const news: News[] = data.data
    if (!news) {
        notFound()
    }
    return (
        <div className='container mx-auto'>
            <h1 className='border-b-2 border-red-700 font-bold text-2xl m-5'>{data.title}</h1>
            <div className='grid grid-cols-3 gap-6 mt-4 m-10 p-5'>
                {
                    news.map(n => <NewsCard key={n.id} news={n}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNewsPage;