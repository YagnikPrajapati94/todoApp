import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UserShow = () => {
    const [UserData, setUserData] = useState([])
    const [search, setsearch] = useState("")
    const navigate = useNavigate()
    const getdata = async () => {
        try {
            const response = await axios.get("http://localhost:3000/user")
            // console.log(response.data);
            setUserData(response.data)

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getdata()
    }, [])

    // delete function 
    const handleDel = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/user/${id}`)
            toast.success('User deleted successfully!');
            getdata()

        } catch (error) {
            console.log(error);

        }
    }
    const hadndleSearch = (e) => {
        const data = e.target.value
        // console.log(data);
        setsearch(data)
        
    }
    const filterdata = UserData.filter((user)=> {
        const data = user.fname.toLowerCase().includes(search.toLowerCase()) || user.lname.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
        return data
    })
    return (
        <>
            <section>
                <div className="container-fluid bg-info bg-opacity-25">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-7 mb-3 align-content-center">
                            <p className='m-0 text-uppercase text-lg-start text-center fw-bold fs-5 text-dark'>user data</p>
                            <button type='button' className='btn rounded-0 btn-danger position-absolute top-0 end-0' onClick={() => navigate("/")}><i className="fa-solid fa-backward-fast"></i></button>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <input type="text" className='form-control shadow-none' placeholder="Serach" onChange={hadndleSearch} name="" id="" />
                        </div>
                        <div className="col-lg-10 overflow-scroll  table-responsive data-box">
                            <table className='table table-hover m-0'>
                                <thead className='table-primary sticky-top'>
                                    <tr className='text-center'>
                                        <th>Id</th>
                                        <th>FirstName</th>
                                        <th>LastName</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        UserData.length > 0 ? (
                                            filterdata.map((user, index) => {
                                                return (
                                                    <tr className='text-center' key={user.id}>
                                                        <td className='align-content-center'>{index + 1}</td>
                                                        <td className='align-content-center'>{user.fname}</td>
                                                        <td className='align-content-center'>{user.lname}</td>
                                                        <td className='align-content-center'>{user.email}</td>
                                                        <td className='align-content-center'>{user.pwd.replace(/./g, '*')}</td>
                                                        <td>
                                                            <button className='btn text-success ' onClick={() => navigate(`/edit/${user.id}`)}><i className="fa-solid fa-pen-to-square"></i></button>
                                                            <button className='btn text-danger' onClick={() => handleDel(user.id)}><i className="fa-solid fa-trash-can"></i></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className='text-danger text-center'>No Data Found</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserShow
