const express = require("express")
const Invoice = require('../models/invoiceModel');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify')

//create an invoice

const createInvoice = asyncHandler(async(req, res)=> {
    try {
        if(req.body.email){
            req.body.slug = slugify(req.body.email);
        }
        const newInvoice = await Invoice.create(req.body)
        res.status(200).json(newInvoice);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//get all products

const getAllInvoices = asyncHandler(async(req, res)=>{
    try{
        const invoices = await Invoice.find({});
        if(!invoices){
            res.status(404).json('Their is no invoices');
        }res.status(200).json(invoices);
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

//get a single invoice

const getInvoice = asyncHandler(async(req, res)=>{
    try {
        const { id } = req.params;
        const invoice = await Invoice.findById(id);
        if(!invoice){
            res.status(404).json({ message: `their is no invoice with such ID ${id}`})
        } res.status(200).json(invoice)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

//update an invoice
const updateInvoice = asyncHandler(async(req,res)=>{
    try {
        if(req.body.email){
            req.body.slug = slugify(req.body.email)
        }
        const { id } = req.params
        const invoice = await Invoice.findByIdAndUpdate(id, req.body);
        if(!invoice){
            res.status(404).json('cannot update invoice')
        } res.status(200).json(invoice)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})


//delete invoice

const deleteInvoice = asyncHandler(async(req, res)=> {
    try {
        const { id } = req.params;
        const invoice = await Invoice.findByIdAndDelete(id);
        if(!invoice){
            res.status(404).json({message: 'cannot delete'});
        }res.status(200).json({message: 'delete success'});
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})


module.exports = { 
    createInvoice,
    getAllInvoices, 
    getInvoice,
    updateInvoice,
    deleteInvoice,
}