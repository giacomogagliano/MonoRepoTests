export interface IAclass_v1 {
  name: string;
}

export interface Aclass_v1 {
  name: string;
}

export class Aclass_v1 implements IAclass_v1 {
  constructor(name: string) {
    this.name = name;
  }
}

export type Aclass_v1Ctor = {
  new (name: string): Aclass_v1;
};

export const Aclass_v1Ctor: Aclass_v1Ctor = Aclass_v1;
