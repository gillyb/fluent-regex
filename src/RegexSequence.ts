import RegexComponent from './RegexComponent';
import RegexLiteral from './RegexLiteral';

export default class RegexSequence extends RegexComponent {

  private regexComponents: RegexComponent[];

  constructor(...components: (RegexComponent | string)[]) {
    super();
    this.regexComponents = components.map(r => {
      if (typeof r === 'string')
        return new RegexLiteral(r);
      return r;
    })
  }

  toRegexString = () => {
    const finalRegex = this.regexComponents.map(r => r.toRegexString()).join('');
    if (!this.regexQuantifier)
      return finalRegex;
    return `(${finalRegex})${this.regexQuantifier}`;
  };

}