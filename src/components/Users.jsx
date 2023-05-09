import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    const handlerDelete = id =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                alert("successfully deleted")
            }       
         })
    }
    return (
        <div>
            <h3>this is users {users.length}</h3>
            {
                users.map(user=><p key={user._id}> {user.name}: {user.email} :{user._id} 
                <button onClick={()=>handlerDelete (user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;