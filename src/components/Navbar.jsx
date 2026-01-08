import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
             <div className="bg-(--c2) py-6 px-7 flex justify-between items-center   ">
            <Link to={'/'} className="font-medium text-2xl">MediaSearch</Link>
            <div className='flex gap-3 items-center'>
              <Link className="font-medium  rounded active:scale-95 px-3 py-1 text-(--c1) bg-gray-200" to={'/'}>Search</Link>
            <Link className="font-medium  rounded active:scale-95 px-3 py-1 text-(--c1) bg-gray-200" to={'/collection'}>Collection</Link>
            </div>
        </div>

    </div>
  )
}

export default Navbar