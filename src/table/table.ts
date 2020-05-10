export type DimensionX = number;
export type DimensionY = number;

export class Table {
  private maxX: DimensionX;
  private minX: DimensionX;
  private maxY: DimensionY;
  private minY: DimensionY;

  constructor(sizeX: number, sizeY: number) {
    this.maxX = sizeX - 1;
    this.minX = 0;
    this.maxY = sizeY - 1;
    this.minY = 0;
  }

  isOnTable = (x: DimensionX, y: DimensionY): boolean =>
    x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;

  forwardX = (x: DimensionX): DimensionX => Math.min(x + 1, this.maxX);

  backwardX = (x: DimensionX): DimensionX => Math.max(x - 1, this.minX);

  forwardY = (y: DimensionY): DimensionY => Math.min(y + 1, this.maxY);

  backwardY = (y: DimensionY): DimensionY => Math.max(y - 1, this.minY);
}
