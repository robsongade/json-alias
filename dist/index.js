"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.json_alias = void 0;
var json_alias = function (template) {
    var alias = template.alias;
    var object = template.in.object;
    var alias_result = {};
    if (object) {
        for (var item_alias in alias) {
            var get_in_split = alias[item_alias].split(".");
            var has = false;
            var concat = "";
            for (var _i = 0, get_in_split_1 = get_in_split; _i < get_in_split_1.length; _i++) {
                var item_split = get_in_split_1[_i];
                concat += "['" + item_split + "']";
                if (!eval("object" + concat)) {
                    has = false;
                    break;
                }
                has = true;
            }
            if (has) {
                alias_result[item_alias] = eval("object" + concat);
            }
            else {
                alias_result[item_alias] = false;
            }
        }
    }
    if (template.save_origin) {
        if (object) {
            alias_result['origin'] = object;
        }
    }
    return { alias_result: alias_result };
};
exports.json_alias = json_alias;
