module.exports=(sequelize,type)=>{
    return sequelize.define('stat',{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        team:{
            type: type.INTEGER,
            min:1,
            max:2
        },
        quarter:{
            type: type.INTEGER,
            min:1,
            max:4,
        },
        points:{
            type: type.INTEGER,
            defaultValue: 0,
        },
        threes:{
            type: type.INTEGER,
            defaultValue: 0,
        },
        twos:{
            type: type.INTEGER,
            defaultValue: 0,
        },
        freethrows:{
            type: type.INTEGER,
            defaultValue: 0,
        },
        rebounds:{
            type:type.INTEGER,
            defaultValue:0,
        },
        assists:{
            type:type.INTEGER,
            defaultValue:0,
        },
        steals:{
            type:type.INTEGER,
            defaultValue:0,
        },
        blocks:{
            type:type.INTEGER,
            defaultValue:0,
        },
        fouls:{
            type:type.INTEGER,
            defaultValue:0,
            max:6,
        }
    })
}