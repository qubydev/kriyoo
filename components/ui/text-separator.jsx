import React from 'react'

export default function TextSeparator({ text = null }) {
    return (
        <div className='flex items-center w-full text-muted-foreground my-4'>
            <span className='flex-1 border-b-2' />
            {text && (
                <span className="text-muted-foreground mx-3 text-sm">
                    {text}
                </span>
            )}
            <span className='flex-1 border-b-2' />
        </div>
    )
}