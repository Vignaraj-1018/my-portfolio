import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) =>{
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
        <input type="text" className='flex bg-primary thin-border w-80' placeholder='Name' value={name} onChange={(e)=>(setName(e.target.value))}/>
        <input type="text" className='flex bg-primary thin-border w-80' placeholder='Mail' value={email} onChange={(e)=>(setEmail(e.target.value))}/>
        <textarea className='flex bg-primary thin-border w-80 min-h-40' placeholder='Message' value={message} onChange={(e)=>(setMessage(e.target.value))}></textarea>
        <button type="submit" className='flex border-2 text-secondary border-secondary hover:text-white hover:bg-secondary p-3 rounded-xl hover:scale-110 cursor-pointer select-none w-28 items-center justify-center' onClick={(e)=>(handleSubmit(e.preventDefault))}>Submit</button>
      </form>
    </div>
  )
}

export default Contact