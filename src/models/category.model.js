import { DataTypes } from "sequelize";
import database from "../db/index.js";

const Category = database.define('category', {
  productCategory: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: DataTypes.STRING,
  },
})