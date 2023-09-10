import { numberEightCoords, numberFiveCoords, numberFourCoords, numberOneCoords } from '@/apps/transport/route-coords';
import TransportMap from '@/components/TransportMap';
import { Button, Checkbox, Modal, SegmentedControl, Select, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import 'ol/ol.css';
import { useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

import * as yup from 'yup';

const Transport = () => {
    const [section, setSection] = useState('buses');
    const [rideType, setRideType] = useState('cheap');
    const [checked, setChecked] = useState(false);
    const [route, setRoute] = useState<string | null>('routeOne');
    const [opened, { open, close }] = useDisclosure(false);

    const openModal = () => {
        open();

        setTimeout(() => {
            closeModal();
        }, 3000);
    };

    const closeModal = () => {
        close();

        form.reset();
    };

    const routes = [
        { value: 'routeOne', label: 'Ruta numarul 1', coords: numberOneCoords },
        { value: 'routeFour', label: 'Ruta numarul 4', coords: numberFourCoords },
        { value: 'routeFive', label: 'Ruta numarul 5', coords: numberFiveCoords },
        { value: 'routeEight', label: 'Ruta numarul 8', coords: numberEightCoords },
    ];

    const schema = yup.object().shape({
        name: yup.string().required('Campul este obligatoriu').min(4, 'Minim 4 caractere'),
        phoneNumber: yup
            .string()
            .required('Campul este obligatoriu')
            .typeError('Introduceti un numar')
            .min(9, 'Numarul trebuie sa contina 9 cifre')
            .max(9, 'Numarul trebuie sa contina 9 cifre'),
        ...(!checked && { address: yup.string().required('Campul este obligatoriu') }),
    });

    const form = useForm({
        initialValues: {
            name: '',
            phoneNumber: '',
            address: '',
        },

        validate: yupResolver(schema),
    });

    return (
        <div className="flex flex-col">
            <div>
                <h1 className="title">Transport</h1>

                <SegmentedControl
                    value={section}
                    onChange={setSection}
                    className="my-3"
                    fullWidth
                    size="md"
                    data={[
                        { label: 'Autobuze', value: 'buses' },
                        { label: 'Taxi', value: 'taxi' },
                    ]}
                />
            </div>

            {section === 'buses' ? (
                <>
                    <Select className="mb-4" value={route} onChange={setRoute} label="Selectati ruta" data={routes} />
                    <TransportMap coords={routes.find((item) => item.value === route)?.coords!}></TransportMap>
                </>
            ) : (
                <form className="flex flex-col justify-between gap-5" onSubmit={form.onSubmit(() => openModal())}>
                    <div className="flex flex-col gap-1.5">
                        <TextInput {...form.getInputProps('name')} placeholder="Numele dvs" label="Nume" withAsterisk />
                        <TextInput
                            {...form.getInputProps('phoneNumber')}
                            placeholder="Numarul dvs de telefon"
                            label="Numarul de telefon"
                            withAsterisk
                        />

                        {!checked && (
                            <TextInput
                                {...form.getInputProps('address')}
                                placeholder="Introduceti adresa curenta"
                                label="Adresa"
                                withAsterisk
                            />
                        )}
                    </div>

                    <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.currentTarget.checked)}
                        label="Foloseste geologatica curenta"
                    />

                    <SegmentedControl
                        value={rideType}
                        onChange={setRideType}
                        data={[
                            {
                                label: (
                                    <>
                                        <div>Econom</div>
                                        <div>
                                            <span className="text-[10px] text-gray-600">de la </span>
                                            <span className="font-bold text-xs me-[2px]">40</span>
                                            <span className="font-bold text-[9px]">MDL</span>
                                        </div>
                                    </>
                                ),
                                value: 'cheap',
                            },
                            {
                                label: (
                                    <>
                                        <div>Comfort</div>
                                        <div>
                                            <span className="text-[10px] text-gray-600">de la </span>
                                            <span className="font-bold text-xs me-[2px]">60</span>
                                            <span className="font-bold text-[9px]">MDL</span>
                                        </div>
                                    </>
                                ),
                                value: 'comfort',
                            },
                            {
                                label: (
                                    <>
                                        <div>Livrare</div>
                                        <div>
                                            <span className="text-[10px] text-gray-600">de la </span>
                                            <span className="font-bold text-xs me-[2px]">40</span>
                                            <span className="font-bold text-[9px]">MDL</span>
                                        </div>
                                    </>
                                ),
                                value: 'delivery',
                            },
                        ]}
                    />

                    <Button className="bg-black h-12" type="submit" color="dark" size="md">
                        Comanda
                    </Button>
                </form>
            )}

            <Modal padding={20} size="xs" opened={opened} onClose={closeModal} withCloseButton={false} centered>
                <div className="text-2xl font-bold text-center mb-2">Felicitari!</div>
                <BsCheck2Circle className="mx-auto text-green-900" size="128"></BsCheck2Circle>
                <div className="text-center mt-2">Comanda a fost plasata cu succes!</div>
            </Modal>
        </div>
    );
};

export default Transport;
