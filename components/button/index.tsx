import Link from "next/link";
import React from "react";

type Children = {
  children: React.ReactNode;
  large: boolean;
  href: string;
};

export const Button = ({ children, large, href }: Children) => {
  return (
    <Link className="mt-4 text-2xl text-center button text-bold" href={href} >
      {children}
    </Link>
  );
};
