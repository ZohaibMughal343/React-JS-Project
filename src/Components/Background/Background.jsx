import React from 'react'

const Background = () => {
    return (
        <>
            <div className='w-full h-screen bg-zinc-800'>
                <div className='fixed z-[2] w-full h-screen'>
                    <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-900 text-xl font-semibold'>Document.</div>
                    <h1 className='text-[13vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter text-zinc-900'>Docs.</h1>
                </div>
            </div>
        </>
    )
}

export default Background
