import Image from 'next/image'
import React from 'react'
import './employee-connect.css'
import logo from '../../assets/images/employee-connect/MicroGenDX-EC-Logo2.svg'

const EmployeeConnect = () => {
    return (
        <div className='main'>
            <div className="container-xxl">
                <div className="main-container">
                    <div className="row">
                        <Image src={logo} alt="logo" className='account_logo' />
                    </div>
                    <div className='row card_row'>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className='login_header'>
                                    <div>
                                        login
                                    </div>
                                    <div>
                                        Forgot Your Passowrd?
                                    </div>
                                </div>
                                <div className="cred">
                                    <div className="row text">
                                        <div className="col-4">
                                            <label className="lable"><span className='icon'> <i className="fa-solid fa-user"></i> </span> username or E-mail </label>
                                        </div>
                                        <div className="col-8">
                                            <div className='input_area'> <input className='input w-100' /> </div>
                                        </div>
                                    </div>
                                    <div className="row text">
                                        <div className="col-4">
                                            <label className="lable"> <span className='icon'> <i className="fa-solid fa-lock"></i> </span>password </label>
                                        </div>
                                        <div className="col-8">
                                            <div className='input_area'> <input className='input w-100' /> </div>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col-4">
                                        </div>
                                        <div className="col-8">
                                            <div className='text01'>
                                                <input type="checkbox" />
                                                <label className="lable01" htmlFor="remember">Remember Me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className='btn_area'>
                                    <button className='login_btn'> Login </button>
                                    <button className='account_btn'> create an Account </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeConnect