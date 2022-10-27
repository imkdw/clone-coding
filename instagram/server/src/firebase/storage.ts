import { firebaseApp } from "./firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(firebaseApp);

class FirebaseStorage {
  static uploadImageAndGetUrl = async (postId: string, files: Express.Multer.File[]) => {
    const imageUrls = await Promise.all(
      files.map(async (file) => {
        /** 신규 이미지에 대한 참조 생성 */
        const imageRef = ref(storage, `${postId}/${file.originalname}`);

        /** 메타데이터 정의 */
        const metadata = { contentType: "image/jpeg" };

        /** Multer.memoryStorage에 정의된 file.buffer를 Storage에 업로드 */
        await uploadBytes(imageRef, file.buffer, metadata);

        /** 업로드된 파일에 대한 참조를 가져와서 다운로드링크 반환 */
        const url = await getDownloadURL(ref(storage, `${postId}/${file.originalname}`));

        return url;
      })
    );

    return imageUrls;
  };

  static getImageLinks = () => {};
}

export default FirebaseStorage;
