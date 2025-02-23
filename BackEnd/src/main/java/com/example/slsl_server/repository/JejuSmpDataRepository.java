package com.example.slsl_server.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.slsl_server.model.JejuSmpData;


@Repository
public interface JejuSmpDataRepository extends JpaRepository<JejuSmpData, Integer> {
    List<JejuSmpData> findByDsBetween(LocalDate startDate, LocalDate endDate);
}
