package com.buynest.service;

import com.buynest.model.Order;
import com.buynest.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getUserOrders(Long userId) {
        return orderRepository.findAll(); // Simplified for demo
    }

    public Order placeOrder(Order order) {
        return orderRepository.save(order);
    }
}
