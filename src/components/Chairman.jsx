import React, { useState } from 'react'
import image from '../assets/chairman.jpg'

const Chairman = () => {
    const message = `Welcome to the Department of Information and Computing at the University of Sufism and Modern Sciences, Bhitshah. Our department is dedicated to fostering a dynamic and innovative learning environment that equips students with the skills and knowledge required to excel in the rapidly evolving fields of Information Technology and Computer Science.

    At the Department of Information and Computing, we offer a range of undergraduate programs designed to provide a strong foundation in both theoretical and practical aspects of computing. Our curriculum is carefully crafted to ensure that our graduates are well-prepared to meet the challenges of the modern technological landscape.

    We are committed to providing our students with a holistic education that not only emphasizes technical proficiency but also encourages critical thinking, creativity, and ethical responsibility. Our faculty members are experienced professionals and researchers who are passionate about teaching and mentoring the next generation of IT and computing experts.

    Our department is equipped with state-of-the-art facilities, including modern computer labs, advanced software tools, and access to the latest research and industry developments. We also offer a variety of extracurricular activities, workshops, and seminars to enhance the learning experience and provide opportunities for professional growth.

    As the Head of Department, I am proud to lead a team of dedicated educators and support staff who are committed to excellence in teaching, research, and community service. We strive to create an inclusive and supportive environment where every student can thrive and achieve their full potential.

    We invite you to explore the exciting opportunities available in our department and join us in our mission to advance knowledge, foster innovation, and contribute to the betterment of society through the power of information and computing.`

    const [showbtn, setShowbtn] = useState(true);
    const [limit, setLimit] = useState(200);
    const length = showbtn ? 200 :message.length;
    return (
        <section id='message' className="bg-[#1e40af]">
            <div className="gap-2 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-4 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-1/2 rounded-xl" src={image} alt="chairman" />
                <div className="mt-4 md:mt-0 -ml-40">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Message from Honourable Chairman</h2>
                    <p className="mb-6 font-light text-gray-100 md:text-lg">
                        {message.slice(0, limit)}
                    </p>
                    {(<a onClick={() => { setShowbtn(!showbtn); setLimit(length)}} className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {showbtn ? "Read Less" : "Read more" }
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>)}
                </div>
            </div>
        </section>
    )
}

export default Chairman
