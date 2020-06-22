import { ACTIVE_ARTICLE } from '../actions/types';

const article = (state = {}, { type, payload }) => {
  switch (type) {
    case ACTIVE_ARTICLE:
      return {
        ...payload,
      };
    default:
      return state;
  }
};
export default article;
