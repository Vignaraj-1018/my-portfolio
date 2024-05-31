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
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!message) {
      errors.message = "Message is required";
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
      <div className="flex flex-row items-center gap-5 w-full">
        <p className="flex text-secondary font-bold text-3xl">Contact</p>
        <div className="flex border-secondary border-2 bg-secondary sm:w-56 w-36 h-1"></div>
      </div>
      <form className='flex flex-col items-center gap-10'>
        <div className="flex flex-col gap-1">
          <input type="text" className='flex bg-primary thin-border w-80' placeholder='Name' value={name} onChange={(e)=>(setName(e.target.value))}/>
          {errors.name && <p className='flex text-red-500 justify-center'>{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <input type="text" className='flex bg-primary thin-border w-80' placeholder='Mail' value={email} onChange={(e)=>(setEmail(e.target.value))}/>
          {errors.email && <p className='flex text-red-500 justify-center'>{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <textarea className='flex bg-primary thin-border w-80 min-h-40' placeholder='Message' value={message} onChange={(e)=>(setMessage(e.target.value))}></textarea>
          {errors.message && <p className='flex text-red-500 justify-center'>{errors.message}</p>}
        </div>
        <div className='flex border-2 text-secondary border-secondary hover:text-white hover:bg-secondary p-3 rounded-xl hover:scale-110 cursor-pointer select-none w-28 items-center justify-center' onClick={(e)=>(handleSubmit(e.preventDefault))}>Submit</div>
      </form>
    </div>
  )
}

export default Contact