export class Employee {
    id: number;
    name: string;
    team: string;
    score: number;
    // tslint:disable-next-line: variable-name
    id_employee: number;
}
export const teams = ['PHP', 'Java', 'Android', 'C#', 'QC'];

export const mockEmployee =
{
  id: 1,
  name: 'Nguyen Duy Su',
  team: 'PHP',
  score: 500,
  id_employee: 3349
} as Employee;
