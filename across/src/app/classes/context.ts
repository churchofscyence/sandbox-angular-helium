export class Context {

  private _count:number = 0;


  constructor(count: number) {
    this._count = count;
  }

  get count(): number {return this._count;}
  set count(value: number) {this._count = value;}


}
