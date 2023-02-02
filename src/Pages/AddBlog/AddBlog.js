import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddBlog.css';

const AddBlog = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = async data =>{
        try {
            // const result = await axios.post('http://localhost:5000/services',data)

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
          fetch('http://localhost:5000/blogs', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
          reset();
              

            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    } 
    return (
        <div className='add-blog'>
            <h2>Please Add A Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 200 })} placeholder="Name" />
      <input {...register("description")}placeholder="description" />
      
      <input {...register("img")}placeholder="Image Url" />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddBlog;