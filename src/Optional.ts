import RegexComponent from "./RegexComponent";
import { RegexLiteral } from "./RegexLiteral";

export default class Optional extends RegexComponent {

  private innerRegex: RegexComponent;

  constructor(regex: RegexComponent) {
    super();
    this.innerRegex = regex;
  }

  toRegexString = () => {
    return this.innerRegex.toRegexString() + '?';
  };

}