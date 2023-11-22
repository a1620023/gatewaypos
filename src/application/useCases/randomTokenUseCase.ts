import CryptoJS from "crypto-js"

const generateRandomToken = (value: string, secretKey: string) => {
    const tokenValue = CryptoJS.AES.encrypt(value, secretKey).toString()
    return tokenValue
}

export { generateRandomToken}