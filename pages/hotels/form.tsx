import moment from "moment";

import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { Button, Image, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { DatePicker } from "@mantine/dates";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineCoffeeMaker, MdOutlineFreeBreakfast } from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";

import {
  HotelCardProps,
  useCardStyles,
} from "./components/HotelCard/HotelCard";
import hotels from "./static/hotels.static";

const Form: NextPage<HotelCardProps> = (props) => {
  const { name, price, images, description, map } = props;
  const { classes } = useCardStyles();

  const [value, setValue] = useState<[Date | null, Date | null]>([
    moment().toDate(),
    moment().add(5, "days").toDate(),
  ]);

  const slides = images.map((path, index) => (
    <Carousel.Slide key={`${name}-slide-${index}`}>
      <Image src={path} alt={path} height={320} className="object-cover" />
    </Carousel.Slide>
  ));

  const days = moment(value[1]).diff(value[0], "days");

  return (
    <div className="max-w-7xl pb-16">
      <Carousel
        withIndicators
        loop
        classNames={{
          root: classes.carousel,
          controls: classes.carouselControls,
          indicator: classes.carouselIndicator,
        }}
        className="-mx-4 -mt-4"
      >
        {slides}
      </Carousel>
      <div className="text-4xl font-bold pt-4 mb-2">{name}</div>
      <Text c="dimmed" className="pb-4 border-b-[#ddd] border-b-[1px]">
        {description}
      </Text>
      <div className="text-xl font-medium mt-4">Facilităţi</div>
      <div className="grid grid-cols-2 pb-4 border-b-[#ddd] border-b-[1px]">
        <div className="flex gap-2 items-center mt-4">
          <AiOutlineWifi size={24} />
          <div>Wi-Fi</div>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <MdOutlineFreeBreakfast size={24} />
          <div>Mic dejun</div>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <LuBedDouble size={24} />
          <div>Pat dublu</div>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <MdOutlineCoffeeMaker size={24} />
          <div>Cafea in camera</div>
        </div>
      </div>
      <div className="text-xl font-medium mt-4">Unde se afla?</div>
      <div dangerouslySetInnerHTML={{ __html: map }} />
      <div className="text-xl font-medium mt-4 pt-4 border-b-[#ddd] border-t-[1px]">
        {days ? `${days} nopți la ${name}` : "Selecteaza data de check-out"}
      </div>
      <Text c="dimmed" className="text-sm">
        {value[0] && value[1]
          ? `${moment(value[0]).format("DD MMM. YYYY")} - ${moment(
              value[1]
            ).format("DD MMM. YYYY")}`
          : "Perioadă minimă de ședere: 1 noapte"}
      </Text>
      <div className="flex items-center justify-center">
        <DatePicker
          minDate={new Date()}
          type="range"
          size="md"
          className="mt-4"
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <Text fz="xl" span fw={500}>
            {(days || 1) * price} MDL
          </Text>
          <Text span fz="sm" c="dimmed">
            {" "}
            / noaptea
          </Text>
        </div>
        <Button className="bg-[#333] text-white">Rezerva</Button>
      </div>
    </div>
  );
};

export default Form;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { ...hotels.find((item) => item.id === Number(context.query.id)) },
  };
};
