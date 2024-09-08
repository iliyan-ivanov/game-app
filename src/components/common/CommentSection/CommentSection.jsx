import "./CommentSection.css";

const CommentSection = (props) => {

  return (
    <section className="game-details-comments-section">
      <form onSubmit={props.onAddComment} className="game-details-form">
        <h4>Write your comment here:</h4>
        <input
          type="text"
          name="user"
          placeholder="Name"
          className="game-details-input-name"
        />
        <input
          type="text"
          name="comment"
          placeholder="Comment here..."
          className="game-details-comments-input"
        />
        <button type="submit" className="add-comment-btn">Add comment</button>
      </form>

      {!props.comments ? (
        <h3>No comments...</h3>
      ) : (
        <article className="game-details-comments">
          <h3>Comments</h3>
          {props.comments?.map((comment) => (
            <article
              className="game-details-comment-container"
              key={comment.id}
            >
              <h4>{comment.user}</h4>
              <p>{comment.comment}</p>
            </article>
          ))}
        </article>
      )}
    </section>
  );
};

export default CommentSection;
