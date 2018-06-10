import RegexComponent from "./RegexComponent";
export interface RegexLiteralConfiguration {
    escapeSpecialCharacters?: boolean;
}
export default class RegexLiteral extends RegexComponent {
    private regexString;
    private options;
    private regexEscapeCharacters;
    constructor(regexString: string, options?: RegexLiteralConfiguration);
    static anyDigit(): RegexLiteral;
    static anyLetter(): RegexLiteral;
    static anyWhitespace(): RegexLiteral;
    private needsWrapping();
    toRegexString: () => string;
}
