import React from 'react';
import './Hero.css'
import {FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='hero'>
           <div className='container'>
            <div className='content'>
                <div className='col-1'>
                    <h1>Data to enrich your</h1>
                    <h1><span className='primary-color'>online business</span></h1>
                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
                laboriosam eos praesentium veritatis!</p>
                
                <div className='used-by'>
                    <p>USED BY</p>
                    <div className='icons'>
                    <span> <FaDatabase></FaDatabase> Staxx </span>
                    <span> <FaAsterisk></FaAsterisk> Star Al </span>
                    <span> <FaAccusoft></FaAccusoft> Accusoft </span>
                    </div>
                 </div>
                </div>
               <div className='col-2'>
                  <div className='form-layout'>
                        <div className='form-container'>
                        <p className='sign-in-txt'>Sign in with</p>
                          <div className='social-login'>
                             <span><FaFacebook size={20}></FaFacebook></span>
                             <span><FaTwitter size={20}></FaTwitter></span>
                             <span><FaGithub size={20}></FaGithub></span>
                          </div>
                            <div className='divider'>
                                    <p> <span>Or</span> </p>
                           </div>
                           <form action=''>
                             <input type='text' placeholder='Enter Your name'></input>
                             <input type='text' placeholder='Enter Your Email'></input>
                             <input type='text' placeholder='Enter Your Password'></input>
                             <button> Create Your Account </button>
                           </form>
                        </div>
                     <div className='form-footer'>
                            <p>By Singing up , you agree to our</p>
                            <span className='primary-color'>Terms , Data policy</span>
                            and <span className='primary-color'>Cookies policy</span>
                     </div>

                  </div>
               </div>

            </div>
           </div>

        </div>
    );
};

export default Hero;