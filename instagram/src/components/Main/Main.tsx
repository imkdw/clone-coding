import { accessTokenState } from "../../recoil/recoil";
import { useRecoilState } from "recoil";

const Main = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const tokenChangeHandler = () => {
    const token = new Date().toISOString();
    setAccessToken(token);
  };

  return (
    <div>
      <div>Token : {accessToken}</div>
      <button onClick={tokenChangeHandler}>Change Token!</button>
    </div>
  );
};

export default Main;
