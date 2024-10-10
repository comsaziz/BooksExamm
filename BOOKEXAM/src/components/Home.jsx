import React from 'react'
import Logo from "../assets/logo.png"
import Boooks from "../assets/Book.png"
import { Link } from "react-router-dom";




function Home() {

  return (
    <div className=' bg-[#47302f]  h-screen w-full'>
        <div className='flex justify-between w-full'>

            <div className='flex'>
            <h1 className=' text-2xl font-bold text-[#867a73]'>BOOKSSTORE</h1>
             
            </div>
            <Link to={"/login"}>
            <button className=" font-bold px-6 py-1 mr-10 mt-3 rounded-md text-[#86786e] bg-[#efe3c8] ">
          LogOut
        </button>
        </Link>
            

        </div>
       
     
       

        
        <div className='mr-6 flex justify-between text-[#86786e] bg-[#47302f] '>
            <div className='flex'>
                <div className='flex-col '>
                <h1 className='text-7xl font-bold mt-12 lg:ml-28 ml-3'>Get Started</h1>
                <p className='lg:text-5xl text-4xl font-bold mt-11 lg:ml-20 ml-3'>Welcome to Bookstore You can check The favorite Book Here  📚  </p>

                <Link to={"/Book"}>
                <button className=" font-bold lg:ml-32 ml-6 px-10 py-3  mt-10 rounded-md text-[#86786e] bg-[#efe3c8] ">
                 Search Your Book
                </button>
                </Link>
                
                </div>
               
            
            </div>
            

            <img className='lg:w-[30%] lg:h-[100%] w-[43%] h-auto lg:mr-2 relative lg:bottom-24 bottom-96' src={Boooks} alt="" />


            

        </div>
        <footer class="footer p-10 relative lg:top-1 top-9 bg-[#352328] text-[#efe3c8]">
  <aside>
  <img className='w-14 relative bottom-8' src={Logo} alt="" />
    <p>
      BOOKSTORE
      <br />
      Book Store exsist since 1827  
    </p>
  </aside>
  <nav>
    <h6 class="footer-title text-[#efe3c8]">Social</h6>
    <div class="grid grid-flow-col gap-4 text-[#efe3c8] ">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>

    </div>

  )
}

export default Home