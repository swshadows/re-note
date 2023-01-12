export interface reqObjNew {
  title: string;
  body: string;
}

export interface reqObj extends reqObjNew {
  _id: string;
  date: string;
}
