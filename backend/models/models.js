const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    activationLink: {type: DataTypes.STRING, unique: true},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CartItem = sequelize.define('cart_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    availability: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    typeId: {type: DataTypes.INTEGER, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.ARRAY(DataTypes.JSONB), unique: true, allowNull: false},
})

const Filter = sequelize.define('filter', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    title: {type: DataTypes.ARRAY(DataTypes.JSONB), allowNull: false},
    typeId: {type: DataTypes.INTEGER, allowNull: false}
})

const Status = sequelize.define('status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.INTEGER, allowNull: false},
})

const ItemInfo = sequelize.define('item_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const Token = sequelize.define('token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING, required: true}
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Cart)
Cart.belongsTo(User)

User.hasOne(Token)
Token.belongsTo(User)

Cart.hasMany(CartItem)
CartItem.belongsTo(Cart)

Type.hasMany(Item)
Item.belongsTo(Type)

Brand.hasMany(Item)
Item.belongsTo(Brand)

Item.hasMany(Status)
Status.belongsTo(Item)

Type.hasOne(Filter)
Filter.belongsTo(Type)

Item.hasMany(CartItem)
CartItem.belongsTo(Item)

Item.hasMany(ItemInfo, {as: 'info'});
ItemInfo.belongsTo(Item)

Type.belongsToMany(Brand, {through: TypeBrand })
Brand.belongsToMany(Type, {through: TypeBrand })

module.exports = {
    User,
    Cart,
    CartItem,
    Item,
    Type,
    Brand,
    Filter,
    Status,
    TypeBrand,
    ItemInfo,
    Token
}





