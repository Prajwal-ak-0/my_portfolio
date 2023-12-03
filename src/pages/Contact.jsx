// ContactForm.js
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from "@nextui-org/react";
import { Textarea,Button } from "@nextui-org/react";
import {toast} from 'react-hot-toast';

const schema = z.object({
  name: z.string().min(2).max(255).refine((val) => val.trim() !== '', { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10).max(1000).refine((val) => val.trim() !== '', { message: 'Message is required' }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    toast.success('Message sent successfully');

    console.log(data)
  };


  return (
    <div className="z-10 mb-4 md:mx-16 sm:mx-10 bg-transparent text-white ">
      <h1 className="md:text-[70px] sm:text-[60px] text-[50px] font-bold">
        Contact
      </h1>
      <div className="bg-transparent hover:shadow-xl hover:shadow-white sm:p-4 md:w-[50%] p-2 rounded-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-md rounded sm:px-8 px-4 sm:pt-6  sm:pb-8 sm:mb-4 max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label className="block text-white text-lg font-bold sm:mb-2 " htmlFor="name">
              Name
            </label>
            <Input
              {...register('name')}
              className={`${errors.name ? 'border-red-500' : 'border-none'
                } shadow appearance-none border-2 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline`}
              id="name"
              type="text"
              label="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-bold sm:mb-2" htmlFor="email">
              Email
            </label>
            <Input
              {...register('email')}
              className={`${errors.email ? 'border-red-500' : 'border-none'
                } shadow appearance-none border-2 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              label="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-lg font-bold sm:mb-2" htmlFor="message">
              Message
            </label>
            <Textarea
              {...register('message')}
              className={`${errors.message ? 'border-red-500' : 'border-none'
                } shadow appearance-none border-2  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline`}
              id="message"
              label="Drop your Message"
              disableAnimation
              disableAutosize
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic">{errors.message.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <Button className='w-[50%] mx-auto' type='submit' color="primary" variant="shadow">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

{/*  */ }