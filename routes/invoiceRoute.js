const express = require('express');
const router = express.Router();
const { createInvoice, getAllInvoices, getInvoice, updateInvoice, deleteInvoice } = require("../controllers/invoiceController");

router.post("/create-invoice",  createInvoice);
router.get("/get-invoices", getAllInvoices);
router.get("/get-invoice/:id", getInvoice);
router.put("/update-invoice/:id", updateInvoice);
router.delete("/delete-invoice/:id", deleteInvoice);





module.exports = router;