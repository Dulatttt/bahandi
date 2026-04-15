
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PostDetailPage from "./components/PostDetailPage";
import PostList from "./components/PostList";
function App() {
  return (
     <div>

      <Header/>
    <Routes>

      <Route path="/" element={<PostList/>}/>
    
      <Route  path="/categories" element={<Categories/>}/>
       <Route path="/post/:id" element={<PostDetailPage/>}/>





    </Routes>
   </div>
   

    
  );
}

export default App;
