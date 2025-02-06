export interface ISeminar {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}

export interface ISeminarAction {
  action: CrudType;
  seminarId?: number;
}

export enum CrudType {
  DELETE,
  EDIT,
  CREATE,
}
