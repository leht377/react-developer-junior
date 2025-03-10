export type Query = {
  page: number;
  limit: number;
  orderBy?: 'salary' | 'name';
  order?: 'asc' | 'desc';
  search?: {
    name?: string;
    email?: string;
    charge?: string;
  };
};