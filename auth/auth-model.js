const db = require('../database/configDb');

module.exports = {
    add, 
    findBy,
    findById,
};

async function add(user) {
    const [id] = await db('authentication').insert(user);

    return findById(id);
}

function findBy(filter) {
    return db('authentication').where(filter);
}

function findById(id) {
    return db('authentication')
    .where({ id })
    .first();
}