import './App.css';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { Post } from './components/Post';



export function App() {
  return (
    <div className="App">
      <Header />
            <Post
        title="Third Post"
        author="Jordan"
        date="2024-06-21"
        summary="Details on the third topic and related insights."
      />
      <Post
        title="Second Post"
        author="Casey"
        date="2024-06-20"
        summary="Details on the second encounter and its impacts."
      />
      <Post
        title="My First Posting"
        author="Alex"
        date="2024-06-19"
        summary="Insights and takeaways from the third discussion."
      />
    </div>
    
  );
}