package com.codegym.flight.model;

import javax.persistence.*;

@Entity
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codeSeat;
            // số ghế là vị trí của ghế (từ 1-100)
    private int positionSeat;

    // Trạng thái đặt chỗ
    private Boolean statusSeat;

    @ManyToOne
    @JoinColumn(name = "id_seat_type", referencedColumnName = "id")
    private SeatType seatType;

    @ManyToOne
    @JoinColumn(name = "id_flight", referencedColumnName = "id")
    private Flight flightS;

    public Seat() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeSeat() {
        return codeSeat;
    }

    public void setCodeSeat(String codeSeat) {
        this.codeSeat = codeSeat;
    }

    public int getPositionSeat() {
        return positionSeat;
    }

    public void setPositionSeat(int positionSeat) {
        this.positionSeat = positionSeat;
    }

    public Boolean getStatusSeat() {
        return statusSeat;
    }

    public void setStatusSeat(Boolean statusSeat) {
        this.statusSeat = statusSeat;
    }

    public SeatType getSeatType() {
        return seatType;
    }

    public void setSeatType(SeatType seatType) {
        this.seatType = seatType;
    }

    public Flight getFlightS() {
        return flightS;
    }

    public void setFlightS(Flight flightS) {
        this.flightS = flightS;
    }
}
