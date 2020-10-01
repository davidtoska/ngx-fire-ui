import { Observable } from 'rxjs';

export abstract class ContextProvider<T> {
  abstract name: string;
  abstract delete(context: T): void;
  abstract create(context: Partial<T>): void;
  abstract getAll(): Observable<T[]>;
  abstract createSummary(contect: T): { headline: string; subHeadline: string };
}
