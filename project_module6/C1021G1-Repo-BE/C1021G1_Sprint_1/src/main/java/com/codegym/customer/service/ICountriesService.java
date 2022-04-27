package com.codegym.customer.service;

import com.codegym.customer.model.Countries;

import java.util.List;

public interface ICountriesService {

   List<Countries> fillAll();

   void save(Countries countries);
}
