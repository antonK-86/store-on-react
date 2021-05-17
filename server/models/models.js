const sequelize = require("../db");

const { DataTypes } = require("sequelize"); //для описания типов данных

//модель пользователя
const User = sequelize.define("user", {
  //user - название модели
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

//модель корзины покупок
const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = sequelize.define("basket_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

//модель устройства
const Device = sequelize.define("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  raiting: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

//тип устройства
const TypeDevice = sequelize.define("typedevice", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

//брэнд устройства
const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

//рейтинг
const Raiting = sequelize.define("raiting", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

//Информация об устройстве
const DeviceInfo = sequelize.define("deviceinfo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  decription: { type: DataTypes.STRING, allowNull: false },
});

//модель для связи типа и бренда
const TypeBrand = sequelize.define("typebrand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

//описываем связи моделей
User.hasOne(Basket); //у пользователя может быть одна корзина
Basket.belongsTo(User); // связываем корзину с пользователем

User.hasMany(Raiting);
Raiting.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

TypeDevice.hasMany(Device);
Device.belongsTo(TypeDevice);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Raiting);
Raiting.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo, { as: "info" });
DeviceInfo.belongsTo(Device);

TypeDevice.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(TypeDevice, { through: TypeBrand });

/******/
module.exports = {
  User,
  Basket,
  BasketDevice,
  Device,
  TypeDevice,
  Brand,
  Raiting,
  TypeBrand,
  DeviceInfo,
};
