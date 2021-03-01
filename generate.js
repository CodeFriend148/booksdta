module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    return{
        bookdtil: _.times(100, function (n) {
            return {
                id: n,
                title: faker.lorem.words(),
                price: faker.commerce.price(),
                category: faker.lorem.words(),
                des: faker.lorem.sentence()
            }
        }
        )
    }
}