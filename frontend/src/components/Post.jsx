import React from 'react'

function Post({blog}) {
  const {title,content} = blog;
  return (
    <div className='bg-violet-400 border'>
      <h1>{title}</h1>
      <div className='w-[250px]' dangerouslySetInnerHTML={{__html:content}}>
      </div>
    </div>
  )
}

export default Post