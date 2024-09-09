import Link from 'next/link';
import React from 'react'

export const Header = () => (
    <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
                <Link href="/" ><h1 className="text-3xl font-bold">ACO<span className="text-red-500">NEWS</span></h1></Link>
                <nav>
                    <ul className="flex space-x-6 text-sm">
                        <Link href="/" ><li className="font-semibold">Home</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
);