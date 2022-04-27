package com.codegym.customer.repository;

import com.codegym.customer.model.Countries;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICountriesRepository extends JpaRepository<Countries, Long> {

}
