import {Wall, Lava} from "./";

const types = new Map([
    ["wall", Wall],
    ["lava", Lava]
]);

export default {
    get: (type) => {
        if (types.has(type)) {
            return types.get(type);
        }
    }
};