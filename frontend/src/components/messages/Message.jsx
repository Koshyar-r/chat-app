import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="" alt="" />
                </div>
            </div>

            <div className={`chat-bubble text-white bg-blue-500`}>Hey what's up</div>
            <div className='chat-footer text-gray-300 text-xs flex gap-1 items-center'>11:11</div>
        </div>
    )
}

export default Message

// import React from 'react'

// const Message = () => {
//     return (
//         <div className='chat chat-end'>
//             <div className='chat-image avatar'>
//                 <div className='w-10 rounded-full'>
//                     <img src="" alt="" />
//                 </div>
//             </div>

//             <div className={`chat-bubble text-white bg-blue-500`}>Hey what's up</div>
//             <div className='chat-footer text-gray-300 text-xs flex gap-1 items-center'>11:11</div>
//         </div>
//     )
// }

// export default Message