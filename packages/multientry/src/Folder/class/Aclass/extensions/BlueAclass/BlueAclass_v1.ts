export interface IBlueAclass_v1 {
  name: string;
}

export interface BlueAclass_v1 {
  name: string;
}

export class BlueAclass_v1 implements IBlueAclass_v1 {
  constructor(name: string) {
    this.name = name;
  }
}

export type BlueAclass_v1Ctor = {
  new (name: string): BlueAclass_v1;
};

export const BlueAclass_v1Ctor: BlueAclass_v1Ctor = BlueAclass_v1;
