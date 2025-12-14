package com.buynest.model;

import jakarta.persistence.*;

@Entity
@Table(name = "carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    // For simplicity, store productId and quantity
    @Column(nullable = false)
    private Long productId;

    @Column(nullable = false)
    private Integer quantity;

    // Getters and setters
    // ...existing code...
}
