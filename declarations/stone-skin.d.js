declare module StoneSkin {
  declare class Base<T> {
    validate(t: T): boolean;
  }

  declare class Async<T> extends Base<T> {
    ready: Promise<any>;
    find(id: string): Promise<T>;
    select(fn: (t: T) => boolean): Promise<T[]>;
    first(fn: (t: T) => boolean): Promise<T>;
    last(fn: (t: T) => boolean): Promise<T>;
    all(): Promise<T[]>;
    clear(): Promise<any>;
    save(t: T): Promise<T>;
    save(ts: T[]): Promise<T[]>;
    remove(id: string): Promise<any>;
    remove(ids: string[]): Promise<any>;
  }

  declare class Synced<T> extends Base<T> {
    find(id: string): T;
    select(fn: (t: T) => boolean): T[];
    first(fn: (t: T) => boolean): T;
    last(fn: (t: T) => boolean): T;
    all(): T[];
    clear(): void;
    save(t: T): T;
    save(ts: T[]): T[];
    remove(id: string): void;
    remove(ids: string[]): void;
  }

  declare class IndexedDb<T> extends Async<T> {
    toMemoryDb(): MemoryDb<T>;
    toSyncedMemoryDb(): SyncedMemoryDb<T>;
  }

  declare class MemoryDb<T> extends Async<T> {}
  declare class SyncedMemoryDb<T> extends Synced<T> {}
}
