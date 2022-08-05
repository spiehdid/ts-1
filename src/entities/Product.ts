import { Review } from "../types/Review";

export class Product<T = any> {
  public title: string;
  public amount: number;
  public type: T;

  protected price?: number;
  
  private _reviews: Review[] = [];
  private _score: number = 0;

  constructor(title: string, amount: number, type: T, price?: number) {
    this.title = title;
    this.amount = amount;
    this.type = type;
    this.price = price;
  }

  get score() {
    return this._score;
  }

  get reviews(): Readonly<Review[]> {
    return this._reviews;
  }

  getPrice(): number | undefined {
    return this.price;
  }

  canBuy(): boolean {
    return typeof this.price === "number";
  }

  getAmount(): number {
    return this.amount;
  }

  addReview(review: Review) {
    this._reviews.push(review);
    this._score =
      this._reviews.reduce<number>((score, review) => {
        return score + review.score;
      }, 0) / this._reviews.length;
  }

  static getInfo(product: Product) {
    console.log(product.title, product.amount);
  }
}
