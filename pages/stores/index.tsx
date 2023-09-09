import { stores } from "@/apps/stores/mock-data";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  TextInput,
} from "@mantine/core";
import Router from "next/router";
import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LuSearchX } from "react-icons/lu";

const Stores = () => {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <div className="text-5xl font-semibold mb-4">Magazine</div>
      <TextInput
        placeholder="Scrie pentru a cauta..."
        className="mb-4"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      {!stores.filter((item) =>
        filter
          ? item.name.toLowerCase().includes(filter.toLocaleLowerCase())
          : true
      ).length && (
        <div className="p-4 flex flex-col items-center justify-center">
          <LuSearchX size={64} />
          <div>Nici un rezultat.</div>
        </div>
      )}
      <div className="gap-4 grid">
        {stores
          .filter((item) =>
            filter
              ? item.name.toLowerCase().includes(filter.toLocaleLowerCase())
              : true
          )
          .map((item, index) => (
            <Card key={`${index}-store`} withBorder>
              <Card.Section>
                <Image
                  src={item.img}
                  height={200}
                  alt="Norway"
                  className="object-cover border-b-[1px]"
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500} fz="lg">
                  {item.name}
                </Text>
                {item.promo && (
                  <Badge color="red" variant="light" radius="sm">
                    {item.promo}
                  </Badge>
                )}
              </Group>

              <Text size="sm" color="dimmed">
                {item.description.slice(0, 150) + "..."}
              </Text>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <AiOutlineClockCircle color="#333" size={24} />
                  <div className="text-sm">{item.workingHours}</div>
                </div>
                <Button
                  onClick={() => Router.push(`stores/form?id=${item.id}`)}
                  variant="outline"
                  className="border-[#333] text-[#333]"
                >
                  Acceseaza aici
                </Button>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Stores;
