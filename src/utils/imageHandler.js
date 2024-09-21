import { getStorage, ref as refStorage, uploadBytes } from "firebase/storage";

const uploadImage = async (type, fileName, file) => {
    return new Promise((resolve) => {
        const storage = getStorage();
        const storageRef = refStorage(storage, type + '/' + fileName);

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, file).then((snapshot) => {
            resolve(snapshot);
        });
    });
};

export { uploadImage };