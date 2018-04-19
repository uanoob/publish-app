export default {
  articlesList: response => ({
    type: 'ARTICLES_LIST_ADD',
    payload: { response },
  }),
};
