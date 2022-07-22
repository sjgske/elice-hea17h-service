export const validateId = id =>
    id
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );

export const validatePassword = password =>
    password.match(/[A-Z]/ && /[a-z]/ && /[0-9]/ && /[^A-Za-z0-9]/) &&
    password.length >= 8 &&
    password.length <= 16;

export const htmlStringDate = date => {
    const d = new Date(date);
    return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
};

export const toStringDate = date => {
    const leftPad = value => {
        if (value >= 10) {
            return value;
        }
        return `0${value}`;
    };
    const d = new Date(date);
    const year = d.getFullYear();
    const month = leftPad(d.getMonth() + 1);
    const day = leftPad(d.getDate());

    return [year, month, day].join('-');
};

export const separateThousand = number =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
