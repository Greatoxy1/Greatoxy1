import { uid } from 'uid';
import './App.css';
import { useState } from 'react';


const initialPosts = [
    { id: 1, title: "My First Post", author: "Alex", date: "2024-06-19", summary: "A brief overview of my first experience."},
    { id: 2, title: "Second Post", author: "Casey", date: "2024-06-20", summary: "Details on the second encounter and its impacts."},
    { id: 3, title: "Third Post", author: "Jordan", date: "2024-06-21", summary: "Insights and takeaways from the third discussion."}
];

export function App() {
  
  
    
   const [posts, setPosts] = useState(initialPosts);

   function addPost( newItem ) {
    setPosts(
        [
            ...posts,
            { id: uid(), ...newItem }
        ]
    )
}


function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    console.log(fields);
    
    <form onSubmit={(e) => handleFormSubmit(e)}> </form>
    

    event.target.reset();
}

  return (
    <div className="App">
      <h1>new post</h1>
    

      <label htmlFor ="post-title">Post Title</label>
      <inpute id ="post-title" name="title"/>

      <label htmlFor ="post-author">Post Author</label>
      <inpute id ="post-author" name="author"/>
      <label htmlFor ="post-date">Post Date</label>
      <inpute id ="post-date" name="date"/>
      <label htmlFor ="post-summary">Post Summary</label>
      <inpute id ="post-summary" name="summary"/>

      <button hundlesubmit={handleFormSubmit}>add post</button>
      <butonn> onClick={() => setPosts(initialPosts)}={addPost}Reset/</butonn>
        
     <PostList posts={posts} />
    </div>
  );
}
export default App;