import CryptoJS from "crypto-js"

const GenerateRandomToken = (value: Object, secretKey: string) => {
    const message = JSON.stringify(value)
    console.log("token encriptado... [m] ",message)
    const tokenValue = CryptoJS.AES.encrypt(message, secretKey).toString().substring(0,16)
    console.log("token encriptado... [Y] ",tokenValue)
    return tokenValue
}

export { GenerateRandomToken}