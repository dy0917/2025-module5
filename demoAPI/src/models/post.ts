export interface Post {
  id: number;
  title: string;
  desc?: string;
  createdAt: Date;
  isCompleted: boolean;
}
