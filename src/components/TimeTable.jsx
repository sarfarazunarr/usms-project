import React from 'react'

const TimeTable = () => {
    return (
        <div id='timetable' className='bg-[#1e40af] p-5'>
            <h3 className='text-4xl py-4 text-white font-bold text-center'>TimeTable</h3>
            <div className='flex justify-end items-center my-2'>
                <select className="form-select w-auto px-4 appearance-none block py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option className="text-base font-normal text-gray-700" value="2K20 BATCH">2K20 BATCH</option>
                    <option className="text-base font-normal text-gray-700" value="2K21 BATCH">2K21 BATCH</option>
                    <option className="text-base font-normal text-gray-700" value="2K22 BATCH">2K22 BATCH</option>
                    <option className="text-base font-normal text-gray-700" value="2K23 BATCH">2K23 BATCH</option>
                </select>
            </div>
            <div>
            <iframe src="https://drive.google.com/file/d/1giut-C_gKkS8Z1sa6T_bDRhhC3ImIjPU/view?embedded=true" width="100%" height="500px"></iframe>
            </div>
        </div>
    )
}

export default TimeTable
