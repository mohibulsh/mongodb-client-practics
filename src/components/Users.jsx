import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const Loderusers = useLoaderData()
    const [users,setUsers] =useState(Loderusers)
    const handlerDelete = id =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                alert("successfully deleted")
                const remaining  = users.filter(user=>user._id !== id)
                setUsers(remaining)
            }       
         })
    }
    return (
        <div>
            <h3>this is users {users.length}</h3>
            {
                users.map(user=><p key={user._id}> {user.name}: {user.email} :{user._id}
                <Link to={`/update/${user._id}`}>update</Link>
                <button onClick={()=>handlerDelete (user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;