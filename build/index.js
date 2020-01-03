"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./inheritances/MatchReader");
var MatchResult_1 = require("./enums/MatchResult");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HOME_WIN) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AWAY_WIN) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
