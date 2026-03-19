import React, { useState } from 'react'
import Logo from "../../assets/Logo.svg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://hiresathiserver.vercel.app/api/login",
                { payload: { email, password, type } }
            );

            


            if (res.data.success) {
                 navigate("/dashboard")
            }
            else{

            const error = res.data.message

            toast.error(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }


        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='h-full w-full flex flex-col justify-start items-center mt-32'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <img src={Logo} alt="img" />
            <div className='bg-card p-8 m-4 min-w-96  rounded-md  '>
                <div className='flex flex-col text-center gap-4 m-2 '>
                    <h3 className='font-semibold text-2xl'>Welcome Back</h3>
                    <p className='text-xs text-muted-foreground'>Enter your credentials to access your account</p>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='flex flex-col  gap-1'>
                        <label>Email</label>
                        <input
                            className='px-4 py-1 text-muted-foreground rounded-lg bg-input'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required type="email"
                            name='email'
                            placeholder='name@mail.com' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Password</label>
                        <input
                            className='px-4 py-1 text-muted-foreground rounded-lg bg-input'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            required type="password"
                            name='password'
                            placeholder='Enter your password' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Role/Type</label>
                        <select className='px-4 py-1 text-muted-foreground rounded-lg bg-input'
                            required
                            name="type"
                            value={type}
                            onChange={(e) => { setType(e.target.value) }}
                        >
                           <option value="" disabled >Select Role</option>
                            <option value="jobseeker">Job Seeker</option>
                            <option value="jobprovider">Employer</option>
                        </select>
                    </div>
                    <button className='bg-primary hover:bg-[#07d989] px-4 py-2 mb-4 text-primary-foreground rounded-lg'>Sign in</button>
                </form>

                <p className='text-center'>Don't have an account?<a className='text-primary' href="/signup">Sign Up</a></p>
            </div>
        </div>
    )
}

export default Login    