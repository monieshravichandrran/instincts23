import React from 'react';
import Link from 'next/link';


type Children = {
  children: React.ReactNode;
  large: boolean;
  href: string;
}

export const Button = ({ children, large, href }: Children) => {
  return (
    <Link
      className="button text-center mt-4 text-bold text-2xl"
      href={href}
    >
      {children}
    </Link>
  )
}

