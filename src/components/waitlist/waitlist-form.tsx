'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { WaitlistService } from '@/services/waitlist.services'
import { useRouter } from 'next/navigation'
import { waitlistFormDef, waitlistValidationSchema } from '@/models/validations/waitlist.validation'
import { toast } from 'sonner'

const WaitlistForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const form = useForm<waitlistFormDef>({
        resolver: zodResolver(waitlistValidationSchema),
        defaultValues: {
            name: "",
            email: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: waitlistFormDef) {
        setLoading(true)
        try {
            await WaitlistService.JoinWaitlist(values);
            setLoading(false);
            router.push("/waitlist/success")
        } catch (error:unknown) {
            setLoading(false)
            toast(error.response.data.error)
            console.log(error);
        }
    }
  return (
    <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-[17px] w-[219px] text-[15px] font-normal">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input className='bg-[#d9d9d913] rounded-md focus:border-black py-[11px] h-full px-[26px]' placeholder="Segun" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className='bg-[#d9d9d91a] rounded-md focus:border-black py-[11px] h-full px-[26px]' placeholder="segun0x@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='text-black mx-auto hover:text-white w-[107px] bg-[#f14d078d] py-[10px] px-5 flex items-center gap-[10px]'>
                        {loading ? (<p>loading...</p>) : (<span className='flex gap-3 items-center'>Next <Image src='/icons/arrow-up.svg' alt='arrow' className='group-hover:rotate-12 transition-all' width={20} height={20} /></span>)}
                    </Button>
                </form>
            </Form> 
  )
}

export default WaitlistForm