export type PartialResponse<T> = {
  success?: boolean;
  message?: string;
  error_code?: number;
  data: T;
};
