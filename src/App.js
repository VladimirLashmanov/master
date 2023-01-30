import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'
import {postServices} from "./services";

const App = () => {


  const[userDetails,setUserDetails] = useState(null)

    const[posts,setPosts] = useState([])

    const getUserId = async (userId)=>{
     const {data} =  await   postServices.getPostByUserId(userId)
        setPosts(data)
    }

    const trigger=()=>{
      setPosts([])
    }
    return (
        <div>
            <div className={css.wrap}>
                <Users setUserDetails={setUserDetails} trigger={trigger}  />
                {userDetails && <UserDetails userDetails={userDetails} getUserId={getUserId} />}
            </div>

            <hr/>
            <Posts posts={posts}  />
        </div>
    );
};

export default App;