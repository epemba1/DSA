var minMovesToSeat = function(seats, students) {
    //Sort all the seats and students
    let sortSeats = seats.sort((a, b) => a - b);
    let sortStudents = students.sort((a, b) => a - b);

    //Calculate the number of moves
    return sortSeats.reduce((moves, seat, i) => moves + Math.abs(seat - sortStudents[i]), 0)
};
