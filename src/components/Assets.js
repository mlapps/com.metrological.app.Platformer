import {Wall, Lava, Plant, Floor} from "./";

const types = new Map([
    ["wall", Wall],
    ["lava", Lava],
    ["floor", Floor],
]);

export default {
    get: (type) => {
        if (types.has(type)) {
            return types.get(type);
        }
    }
};