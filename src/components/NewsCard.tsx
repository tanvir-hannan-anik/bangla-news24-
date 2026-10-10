import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface News {
    id: string
    imageUrl: string
    imageAlt: string
    title: string
    category: string
    description: string
}
const NewsCard = ({ news }: { news: News }) => {
    return (
        <Link href={`/news/${news.id}`}>
            <div className='flex gap-2'>
                <div className="card bg-base-100 shadow-sm my-5">
                    <figure>
                        {news.imageUrl && (
                            <Image
                                src={news.imageUrl}
                                height={300}
                                width={300}
                                alt={news.imageAlt || news.title}
                            />
                        )}

                    </figure>

                    <div className="card-body">
                        <p className='text-red-600 font-semibold'>{news.category}</p>
                        <h2 className="card-title">{news.title}</h2>
                        <p>{news.description}</p>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default NewsCard;