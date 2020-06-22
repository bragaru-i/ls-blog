import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { removePost } from '../../store/actions/postAction';
// import { activeArticle } from '../../store/actions/activeArticle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FirstArticle from './FirstArticle/FirstArticle';
import ArticleCard from '../ArticleCard/ArticleCard';
import './Home.css';

const Home = ({ posts, removePost }) => {
  const [active, setActive] = useState(0);
  const doActive = (index, item) => {
    setActive(index);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <section id="home">
      <div className="home-container row">
        {/* ALWAYS DISPLAY FIRST/LAST ARTICLE */}
        {posts && posts[active] && <FirstArticle article={posts[active]} />}

        {/* START A ARTICLES CARDS */}
        <div className="article-cards">
          {posts &&
            posts.length > 0 &&
            posts.map((item, index) => (
              <div
                data-aos="fade-up"
                className="article_card_wrapper"
                key={item.id}
                onClick={() => doActive(index, item)}
              >
                {' '}
                <ArticleCard
                  title={item.data.title}
                  description={item.html}
                  id={item.id}
                  date={item.date}
                  image={item.data.image}
                  tags={item.data.description}
                  removePost={removePost}
                  comments={item.comments}
                />{' '}
              </div>
            ))}
          {posts.length === 0 && (
            <h2 style={{ height: '10vh' }}>No Articles yet. Add a new ONE!</h2>
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { removePost })(Home);
