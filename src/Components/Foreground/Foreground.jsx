import React, { useRef } from 'react'
import Card from '../Card/Card'

const Foreground = () => {
    const ref = useRef(null)
    const data = [
        { description: "Hi, my name is Zohaib", filesize: ".9", close: true, tag: {isOpen: true, tagTital: "Download Now", tagColor: "blue"}},
        { description: "Hi, my name is Zeeshan", filesize: ".5", close: false, tag: {isOpen: true, tagTital: "Download Now", tagColor: "green"}},
    ];
    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
                {data.map((value, index) => {
                    return <Card data={value} reference={ref} />
                })}
            </div>
        </>
    )
}

export default Foreground
