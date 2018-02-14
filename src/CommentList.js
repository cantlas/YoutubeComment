import React from "react";

const CommentList = props => (
  <div>
    {props.comments.map((comment, i) => (
      <p key={i}>
        {comment.user} - {comment.comment}
      </p>
    ))}
  </div>
);

export default CommentList;
