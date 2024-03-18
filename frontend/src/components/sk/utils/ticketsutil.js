const calculateBill = (tickets) => tickets.reduce((sum, ticket) => sum + (ticket?.quantity * (ticket?.price + ticket?.service_fee)), 0)

const calculateSubtotal = (tickets) => tickets.reduce((sum, ticket) => sum + (ticket?.quantity * ticket?.price), 0)

const calculateServicefee = (tickets) => tickets.reduce((sum, ticket) => sum + (ticket?.quantity * ticket?.service_fee), 0)

export { calculateBill, calculateSubtotal, calculateServicefee }