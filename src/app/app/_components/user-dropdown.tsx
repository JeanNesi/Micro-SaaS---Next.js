import { LogOut } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

interface UserDropdownMenuProps {
  user: Session['user']
}

export function UserDropdownMenu({ user }: UserDropdownMenuProps) {
  if (!user) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className="w-full justify-start p-0">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={user.image as string}
                alt={user.email as string}
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <h5 className="text-sm">{user?.email}</h5>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
