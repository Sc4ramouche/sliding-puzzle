import { nanoid } from 'nanoid';

export function Piece(n, x, y, gap = false) {
  // order number
  this.n = n;

  // coordinates
  this.x = x;
  this.y = y;

  this.gap = gap;
  this.id = nanoid();
}
