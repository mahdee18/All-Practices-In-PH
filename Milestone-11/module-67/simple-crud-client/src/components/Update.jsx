import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData()
    const handleUpdate = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email= form.email.value;
        const updatedUser = {name,email}
        fetch(`http://localhost:3000/users/${data._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            // if(data.modifiedCount>0){
            //     alert('User Updated Successfully!!')
            // }
        })
      }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={data.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={data.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
            <Link to='/users'>See Users</Link>
        </div>
    );
};

export default Update;