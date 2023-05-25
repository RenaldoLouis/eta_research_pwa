class DeliveryData {
    constructor(id, stopStatus, twStart, twEnd, stopStart, address, orderNumber, customerText, orderPositions) {
        this.id = id
        this.stopStatus = stopStatus
        this.twStart = twStart
        this.twEnd = twEnd
        this.stopStart = stopStart
        this.address = address
        this.orderNumber = orderNumber
        this.customerText = customerText
        this.orderPositions = orderPositions
    }
}

export default DeliveryData