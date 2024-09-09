import { Loader2 } from 'lucide-react';
import React from 'react'

const Loading = () => {
  return (
    <div className="container p-6">
      <div className="flex justify-center items-center space-x-5">
        <span className="sr-only">Loading...</span>
        <Loader2 className='animate-spin w-14 h-14' />
      </div>
    </div>
  )
}

export default Loading;