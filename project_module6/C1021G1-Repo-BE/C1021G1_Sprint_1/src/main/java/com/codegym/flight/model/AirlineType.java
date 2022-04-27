package com.codegym.flight.model;

import com.codegym.employee.model.EmployeeType;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class AirlineType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nameAirline;

    private String priceAirline;

    private String imageAirline;

    @JsonBackReference
    @OneToMany(mappedBy = "airlineType")
    private Set<Flight> flights;

    public AirlineType() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameAirline() {
        return nameAirline;
    }

    public void setNameAirline(String nameAirline) {
        this.nameAirline = nameAirline;
    }

    public String getPriceAirline() {
        return priceAirline;
    }

    public void setPriceAirline(String priceAirline) {
        this.priceAirline = priceAirline;
    }

    public String getImageAirline() {
        return imageAirline;
    }

    public void setImageAirline(String imageAirline) {
        this.imageAirline = imageAirline;
    }

    public Set<Flight> getFlights() {
        return flights;
    }

    public void setFlights(Set<Flight> flights) {
        this.flights = flights;
    }
}
