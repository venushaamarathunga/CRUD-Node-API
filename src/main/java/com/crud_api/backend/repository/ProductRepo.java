package com.crud_api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.crud_api.backend.model.ProductModel;
import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<ProductModel, Long> {
    /*
    // Find products by name
    List<ProductModel> findByName(String name);

    // Find products whose name contains a substring (case-insensitive)
    List<ProductModel> findByNameContainingIgnoreCase(String name);

    // Custom query using JPQL
    @Query("SELECT p FROM ProductModel p WHERE p.price > :price")
    List<ProductModel> findProductsByPriceGreaterThan(@Param("price") Double price);
    */
}