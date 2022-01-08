function tickets(person) {
    if (Array.isArray(person)) {
        const YES = 'YES';
        const NO = 'NO';
        const money = person.reduce((acc, item) => {
            if (typeof acc !== 'boolean' && acc >= item - 25) {
                return acc + 25;
            } else {
                return false;
            }
        }, 0)
        return !money && NO || money && YES;
    }
    return false;
}

module.exports.tickets = tickets;