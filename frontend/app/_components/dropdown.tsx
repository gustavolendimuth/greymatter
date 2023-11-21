import { Menu } from '@headlessui/react';
import { Fragment } from 'react';

import { DropdownLinks } from './Navbar';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type DropdownProps = {
  links: DropdownLinks[];
  name: string;
};

function Dropdown({ links, name }: DropdownProps) {
  return (
    <Menu>
      <Menu.Button className="relative">{name}</Menu.Button>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {links.map((link) => (
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                href={link.href}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                {link.name}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default Dropdown;
