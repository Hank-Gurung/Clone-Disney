import React, {useState} from "react";
import disney from "./../assets/Images/logo.png";
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,
} from "react-icons/hi2";
import HeaderIcon from "./HeaderIcon";
import {HiPlus, HiDotsVertical} from "react-icons/hi" 
function Header() {
    const [toggle, setToggle] = useState(false)
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        },
    ]
    return (
        <>
            <div className=" flex items-center justify-between p-5">
                <div className="flex gap-8 ">
                    <img
                        src={disney}
                        className="w-[75px] md:w-[95px] object-cover"
                    />
                    <div className="hidden md:flex gap-8">
                        {menu.map((items) => (<HeaderIcon name={items.name} Icon={items.icon}/>))}
                    </div>
                    <div className="flex md:hidden gap-8">
                        {menu.map((items,index) => index<3 && (<HeaderIcon name={''} Icon={items.icon}/>))}
                        <div className="md:hidden pt-2" onClick={() => setToggle(!toggle)}>

                            <HeaderIcon name={''} Icon={HiDotsVertical} />
                            {toggle ? <div className="absolute mt-3 bg-[#01147c] border-[1px] p-3">
                                {menu.map((items,index) => index>2 && (<HeaderIcon name={items.name} Icon={items.icon}/>))}
                            </div>: null}
                        </div>
                    </div>
                    
                </div>
                <img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" className="w-[55px] rounded-full " />
            </div>
        </>
    );
}

export default Header;
