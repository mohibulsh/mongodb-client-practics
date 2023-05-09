import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUsers = useLoaderData()
    const handelerUpdate = event =>{
        event.preventDefault()
        const form =event.target;
        const name =form.name.value;
        const email = form.email.value;
        console.log(email,name)
        const updateUser = {name,email}
        fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount >0){
                alert('update successfully')
            }
        })
    }
    return (
        <div>
            <h3>update information of {loadedUsers.name}</h3>
            <form onSubmit={handelerUpdate}>
                <input type="text" name="name" 
                defaultValue={loadedUsers?.name} id="" />
                <br />
                <input type="email" name="email" id="" 
                defaultValue={loadedUsers?.email}/>
                <br />
                <input type="submit" value="Update Data" />
            </form>
        </div>
    );
};

export default Update;