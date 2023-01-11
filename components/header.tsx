'use client'

import { motion } from "framer-motion";
import Link from 'next/link'
import { Container } from './container'
import { CartIcon } from './icons/cart'
import { usePathname } from "next/navigation";


const links = [
  { href: '/products', label: 'Products' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/workshop', label: 'Workshop' },
  { href: '/showroom', label: 'Showroom' },
  {
    href: '/long-name',
    label: 'A very long name to show the animation',
  },
]

export const Header = () => {
  const path = usePathname()
  
  return (
    <header className='relative z-10 w-full bg-beige'>
      <Container className='flex items-center border-b border-black py-8'>
        <Link href='/' className='text-3xl font-bold'>
          Fur Nature
        </Link>
        <nav>
          <ul className='ml-12 flex [&_li]:ml-4'>
            {links.map((link) => (
              <li key={link.href}>
                <Link className='relative' href={link.href}>
                {link.href === path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[1px] w-full bg-black"
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className='ml-auto flex flex-row'>
          <CartIcon />
          <span className='sr-only'>Open cart</span>
          <span className='ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white'>
            1
          </span>
          <span className='sr-only'>items in cart cart</span>
        </button>
      </Container>
    </header>
  )
}
