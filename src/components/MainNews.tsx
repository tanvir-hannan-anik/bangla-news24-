import { discoverValidationDepths } from 'next/dist/server/app-render/instant-validation/instant-validation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface News {
    id: string
    title: string
    imageUrl: string
    imageAlt: string
    description: string
    category: string
    firstPublished: string
}

const MainNews = ({ news }: { news: News[] }) => {
    const firstNews = news[0];

    const otherNews = news.slice(1, 5);

    return (
        <div className='flex gap-2'>
            <Link href={`/news/${firstNews.id}`}>
                <div className="card bg-base-100 w-96 shadow-sm my-5">
                    <figure>
                        <Image
                            src={firstNews.imageUrl}
                            height={600}
                            width={600}
                            alt={firstNews.imageAlt || firstNews.title}
                        />
                    </figure>

                    <div className="card-body">
                        <p className='text-red-600 font-semibold'>{firstNews.category}</p>
                        <h2 className="card-title">{firstNews.title}</h2>
                        <p>{firstNews.description}</p>
                        <small className='text-gray-500'>{firstNews.firstPublished}</small>
                    </div>
                </div>
            </Link>
            

                <div className="card-body border border-gray-300 rounded-2xl  mt-4" >
                    {
                        otherNews.map(n => (
                            <div key={n.id} >
                                <Link href={`/news/${n.id}`}>
                                <div className='grid gap-2 p-3'>
                                    <p className='text-red-600 font-semibold'>{n.category}</p>
                                    <h2 className="card-title">{n.title}</h2>
                                </div>
                                </Link>
                            </div>
                            
                        ))
                    }
                </div>
        </div>
    );
};

export default MainNews;