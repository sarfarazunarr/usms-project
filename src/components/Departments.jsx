import React from 'react'

const Departments = () => {
    return (
        <div id='department' className='bg-[#1e40af] p-5'>
            <h3 className='text-center py-10 text-white font-semibold text-4xl'>Departments</h3>
            <div className='flex justify-center items-center my-3 gap-5'>

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Information Technology</h5>
                        <p className="mb-3 font-normal text-gray-700">The IT Department: empowering students and staff with technology solutions for a brighter future. Your hub for innovative learning, network support, and digital transformation.</p>
                    </div>
                </a>
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
                    <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Computer Science</h5>
                        <p className="mb-3 font-normal text-gray-700 ">Coding the future, one innovation at a time. The Computer Science department: where ideas come to life. Shaping tomorrow's tech today, through research, learning, and collaboration.</p>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Departments
