'use client'
import Image from 'next/image';
import React from 'react'

const Avatar = () => {
  return (
      <Image 
       src='/images/placeholder.jpg'
       alt="Avatar"
       height={30}
       width={30}
      />
  )
}

export default Avatar
