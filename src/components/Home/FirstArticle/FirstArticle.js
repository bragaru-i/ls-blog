import React, { useState, useEffect } from 'react';
import Parser from 'html-react-parser';
import moment from 'moment';

import Icon from '../../Icons';
import './FirstArticle.css';
import Comments from '../../Comments/Comments';
import { activeArticle } from '../../../store/actions/activeArticle';
import { connect } from 'react-redux';

const FirstArticle = ({ article, activeArticle }) => {
  const { date, data, html, comments } = article;
  const [openComments, setOpenComments] = useState(false);

  useEffect(() => {
    activeArticle(article);
  }, []);

  return (
    <React.Fragment>
      <div className="first-article">
        <div className="first-article__title">
          <h2>{data.title}</h2>
        </div>

        <div className="first-article__body">{Parser(html)}</div>
        <div className="first-article__footer">
          <div className="first-article__footer-author">
            <span className="first-article__footer-author__name">
              {data.name} on {moment(date).format('LL')}
            </span>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenComments(!openComments)}
            >
              Commented ({(comments && comments.length) || 0}) times {'   '}
              <Icon name="comment" width="1.5rem" fill="black" />
            </span>
          </div>
        </div>
      </div>
      <div>
        {openComments && (
          <span className="comments" onClick={() => setOpenComments(!openComments)}>
            <button className="btns-btn">
              {openComments ? 'Close Comments' : `Open Comments`}
            </button>
          </span>
        )}

        {openComments && <Comments />}
      </div>
    </React.Fragment>
  );
};

export default connect(null, { activeArticle })(FirstArticle);
