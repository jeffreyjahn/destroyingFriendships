module.exports = (sequelize, type) => {
    return sequelize.define('game',{
        id:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        status:{
            type:type.STRING,
            isIn:[['ongoing','ended']],
        },
    })
}