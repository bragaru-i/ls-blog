import React from 'react';
import './index.css';
import Delete from './icons/delete.jsx';
import Tweeter from './icons/tweeter.jsx';
import VK from './icons/vk';
import Messenger from './icons/messenger';
import Heart from './icons/heart';
import Instagram from './icons/instagram';
import Facebook from './icons/facebook';
import Preview from './icons/preview';
import Close from './icons/close';
import MenuToggler from './icons/menu-toggler';
import ScrollUp from './icons/scroll-up';
import ScrollDown from './icons/scroll-down';
import Comment from './icons/comment';
import Phone from './icons/phone';
import Mail from './icons/mail';
const Icon = (props) => {
  switch (props.name) {
    case 'comment':
      return <Comment {...props} />;
    case 'mail':
      return <Mail {...props} />;
    case 'phone':
      return <Phone {...props} />;
    case 'menu-toggler':
      return <MenuToggler {...props} />;
    case 'delete':
      return <Delete {...props} />;
    case 'tweeter':
      return <Tweeter {...props} />;
    case 'vk':
      return <VK {...props} />;
    case 'messenger':
      return <Messenger {...props} />;
    case 'heart':
      return <Heart {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'preview':
      return <Preview {...props} />;
    case 'close':
      return <Close {...props} />;
    case 'scroll-up':
      return <ScrollUp {...props} />;
    case 'scroll-down':
      return <ScrollDown {...props} />;
    default:
      return;
  }
};
export default Icon;
