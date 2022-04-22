import React from "react";
import AuthLayout from "../../components/layouts/auth/AuthLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  // การเรียกใช้งาน React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //สร้างฟังก์ชั้นมารับข้อมูลจาก React Hook Form แล้วนำไปใช้งาน
  const registerSubmit = (data , event) => {
    console.log(data);
  }

  return (
    <div>
      <AuthLayout title="Register">
        <form className="card p-4 col-md-4 my-form" onSubmit={handleSubmit(registerSubmit)}>
          <h3 className="text-center mb-4">ลงทะเบียน</h3>
          <div className="mb-3">
            <label htmlFor="fullname" className="col-md-4 col-form-label">
              ชื่อ-สกุล
            </label>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="fullname"
                {...register("fullname", { required: true })}
              />
              {errors.fullname &&
                <p className='error'>Please fill Fullname</p>}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="col-md-4 col-form-label">
              อีเมล์
            </label>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && <p className='error'>Please fill email</p>}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="col-md-4 col-form-label">
              ชื่อผู้ใช้
            </label>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                {...register("username", { required: true })}
              />
              {errors.username &&
                <p className='error'>Please fill username</p>}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="col-md-4 col-form-label">
              รหัสผ่าน
            </label>
            <div className="col-md-8">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                {...register("password", { required: true })}
              />
              {errors.password &&
                <p className='error'>Please fill password</p>}
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
                value="ลงทะเบียน"
              />
              &nbsp;&nbsp;
              <input
                type="reset"
                className="btn btn-danger"
                name="Reset"
                id="reset"
                value="ล้างข้อมูล"
              />
            </div>
          </div>
          <div className="mb-2 btn-action">
            <label htmlFor="" className="col-md-4 col-form-label"></label>
            <div className="col-md-8">
              <Link to="/login">เข้าสู่ระบบ</Link>
            </div>
          </div>
        </form>
      </AuthLayout>
    </div>
  );
};

export default Register;
