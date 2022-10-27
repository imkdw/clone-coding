import axios from "axios";
import { useRecoilState } from "recoil";
import config from "../config/config";
import { accessTokenState } from "../recoil/recoil";

/**
 * useIsLoggedIn : 로그인된 사용자인지 확인
 * 1. accessToken을 가져와서 서버에 인증 요청
 * 2. 인증 성공시 loggedInUserState 업데이트하고 true반환
 * 3. 실패시 false 반환
 */
const useIsLoggedIn = async (): Promise<boolean> => {
  const localStorageAccessToken = localStorage.getItem("accessToken");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  /** accessToken이 localStorage내에 존재하지 않을 경우 false 반환 */
  if (!localStorageAccessToken) {
    return false;
  }

  /** 로그인여부 확인 요청 */
  const res = await axios.post(config.url.auth.checkLoginedUrl, {
    accessToken: localStorageAccessToken,
  });

  /** 로그인 되어있을 경우 true리턴, 그 외에는 false 리턴 */
  if (res.status === 200) {
    setAccessToken(localStorageAccessToken);
    return true;
  }

  return false;
};

export default useIsLoggedIn;
