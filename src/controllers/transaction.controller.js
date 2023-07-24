import Transaction from "../models/transaction.model.js";

async function getAllTransactions(req, res) {
  try {
    const transactions = await Transaction.findAll();

    return res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error"
    })
  }
}

export default { getAllTransactions }