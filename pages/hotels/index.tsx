import { Button, Card, Group, Skeleton, Text, TextInput } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";

import hotels from "./static/hotels.static";
import HotelCard from "./components/HotelCard/HotelCard";
import { useState } from "react";
import { LuSearchX } from "react-icons/lu";

const Hotels = () => {
  const [filter, setFilter] = useState("");

  return (
    <section className="max-w-7xl mx-auto pb-16">
      <div className="text-5xl font-semibold mb-4">Hoteluri</div>
      <TextInput
        placeholder="Scrie pentru a cauta..."
        className="mb-4"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      {!hotels.filter((item) =>
        filter
          ? item.name.toLowerCase().includes(filter.toLocaleLowerCase())
          : true
      ).length && (
        <div className="p-4 flex flex-col items-center justify-center">
          <LuSearchX size={64} />
          <div>Nici un rezultat.</div>
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {hotels.filter((item) => filter ? item.name.toLowerCase().includes(filter.toLocaleLowerCase()) : true).map((item, index) => (
          <HotelCard {...item} key={`${index}-h`} />
        ))}
        <Card withBorder className="flex flex-col">
          <Card.Section>
            <Skeleton height={220} />
          </Card.Section>
          <div className="flex flex-col h-full">
            <Group position="apart" mt="lg">
              <Text fw={500} fz="lg">
                Aici poate fi hotel-ul dvs.
              </Text>

              <Group spacing={5}>
                <AiFillStar color="#333" />
                <Text fz="xs" fw={500}>
                  5
                </Text>
              </Group>
            </Group>
            <Text fz="sm" c="dimmed" mt="sm">
              Aduga hotel-ul pentru a primi clienti noi!
            </Text>
            <div className="flex items-center justify-between mt-auto">
              <div>
                <Text fz="xl" span fw={500}>
                  0 MDL
                </Text>
                <Text span fz="sm" c="dimmed">
                  {" "}
                  / noaptea
                </Text>
              </div>

              <Button radius="md" variant="outline" className="border-[#333] text-[#333]">
                Contact
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hotels;
