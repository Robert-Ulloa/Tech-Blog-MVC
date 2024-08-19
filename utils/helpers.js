const { format } = require("sequelize/lib/utils");

module.exports = {
    format_date: (date) => {
        //format date as mm/dd/yyyy
        return date.toLocaleDateString();
    },
    format_plural: (word, amount) => {
        //pluralize words
        if (amount !== 1 ) {
            return `${word}s`;
        }
        return word;
    },
};