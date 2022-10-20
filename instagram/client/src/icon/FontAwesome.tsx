import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
  width: string;
  height: string;
  color: string;
}

export const SquareFacebook = ({ width, height, color }: IconProps) => {
  return <FontAwesomeIcon icon={faSquareFacebook} style={{ width, height, color }} />;
};
