import {Wall, Lava, Plant} from "./";

const types = new Map([
    ["wall", Wall],
    ["lava", Lava],
    ["plant", Plant]
]);

export default {
    get: (type) => {
        if (types.has(type)) {
            return types.get(type);
        }
    }
};