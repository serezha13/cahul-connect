import { mockRestaurants } from '@/apps/restaurants/mock-data';
import { Button, TextInput, Text } from '@mantine/core';
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
            <div className='-mx-4 -mt-4'>
                <img src={restaurant?.image} height={250} alt="Norway" />
            </div>
            <div className="text-4xl font-bold pt-4 mb-2">{restaurant?.title}</div>
            <div className="pb-1">
                <Text c="dimmed" className="pb-4 border-b-[#ddd] border-b-[1px]">
                {restaurant?.desc}
            </Text>
            </div>

            <div className="text-2xl font-bold pt-4 mb-2">Unde se află?</div>
            <div className='pb-4 border-b-[1px]' dangerouslySetInnerHTML={{ __html: restaurant?.__html || "" }} />

            <div className="text-2xl font-bold mb-2 pt-6 border-t-[1px]">Rezervare</div>

            <form className="flex flex-col gap-y-2">
                <TextInput placeholder="Numele dvs" label="Nume" withAsterisk />
                <TextInput placeholder="Numarul dvs de telefon" label="Numarul de telefon" withAsterisk />
                <div className="flex justify-between gap-x-5">
                    <DateInput
                        className="flex-grow"
                        value={value}
                        onChange={setValue}
                        label="Selectati data"
                        placeholder="Alegeti ziua"
                        maw={400}
                        mx="auto"
                        withAsterisk
                    />
                    <TimeInput className="flex-grow-[2]" label="Selectati timpul" withAsterisk />
                </div>
                
                <Button className="bg-[#25262b] mx-auto mt-4  px-10" color="dark" size="md">
                    <span className="text-white">Rezerveaza</span>
                </Button>
                
            </form>
        </>
    );
};

export default Form;
