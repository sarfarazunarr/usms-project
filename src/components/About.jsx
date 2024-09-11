import React, { useState } from 'react'

const About = () => {
    
    const [text, setText] = useState("Read more");
    function toggler(){
        if(document.getElementById('about').classList.contains('h-96 overflow-hidden')){
            document.getElementById('about').classList.replace('h-96 overflow-hidden', 'h-auto')
            setText('Read Less')
        } else {
            document.getElementById('about').classList.replace('h-auto', 'h-96 overflow-hidden')
            setText('Read more')
        }
    }
    return (
        <section id='about' className="bg-[#1e40af]">
            <div className="gap-2 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-4 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full -mx-20  cliper" src={"https://alluniversities.pk/wp-content/uploads/2023/08/university-of-sufism-modern-sciences.jpg"} alt="chairman" />
                <div className="mt-4 md:mt-0 ml-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">About Us</h2>
                    <p className={`mb-6 font-light h-96 overflow-hidden text-gray-100 md:text-lg`}><p>Information Technology is a driving force behind the booming economy and has led it to grow beyond borders. The world has witnessed its importance in today's global village. The Faculty of Science and Technology at the University of Sufism and Modern Sciences Bhitshah was established to produce quality professionals in computing who would match the required skills needed by the industry and contribute to the national economy. The programs offered within the faculty are designed to teach the latest technologies to generate qualified human resources. Pakistan is a developing country, and Information Technology (IT) is playing a vital role in strengthening its economy by producing world-class IT solutions. Department of Information and Computing provides skills and infrastructure to enable our students to achieve their educational goals and learn technologies to function effectively as computer professionals throughout their careers. The Department of Information & Computing is committed to providing students with dynamic teaching and research opportunities. We encourage students to undertake applied research to produce turnkey solutions for socio-economic indigenous and international problems. Our departments are equipped with state-of-the-art IT Infrastructure, high-performance research and computing laboratories, multi-media equipped classrooms, and experienced faculty to produce market-oriented graduates. We are committed to offering high-quality computing education to our students, which enables them to acquire fundamental knowledge, critical thinking, and software development skills to excel in their profession. Our academic staff members are committed to delivering technical knowledge and transferring social skills to enable the students to explore society's potential. Our vision is to work closely with industrial partners and international collaborators to push the developed technologies from our labs to the market to establish a university building economy.</p>

                        <h3 className="text-3xl text-white font-semibold py-3">Vision</h3>
                        <p>Empowering Minds, Transforming Futures: A Globally Recognized Hub of Excellence in Information and Computing</p>


                        <h3 className="text-3xl text-white font-semibold py-3">Mission</h3>
                        <p>Provide cutting-edge education in information and computing, fostering creativity, critical thinking, problem-solving skills and equip students in society with the knowledge and skills needed to excel in dynamic and evolving technological landscapes.</p>


                        <h3 className="text-3xl text-white font-semibold py-3">Programs offer In Department of Information and Computing</h3>
                        <p>1. BS in Computer Sciences (4-Year Program)\n
                            2. BS in Information Technology (4-Year Program)</p>
                    </p>
                    {(<a onClick={() => { toggler() }} className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {text}
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>)}
                </div>
            </div>
        </section >
    )
}

export default About
