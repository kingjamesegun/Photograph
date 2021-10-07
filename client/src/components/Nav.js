import React from 'react'
import Save from "../assests/save.svg"

function Nav() {
    return (
        <div className="nav bg-primary flex justify-between py-3 text-white">
            <div className=" pl-10 nav__logo">
                Logo
            </div>
            <div className="nav__search ">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="search" 
                    type="text" 
                    placeholder="search..."/>
            </div>
            <div className="nav__links flex content-end">
                <ul className="flex">
                    <li className="pr-4">
                        <img 
                            src={Save} 
                            alt="save__image" 
                            className="bg-white"
                        />
                    </li>
                    <li className="pr-4">Notification</li>
                    <li className="pr-4">Profile</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
