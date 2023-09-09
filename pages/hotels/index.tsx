import {
  Button,
  Card,
  Group,
  Skeleton,
  Text,
  TextInput,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import HotelCard from "./components/HotelCard/HotelCard";
import hotels from "./static/hotels.static";
import { useState } from "react";
import { Carousel } from "@mantine/carousel";

const Hotels = () => {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="text-5xl font-semibold mb-4">Hotel-uri</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {hotels.map((item, index) => (
          <HotelCard {...item} key={`${index}-h`} />
        ))}
        <Card withBorder>
          <Card.Section>
            <Skeleton height={220} />
          </Card.Section>
          <div className="flex flex-col">
            <Group position="apart" mt="lg">
              <Text fw={500} fz="lg">
                Aici poate fi hotel-ul dvs.
              </Text>

              <Group spacing={5}>
                <AiFillStar color="yellow" />
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

              <Button radius="md" variant="outline" className="border-[#333]">
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
