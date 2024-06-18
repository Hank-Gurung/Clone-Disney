import React from 'react'

function HeaderIcon(props) {
  // const menu = props.items;
  return (
    <>
        {/* <div className="text-white flex items-center gap-3 text-[14px] font-semibold cursor-pointer">
        {menu.map((item)=>
                    <div className="text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8">
                      {<item.icon/>}
                      <div className='hidden md:block'>
                      {item.name}

                      </div>

                    </div>
                )}
            
        </div> */}
        <div className="text-white flex items-center gap-3 text-[16px] font-semibold cursor-pointer mb-3 hover:underline underline-offset-8">

            
            {<props.Icon/>}
            <h2 className=''>
                {props.name}
            </h2>
        </div>
    </>
  )
}

export default HeaderIcon