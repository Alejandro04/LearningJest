const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    CheckValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Alejandro', lastName: 'Roa' };
        return user;
    },
}

module.exports = functions;