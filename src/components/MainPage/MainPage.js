import React from "react"

const MainPage = props => {
  return (
    <div className='flex items-center justify-center flex-row bg-primaryWhite'>
      <div>
        <h1 className='font-bold text-9xl subpixel-antialiased text-primary font-pacifico py-20 px-5'>
          Bloggly
        </h1>
      </div>
      <div className='flex flex-col px-10 font-main text-xl gap-y-5'>
        <h2 className='text-3xl font-bold italic'>A brand new blog project!</h2>
        <p className='italic'>
          <span className='font-bold text-secondary-300'>Modern</span> and{" "}
          <span className='font-bold text-highlight'>convinient</span> website
          for browsing blogs by other users or a good place to become a creator!
        </p>
      </div>
    </div>
  )
}

export default MainPage
