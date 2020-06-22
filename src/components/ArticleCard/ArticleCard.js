import React from 'react';

import './ArticleCard.css';
import Icon from '../Icons';
import moment from 'moment';
import Parser from 'html-react-parser';

let DUMMY_VALUES = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  name: 'Jhon Doe',
  description:
    'Ut congue tincidunt quam. Proin sodales, enim eget convallis pellentesque, tortor nulla posuere purus, at volutpat dolor purus eget purus. Suspendisse ultrices vulputate venenatis. Vivamus dapibus libero eu nisi congue convallis eget nec dui. Nunc nec gravida diam, vitae commodo nibh. Nullam ultrices neque justo, in lobortis nunc gravida vitae. Proin auctor maximus quam, ac malesuada turpis maximus sit amet.Proin eget porttitor enim. Aenean convallis id dolor sed sagittis. In eget laoreet neque, eu venenatis tellus. Phasellus euismod pharetra hendrerit. Aenean id mauris et nisi cursus posuere. Proin vel turpis luctus, tincidunt quam vitae, tristique neque. Proin rhoncus, lectus et commodo laoreet, massa turpis finibus tortor, bibendum ornare ante justo nec ex. Donec eget ex a justo mattis semper aliquet in mi. Duis eu mi nec felis posuere hendrerit quis in felis. Curabitur non arcu et mauris porttitor bibendum et vitae neque. Sed at pretium enim. Curabitur quis ultricies ex. Nulla ac dui at nisl molestie scelerisque in lacinia odio. Fusce ultricies ipsum sit amet maximus volutpat.',
  image: 'https://picsum.photos/200/300',
};

const ArticleCard = ({
  id = 'noid',
  title = DUMMY_VALUES.title,
  description = DUMMY_VALUES.description,
  name = DUMMY_VALUES.name,
  image = DUMMY_VALUES.image,
  height = '25rem',
  removePost,
  date,
  tags,
  comments = [],
}) => {
  return (
    <div style={{ height }} className="article-card">
      <div className="article-card__image">
        <img src={image} alt={title}></img>
      </div>
      <div className="article-card__body">
        <span className="svg-container" onClick={() => removePost(id)}>
          <Icon className="delete" name="delete" width="2.5rem" fill="red" />
        </span>
        <div className="article-card__body-text">
          <h4>{title}</h4>
          <p>{Parser(description)}</p>
        </div>
        <div className="article-card__body-footer">
          <span style={{ fontStyle: 'bold' }}>{tags} </span>
          <span>comments: {comments.length || 0}</span>
          <span>
            {name} at :{moment(date).format('l')}{' '}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
