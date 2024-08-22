import React from 'react';
import articleContent from "./article-content";
//import { Link } from 'react-router-dom';
//import Article from './Article';

//Components
import Articles from '../components/Articles';

function ArticleList() {
  return (
    <div><h1 className='sm:text-4xl text-2xl font-bold my-6 text-grey-900'>Article
    </h1>
    <div className='container py-4 mx-auto'>
      <div className='flex flex-wrap -m-4'>
        <Articles articles={articleContent}></Articles>
      </div>
    </div>
    </div>
  )
}

export default ArticleList