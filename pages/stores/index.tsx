import { stores } from '@/apps/stores/mock-data';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Link from 'next/link';
import Router from 'next/router';

const Stores = () => {

  return <>
    <div className='p-4 gap-4 grid'>
      {stores.map((item, index) => (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
              <Image
                src={item.img}
                height={200}
                alt="Norway"
              />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{item.nameS}</Text>
            <Badge color="pink" variant="light">
              {item.promo}
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {item.description}
          </Text>
            <Button
              onClick={() => Router.push(`stores/form?id=${item.id}`)}
              variant="light" color="blue" fullWidth mt="md" radius="md">
              Acceseaza aici!
            </Button>
        </Card>
      ))}
    </div>
  </>;
};

export default Stores;
