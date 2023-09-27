class DeliveryData {
    constructor(id, stopStatus, twStart, twEnd, stopStart, address, customerText, orders, tourStopNotifications) {
        this.id = id
        this.stopStatus = stopStatus
        this.twStart = twStart
        this.twEnd = twEnd
        this.stopStart = stopStart
        this.address = address
        this.customerText = customerText
        this.orders = orders
        this.tourStopNotifications = tourStopNotifications
    }
}

export default DeliveryData