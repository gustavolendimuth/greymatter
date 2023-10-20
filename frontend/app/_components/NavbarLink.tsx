import Link from 'next/link';
import { ComponentProps } from 'react';

type NavbarLinkProps = ComponentProps<'div'> & {
  href: string;
};

function NavbarLink({ children, href, ...navbarLinkProps }: NavbarLinkProps) {
  return (
    <Link href={href} scroll>
      <div {...navbarLinkProps} className="uppercase w-full mx-auto tracking-widest text-center text-white">
        {children}
      </div>
    </Link>
  );
}

export default NavbarLink;
