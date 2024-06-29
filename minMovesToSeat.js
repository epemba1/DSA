var minMovesToSeat = function(seats, students) {
    let sortSeats = seats.sort((a, b) => a - b);
    let sortStudents = students.sort((a, b) => a - b);

    return sortSeats.reduce((moves, seat, i) => moves + Math.abs(seat - sortStudents[i]), 0)
};
