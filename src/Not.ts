import RegexComponent from './RegexComponent';

export default class Not extends RegexComponent {

  private regex: RegexComponent;

  constructor(regex: RegexComponent) {
    super();
    this.regex = regex;
  }

  toRegexString = () => {
    return `[^${this.regex.toRegexString()}]`;
  }

}