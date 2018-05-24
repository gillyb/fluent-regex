import { RegexComponent } from './RegexComponent';

class RegexBuilder {

  regexComponents: RegexComponent[];

  constructor(...components: RegexComponent[]) {
    this.regexComponents = components;
  }

  toRegex(): RegExp {
    // TODO: ...
    return new RegExp('');
  }

}