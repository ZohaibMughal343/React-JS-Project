import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion" 


const Card = ({ data, reference }) => {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={1} dragTransition={{bounceStiffness: 100, bounceDamping: 30}} className='relative w-60 flex-shirnk-0 h-[280px] bg-zinc-900/90 rounded-[45px] px-5 py-10 overflow-hidden text-white'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.description}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex justify-between items-center py-3 px-8 mb-3'>
                    <h5>{data.filesize}mb</h5>
                    <span className='w-7 h-7 bg-zinc-700 rounded-full flex justify-center items-center'>
                    {data.close ? <IoClose size="1.2rem" color='#fff' /> : <MdOutlineFileDownload size="1.2rem" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag.isOpen && <div className={`tag w-full py-4 flex items-center justify-center bg-${data.tag.tagColor}-600`}>
                    <h3 className='text-sm font-semibold'>Download Now</h3>
                    </div> 
                }  
            </div>
        </motion.div>
    </>
  )
}

export default Card
