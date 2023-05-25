export const formatAddress = (addressObj, stopData) => {
    let result = ``
    /** Format Address */
    if (addressObj) {
        if (addressObj.street)
            result += `${addressObj.street}`
        if (addressObj.zipcode)
            result += result.length > 0 ? `, ${addressObj.zipcode}` : `${addressObj.zipcode}`
        if (addressObj.city)
            result += result.length > 0 ? ` ${addressObj.city}` : `${addressObj.city}`
    }
    /*let regex = /(?:\d)\s(?=\w)/g // only replace empty space after number and before char

    if (stopData) {
        if ((result.length >= 41 && addressObj.street.length < 24) || addressObj.street.length >= 25) {
            result = result.replace(regex, ", ")
        }
    }*/
    return result !== `` ? result : `No Address`
}