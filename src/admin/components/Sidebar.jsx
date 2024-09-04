import React from 'react'
import {FaHome, FaCogs, FaRegEnvelope, FaRegFileAlt} from 'react-icons/fa'
import { CgGames } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className='w-64 bg-blue-500 fixed h-full px-4 py-2 shadow-md'>
       <div className='my-2 mb-4'>
            <h1 className='text-2x text-white font-bold text-center'>Admin</h1>
       </div>
       <hr />
       <ul className='mt-3 text-white font-bold'>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                    Home
                </a>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href='/user' className='px-3'>
                    <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegFileAlt>
                    User
                </a>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href='/admin/games' className='px-3'>
                    <CgGames className='inline-block w-6 h-6 mr-2 -mt-2'></CgGames>
                    Games
                </a>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href='/card' className='px-3'>
                    <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegEnvelope>
                    Inbox
                </a>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href='' className='px-3'>
                    <FaCogs className='inline-block w-6 h-6 mr-2 -mt-2'></FaCogs>
                    Setting
                </a>
            </li>
       </ul>
    </div>
  )
}

export default Sidebar
