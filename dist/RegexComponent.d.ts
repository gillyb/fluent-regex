import { RegexFlags } from "./RegexFlags";
export default abstract class RegexComponent {
    protected regexQuantifier: string;
    private assertSingleQuantifier();
    optional(): this;
    onceOrMore(): this;
    zeroOrMore(): this;
    exactAmount(amount: number): this;
    atLeastAmount(amount: number): this;
    rangeAmount(min: number, max: number): this;
    upToAmount(amount: number): this;
    abstract toRegexString: () => string;
    toRegex: (...flags: RegexFlags[]) => RegExp;
}
