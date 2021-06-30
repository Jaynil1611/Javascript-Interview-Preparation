// sample data for reddit comments (flatened list of comments connected by parent_id)
const flatenedComments = [
  {
    id: 1,
    parent_id: null,
  },
  {
    id: 2,
    parent_id: null,
  },
  {
    id: 3,
    parent_id: 1,
  },
  {
    id: 4,
    parent_id: 2,
  },
  {
    id: 5,
    parent_id: 4,
  }
];

const getComments = (commentsList, parentId = null) =>
  commentsList
    .filter(comment => comment.parent_id === parentId)
    .map(comment => ({ ...comment, children: getComments(commentsList, comment.id) }))


const nestedComments = getComments(flatenedComments);

console.log(JSON.stringify(nestedComments));