import { Text } from "@mantine/core";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = () => {
  return (
    <div className="flex items-center gap-4">
      <BsArrowLeft />
      <Text>Înapoi</Text>
    </div>
  );
};

export default BackButton;
