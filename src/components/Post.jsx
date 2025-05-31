import { IconButton } from "./IconButton";
import { PostMeta } from "./PostMeta";
import { useState } from "react";
import "./Post.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";


export function Post({ title, date, author, summary }) {
  const [ShowSummary, setShowSummary] = useState(false);
  const[Votes, setVotes] =useState (0);

  const toggleSummary = () => {
    setShowSummary(!ShowSummary);
  };

  const handleUpVotes = () => setVotes(Votes + 1);
  const handleDownVotes = () => setVotes(Votes - 1);

  return (
    <div className="Post">
      <h2 className="Post-title">{title}</h2>
      <p className = 'Votes ${Votes < 0 ? "negative" :""}'>
        {Votes} Votes
          </p>
      <div className="Voting-buttons">
        <IconButton icon={FaThumbsUp} onClick={handleUpVotes}>UpVote</IconButton>
        <IconButton icon={FaThumbsDown} onClick={handleDownVotes}>DownVote</IconButton>
      </div>
        <p className="Post-Meta">
          <PostMeta author={author} date={date} />
        </p>

     
    <button className ="toggle-btn" onclick={toggleSummary}>
      {ShowSummary ? "Read Less" : "Read More"}</button>
        {ShowSummary && <p className="Post-summary">{summary}</p>}
      </div>
    
  );
}
export default Post;
