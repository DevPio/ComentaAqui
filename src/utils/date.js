export const dateConvert = date => {
    const dateNew = new Date(date)

    const hours = '0' + dateNew.getHours()
    const minuts = '0' + dateNew.getMinutes()


    const day = '0' + (dateNew.getDate())
    const month = '0' + (dateNew.getMonth() + 1)

    const year = dateNew.getFullYear()

    return {
        hours : `${hours.substr(-2)}:${minuts.substr(-2)}`,
        day:`${day.substr(-2)}/${month.substr(-2)}/${year}`
    }
}