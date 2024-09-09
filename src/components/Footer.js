import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <footer className="py-4 bg-white text-gray-900">
            <div className="container px-6 mx-auto">
                <div className="grid justify-center lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2024 All rights reserved! ACONEWS</span>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <Link rel="noopener noreferrer" target='_blank' href="https://abhirupkumar.vercel.app" className="">
                            Abhirup Kumar Bhowmick
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;