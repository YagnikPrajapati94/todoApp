import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()
    const handleForm = async (data) => {
        try {
            // console.log(data);
            const response = await axios.post("http://localhost:3000/user", data)
            toast.success('Successfully Added!');
            reset()
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>

            <section>
                <div className="container-fluid bg-primary bg-opacity-25 align-content-center">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-4">
                            <form action="" className='form-control p-4 rounded-4 ' onSubmit={handleSubmit(handleForm)}>
                                <div className='mb-3 text-center'>
                                    <p className='m-0 fs-4 fw-bold text-uppercase text-dark text-opacity-75'>add user</p>
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control shadow-none rounded-3' placeholder="Enter Your First Name" {...register("fname")} required />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control shadow-none rounded-3' placeholder="Enter Your Last Name" {...register("lname")} required />
                                </div>
                                <div className='mb-3'>
                                    <input type="email" className='form-control shadow-none rounded-3' placeholder="Enter Your Email Address" {...register("email")} required />
                                </div>
                                <div className='mb-3'>
                                    <input type="password" className='form-control shadow-none rounded-3' placeholder="Enter Your Password" {...register("pwd")} required />
                                </div>
                                <div className='pb-3 mb-3 border-bottom'>
                                    <button type='submit' className='btn btn-success form-control  rounded-3'>Add</button>
                                </div>
                                <div className='text-center'>
                                    <button type='button' className='btn btn-outline-secondary form-control' onClick={() => navigate(`/show`)} >View All User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Form
