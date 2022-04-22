import React , { useEffect, useState } from 'react'
import AuthLayout from '../../components/layouts/auth/AuthLayout'
import { Link , useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {

    //สรา้างตัวแปรสำหรับเป็นหน้า (redirect)
    const navigate = useNavigate();

    //Check is Login
    useEffect(()=>{
        if(localStorage.getItem('fullname')){
            navigate('/backend/dashboard')
        }
    })

    // Create variable State from Form
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    //Create Submit Form function
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(username , password)

        if(username === "admin" && password === "1234"){
            let timerInterval
            Swal.fire({
                title: 'Auto close alert!',
                html: 'กำลังเข้าสู่ระบบ',
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
            }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    navigate('/backend/dashboard')
                    //เก็บชื่อผู้ใช้ลง LocalStorage
                    localStorage.setItem('fullname' , 'Weera อุ้ย')
                }
            })
        }else{
            Swal.fire({
                title: 'Error',
                text: 'username or password incorrect?',
                icon: 'error',
                confirmButtonText: 'Try again',
                allowOutsideClick: false,
                allowEnterKey: true
            })
        }
    }

  return (
    <div>
        <AuthLayout title="Login">
            <form className="card p-4 col-md-4 my-form" onSubmit={handleSubmit}>
                <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
                <div className="mb-3">
                    <label htmlFor="username" className="col-md-4 col-form-label">ชื่อผู้ใช้</label>
                    <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        required
                        onChange={(e)=>setUsername(e.target.value)}
                        value={username}
                    />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="col-md-4 col-form-label">รหัสผ่าน</label>
                    <div className="col-md-8">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        required
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                    />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="submit" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8 btn-action">
                    <input
                        type="submit"
                        className="btn btn-primary"
                        name="submit"
                        id="submit"
                        value="เข้าสู่ระบบ"
                    />
                    </div>
                </div>
                <div className="mb-2 btn-action">
                    <label htmlFor="" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8"><Link to="/forgotpassword">ลืมรหัสผ่าน ?</Link></div>
                </div>
                <div className="mb-2 btn-action">
                    <label htmlFor="" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8"><Link to="/register">ลงทะเบียน</Link></div>
                </div>
            </form>
        </AuthLayout>
    </div>
  )
}

export default Login