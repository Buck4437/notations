import { Notation } from "../notation";
import Decimal from "break_infinity.js";

const HALIDES = ["fluoro", "chloro", "bromo", "iodo"];
const QUNATITIES = ["di", "tri", "tetra"];
const PREFIXES = ["Meth", "Eth", "Prop", "But", "Pent", "Hex", "Hept", "Oct",
"Non", "Dec", "Undec", "Dodec", "Tridec", "Tetradec", "Pentadec", "Hexadec",
"Heptadec", "Octadec", "Nonadec", "Icos"];

// This organic compound resembles an infinity sign
const INFINITY = "spiro[5.5]undecane";

export class OrganicNotation extends Notation {

  public get name(): string {
    return "Organic";
  }

  public get negativeInfinite(): string {
    return this.negation(INFINITY);
  }

  public get infinite(): string {
    return INFINITY;
  }

  public formatVerySmallNegativeDecimal(num: Decimal): string {
  }

  public formatNegativeUnder1000(num: number): string {
  }

  public formatUnder1000(num: number): string {
  }

  public formatNegativeDecimal(num: Decimal): string {
  }

  public formatDecimal(num: Decimal): string {
  }

  private negation(str: string): string {
    if (/\d/g.test(str.charAt(0))) {
      return `anti-${str}`;
    }
    return `anti${str}`;
  }
}
