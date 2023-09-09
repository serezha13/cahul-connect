import { numberEightCoords, numberFiveCoords, numberFourCoords, numberOneCoords } from '@/apps/transport/route-coords';
import TransportMap from '@/components/TransportMap';
import { Button, Checkbox, SegmentedControl, Select, TextInput } from '@mantine/core';
import 'ol/ol.css';
import { useState } from 'react';

const Transport = () => {
    const [section, setSection] = useState('buses');
    const [rideType, setRideType] = useState('cheap');
    const [checked, setChecked] = useState(false);
    const [route, setRoute] = useState<string | null>('routeOne');

    const routes = [
        { value: 'routeOne', label: 'Ruta numarul 1', coords: numberOneCoords },
        { value: 'routeFour', label: 'Ruta numarul 4', coords: numberFourCoords },
        { value: 'routeFive', label: 'Ruta numarul 5', coords: numberFiveCoords },
        { value: 'routeEight', label: 'Ruta numarul 8', coords: numberEightCoords },
    ];

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
                <form className="flex flex-col justify-between gap-5">
                    <div className="flex flex-col gap-1.5">
                        <TextInput placeholder="Numele dvs" label="Nume" withAsterisk />
                        <TextInput placeholder="Numarul dvs de telefon" label="Numarul de telefon" withAsterisk />

                        {!checked && <TextInput placeholder="Introduceti strada curenta" label="Strada" withAsterisk />}
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

                    <Button className="bg-black h-12" color="dark" size="md">
                        Comanda
                    </Button>
                </form>
            )}
        </div>
    );
};

export default Transport;
