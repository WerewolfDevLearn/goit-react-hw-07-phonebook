export interface IContact {
  id?: string;
  name: string;
  number: string;
}
export interface IValues {
  name: string;
  number: string;
}

export interface ISate {
  contacts: IContact[];
  filter: string;
}
export interface IContactsState {
  items: IContact[];
  isLoading: boolean;
  error: any;
}
