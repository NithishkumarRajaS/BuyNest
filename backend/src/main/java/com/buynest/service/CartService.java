package com.buynest.service;

import com.buynest.model.Cart;
import com.buynest.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    public List<Cart> getUserCart(Long userId) {
        return cartRepository.findAll(); // Simplified for demo
    }

    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }
}
