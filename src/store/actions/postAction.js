import { POST_ADD, POST_REMOVE, COMMENT_ADD, COMMENT_DELETE } from './types';
import { v4 as uuidv4 } from 'uuid';

const addPost = (article) => {
  article.date = Date.now();
  return { type: POST_ADD, payload: { ...article, id: uuidv4() } };
};
const removePost = (id) => {
  return { type: POST_REMOVE, payload: id };
};

const addComment = (id, comment) => {
  return { type: COMMENT_ADD, payload: { comment, id } };
};
const deleteComment = (articleId, commentId) => {
  return { type: COMMENT_DELETE, payload: { articleId, commentId } };
};
export { addPost, removePost, addComment, deleteComment };
