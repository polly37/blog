'use client'

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import clsx from 'clsx'
import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="2xl" position="sticky" className="h-20 py-4 px-12">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold bg-gradient-to-r from-yellow-500 to-rose-300 bg-clip-text text-transparent">鸣姐.AI实战宝典</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            {item.items ? (
              <div className="relative group">
                <NextLink
                  href={item.href}
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'h-full flex items-center gap-1 px-2'
                  )}
                >
                  {item.label}
                </NextLink>
                <div className="absolute left-0 hidden group-hover:block pt-2">
                  <div className="bg-background border rounded-lg shadow-lg py-2">
                    {item.items.map((subItem) => (
                      <NextLink
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-default-100"
                      >
                        {subItem.label}
                      </NextLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NextLink
                href={item.href}
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'h-full flex items-center px-2'
                )}
              >
                {item.label}
              </NextLink>
            )}
          </NavbarItem>
        ))}
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
