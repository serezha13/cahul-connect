import { mockRestaurants } from '@/apps/restaurants/mock-data';
import { MockRestaurant } from '@/interfaces/mock-restaurant.interface';
import { Badge, Button, Card, Group, Image, Text, TextInput } from '@mantine/core';
import Router from 'next/router';
import { useState } from 'react';
import { PiCurrencyDollar } from 'react-icons/pi';

const Restaurants = () => {
    const [filter, setFilter] = useState('');

    const sortByHotness = (a: MockRestaurant, b: MockRestaurant) => {
        if (a.hot && !b.hot) {
            return -1;
        } else if (!a.hot && b.hot) {
            return 1;
        } else {
            return 0;
        }
    };

    const restaurants = mockRestaurants.sort(sortByHotness);

    return (
        <>
            <h1 className="title">Restaurante</h1>

            <TextInput
                placeholder="Scrie pentru a cauta..."
                className="mb-4"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />

            <div className="max-w-6xl mx-auto gap-4 grid grid-cols-1">
                {restaurants
                    .filter((item) => (filter ? item.title.toLowerCase().includes(filter.toLowerCase()) : true))
                    .map((restaurant, index) => (
                        <Card shadow="sm" padding="lg" radius="md" withBorder key={index}>
                            <Card.Section>
                                <Image src={restaurant.image} height={220} alt="Norway" />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text size="xl" weight={500}>
                                    {restaurant.title}
                                </Text>
                                {restaurant.hot && (
                                    <Badge className="px-4 py-3" size="md" color="pink" variant="light">
                                        Promovat
                                    </Badge>
                                )}
                            </Group>

                            <Text size="sm" color="dimmed">
                                {restaurant.desc}
                            </Text>

                            <Group position="apart" mt="lg" mb="xs">
                                <div className="flex">
                                    {Array.from(Array(restaurant.price).keys()).map((i) => (
                                        <PiCurrencyDollar className="text-md text-green-700" key={i} />
                                    ))}
                                    {Array.from(Array(3 - restaurant.price).keys()).map((i) => (
                                        <PiCurrencyDollar className="text-md text-gray-400" key={i} />
                                    ))}
                                </div>
                                <Button
                                    onClick={() => Router.push(`restaurants/form?id=${restaurant.id}`)}
                                    variant="outline"
                                    className="border-[#333] text-[#333]">
                                    Detalii
                                </Button>
                            </Group>
                        </Card>
                    ))}
            </div>
        </>
    );
};

export default Restaurants;
