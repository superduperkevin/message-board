export default class CommentList extends HTMLElement {
  static get observedAttributes() {
    return ['comments'];
  }

  get comments() {
    if (this.hasAttribute('comments')) {
      // transforms string attribute back into an array
      return JSON.parse(this.getAttribute('comments'));
    }
    return [];
  }
  // allows us to set "comments" attribute by using this.comments = newVal
  set comments(val) {
    this.setAttribute('comments', JSON.stringify(val));
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '';
    this.comments.forEach(comment => {
      const newComment = document.createElement('message-board-comment-item');
      // set its comment attribute
      // newComment.setAttribute('comment', JSON.stringify(comment));
      newComment.comment = comment;
      // append it to comment list
      this.appendChild(newComment);
    });
  }

  // listens for changes on observed attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }
}
