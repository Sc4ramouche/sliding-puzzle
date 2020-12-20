import { nanoid } from 'nanoid';

export default function Piece(n, x, y, gap = false) {
  this.n = n;
  this.x = x;
  this.y = y;
  this.gap = gap;
  this.id = nanoid();
}
