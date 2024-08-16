import { RocketIcon } from '@radix-ui/react-icons'

export function Logo() {
  return (
    <div className="flex w-fit items-center gap-2 rounded-md bg-slate-900 p-2">
      <RocketIcon className="size-5 text-primary-foreground" />
    </div>
  )
}
