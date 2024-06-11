import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    else{
      errors.name = null;
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }else{
      errors.email = null;
    }
    if (!message) {
      errors.message = "Message is required";
    }
    else{
      errors.message = null;
    }
    return errors;
  }

  const handleSubmit = (e) =>{
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log(name,email,message);
    setName('');
    setEmail('');
    setMessage('');

    let data = {
      name: name,
      mail: email,
      subject:`Message from Portfolio - ${new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}`,
      message: message
    }
    console.log(data);
    axios.post('https://helper-api-vignu.el.r.appspot.com/mail_merchant/sendmail/6439b57fa69037f206b91648', data)
      .then((res)=>{
        console.log(res);
      })
      .catch((err) =>{
        console.log(err);
      });
  }

  return (
    <div className="flex flex-col gap-10 sm:w-[60vw] w-[75vw]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center gap-5 w-full">
          <p className="flex text-secondary font-bold text-3xl">Get in Touch</p>
          <div className="flex border-secondary border-2 bg-secondary sm:w-56 w-36 h-1"></div>
        </div>
        <p className="flex text-xl text-slate-400">Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
      <form className='flex flex-col items-center gap-10'>
        <div className="flex sm:flex-row flex-col gap-10 w-full">
          <div className="flex flex-col gap-1 sm:w-[50%]">
            <label className="flex text-xl">Name</label>
            <input type="text" className='flex bg-primary thin-border' placeholder='Enter your name' value={name} onChange={(e)=>(setName(e.target.value))}/>
            {errors.name && <p className='flex text-red-500 justify-center'>{errors.name}</p>}
          </div>
          <div className="flex flex-col gap-1 sm:w-[50%]">
            <label className="flex text-xl">Email</label>
            <input type="text" className='flex bg-primary thin-border' placeholder='Enter your mail' value={email} onChange={(e)=>(setEmail(e.target.value))}/>
            {errors.email && <p className='flex text-red-500 justify-center'>{errors.email}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="flex text-xl">Message</label>
          <textarea className='flex bg-primary thin-border min-h-40' placeholder='Enter your message' value={message} onChange={(e)=>(setMessage(e.target.value))}></textarea>
          {errors.message && <p className='flex text-red-500 justify-center'>{errors.message}</p>}
        </div>
        <p className="flex text-xl text-slate-400 gap-1 flex-wrap">
          Powered by my <a href="https://mail-merchant.netlify.app/" target='_blank' className='underline underline-offset-4'>Mail-Merchant</a> — which will send your message directly to my inbox.
        </p>
        <div className='flex border-2 text-secondary border-secondary hover:text-white hover:bg-secondary p-3 rounded-xl hover:scale-110 cursor-pointer select-none w-28 items-center justify-center' onClick={(e)=>(handleSubmit(e.preventDefault))}>Submit</div>
      </form>
    </div>
  )
}

export default Contact