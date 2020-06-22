import { ACTIVE_ARTICLE } from './types';

const activeArticle = (article) => ({ type: ACTIVE_ARTICLE, payload: article });
export { activeArticle };
