import { mockRestaurants } from '@/apps/restaurants/mock-data';
import { MockRestaurant } from '@/interfaces/mock-restaurant.interface';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { PiCurrencyDollar } from 'react-icons/pi';

const Restaurants = () => {
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

            <div className="max-w-6xl mx-auto gap-10 grid grid-cols-1 px-4 py-10">
                {restaurants.map((restaurant, index) => (
                    <Card shadow="sm" padding="lg" radius="md" withBorder key={index}>
                        <Card.Section>
                            <Image src={restaurant.image} height={250} alt="Norway" />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text size="xl" weight={500}>
                                {restaurant.title}
                            </Text>
                            {restaurant.hot && (
                                <Badge className="px-4 py-3" size="md" color="pink" variant="light">
                                    Hot
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
                                className="w-auto m-0 bg-[rgb(231,245,255)]"
                                variant="light"
                                color="blue"
                                fullWidth
                                mt="md"
                                radius="md">
                                View more
                            </Button>
                        </Group>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Restaurants;
