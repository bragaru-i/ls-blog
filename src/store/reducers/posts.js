import { POST_ADD, POST_REMOVE, COMMENT_ADD, COMMENT_DELETE } from '../actions/types';
const initialState = [];
const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_ADD:
      return [{ ...payload }, ...state];

    case POST_REMOVE:
      return state.filter((article) => article.id !== payload);

    case COMMENT_ADD: {
      const { id, comment } = payload;
      console.log(id);
      return state.map((item) => {
        if (!item.comments) item.comments = [];
        if (item.id === id) {
          console.log('match');
          item.comments = [...item.comments, { ...comment }];
        }
        console.log(item);
        return item;
      });
    }
    case COMMENT_DELETE: {
      const { articleId, commentId } = payload;
      const article = state.find((el) => el.id === articleId);
      const comments = article.comments.filter((comment) => comment.id !== commentId);

      article.comments = [...comments];
      return state.map((item) => {
        if (item.id === articleId) item = { ...article };
        return item;
      });
    }

    default:
      return state;
  }
};

export default postReducer;
