import { DataTypes } from "sequelize";
import database from "../db/index.js";

const Cashier = database.define('cashier', {
  cashierId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
  },
});

export default Cashier;