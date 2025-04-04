'use client'

import React from 'react'
import { invoke } from '@tauri-apps/api/core'
import { type } from 'arktype'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  useForm,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const CallRust = () => {
  const form = useForm({
    schema: type({ a: 'number', b: 'number' }),
    defaultValues: { a: 0, b: 0 },
    submitFn: async (data) => invoke<number>('add', data),
    onSuccess: (data) => {
      toast.success(`Result: ${data}`)
    },
    onError: (error) => {
      toast.error(`Error: ${error}`)
    },
  })
  return (
    <Form form={form}>
      <legend className="text-center text-lg font-semibold">
        Call Rust Function
      </legend>

      <FormField
        name="a"
        render={(field) => (
          <FormItem>
            <FormLabel>Num 1</FormLabel>
            <FormControl {...field}>
              <Input type="number" placeholder="Num 1" />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        name="b"
        render={(field) => (
          <FormItem>
            <FormLabel>Num 2</FormLabel>
            <FormControl {...field}>
              <Input type="number" placeholder="Num 2" />
            </FormControl>
          </FormItem>
        )}
      />

      <Button disabled={form.isPending}>Calculate</Button>
    </Form>
  )
}
