import React, { useState, useEffect } from 'react';

import ReactQuill from 'react-quill';
import Quill from 'quill';
import 'react-quill/dist/quill.snow.css';
import { modules, formats } from '../../QuillConfigs/Comments';
import Parser from 'html-react-parser';
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../../store/actions/postAction';
import { activeArticle } from '../../store/actions/activeArticle';
import moment from 'moment';
import Icon from '../Icons';

import './Comments.css';

import CommentsCard from './CommentsCard/CommentsCard';

const Comments = ({ article, posts, addComment, activeArticle, deleteComment }) => {
  const [description, setDescription] = useState({ editorHtml: '' });
  let initialData = {
    name: '',
    email: '',
    date: new Date(Date.now()),
    image: 'https://dummyimage.com/100.png/09f/fff',
    html: '',
  };

  const [data, setData] = useState(initialData);
  const handleChange = (html) => {
    setDescription({ editorHtml: html });
    console.log(description.editorHtml);
  };
  const formChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSendForm = (e) => {
    e.preventDefault();
    data.id = uuidv4();
    data.html = description.editorHtml;
    console.log(article.id);
    addComment(article.id, data);
    let updatedArticle = posts.find((post) => post.id === article.id);
    activeArticle(updatedArticle);
    // console.log(data);
  };
  const handleResetForm = () => {
    setData(initialData);
    setDescription({ editorHtml: '' });
  };
  const deleteCommentAndUpdate = (commentId) => {
    let newComments = comments.filter((el) => el.id !== commentId);
    deleteComment(article.id, commentId);
    article.comments = newComments;
    console.log(article.id);
    console.log(commentId);
    console.log(newComments);
  };
  const input = React.createRef();
  let { comments } = article || [];
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div className="comments-container">
      {!comments || comments.length === 0 ? (
        <span style={{ fontStyle: 'italic', fontSize: '75%' }}>
          No comments yet. Be first and add a comment
        </span>
      ) : (
        comments.map((comment) => (
          <div data-aos="fade-right" className="comments-card-wrapper" key={comment.id}>
            <CommentsCard
              comment={comment}
              articleId={article.id}
              deleteComment={deleteCommentAndUpdate}
            />{' '}
          </div>
        ))
      )}

      {/* INSERTING CARDS FOR COMMENT */}
      {/* FORM AND EDITOR GOES DOWN */}
      <div className="unnamed">
        <button className="btns-btn btn-add" onClick={() => setShowEditor(!showEditor)}>
          {!showEditor ? 'Add a Comment' : 'Close Editor'}
        </button>
      </div>
      {showEditor && (
        <form className="input-form">
          <div className="input-form__user-details">
            <div className="input-text">
              <input
                type="text"
                value={data.name}
                name="name"
                autoComplete="off"
                required
                onChange={(e) => formChange(e)}
              ></input>
              <label className="input-text__label" htmlFor="name">
                <span className="input-text__title "> Name</span>
              </label>
            </div>
            <div className="input-text">
              <input
                type="text"
                name="email"
                autoComplete="off"
                required
                value={data.email}
                onChange={(e) => formChange(e)}
              ></input>
              <label className="input-text__label" htmlFor="email">
                <span className="input-text__title ">Email</span>
              </label>
            </div>
            <div className="input-text">
              <input
                type="text"
                value={data.image}
                name="image"
                autoComplete="off"
                required
                onChange={(e) => formChange(e)}
              ></input>
              <label className="input-text__label" htmlFor="name">
                <span className="input-text__title "> Your Avatar Image URL</span>
              </label>
            </div>
          </div>

          <ReactQuill
            ref={input}
            onChange={handleChange}
            modules={modules}
            formats={formats}
            placeholder="Insert text here. Supports Rich Editor Options"
          />
          <div className="input-form__btns">
            <button
              style={{ margin: '0 1rem' }}
              className="btns-btn btn-send"
              onClick={(e) => handleSendForm(e)}
            >
              <span>Add Comment</span>
              <span className="btn-svg">
                <Icon name="comment" width="1.8rem" fill={`var(--color-succes)`} />
              </span>
            </button>

            <button className="btns-btn btn-delete" onClick={handleResetForm}>
              <span>Reset Info</span>
              <span className="btn-svg">
                <Icon name="delete" width="1.8rem" fill="red" />
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({ article: state.article, posts: state.posts });
export default connect(mapStateToProps, { addComment, activeArticle, deleteComment })(
  Comments
);
