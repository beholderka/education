function getCookingTime(eggsAmount) {
    if (typeof eggsAmount !== 'number')
        return false;
    return Math.ceil(eggsAmount / 5) * 5;
}

module.exports = {getCookingTime};