'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const Logo = () => {
    const router = useRouter()
  return (
    <Image 
    src='/images/logo.png'
    height={100}
    width={100}
    alt='logo'
    />
  )
}

export default Logo
