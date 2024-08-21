import React from 'react';
import articleContent from "./article-content";
import { Link } from 'react-router-dom';
//import Article from './Article';

function ArticleList() {
  return (
    <div><h1 className='sm:text-4xl text-2xl font-bold my-6 text-grey-900'>Article
    </h1>
    <div className='container py-4 mx-auto'>
      <div className='flex flex-wrap -m-4'>
        {articleContent.map((article,index)=>(
          <div key={index} className='p-4 md:w-1/2'>
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
              <Link to={`/article/${article.name}`}>
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={article.thumbnail} alt ="blog"/>
              </Link>
              <div className='p-6'>
                <Link key={index} to={`/article/${article.name}`}>
                <h3 className='text-lg font-medium text-gray-900 mb-3'>{article.title}</h3>
                </Link>
                <p className='leading-relaxed mb-3'>
                  {article.content[0].substring(0,115)}
                </p>
                <div classname = "flex item-center flex-wrap">
                  <Link className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' to ={`/article/${article.name}`}>
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ArticleList