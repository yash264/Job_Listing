import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/Image/Background.png"

function Footer() {
    return (
        <>
            <footer className='bg-black text-white border-t border-gray-700 w-full max-w-360 mx-auto pt-12 ob-[48px] px-6 md:px-[80]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    <div className='flex items-center gap-2'>
                        <img src={img} alt="logo" className='w-10 h-10 object-contain' />
                        <h2 className='text-xl font-bold'> HireSathi</h2>
                        <p>Your trusted partner in finding the right talent for your team.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Product</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/job">Job Listings</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Company</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Legal</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>
                <div className='border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm'>
                    © 2026 HireSathi. All Rights Reserved
                </div>
            </footer>
        </>
    )
}

export default Footer