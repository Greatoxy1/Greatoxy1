import './App.css';
import { Header } from './components/Header';
import { PostList } from './components/PostList';


const posts = [
  { id: 1, title: 'My First Post', author: 'Alex', date: '2024-06-19' },
  { id: 2, title: 'Second Post', author: 'Casey', date: '2024-06-20' },
  { id: 3, title: 'Third Post', author: 'Jordan', date: '2024-06-21' },
  { id: 4, title: 'Fourth Post', author: 'Taylor', date: '2024-06-22' },
  { id: 5, title: 'Fifth Post', author: 'Morgan', date: '2024-06-23' },
  { id: 6, title: 'Sixth Post', author: 'Jamie', date: '2024-06-24' },
  { id: 7, title: 'Seventh Post', author: 'Riley', date: '2024-06-25' },
  { id: 8, title: 'Eighth Post', author: 'Drew', date: '2024-06-26' },
];

export function App() {
  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
    </div>
  );
}