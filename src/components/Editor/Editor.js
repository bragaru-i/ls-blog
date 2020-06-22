import React, { useState, Fragment } from 'react';
import ReactQuill from 'react-quill';
import Quill from 'quill';
import 'react-quill/dist/quill.snow.css';
import Parser from 'html-react-parser';
import { addPost } from '../../store/actions/postAction';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Icon from '../Icons';

import { modules, formats } from '../../QuillConfigs/Editor';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '6rem',
    left: '4rem',
    overflow: 'auto',
  },
};

const Editor = ({ addPost }) => {
  const [description, setDescription] = useState({ editorHtml: '' });
  let initialData = {
    name: '',
    email: '',
    title: '',
    description: '',
    image: 'https://picsum.photos/200/300',
    html: description.editorHtml,
  };

  const [data, setData] = useState(initialData);

  const handleChange = (html) => {
    setDescription({ editorHtml: html });
  };
  const input = React.createRef();

  const formChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSendForm = (e) => {
    e.preventDefault();
    if (data.name === '') data.name = 'Jhon Doe';
    if (data.title === '') data.title = 'Awesome Article Title';
    if (data.description === '') data.description = 'myblog';
    if (description.editorHtml === '')
      description.editorHtml =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor eget dolor sed interdum. Duis malesuada mi sed dolor ultrices, eu viverra eros porttitor. Nunc euismod tellus non dui rutrum, eget lobortis ipsum ultricies. Aliquam laoreet condimentum elit. Nunc ut malesuada felis, sit amet dapibus sem. Aenean sodales, erat at pellentesque hendrerit, libero turpis viverra augue, tempus efficitur lorem orci eu purus. Mauris in lorem in nunc dignissim vehicula ut sit amet est. Fusce augue mi, fermentum laoreet ex vitae, pretium lacinia justo.';
    const article = { data, html: description.editorHtml };
    addPost(article);
  };
  const handleResetForm = () => {
    setData(initialData);
    setDescription({ editorHtml: '' });
  };
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Fragment>
      <div className="editor-forms">
        <form className="input-form">
          <h2>Add An Article</h2>
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
          </div>
          <div className="input-form__article">
            <div className="input-text">
              <input
                type="text"
                name="title"
                autoComplete="off"
                required
                value={data.title}
                onChange={(e) => formChange(e)}
              ></input>
              <label className="input-text__label" htmlFor="title">
                <span className="input-text__title">Title</span>
              </label>
            </div>
            <div className="input-text">
              <input
                type="text"
                value={data.description}
                name="description"
                autoComplete="off"
                required
                onChange={(e) => formChange(e)}
              ></input>
              <label className="input-text__label" htmlFor="name">
                <span className="input-text__title ">Article tags</span>
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
                <span className="input-text__title ">
                  {' '}
                  Image URL or leave it on default
                </span>
              </label>
            </div>
          </div>
          <div className="input-form__btns">
            <button className="btns-btn btn-send" onClick={(e) => handleSendForm(e)}>
              <span>Post Article</span>
              <span className="btn-svg">
                <Icon name="phone" width="1.8rem" fill={`var(--color-succes)`} />
              </span>
            </button>
            <button
              style={{ margin: '0 1rem' }}
              className="btns-btn btn-preview"
              onClick={openModal}
            >
              <span>Preview Article</span>
              <span className="btn-svg">
                <Icon name="preview" width="1.8rem" fill={`var(--color-preview)`} />
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
      </div>
      {/* RICH EDITOR */}
      <ReactQuill
        ref={input}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Insert text here. Supports image URL and Rich Editor Options"
      />
      {/* PREVIEW MODAL */}
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 className="h2-modal" ref={(_subtitle) => (subtitle = _subtitle)}>
          Preview Article{' '}
          <span onClick={closeModal}>
            <Icon name="close" width="2rem" fill="black" className="close-modal" />
          </span>
        </h2>

        <div className="editor-preview"> {Parser(description.editorHtml)} </div>
      </Modal>
    </Fragment>
  );
};

export default connect(null, { addPost })(Editor);
