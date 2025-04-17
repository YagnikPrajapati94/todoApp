import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Edit = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { register, handleSubmit, reset } = useForm()
  const [passwordtype, setpasswordtype] = useState('password')
  const handleForm = async (data) => {
    try {
      const response = await axios.put(`http://localhost:3000/user/${id}`, data)
      toast.success('User Data Successfully Updated!', { removeDelay: 500 });
      // reset("")
      setTimeout(() => {
        navigate("/show")
      }, 1000);


    } catch (error) {
      console.log(error);

    }
  }
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`)
      reset({
        fname: response.data.fname,
        lname: response.data.lname,
        email: response.data.email,
        pwd: response.data.pwd
      })
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  // view passwrod 
  const handleView = async () => {
    try {
      setpasswordtype(passwordtype === 'password' ? 'text' : 'password')

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
                  <p className='m-0 fs-4 fw-bold text-uppercase text-dark text-opacity-75'>Edit user</p>
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
                <div className='mb-3 input-group'>
                  <input type={passwordtype} className='form-control z-1 position-relative bg-transparent shadow-none rounded-3' placeholder="Enter Your Password" {...register("pwd")} required />
                  <button type='button' className='btn text-info z-3  position-absolute end-0 shadow-none border-0' onClick={() => handleView()}><i className="fa-solid fa-eye"></i></button>
                </div>
                <div className=''>
                  <button type='submit' className='btn btn-warning form-control  rounded-3'>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Edit
