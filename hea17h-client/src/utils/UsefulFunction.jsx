export const validateId = (id) => id
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

export const validatePassword = (password) => password
    .match(
        /[A-Z]/&&/[a-z]/&&/[0-9]/&&/[^A-Za-z0-9]/
    ) && password.length>=8 && password.length<=16;

export const blankToQuery = (params) => 
    params.replace(/\s+/g, '%20');

export const changeQueryText = (params) => params
    .split(' ')
    .reverse()
    .join(' ');

export const delCountText = (params) => params
    .replace(/개/g,'');