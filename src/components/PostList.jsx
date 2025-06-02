import { Post } from './Post';
import './PostList.css';

export function PostList({ Posts }) {
  return (
    <ul className="PostList">
      {Posts.map((post) => (
        <li key={post.id} className="PostList-Item">
          <Post
            title={post.title}
            author={post.author}
            date={post.date}
            summary={post.summary}
          />
        </li>
      ))}
    </ul>
  );
}
export default PostList;
