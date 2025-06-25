import React from 'react'

type sectionTextType ={
  text:string
}
function SectionTitle({text}:sectionTextType) {
  return (
    <h2 className='text-3xl font-bold text-gray-900 mb-2'>
      {text}
    </h2>
  )
}

export default SectionTitle
