import {Floor} from "./";

const types = new Map([
    ["floor", Floor]
]);

export default {
    get: (type) => {
        if (types.has(type)) {
            return types.get(type);
        }
    }
};