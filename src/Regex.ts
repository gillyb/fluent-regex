import { RegexLiteral, Optional, Or } from ".";
import { RegexLiteralConfiguration } from "./RegexLiteral";
import RegexSequence from "./RegexSequence";
import RegexComponent from "./RegexComponent";
import Group from "./Group";

/**
 * These are some comfortable shorthands for nicer coding :)
 */
export class Regex {

  static literal(regexString: string, options?: RegexLiteralConfiguration): RegexLiteral {
    return new RegexLiteral(regexString, options);
  }

  static sequence(...components: (string | RegexComponent)[]): RegexSequence {
    return new RegexSequence(...components);
  }

  static group(regex: RegexComponent, groupName?: string): Group {
    return new Group(regex, groupName);
  }
  static nonCapturingGroup(regex: RegexComponent): Group {
    return Group.nonCapturing(regex);
  }

  static optional(regex: RegexComponent | string): Optional {
    return new Optional(regex);
  }

  static or(...components: (RegexComponent | string)[]): Or {
    return new Or(...components);
  }

  // More specific stuff (might be controversal)
  static digit(): RegexLiteral {
    return RegexLiteral.anyDigit();
  }
  static letter(): RegexLiteral {
    return RegexLiteral.anyLetter();
  }
}