// import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='flex items-center mt-5  bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto'>
        <img className='relative mb-5' src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-760x400.webp" alt="" />
        {/* <FaSadCry className='w-40 h-40 text-yellow-500' /> */}
        <FontAwesomeIcon icon={faSadCry} className='w-40 absolute top-5 left-80 h-40 text-red-500'></FontAwesomeIcon>
        <div className=' text-center'>
          <Link to='/'  className="border px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage