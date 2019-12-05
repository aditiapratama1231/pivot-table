const customer = require('../src/customer')
const db = require("../config/database")

test("Get customer data from database", async () => {
    const result = await customer.GetCustomers
    expect(Object.keys(result).length).toBe(10)
    db.end()
})