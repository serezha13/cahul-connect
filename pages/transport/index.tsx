import { numberEightCoords, numberFiveCoords, numberFourCoords, numberOneCoords } from '@/apps/transport/route-coords';
import TransportMap from '@/components/TransportMap';
import { Select } from '@mantine/core';
import 'ol/ol.css';
import { useState } from 'react';

const Transport = () => {
    const [route, setRoute] = useState<string | null>('routeOne');

    const test = [
        { value: 'routeOne', label: 'Ruta numarul 1', coords: numberOneCoords },
        { value: 'routeFour', label: 'Ruta numarul 4', coords: numberFourCoords },
        { value: 'routeFive', label: 'Ruta numarul 5', coords: numberFiveCoords },
        { value: 'routeEight', label: 'Ruta numarul 8', coords: numberEightCoords },
    ];

    return (
        <>
            <h1 className="title">Transport</h1>

            <h2 className="title title_md mt-6">Autobuze</h2>
            <Select className="mb-4" value={route} onChange={setRoute} label="Selectati ruta" data={test} />
            <TransportMap coords={test.find((item) => item.value === route)?.coords!}></TransportMap>

            <h2 className="title title_md mt-6">Taxi</h2>
            <div className="text-center mb-2 font-bold">City Taxi Cahul</div>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <a href="tel:+373079699317">+373 079 699 317</a>
                    <a href="tel:+373079338253">+373 079 338 253</a>
                </div>
                <div className="flex flex-col">
                    <a href="tel:+373078074234">+373 078 074 234</a>
                    <a href="tel:+373069188385">+373 069 188 385</a>
                </div>
            </div>

            <div className="h-52"></div>
        </>
    );
};

export default Transport;
