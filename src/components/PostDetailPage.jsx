import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetailPage(){
    const {id}=useParams();


    const [commentText, SetCommentText]=useState('');
    const [isSubmitting, SetIsSubmitting]=useState(false)
    const [submitMessage, SetSubmitMessage]=useState('')

    async function SubmitComment(e) { 

        e.preventDefault();

        if(!commentText.trim()){
            SetSubmitMessage('Комментарий не может пустым');
            return
        }
        SetIsSubmitting(true)
        SetSubmitMessage('Отправка комментария')


        try{
            const comment='https://e7e5954563b5bfc5.mokky.dev/comments'

            const CommentData={
                postId:id,
                text:commentText,
                createdAt:new Date().toISOString()
            }
            const response=await axios.post(comment,CommentData )

            SetSubmitMessage("Комментарий успешно добавлен")
            SetCommentText('')


        }
        catch(error){
            console.log(error)
        }
        finally{
            SetIsSubmitting(false)
            
        }
        
    }

const [news, Setnews]=useState({})
    useEffect(()=>{
         async function fetchpost() {
                
                const response=await axios.get(`https://e7e5954563b5bfc5.mokky.dev/posts/${id}`)
                console.log(response.data)
                Setnews(response.data)
    } 
fetchpost();
},[id])
    return(
        <div>
            <h1>{news.title}</h1>
             <h1>{news.date}</h1>
              <h1>{news.category}</h1>
              <img src={news.image} alt="" />



              <form onSubmit={SubmitComment}>
                <label htmlFor="comment">Введите комментарий</label>
                <input type="text" id="comment" value={commentText}  onChange={(e)=>{SetCommentText(e.target.value)}} />

                <button type="submit" disabled={isSubmitting}> {isSubmitting ? 'Отправка коммента':  'Отправить'}</button>
              </form>

        </div>
    )
}

export default PostDetailPage;