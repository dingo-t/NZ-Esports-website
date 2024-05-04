import React from 'react';
import './article-main.css'; 


// This component the hero section for the home page of the website
function ArticleMain(props) {
  return (
    <div className='article-cont'>
        <div className='article-title'>{props.title}</div>
        <div className='article-body-text'>{props.body}</div>
    </div>
  );
}

export default ArticleMain; 
