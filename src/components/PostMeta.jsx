import './PostMeta.css';

export function PostMeta({ author, date ,summary }) {
  return (
    <div className="PostMeta">
      <span className="PostMeta-author">from {author}</span>
      <span className="PostMeta-date">
        on <time>{date}</time>
      </span>
      {summary && <span className="PostMeta-summary"> - {summary}</span>}
    </div>
  );
}
export default PostMeta;