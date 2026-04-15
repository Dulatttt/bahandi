import { Link } from "react-router-dom";

function PostCard({post}){
    return(
       <Link to={`post/${post.id}`}>
        <div className="posts">
            <h1>{post.title}</h1>
            <h2>{post.date}</h2>
            <p>{post.category}</p>
        </div>
        </Link>
      
    )
}

export default PostCard;