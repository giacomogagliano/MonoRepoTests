import { _SomeGlobal } from "../SomeGlobal";
import { _SomeType } from "./SomeType";

declare global {
  var SomeGlobal: typeof _SomeGlobal;
  type SomeType = _SomeType;
}

global.SomeGlobal = _SomeGlobal;
