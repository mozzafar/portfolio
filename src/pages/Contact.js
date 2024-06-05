import React from 'react';
//import fortawesome from '@fortawesome/fontawesome-svg-core';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, formState: { errors },} = useForm();
  return (
    <div className='flex justify-between p-12 m-6'>
      <div class="left" className='bg-black h-[770px] text-white p-4 w-5/6 rounded-lg hover:shadow-amber-500/40 shadow-lg shadow-cyan-500/50'>
      <form>
        <h1 className='m-4 text-4xl font-bold'>Contact Me</h1>

        <div className='mb-4'>
          <lebel className='m-2 text-xl'>Name</lebel> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
          type='text'
          id='text'
          className='border-2'
          {...register('title', {required: 'Please Enter Your Name'})}
          />
          {errors.name && (<div>{errors.name.message}</div>)}

        </div>

        <div className='mb-4'>
          <lebel className='m-2 text-xl'>Phone Number</lebel>
          <input
          type='number'
          id='text'
          className='border-2'
          {...register('Phone Number', {required: 'Please Enter Your Number'})}
          />
          {errors.phonenumber && (<div>{errors.phonenumber.message}</div>)}

        </div>

        <div className='mb-4'>
          <lebel className='m-2 text-xl'>Your Email</lebel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
          type='text'
          id='email'
          className='border-2 shadow-indigo-500/50'
          {...register('youremail', {required: 'Please Enter Your Email'})}
          />
          {errors.email && (<div>{errors.email.message}</div>)}

        </div>

        <div className='mb-4'>
          <lebel className='m-2 text-xl'>Your Query</lebel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
          type='text'
          id='query'
          className='border-2'
          {...register('query', {required: 'Please Enter Your Query'})}
          />
          {errors.quesy && (<div>{errors.query.message}</div>)}
        </div>

        <div>
          <button type='submit' className='bg-amber-300 rounded p-3 m-10  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>
            Sent
          </button>
        </div>
        <h1 className='text-bold '>Thankyou for Connect With Us</h1>
      </form>
      </div>
      <div class="right" className='bg-white h-[770px] text-black p-4 w-5/6 rounded-lg hover:shadow-amber-500/40 shadow-lg shadow-cyan-500/50'>
          
           
      </div>
    </div>
  )
}

export default Contact;