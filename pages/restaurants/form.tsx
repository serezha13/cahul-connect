import { mockRestaurants } from '@/apps/restaurants/mock-data';
import { Button, TextInput } from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Form: NextPage = () => {
    const [value, setValue] = useState<Date | null>(null);

    const router = useRouter();
    const { id } = router.query;

    const restaurant = mockRestaurants.find((restaurant) => restaurant.id === Number(id));

    return (
        <>
            <h1 className="title">{restaurant?.title}</h1>

            <p className="my-5">{restaurant?.desc}</p>

            <form className="flex flex-col gap-y-2">
                <TextInput placeholder="Your name" label="Full name" withAsterisk />
                <TextInput placeholder="Your phone number" label="Phone number" withAsterisk />
                <div className="flex justify-between gap-x-5">
                    <DateInput
                        className="flex-grow"
                        value={value}
                        onChange={setValue}
                        label="Select date"
                        placeholder="Choose your date"
                        maw={400}
                        mx="auto"
                        withAsterisk
                    />
                    <TimeInput className="flex-grow-[2]" label="Select time" withAsterisk />
                </div>
                <Button className="bg-[#25262b] mx-auto mt-4  px-10" color="dark" size="md">
                    <span className="text-white">Book</span>
                </Button>
            </form>
        </>
    );
};

export default Form;
