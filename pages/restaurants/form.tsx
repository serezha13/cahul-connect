import { mockRestaurants } from '@/apps/restaurants/mock-data';
import { Button, Image, Modal, Text, TextInput } from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';
import { useForm, yupResolver } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { BsCheck2Circle } from 'react-icons/bs';
import * as yup from 'yup';

const Form: NextPage = () => {
    const [opened, { open, close }] = useDisclosure(false);

    const router = useRouter();
    const { id } = router.query;

    const restaurant = mockRestaurants.find((restaurant) => restaurant.id === Number(id));

    const schema = yup.object().shape({
        name: yup.string().required('Campul este obligatoriu').min(4, 'Minim 4 caractere'),
        phoneNumber: yup
            .string()
            .required('Campul este obligatoriu')
            .typeError('Introduceti un numar')
            .min(9, 'Numarul trebuie sa contina 9 cifre')
            .max(9, 'Numarul trebuie sa contina 9 cifre'),
        date: yup.date().required('Campul este obligatoriu').typeError('Selectati data'),
        time: yup.string().required('Campul este obligatoriu'),
    });

    const form = useForm({
        initialValues: {
            name: '',
            phoneNumber: '',
            date: '',
            time: '',
        },

        validate: yupResolver(schema),
    });

    const openModal = (values: any) => {
        open();

        console.log(values);

        setTimeout(() => {
            closeModal();
        }, 3000);
    };

    const closeModal = () => {
        close();

        form.reset();
    };

    return (
        <>
            <div className="-mx-4 -mt-4">
                <Image src={restaurant?.image} height={250} alt="Norway" />
            </div>
            <div className="text-4xl font-bold pt-4 mb-2">{restaurant?.title}</div>
            <div className="pb-1">
                <Text c="dimmed" className="pb-4 border-b-[#ddd] border-b-[1px]">
                    {restaurant?.desc}
                </Text>
            </div>

            <div className="text-2xl font-bold pt-4 mb-2">Unde se află?</div>
            <div className="pb-4 border-b-[1px]" dangerouslySetInnerHTML={{ __html: restaurant?.__html || '' }} />

            <div className="text-2xl font-bold mb-2 pt-6 border-t-[1px]">Rezervare</div>

            <form className="flex flex-col gap-y-2" onSubmit={form.onSubmit((values) => openModal(values))}>
                <TextInput {...form.getInputProps('name')} placeholder="Numele dvs" label="Nume" withAsterisk />
                <TextInput
                    {...form.getInputProps('phoneNumber')}
                    placeholder="Numarul dvs de telefon"
                    label="Numarul de telefon"
                    withAsterisk
                />
                <div className="flex justify-between gap-x-5">
                    <DateInput
                        className="flex-grow"
                        {...form.getInputProps('date')}
                        label="Selectati data"
                        placeholder="Alegeti ziua"
                        maw={400}
                        mx="auto"
                        withAsterisk
                    />
                    <TimeInput
                        className="flex-grow-[2]"
                        {...form.getInputProps('time')}
                        label="Selectati timpul"
                        withAsterisk
                    />
                </div>

                <Button className="bg-[#25262b] mx-auto mt-4 px-10 w-1/2" type="submit" color="dark" size="md">
                    Rezerva
                </Button>
            </form>

            <Modal padding={20} withCloseButton={false} opened={opened} onClose={closeModal} centered>
                <BsCheck2Circle className="mx-auto text-green-900" size="128"></BsCheck2Circle>
                <div className="text-3xl font-medium text-center">Felicitari!</div>
                <Text c="dimmed" className="text-center">
                    Rezervarea a fost efectuata cu succes!
                </Text>
            </Modal>
        </>
    );
};

export default Form;
