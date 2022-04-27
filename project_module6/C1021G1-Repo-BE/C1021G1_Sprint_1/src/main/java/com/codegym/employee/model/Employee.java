package com.codegym.employee.model;

import com.codegym.ticket.model.Ticket;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nameEmployee;

    private String codeEmployee;

    private Boolean genderEmployee;

    @Column(columnDefinition = "DATE")
    private String dayOfBirth;

    private String phoneEmployee;

    private String emailEmployee;

    private String addressEmployee;

    private Boolean delFlagEmployee;

    @ManyToOne
    @JoinColumn(name = "id_employee_type", referencedColumnName = "id")
    private EmployeeType employeeType;

    @JsonBackReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "employee")
    private Set<Ticket> ticketE;

    public Employee() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public void setNameEmployee(String nameEmployee) {
        this.nameEmployee = nameEmployee;
    }

    public String getCodeEmployee() {
        return codeEmployee;
    }

    public void setCodeEmployee(String codeEmployee) {
        this.codeEmployee = codeEmployee;
    }

    public Boolean getGenderEmployee() {
        return genderEmployee;
    }

    public void setGenderEmployee(Boolean genderEmployee) {
        this.genderEmployee = genderEmployee;
    }

    public String getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(String dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public String getPhoneEmployee() {
        return phoneEmployee;
    }

    public void setPhoneEmployee(String phoneEmployee) {
        this.phoneEmployee = phoneEmployee;
    }

    public String getEmailEmployee() {
        return emailEmployee;
    }

    public void setEmailEmployee(String emailEmployee) {
        this.emailEmployee = emailEmployee;
    }

    public String getAddressEmployee() {
        return addressEmployee;
    }

    public void setAddressEmployee(String addressEmployee) {
        this.addressEmployee = addressEmployee;
    }

    public Boolean getDelFlagEmployee() {
        return delFlagEmployee;
    }

    public void setDelFlagEmployee(Boolean delFlagEmployee) {
        this.delFlagEmployee = delFlagEmployee;
    }

    public EmployeeType getEmployeeType() {
        return employeeType;
    }

    public void setEmployeeType(EmployeeType employeeType) {
        this.employeeType = employeeType;
    }

    public Set<Ticket> getTicketE() {
        return ticketE;
    }

    public void setTicketE(Set<Ticket> ticketE) {
        this.ticketE = ticketE;
    }
}
