import { _SomeGlobal } from "../SomeGlobal";

declare global {
  var SomeGlobal: typeof _SomeGlobal;
}

global.SomeGlobal = _SomeGlobal;
