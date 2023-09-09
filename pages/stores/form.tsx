import { stores } from "@/apps/stores/mock-data";
import { Image, Text } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AiOutlineClockCircle, AiOutlineGlobal } from "react-icons/ai";
import { BiMap, BiPhoneCall } from "react-icons/bi";

const Form: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const store = stores.find((item) => item.id === Number(id));

  return (
    <div>
      <div className="border-b-[1px] -mx-4 -mt-4">
        <Image src={store?.img || ""} height={160} alt={store?.img} />
      </div>
      <h2 className="text-4xl font-bold mb-2 mt-4">{store?.name}</h2>
      <Text c="dimmed" className="pb-4 border-b-[#ddd] border-b-[1px]">
        {store?.description}
      </Text>
      <div className="text-xl font-medium mt-4">Informatii</div>
      <div className="flex items-center mb-2 mt-2">
        <BiPhoneCall size={24} />
        <span className="ml-2">{store?.tel}</span>
      </div>
      <div className="flex items-center mb-2 mt-2">
        <AiOutlineClockCircle size={24} />
        <span className="ml-2">{store?.workingHours}</span>
      </div>
      <div className="flex items-center mb-2 mt-2">
        <BiMap size={24} />
        <span className="ml-2">{store?.address}</span>
      </div>
      {store?.link && (
        <div className="flex items-center mb-2 mt-2">
          <AiOutlineGlobal size={24} />
          <span className="ml-2">{store?.link}</span>
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: store?.__html || "" }} />
    </div>
  );
};

export default Form;
