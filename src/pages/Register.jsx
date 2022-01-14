

const Register = () => {
  return (
    <div>
      <div className='container mx-auto min-h-screen mt-32'>
      <h4 className='capitalize font-bold'>register</h4>
      <div className='h-px w-full bg-white opacity-30 mt-6'></div>
      <div className='mt-20  sm:w-96 mx-auto rounded p-6 bg-gradient-to-r from-sky-three via-sky-two to-sky bg-sky shadow-2xl shadow-sky '>
        <div >
          <h2 className='text-center font-bold capitalize text-2xl'>register</h2>
          <form className='mt-4'>
            <div className=' flex flex-col mb-4'>
              <label htmlFor='userName' className='mb-2'>UserName</label>
              <input type='text' placeholder='Your name' name='userName' id='userName' className='py-2 px-2 rounded outline-0 text-black'/>
            </div>
            <div className=' flex flex-col'>
              <label htmlFor='email' className='mb-2'>Email</label>
              <input type='email' placeholder='Enter email' name='email' id='email' className='py-2 px-2 rounded outline-0 text-black'/>
            </div>
            <div className=' flex flex-col my-4'>
              <label htmlFor='password' className='mb-2'>Password</label>
              <input type='password' placeholder='Enter password' name='password' id='password' className='py-2 px-2 rounded outline-0 text-black'/>
            </div>
            <div className=' flex flex-col my-4'>
              <label htmlFor='reapetPassword' className='mb-2'>Repeat Password</label>
              <input type='password' placeholder='Enter password' name='reapetPassword' id='reapetPassword' className='py-2 px-2 rounded outline-0 text-black'/>
            </div>
            <div className='my-4'>
              <input type='radio' id='radio' name='radio' className='cursor-pointer mr-3 outline-0'/>
              <label htmlFor='radio' className='capitalize cursor-pointer'>remember me</label>
            </div>
            <button type='submit' className='capitalize my-4 w-full bg-white p-2 text-sky font-bold rounded-lg hover:bg-sky-three hover:text-white hover:transition'>submit</button>
          </form>
          <h4 className='text-sm w-full text-right mt-6'>Back to <span><a href='/sign-in' className='text-teal-500 font-bold'>Login</a></span></h4>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
