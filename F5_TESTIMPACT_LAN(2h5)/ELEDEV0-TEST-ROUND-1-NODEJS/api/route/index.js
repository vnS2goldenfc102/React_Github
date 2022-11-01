module.exports = (app) => {
    const todoItem = require('../controller/index')

    app.route('/item')
        .get(todoItem.getItem)
        .post(todoItem.addItem)

    app.route('/item/:id')
        .put(todoItem.updateItem)
        .delete(todoItem.deleteItem)

    app.route('/item/pagination')
        .get(todoItem.pagination)

    app.route('/item/search')
        .get(todoItem.search)
}