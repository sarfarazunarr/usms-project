import React from 'react'

const Testimonials = () => {
    return (
        <section id='testimonial' className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#1e40af]">Testimonials</h2>
                    <p className="mb-8 font-light text-gray-700 lg:mb-16 sm:text-xl">See What our Students say about ICT at USMS</p>
                </div>
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                            <h3 className="text-lg font-semibold text-gray-900">Lorem ipsum dolor sit amet.</h3>
                            <p className="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cum eaque quis, quod labore non cumque voluptates molestiae expedita sapiente.</p>
                            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde repudiandae, voluptatum est ex minus dicta, delectus eum commodi distinctio sunt quasi. Perferendis doloribus eos culpa sed maiores commodi unde?</p>
                            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, earum! Quis officia sequi laborum facere, harum corrupti hic libero eius?</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                <div className="space-y-0.5 font-medium text-left">
                                    <div>Javed</div>
                                    <div className="text-sm font-light text-gray-500">2K23-BATCH</div>
                                </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                        <h3 className="text-lg font-semibold text-gray-900">Lorem ipsum dolor sit amet.</h3>
                            <p className="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cum eaque quis, quod labore non cumque voluptates molestiae expedita sapiente.</p>
                            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde repudiandae, voluptatum est ex minus dicta, delectus eum commodi distinctio sunt quasi. Perferendis doloribus eos culpa sed maiores commodi unde?</p>
                            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, earum! Quis officia sequi laborum facere, harum corrupti hic libero eius?</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                                <div className="space-y-0.5 font-medium text-left">
                                    <div>SHAHEENA</div>
                                    <div className="text-sm font-light text-gray-500">2K20-BATCH</div>
                                </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                        <h3 className="text-lg font-semibold text-gray-900">Lorem ipsum dolor sit amet.</h3>
                            <p className="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cum eaque quis, quod labore non cumque voluptates molestiae expedita sapiente.</p>
                            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde repudiandae, voluptatum est ex minus dicta, delectus eum commodi distinctio sunt quasi. Perferendis doloribus eos culpa sed maiores commodi unde?</p>
                            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, earum! Quis officia sequi laborum facere, harum corrupti hic libero eius?</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                                <div className="space-y-0.5 font-medium text-left">
                                    <div>SAHIL</div>
                                    <div className="text-sm font-light text-gray-500">2K19-BATCH</div>
                                </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
