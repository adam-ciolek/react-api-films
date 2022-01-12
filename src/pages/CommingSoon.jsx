

const CommingSoon = () => {
  
  const time = new Date().getFullYear()
  return (
    <div className='min-h-screen container mx-auto mt-32'>
      <div className='flex justify-between'>
        <h4 className='capitalize'>comming soon</h4>
        <h4>in {time}</h4>
      </div>
      <div className='h-px w-full bg-white opacity-30 mt-6'></div>
    </div>
  )
}

export default CommingSoon
