// app/utils/operators.js

export const partialize = (fn, ...params) => 
    fn.bind(null, ...params);