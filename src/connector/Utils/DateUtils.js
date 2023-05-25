import moment from "moment"

export const getFormatDate = (date) => {
    // const { i18n } = useTranslation();

    return moment(date, "YYYYMMDDTHH:mm").format("ddd, DD MMM YYYY")

}