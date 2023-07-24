import { Router } from "express";

import TransactionController from "../controllers/transaction.controller.js";

const router = Router();

router.get("/transaction", TransactionController.getAllTransactions);

export default router;