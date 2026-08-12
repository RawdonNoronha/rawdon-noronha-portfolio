import { Separator } from '@/components/ui/separator'
import React from 'react'

const Footer = () => {
    return (
        <footer className="mx-5 mb-20 md:mx-80 text-center">
            Website designed and developed by <a href="https://rawdon-noronha.vercel.app/" className="text-vivid-orange">Rawdon Noronha</a> | &copy; {new Date().getFullYear()} All rights reserved.
        </footer>
    )
}

export default Footer