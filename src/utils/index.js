import RNFS from 'react-native-fs';

export const getBook = async (bookName) => {
    let content;
    await RNFS.readFileAssets(`${bookName}.txt`).then((res) => {
        content = res;
    });
    return content;
}