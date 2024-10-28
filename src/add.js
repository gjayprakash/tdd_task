"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (input) => {
    if (!input || input.trim() === "")
        return 0;
    let delimiters = [",", "\n"];
    if (input.startsWith("//")) {
        const customDelimiterPattern = /^\/\/(.+)\n/;
        const match = customDelimiterPattern.exec(input);
        if (match) {
            const delimiterSpec = match[1];
            delimiters = delimiterSpec.split(/[\[\]]+/).filter(Boolean);
            input = input.slice(match[0].length);
        }
    }
    const delimiterPattern = delimiters
        .map((delimiter) => delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|");
    const delimiterRegex = new RegExp(delimiterPattern);
    const tokens = input.split(delimiterRegex).map((token) => token.trim());
    const invalidTokens = tokens.filter((token) => !/^-?\d+$/.test(token) || token.includes(" "));
    if (invalidTokens.length) {
        throw new Error(`Invalid input: ${invalidTokens.join(", ")}`);
    }
    const numbersArray = tokens.map(Number);
    const negatives = numbersArray.filter((number) => number < 0);
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
    return numbersArray.reduce((sum, number) => sum + (number <= 1000 ? number : 0), 0);
};
exports.default = add;
