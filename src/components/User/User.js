import React from 'react';

const User = ({user,setUserDetails,trigger}) => {
const click=()=>{
    setUserDetails(user)
    trigger()
}
    const {id,name}=user;
    return (
        <div>
            {id}.){name}
            <button  onClick={()=>click()} >getDetails</button>
        </div>
    );
};

export default User;