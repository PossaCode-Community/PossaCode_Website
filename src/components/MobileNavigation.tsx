import NavLinks from '@/data/navLinks.json'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger className="ml-6 lg:ml-0 lg:hidden">
        <svg
          className="size-8 "
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 6.75H20.25M3.75 12H20.25M12 17.25H20.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SheetTrigger>
      <SheetContent className="flex h-full w-full flex-col justify-start rounded-tl-[50px] px-11 pt-36">
        <ul className="flex flex-col space-y-6">
          {NavLinks.map((navLink) => (
            <li key={navLink.href}>
              <a
                className="text-lg font-semibold text-darkBlue dark:text-inherit"
                href={navLink.href}
              >
                {navLink.text}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/devenir-membre"
          className={cn(
            buttonVariants({
              className: 'mt-10 flex items-center justify-center',
            }),
            'max-w-48 rounded-[15px] bg-orange text-white hover:bg-[rgba(241,78,14,0.8)] md:hidden',
          )}
        >
          Devenir membre
        </a>
      </SheetContent>
    </Sheet>
  )
}
