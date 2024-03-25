const { model } = require('mongoose');

class BaseRepository {
    constructor(modelName) {
        this.Model = model(modelName);
    }

    async findAll() {
        return this.Model.find();
    }

    async findById(id) {
        return this.Model.findById(id);
    }

    async create(data) {
        return this.Model.create(data);
    }

    async update(id, data) {
        return this.Model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return this.Model.findByIdAndDelete(id);
    }
}

module.exports = BaseRepository;
