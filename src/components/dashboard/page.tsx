/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils'

type PageGenericProps = {
  children: React.ReactNode
  className?: string
}

// #region Page

function Page({ children, className }: PageGenericProps) {
  return (
    <main className={cn('flex h-full flex-col', className)}>{children}</main>
  )
}

function PageHeader({ children, className }: PageGenericProps) {
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

function PageHeaderTitle({ children, className }: PageGenericProps) {
  return (
    <header className={cn('uppercase text-muted-foreground', className)}>
      {children}
    </header>
  )
}

function PageMain({ children, className }: PageGenericProps) {
  return (
    <main className={cn('flex flex-col gap-4 p-4', className)}>{children}</main>
  )
}

function PageFooter({ children, className }: PageGenericProps) {
  return (
    <div className={cn('mt-auto border-t border-border p-4', className)}>
      {children}
    </div>
  )
}

export { Page, PageHeader, PageHeaderTitle, PageMain, PageFooter }

// #endregion
