export interface IContact {
  id?: string;
  name: string;
  number: string;
}
export interface IValues {
  person: string;
  number: string;
}

export interface ISate {
  contacts: IContact[];
  filter: string;
}
