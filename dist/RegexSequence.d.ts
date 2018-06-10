import RegexComponent from './RegexComponent';
export default class RegexSequence extends RegexComponent {
    private regexComponents;
    constructor(...components: (RegexComponent | string)[]);
    toRegexString: () => string;
}
