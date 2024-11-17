package com.crud_api.backend.controller;

import com.crud_api.backend.model.ProductModel;
import com.crud_api.backend.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/product")
public class ProductController {

    @Autowired
    private ProductRepo prodRepo;

    // Get all products
    @GetMapping("/list")
    public List<ProductModel> getAllProducts() {
        return this.prodRepo.findAll();
    }

    // Get a single product by ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductModel> getProduct(@PathVariable("id") Long id) {
        Optional<ProductModel> product = this.prodRepo.findById(id);
        if (product.isPresent()) {
            return new ResponseEntity<>(product.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Create a new product
    @PostMapping("/create")
    public ResponseEntity<ProductModel> createProduct(@RequestBody ProductModel productModel) {
        try {
            ProductModel savedProduct = this.prodRepo.save(productModel);
            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update a product by ID
    @PutMapping("/{id}")
    public ResponseEntity<ProductModel> updateProduct(@PathVariable("id") Long id, @RequestBody ProductModel productModel) {
        Optional<ProductModel> existingProduct = this.prodRepo.findById(id);
        if (existingProduct.isPresent()) {
            ProductModel updatedProduct = existingProduct.get();
            updatedProduct.setName(productModel.getName());
            updatedProduct.setQuantity(productModel.getQuantity());
            updatedProduct.setPrice(productModel.getPrice());
            updatedProduct.setImage(productModel.getImage());
            return new ResponseEntity<>(this.prodRepo.save(updatedProduct), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a product by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") Long id) {
        try {
            this.prodRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
