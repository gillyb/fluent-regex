import RegexComponent from './RegexComponent';

export default class RegexSequence extends RegexComponent {

  private regexComponents: RegexComponent[];

  // TODO: add option for some of these to be strings, and then just create the RegexLiteral object ourselves
  constructor(...components: RegexComponent[]) {
    super();
    this.regexComponents = components;
  }

  toRegexString = () => {
    return `(${this.regexComponents.map(r => r.toRegexString()).join('')})${this.regexQuantifier ? this.regexQuantifier : ''}`;
  };

}