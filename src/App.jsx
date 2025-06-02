import './App.css';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { Post } from './components/Post';
import { uid } from 'uid';
import { useState } from 'react';


const initialPosts = [
    { id: 1, title: "My First Post", author: "Alex", date: "2024-06-19", summary: "A brief overview of my first experience."},
    { id: 2, title: "Second Post", author: "Casey", date: "2024-06-20", summary: "Details on the second encounter and its impacts."},
    { id: 3, title: "Third Post", author: "Jordan", date: "2024-06-21", summary: "Insights and takeaways from the third discussion."}
];
export function App() {
   const [Posts, setPosts] = useState(initialPosts);

function addPost( newItem ) {
    setPosts(
        [
            ...Posts,
            { id: uid(), ...newItem }
        ]
    )
}
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    console.log(fields);
    
    addPost({
        title: fields.title
         
    });

    event.target.reset();
}

  return (
    <div className="App">
      <Header />
      <PostList Posts={Posts} /> 
          <div className ="App-addPost">
            <form onSubmit={(e) => handleFormSubmit(e)}> 
     <div className="App-headline">Add new Post</div>    
<label htmlFor="post-title">Post Title  </label>
<input id ="post-title" name="title" />

<label htmlFor="post-author">Author</label>
<input id="post-author" name="author" />

<label htmlFor="post-date">Date</label>
<input id="post-date" name="date" type="date" />

<label htmlFor="post-summary">Summary</label>
<textarea id="post-summary" name="summary"></textarea>
</form>
    </div>
    </div>
    
  );
}
export default App;