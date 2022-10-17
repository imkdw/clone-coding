import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISquareFacebook {
  width: string;
  height: string;
  color: string;
}

export const SquareFacebook = ({ width, height, color }: ISquareFacebook) => {
  return <FontAwesomeIcon icon={faSquareFacebook} style={{ width, height, color }} />;
};
