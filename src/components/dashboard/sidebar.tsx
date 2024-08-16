/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils'
import Link from 'next/link'

type SidebarGenericProps<T = any> = {
  children: React.ReactNode
  className?: string
} & T

type SidebarNavLinkProps = SidebarGenericProps<{
  href: string
  active: boolean
}>

// #region SIDEBAR

function Sidebar({ children, className }: SidebarGenericProps) {
  return (
    <aside
      className={cn('flex h-full flex-col border-r border-border', className)}
    >
      {children}
    </aside>
  )
}

function SidebarHeader({ children, className }: SidebarGenericProps) {
  return (
    <header
      className={cn(
        'flex h-16 items-center border-b border-border p-4',
        className,
      )}
    >
      {children}
    </header>
  )
}

function SidebarMain({ children, className }: SidebarGenericProps) {
  return (
    <main className={cn('flex flex-col gap-4 p-4', className)}>{children}</main>
  )
}

function SidebarFooter({ children, className }: SidebarGenericProps) {
  return (
    <div className={cn('mt-auto border-t border-border p-4', className)}>
      {children}
    </div>
  )
}

export { Sidebar, SidebarHeader, SidebarMain, SidebarFooter }

// #endregion

// #region NAVIGATION

function SidebarNav({ children, className }: SidebarGenericProps) {
  return <nav className={cn('flex flex-col gap-4', className)}>{children}</nav>
}

function SidebarNavHeader({ children, className }: SidebarGenericProps) {
  return <header className={cn('', className)}>{children}</header>
}

function SidebarNavHeaderTitle({ children, className }: SidebarGenericProps) {
  return (
    <h4 className={cn('text-xs uppercase text-muted-foreground', className)}>
      {children}
    </h4>
  )
}

function SidebarNavMain({ children, className }: SidebarGenericProps) {
  return (
    <main className={cn('flex flex-col gap-2', className)}>{children}</main>
  )
}

function SidebarNavLink({
  children,
  className,
  href,
  active,
}: SidebarNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all hover:opacity-70',
        active ? 'bg-gray-200' : '',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export {
  SidebarNav,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SidebarNavLink,
  SidebarNavMain,
}

// #endregion
