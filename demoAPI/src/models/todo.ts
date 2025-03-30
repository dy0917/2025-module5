export interface Todo {
  id: number;
  title: string;
  desc?: string;
  createdAt: Date;
  isCompleted: boolean;
}
