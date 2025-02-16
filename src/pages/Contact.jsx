import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import { Loader } from '@react-three/drei';
import useAlert from '../hooks/useAlert';

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const {alert, showAlert, hideAlert} = useAlert()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleFocus = (e) => setCurrentAnimation('walk')
  
  const handleBlur = (e) => {}
  const handleSubmits = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
      {
        from_name: form.name,
        to_name: "Anugrah",
        from_email: form.email,
        to_email: "anuash130c@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      setIsLoading(false);
      showAlert({ text: 'Email Sent Successfully', type: 'success' })
      formRef.current.reset();

        

    })
    .catch((error) => {
      setIsLoading(false);
      
      console.error("EmailJS Error:", error);
    });
  }

  return (
    <section className="flex flex-col md:flex-row w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-10">
      <div className="w-full md:w-1/2 flex justify-start">
        <div className='flex flex-col w-full md:max-w-xl'>
          <h1 className="text-blue-600 text-3xl mb-6 font-semibold">
            Get In Touch
          </h1>

          <form
            ref={formRef}
            onSubmit={handleSubmits}
            className="w-full flex flex-col gap-7"
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input mt-3 w-full p-1.5 border-2 rounded-md"
                placeholder="John Doe"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input mt-3 w-full p-1.5 border-2 rounded-md"
                placeholder="johndoe@gmail.com"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Write your message
              <textarea
                name="message"
                className="mt-3 w-full h-30 p-1.5 border-2 rounded-md"
                placeholder="Let Me Know How I Can Help You"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              type="submit"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="bg-blue-500 text-white font-semibold w-40 py-2 rounded-md cursor-pointer"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[350px] md:h-auto mt-8 md:mt-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0,0,1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader/>}>
            <Fox 
              position={[0.5, 0.35, 0]}
              rotation={[12.625, -0.7, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact