import MessageBoardApp from './components/MessageBoard.js';
import CommentList from './components/Comments.js';
import CommentItem from './components/Comment.js';

customElements.define('message-board-app', MessageBoardApp);
customElements.define('message-board-comment-item', CommentItem);
customElements.define('message-board-comment-list', CommentList);
