'use client'

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMain,
  SidebarNav,
  SidebarNavLink,
  SidebarNavMain,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import { GearIcon, HomeIcon } from '@radix-ui/react-icons'
import { UserDropdownMenu } from './user-dropdown'
import { Logo } from '@/components'
import { Session } from 'next-auth'

interface MainSidebarProps {
  user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
  const paths = [
    { href: '/app', label: 'Tarefas', Icon: HomeIcon },
    { href: '/app/settings', label: 'Configurações', Icon: GearIcon },
  ]

  const pathname = usePathname()

  const linkIsActive = (href: string) => {
    return pathname === href
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarMain>
        <SidebarNav>
          <SidebarNavMain>
            {paths.map(({ href, label, Icon }) => (
              <SidebarNavLink
                key={href}
                active={linkIsActive(href)}
                href={href}
              >
                <Icon />
                {label}
              </SidebarNavLink>
            ))}
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>

      <SidebarFooter>
        <UserDropdownMenu user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
