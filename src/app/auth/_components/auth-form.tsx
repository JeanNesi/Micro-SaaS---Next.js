'use client'

import { Button, Input, Label, toast } from '@/components'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const scheme = z.object({
  email: z.string().email(),
})

type IFormData = z.infer<typeof scheme>

export const AuthForm = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm<IFormData>()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    setLoading(true)
    try {
      await signIn('email', { email: data.email, redirect: false })
      toast({
        title: 'Success',
        description: 'Check your email for the login link',
      })
    } catch {
      toast({
        title: 'Error',
        description: 'An error occurred',
      })
    } finally {
      setLoading(false)
    }
  })

  return (
    <div className="flex flex-col justify-center mx-auto gap-6 max-w-sm h-full">
      <h1 className="font-bold text-xl">Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register('email')}
            type="email"
            placeholder="email@example.com"
          />
        </div>

        <Button className="w-full" type="submit" disabled={loading}>
          Login
        </Button>
      </form>
    </div>
  )
}
