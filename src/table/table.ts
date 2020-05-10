export type DimensionX = {
  kind: 'x';
  value: number;
};

export type DimensionY = {
  kind: 'y';
  value: number;
};

export class Table {
  private maxX: DimensionX;
  private minX: DimensionX;
  private maxY: DimensionY;
  private minY: DimensionY;

  constructor(sizeX: number, sizeY: number) {
    this.maxX = { kind: 'x', value: sizeX - 1 };
    this.minX = { kind: 'x', value: 0 };
    this.maxY = { kind: 'y', value: sizeY - 1 };
    this.minY = { kind: 'y', value: 0 };
  }

  isOnTable = (x: DimensionX, y: DimensionY): boolean =>
    x.value >= this.minX.value &&
    x.value <= this.maxX.value &&
    y.value >= this.minY.value &&
    y.value <= this.maxY.value;

  forwardX = (x: DimensionX): DimensionX => ({
    kind: 'x',
    value: Math.min(x.value + 1, this.maxX.value),
  });

  backwardX = (x: DimensionX): DimensionX => ({
    kind: 'x',
    value: Math.max(x.value - 1, this.minX.value),
  });

  forwardY = (y: DimensionY): DimensionY => ({
    kind: 'y',
    value: Math.min(y.value + 1, this.maxY.value),
  });

  backwardY = (y: DimensionY): DimensionY => ({
    kind: 'y',
    value: Math.max(y.value - 1, this.minY.value),
  });
}
