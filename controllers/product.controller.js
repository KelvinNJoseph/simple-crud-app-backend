const { get } = require('mongoose');
const Product = require('../models/product.model');
const express = require('express');



const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
}

const getProduct = async (req, res) => {
    try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product' });
    }

}

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });
  }
}

const updateProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    } 
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);   
    }catch
    (error) {
        res.status(500).json({ message: 'Error updating product' });
    }
}
const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product' });
  }
}
module.exports = {getProducts, getProduct, createProduct, updateProduct, deleteProduct};