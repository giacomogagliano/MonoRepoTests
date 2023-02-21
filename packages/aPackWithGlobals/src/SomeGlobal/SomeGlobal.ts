export class _SomeGlobal {
  type = "global";
}

declare global {
  var SomeGlobal: typeof _SomeGlobal;
}

global.SomeGlobal = _SomeGlobal;
