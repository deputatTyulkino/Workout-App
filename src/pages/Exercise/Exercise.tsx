import { useParams } from "react-router";
import { Heading } from "../../components/ui/Heading/Heading";

export const Exercise = () => {
  const { slug } = useParams();
  return <Heading>{slug}</Heading>;
};
