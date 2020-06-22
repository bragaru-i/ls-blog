import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import './CommentsCard.css';
import Icon from '../../Icons';
import moment from 'moment';
import Parser from 'html-react-parser';

const CommentsCard = ({ comment, deleteComment, articleId }) => {
  return (
    <div className="comments-card">
      <div className="comments-card__avatar">
        <div className="comments-card__avatar-photo">
          {<img src={comment.image} alt={comment.name} /> || 'No avatar'}
        </div>
        <div className="comments-card__avatar-time">
          at: {moment(comment.date).format('l')}
        </div>
      </div>
      <div className="comments-card__body">
        <div className="comments-card__body-author">{comment.name || 'unnamed'}</div>
        <div className="comments-card__body-text"> {Parser(comment.html) || ''}</div>
        <div
          style={{ cursor: 'pointer' }}
          className="comments-card__body-actions"
          onClick={() => deleteComment(comment.id)}
        >
          Delete this comment
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ article: state.article });
export default connect(mapStateToProps)(CommentsCard);
