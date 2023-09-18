function calculateTotalCost() {
    const totalDays = parseInt(document.getElementById("total-days").value);
    const extraPersonCost = parseFloat(document.getElementById("extra-person-cost").value);
    const advanceAmount = parseFloat(document.getElementById("advance-amount").value);
    const roomType = document.getElementById("room-type").value;
    const amenities = document.getElementById("amenities").selectedOptions;

    let roomRate = 0;
    if (roomType === "Delux") {
        roomRate = 2500;
    } else if (roomType === "Suite") {
        roomRate = 4000;
    }

    let amenitiesCost = 0;
    for (let i = 0; i < amenities.length; i++) {
        if (amenities[i].value === "AC") {
            amenitiesCost += 1000;
        } else if (amenities[i].value === "Locker") {
            amenitiesCost += 300;
        }
    }

    const totalRoomCost = roomRate * totalDays;
    const totalCost = totalRoomCost + amenitiesCost;
    const balance = totalCost - advanceAmount;

    document.getElementById("total-cost").value = totalCost.toFixed(2);
    document.getElementById("balance").value = balance.toFixed(2);
}
