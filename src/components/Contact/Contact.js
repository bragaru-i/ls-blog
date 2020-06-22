import React, { useState } from 'react';

import { emailjsConfig } from '../../configs';

import './Contact.css';
import Icon from '../Icons';
import emailjs from 'emailjs-com';
const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const [sendState, setSendState] = useState('Send');

  const handleSendForm = (e) => {
    e.preventDefault();
    console.log('pressed');

    emailjs
      .send(emailjsConfig.service, emailjsConfig.template, data, emailjsConfig.userID)
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          setSendState('SENT');
        },
        function (error) {
          console.log('FAILED...', error);
          setSendState('FAIL');
        }
      );
  };
  return (
    <section id="contact">
      <form className="input-form contact-form" onSubmit={handleSendForm}>
        <h2>Leave us a message</h2>
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
        <textarea
          name="message"
          onChange={(e) => formChange(e)}
          placeholder="Your message here"
        ></textarea>
        <div className="form-actions">
          <button className="btns-btn btn-send" type="submit">
            <span> {sendState}</span>{' '}
            <span className="btn-svg">
              <Icon name="mail" width="1.7rem" fill={`var(--color-succes)`}></Icon>{' '}
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
