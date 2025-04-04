'use client'

import React from 'react'
import { invoke } from '@tauri-apps/api/core'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const CallRust = () => {
  const [greetMsg, setGreetMsg] = React.useState('')
  return (
    <form
      action={async (formData: FormData) => {
        const name = formData.get('name') as string
        const msg = await invoke<string>('halo', { name })
        setGreetMsg(msg)
      }}
    >
      <Input name="name" placeholder="Name" />
      <Button type="submit">Submit</Button>

      <div className="text-lg">{greetMsg}</div>
    </form>
  )
}
