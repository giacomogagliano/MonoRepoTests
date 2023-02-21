export interface _SomeType {
  some: "type";
}

declare global {
  type SomeType = _SomeType;
}
