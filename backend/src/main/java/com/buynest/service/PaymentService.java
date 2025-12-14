package com.buynest.service;

import com.buynest.model.Payment;
import com.buynest.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getPaymentsByOrder(Long orderId) {
        return paymentRepository.findAll(); // Simplified for demo
    }

    public Payment makePayment(Payment payment) {
        return paymentRepository.save(payment);
    }
}
