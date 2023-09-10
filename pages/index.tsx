"use client";

import React, { useState } from "react";
import moment from "moment";
import { forecast, newsList } from "@/mock/home/mock";
import { Avatar, Badge, Button, Card, Modal, Text } from "@mantine/core";
import Image from "next/image";
import { Image as MantineImage } from "@mantine/core";

import { Carousel } from "@mantine/carousel";
import Router from "next/router";
import { useDisclosure } from "@mantine/hooks";

const getFromStore = (key: string) =>
  typeof localStorage !== "undefined" &&
  JSON.parse(localStorage[key] ?? "false");

const setInStore = (key: string, value: string) =>
  typeof localStorage !== "undefined" && localStorage.setItem(key, value);

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <ProfileSection />
      <UserMembershipSection />
      <WeatherSection />
      <NewsSection />
    </main>
  );
}

const UserMembershipSection = () => {
  const isLogged = getFromStore("isLogged");
  const membership = getFromStore("membership");

  const [opened, { open, close }] = useDisclosure();
  const [purchased, setPurchased] = useState(false);

  const handleBuy = () => {
    setInStore("membership", "true");
    setPurchased(true);
  };

  return (
    <div>
      <div className="text-2xl font-semibold mb-4">Abonamentele mele</div>
      {isLogged && (
        <div>
          {membership && (
            <Card withBorder>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="font-semibold">Fitness Gym</div>
                  <div className="flex flex-col mt-auto">
                    <Text c="dimmed" fz="xs">
                      Valabil pana la:{" "}
                    </Text>
                    <Badge radius="sm">
                      {moment().add("days", 30).format("ll")}
                    </Badge>
                  </div>
                </div>
                <div>
                  <Image
                    width={96}
                    height={96}
                    src="/hotels/qr-hotel.png"
                    alt="#"
                  />
                </div>
              </div>
            </Card>
          )}
          {!membership && (
            <Card withBorder>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="font-semibold">Fitness Gym</div>
                  <Text c="dimmed" fz="xs">
                    Abonament lunar
                  </Text>
                  <div className="flex items-center gap-1 mt-auto">
                    <div>350 MDL</div>
                    <Text c="dimmed" fz="xs">
                      / luna
                    </Text>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    className="blur-sm"
                    width={96}
                    height={96}
                    src="/hotels/qr-hotel.png"
                    alt="#"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button
                      className="bg-green-500 hover:bg-green-500"
                      onClick={() => open()}
                    >
                      Cumpara
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      )}
      {!isLogged && (
        <div className="relative">
          <Card withBorder className="blur-sm">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="font-semibold">Fitness Gym</div>
                <Text c="dimmed" fz="xs">
                  Abonament lunar
                </Text>
                <div className="flex items-center gap-1 mt-auto">
                  <div>350 MDL</div>
                  <Text c="dimmed" fz="xs">
                    / luna
                  </Text>
                </div>
              </div>
              <div>
                <Image
                  className="blur-sm"
                  width={96}
                  height={96}
                  src="/hotels/qr-hotel.png"
                  alt="#"
                />
              </div>
            </div>
          </Card>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Button
              className="bg-[#333] hover:bg-[#545454]"
              onClick={() => Router.push("/auth/login")}
            >
              Logheaza-te
            </Button>
          </div>
        </div>
      )}
      <Modal
        title={purchased ? undefined : "Confirmare plata abonament"}
        opened={opened}
        onClose={close}
				withCloseButton={!purchased}
				centered={purchased}
      >
        {purchased ? (
          <>
            <div className="flex items-center justify-center">
              <Image
                src="/hotels/qr-hotel.png"
                alt="qr-hotel"
                width={192}
                height={192}
              />
            </div>
            <div className="text-3xl font-medium text-center">
              Plata ca succes!
            </div>
            <Text c="dimmed" className="text-center">
              Prezentati qr-code-ul la intrarea in sala.
            </Text>
          </>
        ) : (
          <>
            <MantineImage
              src="https://www.nextlevelfitnessgl.co.uk/assets/img/FACILITIES%20-%20MACHINES.jpg"
              alt="https://www.nextlevelfitnessgl.co.uk/assets/img/FACILITIES%20-%20MACHINES.jpg"
            />
            <div className="font-semibold text-xl mt-2">Fitness Gym</div>
            <Text c="dimmed">Acces 24/7</Text>
            <Text>O sală perfectă pentru a vă menține în forma sportivă!</Text>
            <div className="flex justify-between">
              <div className="flex items-center gap-1 mt-auto">
                <div>350 MDL</div>
                <Text c="dimmed" fz="xs">
                  / luna
                </Text>
              </div>
              <Button className="bg-[#333] hover:bg-[#333]" onClick={handleBuy}>
                Plateste
              </Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

const ProfileSection = () => {
  const isLogged = getFromStore("isLogged");

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="">
          <Image
            width={80}
            height={80}
            className="mix-blend-multiply"
            src={"/logo512.png"}
            alt="logo"
          />
        </div>
        <Avatar
          size="lg"
          radius="xl"
          src={isLogged && "https://avatars.githubusercontent.com/u/10353853"}
        />
      </div>
      <div className="border-t mt-4"></div>
    </div>
  );
};

const WeatherSection = () => {
  return (
    <div className="my-6">
      <div className="rounded-xl p-4 bg-gradient-to-b from-gray-900 to-gray-700 text-white">
        <div className="flex justify-between ">
          <div className="text-4xl font-semibold">34°</div>
          <div className="flex flex-col items-center">
            <Image
              width={50}
              height={50}
              src="/weather-icons/fill/openweathermap/01d.svg"
              alt="weather-icon"
            />
            <div className="font-semibold">însorit</div>
          </div>
        </div>
        <div className="border-gray-300 border-t my-4"></div>
        <div className="grid grid-cols-5">
          {forecast.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-gray-500 text-sm font-semibold">
                {item.tempNight}°
              </div>
              <Image
                width={40}
                height={40}
                src={item.iconSrc}
                alt="weather-icon"
              />
              <div className="text-sm font-semibold">{item.tempDay}°</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NewsSection = () => {
  return (
    <div>
      <div className="text-2xl font-semibold mb-4">Ultimele știri</div>
      <Carousel
        align="center"
        withControls={false}
        slideGap="md"
        mx={-20}
        slideSize="80%"
      >
        {newsList.map((item, index) => (
          <Carousel.Slide key={index}>
            <div
              key={index}
              className="border p-4 rounded overflow-hidden bg-white h-full"
            >
              <div className="relative aspect-video -mx-4 -mt-4">
                <Image
                  className="object-cover"
                  fill
                  src={item.img}
                  alt="news-image"
                />
              </div>
              <div className="mt-4 text-lg font-bold leading-none ">
                {item.title.slice(0, 50)}...
              </div>
              <div className="text-xs font-semibold mt-2">
                {moment().format("ll, HH:mm")}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};
