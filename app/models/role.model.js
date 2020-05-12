module.exports = (sequelize, Sequilize) => {
    const Role = sequelize.define("roles",{
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequilize.STRING
        }
    });

    return Role;
};

//After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

//    create a new User: create(object)
//    find a User by id: findByPk(id)
//    find a User by email: findOne({ where: { email: ... } })
//    get all Users: findAll()
//    find all Users by username: findAll({ where: { username: ... } })