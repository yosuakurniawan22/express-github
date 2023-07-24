import { DataTypes } from "sequelize";
import database from "../db/index.js";
import Cashier from "./cashier.model.js";

const Transaction = database.define('transaction', {
  transactionId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cashierId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cashier,
      key: "cashierId"
    }
  },
  total: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: true
});

export default Transaction;