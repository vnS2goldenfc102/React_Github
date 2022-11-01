const Models = require('../model/index')

exports.getItem = async(req, res) => {
    try {
        let myData = await Models.find()
        res.send({
            myData
        })
    } catch (error) {
        res.send(error)
    }
}

exports.addItem = async(req, res) => {
    try {
        let name = req.body.name
        await Models.create({ name })
        res.send({
            Message: 'Add Success'
        })
    } catch (error) {
        res.send(error)
    }
}

exports.updateItem = async(req, res) => {
    try {
        let id = req.params.id
        let name = req.body.name
        await Models.findByIdAndUpdate(id, { name })
        res.send({
            Message: 'Update Success'
        })
    } catch (error) {
        res.send(error)
    }
}

exports.deleteItem = async(req, res) => {
    try {
        let id = req.params.id
        await Models.findByIdAndDelete(id)
        res.send({
            Message: 'Delete Success'
        })
    } catch (error) {
        res.send(error)
    }
}

exports.pagination = async(req, res) => {
    try {
        let activePage = parseInt(req.query.activePage)
        let limit = parseInt(req.query.limit)
        let skip = (activePage - 1) * limit
        let totalRecord = await Models.countDocuments()
        let totalPage = Math.ceil(totalRecord / limit)
        let listPaginate = await Models.find().skip(skip).limit(limit)
        res.send({
            totalPage,
            listPaginate
        })
        res.send({
            Message: 'Update Success'
        })
    } catch (error) {
        res.send(error)
    }
}

exports.search = async(req, res) => {
    try {
        let textSearch = req.query.textSearch
        let activePage = parseInt(req.query.activePage)
        let limit = parseInt(req.query.limit)
        let skip = (activePage - 1) * limit
        let totalRecord = await Models.countDocuments({ name: { $regex: textSearch, $options: 'i'}})
        let totalPage = Math.ceil(totalRecord / limit)
        let listPaginate = await Models.find({ name: { $regex: textSearch, $options: 'i'}}).skip(skip).limit(limit)
        res.send({
            totalPage,
            listPaginate
        })
        res.send({
            Message: 'Update Success'
        })
    } catch (error) {
        res.send(error)
    }
}