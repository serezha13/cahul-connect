import {
    Button,
  Card,
  Group,
  Image,
  Text,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import { AiFillStar } from "react-icons/ai";

export interface HotelCardProps {
  name: string;
  stars: number;
  price: number;
  images: string[];
  description: string;
}

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  "mantine-Carousel-control": {
    backgroundColor: "white !important",
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",
    backgroundColor: "white !important",

    "&[data-active]": {
      width: rem(16),
      backgroundColor: "#fff",
    },
  },
}));

const HotelCard = (props: HotelCardProps) => {
  const { name, stars, price, images, description } = props;

  const { classes } = useStyles();

  const slides = images.map((path, index) => (
    <Carousel.Slide key={`${name}-slide-${index}`}>
      <Image src={path} alt={path} height={220} className="object-cover" />
    </Carousel.Slide>
  ));

  return (
    <Card withBorder>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>
      <Group position="apart" mt="lg">
        <Text fw={500} fz="lg">
          {name}
        </Text>

        <Group spacing={5}>
          <AiFillStar color="yellow" />
          <Text fz="xs" fw={500}>
            {stars}
          </Text>
        </Group>
      </Group>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
      <Group position="apart" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            {price} MDL
          </Text>
          <Text span fz="sm" c="dimmed">
            {' '}
            / noaptea
          </Text>
        </div>

        <Button radius="md" variant="outline" className="border-[#333]">Bronează</Button>
      </Group>
    </Card>
  );
};

export default HotelCard;
