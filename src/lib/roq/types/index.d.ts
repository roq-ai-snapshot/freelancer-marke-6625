/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model contract
 *
 */
export type contract = $Result.DefaultSelection<Prisma.$contractPayload>;
/**
 * Model project
 *
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>;
/**
 * Model task
 *
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>;
/**
 * Model team
 *
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>;
/**
 * Model team_member
 *
 */
export type team_member = $Result.DefaultSelection<Prisma.$team_memberPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contracts
 * const contracts = await prisma.contract.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contracts
   * const contracts = await prisma.contract.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **contract** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Contracts
   * const contracts = await prisma.contract.findMany()
   * ```
   */
  get contract(): Prisma.contractDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   */
  get project(): Prisma.projectDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tasks
   * const tasks = await prisma.task.findMany()
   * ```
   */
  get task(): Prisma.taskDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   */
  get team(): Prisma.teamDelegate<ExtArgs>;

  /**
   * `prisma.team_member`: Exposes CRUD operations for the **team_member** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Team_members
   * const team_members = await prisma.team_member.findMany()
   * ```
   */
  get team_member(): Prisma.team_memberDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    contract: 'contract';
    project: 'project';
    task: 'task';
    team: 'team';
    team_member: 'team_member';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'contract' | 'project' | 'task' | 'team' | 'team_member' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      contract: {
        payload: Prisma.$contractPayload<ExtArgs>;
        fields: Prisma.contractFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.contractFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.contractFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          findFirst: {
            args: Prisma.contractFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.contractFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          findMany: {
            args: Prisma.contractFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>[];
          };
          create: {
            args: Prisma.contractCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          createMany: {
            args: Prisma.contractCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.contractDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          update: {
            args: Prisma.contractUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          deleteMany: {
            args: Prisma.contractDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.contractUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.contractUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContract>;
          };
          groupBy: {
            args: Prisma.contractGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ContractGroupByOutputType>[];
          };
          count: {
            args: Prisma.contractCountArgs<ExtArgs>;
            result: $Utils.Optional<ContractCountAggregateOutputType> | number;
          };
        };
      };
      project: {
        payload: Prisma.$projectPayload<ExtArgs>;
        fields: Prisma.projectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[];
          };
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProject>;
          };
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.projectCountArgs<ExtArgs>;
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number;
          };
        };
      };
      task: {
        payload: Prisma.$taskPayload<ExtArgs>;
        fields: Prisma.taskFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[];
          };
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTask>;
          };
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TaskGroupByOutputType>[];
          };
          count: {
            args: Prisma.taskCountArgs<ExtArgs>;
            result: $Utils.Optional<TaskCountAggregateOutputType> | number;
          };
        };
      };
      team: {
        payload: Prisma.$teamPayload<ExtArgs>;
        fields: Prisma.teamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[];
          };
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam>;
          };
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamGroupByOutputType>[];
          };
          count: {
            args: Prisma.teamCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamCountAggregateOutputType> | number;
          };
        };
      };
      team_member: {
        payload: Prisma.$team_memberPayload<ExtArgs>;
        fields: Prisma.team_memberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.team_memberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.team_memberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findFirst: {
            args: Prisma.team_memberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.team_memberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findMany: {
            args: Prisma.team_memberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>[];
          };
          create: {
            args: Prisma.team_memberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          createMany: {
            args: Prisma.team_memberCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.team_memberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          update: {
            args: Prisma.team_memberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          deleteMany: {
            args: Prisma.team_memberDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.team_memberUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.team_memberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          aggregate: {
            args: Prisma.Team_memberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam_member>;
          };
          groupBy: {
            args: Prisma.team_memberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberGroupByOutputType>[];
          };
          count: {
            args: Prisma.team_memberCountArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    task: number;
  };

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | ProjectCountOutputTypeCountTaskArgs;
  };

  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: taskWhereInput;
    };

  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    team_member: number;
  };

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_member?: boolean | TeamCountOutputTypeCountTeam_memberArgs;
  };

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contract: number;
    project: number;
    team_member: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | UserCountOutputTypeCountContractArgs;
    project?: boolean | UserCountOutputTypeCountProjectArgs;
    team_member?: boolean | UserCountOutputTypeCountTeam_memberArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: contractWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: projectWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null;
    _min: ContractMinAggregateOutputType | null;
    _max: ContractMaxAggregateOutputType | null;
  };

  export type ContractMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ContractMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ContractCountAggregateOutputType = {
    id: number;
    description: number;
    start_date: number;
    end_date: number;
    status: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type ContractMinAggregateInputType = {
    id?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ContractMaxAggregateInputType = {
    id?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ContractCountAggregateInputType = {
    id?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contract to aggregate.
     */
    where?: contractWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractOrderByWithRelationInput | contractOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: contractWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contracts
     **/
    _count?: true | ContractCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ContractMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ContractMaxAggregateInputType;
  };

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
    [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>;
  };

  export type contractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contractWhereInput;
    orderBy?: contractOrderByWithAggregationInput | contractOrderByWithAggregationInput[];
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum;
    having?: contractScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContractCountAggregateInputType | true;
    _min?: ContractMinAggregateInputType;
    _max?: ContractMaxAggregateInputType;
  };

  export type ContractGroupByOutputType = {
    id: string;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: ContractCountAggregateOutputType | null;
    _min: ContractMinAggregateOutputType | null;
    _max: ContractMaxAggregateOutputType | null;
  };

  type GetContractGroupByPayload<T extends contractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ContractGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
          : GetScalarType<T[P], ContractGroupByOutputType[P]>;
      }
    >
  >;

  export type contractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        status?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['contract']
    >;

  export type contractSelectScalar = {
    id?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type contractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $contractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'contract';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        start_date: Date | null;
        end_date: Date | null;
        status: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['contract']
    >;
    composites: {};
  };

  type contractGetPayload<S extends boolean | null | undefined | contractDefaultArgs> = $Result.GetResult<
    Prisma.$contractPayload,
    S
  >;

  type contractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    contractFindManyArgs,
    'select' | 'include'
  > & {
    select?: ContractCountAggregateInputType | true;
  };

  export interface contractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contract']; meta: { name: 'contract' } };
    /**
     * Find zero or one Contract that matches the filter.
     * @param {contractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends contractFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, contractFindUniqueArgs<ExtArgs>>,
    ): Prisma__contractClient<
      $Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Contract that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {contractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends contractFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contractFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__contractClient<
      $Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends contractFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, contractFindFirstArgs<ExtArgs>>,
    ): Prisma__contractClient<
      $Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends contractFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contractFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__contractClient<
      $Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     *
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends contractFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contractFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Contract.
     * @param {contractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     *
     **/
    create<T extends contractCreateArgs<ExtArgs>>(
      args: SelectSubset<T, contractCreateArgs<ExtArgs>>,
    ): Prisma__contractClient<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Contracts.
     *     @param {contractCreateManyArgs} args - Arguments to create many Contracts.
     *     @example
     *     // Create many Contracts
     *     const contract = await prisma.contract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends contractCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contractCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Contract.
     * @param {contractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     *
     **/
    delete<T extends contractDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, contractDeleteArgs<ExtArgs>>,
    ): Prisma__contractClient<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Contract.
     * @param {contractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends contractUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, contractUpdateArgs<ExtArgs>>,
    ): Prisma__contractClient<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Contracts.
     * @param {contractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends contractDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contractDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends contractUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, contractUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Contract.
     * @param {contractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     **/
    upsert<T extends contractUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, contractUpsertArgs<ExtArgs>>,
    ): Prisma__contractClient<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
     **/
    count<T extends contractCountArgs>(
      args?: Subset<T, contractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ContractAggregateArgs>(
      args: Subset<T, ContractAggregateArgs>,
    ): Prisma.PrismaPromise<GetContractAggregateType<T>>;

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends contractGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contractGroupByArgs['orderBy'] }
        : { orderBy?: contractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, contractGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the contract model
     */
    readonly fields: contractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contractClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the contract model
   */
  interface contractFieldRefs {
    readonly id: FieldRef<'contract', 'String'>;
    readonly description: FieldRef<'contract', 'String'>;
    readonly start_date: FieldRef<'contract', 'DateTime'>;
    readonly end_date: FieldRef<'contract', 'DateTime'>;
    readonly status: FieldRef<'contract', 'String'>;
    readonly name: FieldRef<'contract', 'String'>;
    readonly created_at: FieldRef<'contract', 'DateTime'>;
    readonly updated_at: FieldRef<'contract', 'DateTime'>;
    readonly user_id: FieldRef<'contract', 'String'>;
    readonly tenant_id: FieldRef<'contract', 'String'>;
  }

  // Custom InputTypes

  /**
   * contract findUnique
   */
  export type contractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter, which contract to fetch.
     */
    where: contractWhereUniqueInput;
  };

  /**
   * contract findUniqueOrThrow
   */
  export type contractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter, which contract to fetch.
     */
    where: contractWhereUniqueInput;
  };

  /**
   * contract findFirst
   */
  export type contractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter, which contract to fetch.
     */
    where?: contractWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractOrderByWithRelationInput | contractOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contracts.
     */
    cursor?: contractWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[];
  };

  /**
   * contract findFirstOrThrow
   */
  export type contractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter, which contract to fetch.
     */
    where?: contractWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractOrderByWithRelationInput | contractOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contracts.
     */
    cursor?: contractWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[];
  };

  /**
   * contract findMany
   */
  export type contractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter, which contracts to fetch.
     */
    where?: contractWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractOrderByWithRelationInput | contractOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contracts.
     */
    cursor?: contractWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[];
  };

  /**
   * contract create
   */
  export type contractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * The data needed to create a contract.
     */
    data: XOR<contractCreateInput, contractUncheckedCreateInput>;
  };

  /**
   * contract createMany
   */
  export type contractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contracts.
     */
    data: contractCreateManyInput | contractCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * contract update
   */
  export type contractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * The data needed to update a contract.
     */
    data: XOR<contractUpdateInput, contractUncheckedUpdateInput>;
    /**
     * Choose, which contract to update.
     */
    where: contractWhereUniqueInput;
  };

  /**
   * contract updateMany
   */
  export type contractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contracts.
     */
    data: XOR<contractUpdateManyMutationInput, contractUncheckedUpdateManyInput>;
    /**
     * Filter which contracts to update
     */
    where?: contractWhereInput;
  };

  /**
   * contract upsert
   */
  export type contractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * The filter to search for the contract to update in case it exists.
     */
    where: contractWhereUniqueInput;
    /**
     * In case the contract found by the `where` argument doesn't exist, create a new contract with this data.
     */
    create: XOR<contractCreateInput, contractUncheckedCreateInput>;
    /**
     * In case the contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contractUpdateInput, contractUncheckedUpdateInput>;
  };

  /**
   * contract delete
   */
  export type contractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter which contract to delete.
     */
    where: contractWhereUniqueInput;
  };

  /**
   * contract deleteMany
   */
  export type contractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contracts to delete
     */
    where?: contractWhereInput;
  };

  /**
   * contract without action
   */
  export type contractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
  };

  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  export type ProjectMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    client_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProjectMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    client_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProjectCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    start_date: number;
    end_date: number;
    status: number;
    client_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProjectMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    client_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProjectMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    client_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProjectCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    client_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned projects
     **/
    _count?: true | ProjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMaxAggregateInputType;
  };

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>;
  };

  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput;
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[];
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum;
    having?: projectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
  };

  export type ProjectGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    client_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProjectGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
          : GetScalarType<T[P], ProjectGroupByOutputType[P]>;
      }
    >
  >;

  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      status?: boolean;
      client_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      task?: boolean | project$taskArgs<ExtArgs>;
      _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['project']
  >;

  export type projectSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    client_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    task?: boolean | project$taskArgs<ExtArgs>;
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'project';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      task: Prisma.$taskPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        start_date: Date | null;
        end_date: Date | null;
        status: string | null;
        client_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['project']
    >;
    composites: {};
  };

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<
    Prisma.$projectPayload,
    S
  >;

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    projectFindManyArgs,
    'select' | 'include'
  > & {
    select?: ProjectCountAggregateInputType | true;
  };

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project']; meta: { name: 'project' } };
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends projectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends projectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends projectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     **/
    create<T extends projectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, projectCreateArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Projects.
     *     @param {projectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends projectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     **/
    delete<T extends projectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, projectDeleteArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends projectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends projectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends projectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     **/
    upsert<T extends projectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpsertArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
     **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProjectAggregateArgs>(
      args: Subset<T, ProjectAggregateArgs>,
    ): Prisma.PrismaPromise<GetProjectAggregateType<T>>;

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the project model
     */
    readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    task<T extends project$taskArgs<ExtArgs> = {}>(
      args?: Subset<T, project$taskArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<'project', 'String'>;
    readonly name: FieldRef<'project', 'String'>;
    readonly description: FieldRef<'project', 'String'>;
    readonly start_date: FieldRef<'project', 'DateTime'>;
    readonly end_date: FieldRef<'project', 'DateTime'>;
    readonly status: FieldRef<'project', 'String'>;
    readonly client_id: FieldRef<'project', 'String'>;
    readonly created_at: FieldRef<'project', 'DateTime'>;
    readonly updated_at: FieldRef<'project', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>;
  };

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>;
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput;
  };

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput;
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>;
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
  };

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput;
  };

  /**
   * project.task
   */
  export type project$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    where?: taskWhereInput;
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    cursor?: taskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
  };

  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
  };

  export type TaskMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    project_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TaskMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    project_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TaskCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    start_date: number;
    end_date: number;
    status: number;
    project_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TaskMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    project_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TaskMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    project_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TaskCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    project_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tasks
     **/
    _count?: true | TaskCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TaskMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TaskMaxAggregateInputType;
  };

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>;
  };

  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput;
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[];
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum;
    having?: taskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
  };

  export type TaskGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    project_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TaskCountAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
  };

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TaskGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
          : GetScalarType<T[P], TaskGroupByOutputType[P]>;
      }
    >
  >;

  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      status?: boolean;
      project_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      project?: boolean | projectDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['task']
  >;

  export type taskSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    project_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>;
  };

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'task';
    objects: {
      project: Prisma.$projectPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        start_date: Date | null;
        end_date: Date | null;
        status: string | null;
        project_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['task']
    >;
    composites: {};
  };

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<
    Prisma.$taskPayload,
    S
  >;

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    taskFindManyArgs,
    'select' | 'include'
  > & {
    select?: TaskCountAggregateInputType | true;
  };

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task']; meta: { name: 'task' } };
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends taskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends taskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     *
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends taskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     *
     **/
    create<T extends taskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, taskCreateArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tasks.
     *     @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends taskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     *
     **/
    delete<T extends taskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, taskDeleteArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends taskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpdateArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends taskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends taskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     **/
    upsert<T extends taskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpsertArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
     **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TaskAggregateArgs>(
      args: Subset<T, TaskAggregateArgs>,
    ): Prisma.PrismaPromise<GetTaskAggregateType<T>>;

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the task model
     */
    readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends projectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, projectDefaultArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<'task', 'String'>;
    readonly name: FieldRef<'task', 'String'>;
    readonly description: FieldRef<'task', 'String'>;
    readonly start_date: FieldRef<'task', 'DateTime'>;
    readonly end_date: FieldRef<'task', 'DateTime'>;
    readonly status: FieldRef<'task', 'String'>;
    readonly project_id: FieldRef<'task', 'String'>;
    readonly created_at: FieldRef<'task', 'DateTime'>;
    readonly updated_at: FieldRef<'task', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>;
  };

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>;
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>;
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput;
  };

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput;
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>;
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>;
  };

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput;
  };

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
  };

  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  export type TeamMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TeamMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teams
     **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMaxAggregateInputType;
  };

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>;
  };

  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput;
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[];
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
    having?: teamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
  };

  export type TeamGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
          : GetScalarType<T[P], TeamGroupByOutputType[P]>;
      }
    >
  >;

  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      team_member?: boolean | team$team_memberArgs<ExtArgs>;
      _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type teamSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_member?: boolean | team$team_memberArgs<ExtArgs>;
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team';
    objects: {
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team']
    >;
    composites: {};
  };

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<
    Prisma.$teamPayload,
    S
  >;

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teamFindManyArgs,
    'select' | 'include'
  > & {
    select?: TeamCountAggregateInputType | true;
  };

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team']; meta: { name: 'team' } };
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     **/
    create<T extends teamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teamCreateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teams.
     *     @param {teamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     **/
    delete<T extends teamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teamDeleteArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     **/
    upsert<T extends teamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpsertArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
     **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TeamAggregateArgs>(
      args: Subset<T, TeamAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team model
     */
    readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team_member<T extends team$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, team$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<'team', 'String'>;
    readonly name: FieldRef<'team', 'String'>;
    readonly description: FieldRef<'team', 'String'>;
    readonly created_at: FieldRef<'team', 'DateTime'>;
    readonly updated_at: FieldRef<'team', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>;
  };

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>;
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput;
  };

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput;
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>;
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
  };

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput;
  };

  /**
   * team.team_member
   */
  export type team$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
  };

  /**
   * Model team_member
   */

  export type AggregateTeam_member = {
    _count: Team_memberCountAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  export type Team_memberMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    team_id: string | null;
    role: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    team_id: string | null;
    role: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberCountAggregateOutputType = {
    id: number;
    user_id: number;
    team_id: number;
    role: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Team_memberMinAggregateInputType = {
    id?: true;
    user_id?: true;
    team_id?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    team_id?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberCountAggregateInputType = {
    id?: true;
    user_id?: true;
    team_id?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Team_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_member to aggregate.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned team_members
     **/
    _count?: true | Team_memberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Team_memberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Team_memberMaxAggregateInputType;
  };

  export type GetTeam_memberAggregateType<T extends Team_memberAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_member[P]>
      : GetScalarType<T[P], AggregateTeam_member[P]>;
  };

  export type team_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithAggregationInput | team_memberOrderByWithAggregationInput[];
    by: Team_memberScalarFieldEnum[] | Team_memberScalarFieldEnum;
    having?: team_memberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Team_memberCountAggregateInputType | true;
    _min?: Team_memberMinAggregateInputType;
    _max?: Team_memberMaxAggregateInputType;
  };

  export type Team_memberGroupByOutputType = {
    id: string;
    user_id: string;
    team_id: string;
    role: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Team_memberCountAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  type GetTeam_memberGroupByPayload<T extends team_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_memberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Team_memberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Team_memberGroupByOutputType[P]>
          : GetScalarType<T[P], Team_memberGroupByOutputType[P]>;
      }
    >
  >;

  export type team_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        team_id?: boolean;
        role?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        team?: boolean | teamDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['team_member']
    >;

  export type team_memberSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    team_id?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type team_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $team_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team_member';
    objects: {
      team: Prisma.$teamPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        team_id: string;
        role: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team_member']
    >;
    composites: {};
  };

  type team_memberGetPayload<S extends boolean | null | undefined | team_memberDefaultArgs> = $Result.GetResult<
    Prisma.$team_memberPayload,
    S
  >;

  type team_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    team_memberFindManyArgs,
    'select' | 'include'
  > & {
    select?: Team_memberCountAggregateInputType | true;
  };

  export interface team_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_member']; meta: { name: 'team_member' } };
    /**
     * Find zero or one Team_member that matches the filter.
     * @param {team_memberFindUniqueArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends team_memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberFindUniqueArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Team_member that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {team_memberFindUniqueOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends team_memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends team_memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends team_memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_members
     * const team_members = await prisma.team_member.findMany()
     *
     * // Get first 10 Team_members
     * const team_members = await prisma.team_member.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const team_memberWithIdOnly = await prisma.team_member.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends team_memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team_member.
     * @param {team_memberCreateArgs} args - Arguments to create a Team_member.
     * @example
     * // Create one Team_member
     * const Team_member = await prisma.team_member.create({
     *   data: {
     *     // ... data to create a Team_member
     *   }
     * })
     *
     **/
    create<T extends team_memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberCreateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Team_members.
     *     @param {team_memberCreateManyArgs} args - Arguments to create many Team_members.
     *     @example
     *     // Create many Team_members
     *     const team_member = await prisma.team_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends team_memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team_member.
     * @param {team_memberDeleteArgs} args - Arguments to delete one Team_member.
     * @example
     * // Delete one Team_member
     * const Team_member = await prisma.team_member.delete({
     *   where: {
     *     // ... filter to delete one Team_member
     *   }
     * })
     *
     **/
    delete<T extends team_memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberDeleteArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team_member.
     * @param {team_memberUpdateArgs} args - Arguments to update one Team_member.
     * @example
     * // Update one Team_member
     * const team_member = await prisma.team_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends team_memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Team_members.
     * @param {team_memberDeleteManyArgs} args - Arguments to filter Team_members to delete.
     * @example
     * // Delete a few Team_members
     * const { count } = await prisma.team_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends team_memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_members
     * const team_member = await prisma.team_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends team_memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team_member.
     * @param {team_memberUpsertArgs} args - Arguments to update or create a Team_member.
     * @example
     * // Update or create a Team_member
     * const team_member = await prisma.team_member.upsert({
     *   create: {
     *     // ... data to create a Team_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_member we want to update
     *   }
     * })
     **/
    upsert<T extends team_memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpsertArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberCountArgs} args - Arguments to filter Team_members to count.
     * @example
     * // Count the number of Team_members
     * const count = await prisma.team_member.count({
     *   where: {
     *     // ... the filter for the Team_members we want to count
     *   }
     * })
     **/
    count<T extends team_memberCountArgs>(
      args?: Subset<T, team_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_memberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Team_memberAggregateArgs>(
      args: Subset<T, Team_memberAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeam_memberAggregateType<T>>;

    /**
     * Group by Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends team_memberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_memberGroupByArgs['orderBy'] }
        : { orderBy?: team_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, team_memberGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeam_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team_member model
     */
    readonly fields: team_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_memberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends teamDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, teamDefaultArgs<ExtArgs>>,
    ): Prisma__teamClient<
      $Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team_member model
   */
  interface team_memberFieldRefs {
    readonly id: FieldRef<'team_member', 'String'>;
    readonly user_id: FieldRef<'team_member', 'String'>;
    readonly team_id: FieldRef<'team_member', 'String'>;
    readonly role: FieldRef<'team_member', 'String'>;
    readonly created_at: FieldRef<'team_member', 'DateTime'>;
    readonly updated_at: FieldRef<'team_member', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team_member findUnique
   */
  export type team_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findUniqueOrThrow
   */
  export type team_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findFirst
   */
  export type team_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findFirstOrThrow
   */
  export type team_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findMany
   */
  export type team_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member create
   */
  export type team_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to create a team_member.
     */
    data: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
  };

  /**
   * team_member createMany
   */
  export type team_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_members.
     */
    data: team_memberCreateManyInput | team_memberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team_member update
   */
  export type team_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to update a team_member.
     */
    data: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
    /**
     * Choose, which team_member to update.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member updateMany
   */
  export type team_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_members.
     */
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyInput>;
    /**
     * Filter which team_members to update
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member upsert
   */
  export type team_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The filter to search for the team_member to update in case it exists.
     */
    where: team_memberWhereUniqueInput;
    /**
     * In case the team_member found by the `where` argument doesn't exist, create a new team_member with this data.
     */
    create: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
    /**
     * In case the team_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
  };

  /**
   * team_member delete
   */
  export type team_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter which team_member to delete.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member deleteMany
   */
  export type team_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to delete
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member without action
   */
  export type team_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      contract?: boolean | user$contractArgs<ExtArgs>;
      project?: boolean | user$projectArgs<ExtArgs>;
      team_member?: boolean | user$team_memberArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | user$contractArgs<ExtArgs>;
    project?: boolean | user$projectArgs<ExtArgs>;
    team_member?: boolean | user$team_memberArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      contract: Prisma.$contractPayload<ExtArgs>[];
      project: Prisma.$projectPayload<ExtArgs>[];
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contract<T extends user$contractArgs<ExtArgs> = {}>(
      args?: Subset<T, user$contractArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findMany'> | Null>;

    project<T extends user$projectArgs<ExtArgs> = {}>(
      args?: Subset<T, user$projectArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'> | Null>;

    team_member<T extends user$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, user$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.contract
   */
  export type user$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    where?: contractWhereInput;
    orderBy?: contractOrderByWithRelationInput | contractOrderByWithRelationInput[];
    cursor?: contractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[];
  };

  /**
   * user.project
   */
  export type user$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    where?: projectWhereInput;
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    cursor?: projectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * user.team_member
   */
  export type user$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ContractScalarFieldEnum: {
    id: 'id';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    status: 'status';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum];

  export const ProjectScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    status: 'status';
    client_id: 'client_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];

  export const TaskScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    status: 'status';
    project_id: 'project_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];

  export const TeamScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

  export const Team_memberScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    team_id: 'team_id';
    role: 'role';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Team_memberScalarFieldEnum = (typeof Team_memberScalarFieldEnum)[keyof typeof Team_memberScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type contractWhereInput = {
    AND?: contractWhereInput | contractWhereInput[];
    OR?: contractWhereInput[];
    NOT?: contractWhereInput | contractWhereInput[];
    id?: UuidFilter<'contract'> | string;
    description?: StringNullableFilter<'contract'> | string | null;
    start_date?: DateTimeNullableFilter<'contract'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'contract'> | Date | string | null;
    status?: StringNullableFilter<'contract'> | string | null;
    name?: StringFilter<'contract'> | string;
    created_at?: DateTimeFilter<'contract'> | Date | string;
    updated_at?: DateTimeFilter<'contract'> | Date | string;
    user_id?: UuidFilter<'contract'> | string;
    tenant_id?: StringFilter<'contract'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type contractOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type contractWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: contractWhereInput | contractWhereInput[];
      OR?: contractWhereInput[];
      NOT?: contractWhereInput | contractWhereInput[];
      description?: StringNullableFilter<'contract'> | string | null;
      start_date?: DateTimeNullableFilter<'contract'> | Date | string | null;
      end_date?: DateTimeNullableFilter<'contract'> | Date | string | null;
      status?: StringNullableFilter<'contract'> | string | null;
      name?: StringFilter<'contract'> | string;
      created_at?: DateTimeFilter<'contract'> | Date | string;
      updated_at?: DateTimeFilter<'contract'> | Date | string;
      user_id?: UuidFilter<'contract'> | string;
      tenant_id?: StringFilter<'contract'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type contractOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: contractCountOrderByAggregateInput;
    _max?: contractMaxOrderByAggregateInput;
    _min?: contractMinOrderByAggregateInput;
  };

  export type contractScalarWhereWithAggregatesInput = {
    AND?: contractScalarWhereWithAggregatesInput | contractScalarWhereWithAggregatesInput[];
    OR?: contractScalarWhereWithAggregatesInput[];
    NOT?: contractScalarWhereWithAggregatesInput | contractScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'contract'> | string;
    description?: StringNullableWithAggregatesFilter<'contract'> | string | null;
    start_date?: DateTimeNullableWithAggregatesFilter<'contract'> | Date | string | null;
    end_date?: DateTimeNullableWithAggregatesFilter<'contract'> | Date | string | null;
    status?: StringNullableWithAggregatesFilter<'contract'> | string | null;
    name?: StringWithAggregatesFilter<'contract'> | string;
    created_at?: DateTimeWithAggregatesFilter<'contract'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'contract'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'contract'> | string;
    tenant_id?: StringWithAggregatesFilter<'contract'> | string;
  };

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[];
    OR?: projectWhereInput[];
    NOT?: projectWhereInput | projectWhereInput[];
    id?: UuidFilter<'project'> | string;
    name?: StringFilter<'project'> | string;
    description?: StringNullableFilter<'project'> | string | null;
    start_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    status?: StringNullableFilter<'project'> | string | null;
    client_id?: UuidFilter<'project'> | string;
    created_at?: DateTimeFilter<'project'> | Date | string;
    updated_at?: DateTimeFilter<'project'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    task?: TaskListRelationFilter;
  };

  export type projectOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    task?: taskOrderByRelationAggregateInput;
  };

  export type projectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: projectWhereInput | projectWhereInput[];
      OR?: projectWhereInput[];
      NOT?: projectWhereInput | projectWhereInput[];
      name?: StringFilter<'project'> | string;
      description?: StringNullableFilter<'project'> | string | null;
      start_date?: DateTimeNullableFilter<'project'> | Date | string | null;
      end_date?: DateTimeNullableFilter<'project'> | Date | string | null;
      status?: StringNullableFilter<'project'> | string | null;
      client_id?: UuidFilter<'project'> | string;
      created_at?: DateTimeFilter<'project'> | Date | string;
      updated_at?: DateTimeFilter<'project'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      task?: TaskListRelationFilter;
    },
    'id'
  >;

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: projectCountOrderByAggregateInput;
    _max?: projectMaxOrderByAggregateInput;
    _min?: projectMinOrderByAggregateInput;
  };

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[];
    OR?: projectScalarWhereWithAggregatesInput[];
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'project'> | string;
    name?: StringWithAggregatesFilter<'project'> | string;
    description?: StringNullableWithAggregatesFilter<'project'> | string | null;
    start_date?: DateTimeNullableWithAggregatesFilter<'project'> | Date | string | null;
    end_date?: DateTimeNullableWithAggregatesFilter<'project'> | Date | string | null;
    status?: StringNullableWithAggregatesFilter<'project'> | string | null;
    client_id?: UuidWithAggregatesFilter<'project'> | string;
    created_at?: DateTimeWithAggregatesFilter<'project'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'project'> | Date | string;
  };

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[];
    OR?: taskWhereInput[];
    NOT?: taskWhereInput | taskWhereInput[];
    id?: UuidFilter<'task'> | string;
    name?: StringFilter<'task'> | string;
    description?: StringNullableFilter<'task'> | string | null;
    start_date?: DateTimeNullableFilter<'task'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'task'> | Date | string | null;
    status?: StringNullableFilter<'task'> | string | null;
    project_id?: UuidFilter<'task'> | string;
    created_at?: DateTimeFilter<'task'> | Date | string;
    updated_at?: DateTimeFilter<'task'> | Date | string;
    project?: XOR<ProjectRelationFilter, projectWhereInput>;
  };

  export type taskOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    project_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    project?: projectOrderByWithRelationInput;
  };

  export type taskWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: taskWhereInput | taskWhereInput[];
      OR?: taskWhereInput[];
      NOT?: taskWhereInput | taskWhereInput[];
      name?: StringFilter<'task'> | string;
      description?: StringNullableFilter<'task'> | string | null;
      start_date?: DateTimeNullableFilter<'task'> | Date | string | null;
      end_date?: DateTimeNullableFilter<'task'> | Date | string | null;
      status?: StringNullableFilter<'task'> | string | null;
      project_id?: UuidFilter<'task'> | string;
      created_at?: DateTimeFilter<'task'> | Date | string;
      updated_at?: DateTimeFilter<'task'> | Date | string;
      project?: XOR<ProjectRelationFilter, projectWhereInput>;
    },
    'id'
  >;

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    project_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: taskCountOrderByAggregateInput;
    _max?: taskMaxOrderByAggregateInput;
    _min?: taskMinOrderByAggregateInput;
  };

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[];
    OR?: taskScalarWhereWithAggregatesInput[];
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'task'> | string;
    name?: StringWithAggregatesFilter<'task'> | string;
    description?: StringNullableWithAggregatesFilter<'task'> | string | null;
    start_date?: DateTimeNullableWithAggregatesFilter<'task'> | Date | string | null;
    end_date?: DateTimeNullableWithAggregatesFilter<'task'> | Date | string | null;
    status?: StringNullableWithAggregatesFilter<'task'> | string | null;
    project_id?: UuidWithAggregatesFilter<'task'> | string;
    created_at?: DateTimeWithAggregatesFilter<'task'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'task'> | Date | string;
  };

  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[];
    OR?: teamWhereInput[];
    NOT?: teamWhereInput | teamWhereInput[];
    id?: UuidFilter<'team'> | string;
    name?: StringFilter<'team'> | string;
    description?: StringNullableFilter<'team'> | string | null;
    created_at?: DateTimeFilter<'team'> | Date | string;
    updated_at?: DateTimeFilter<'team'> | Date | string;
    team_member?: Team_memberListRelationFilter;
  };

  export type teamOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    team_member?: team_memberOrderByRelationAggregateInput;
  };

  export type teamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teamWhereInput | teamWhereInput[];
      OR?: teamWhereInput[];
      NOT?: teamWhereInput | teamWhereInput[];
      name?: StringFilter<'team'> | string;
      description?: StringNullableFilter<'team'> | string | null;
      created_at?: DateTimeFilter<'team'> | Date | string;
      updated_at?: DateTimeFilter<'team'> | Date | string;
      team_member?: Team_memberListRelationFilter;
    },
    'id'
  >;

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: teamCountOrderByAggregateInput;
    _max?: teamMaxOrderByAggregateInput;
    _min?: teamMinOrderByAggregateInput;
  };

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    OR?: teamScalarWhereWithAggregatesInput[];
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team'> | string;
    name?: StringWithAggregatesFilter<'team'> | string;
    description?: StringNullableWithAggregatesFilter<'team'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
  };

  export type team_memberWhereInput = {
    AND?: team_memberWhereInput | team_memberWhereInput[];
    OR?: team_memberWhereInput[];
    NOT?: team_memberWhereInput | team_memberWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    user_id?: UuidFilter<'team_member'> | string;
    team_id?: UuidFilter<'team_member'> | string;
    role?: StringNullableFilter<'team_member'> | string | null;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
    team?: XOR<TeamRelationFilter, teamWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type team_memberOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    team_id?: SortOrder;
    role?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    team?: teamOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type team_memberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: team_memberWhereInput | team_memberWhereInput[];
      OR?: team_memberWhereInput[];
      NOT?: team_memberWhereInput | team_memberWhereInput[];
      user_id?: UuidFilter<'team_member'> | string;
      team_id?: UuidFilter<'team_member'> | string;
      role?: StringNullableFilter<'team_member'> | string | null;
      created_at?: DateTimeFilter<'team_member'> | Date | string;
      updated_at?: DateTimeFilter<'team_member'> | Date | string;
      team?: XOR<TeamRelationFilter, teamWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type team_memberOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    team_id?: SortOrder;
    role?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: team_memberCountOrderByAggregateInput;
    _max?: team_memberMaxOrderByAggregateInput;
    _min?: team_memberMinOrderByAggregateInput;
  };

  export type team_memberScalarWhereWithAggregatesInput = {
    AND?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    OR?: team_memberScalarWhereWithAggregatesInput[];
    NOT?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team_member'> | string;
    user_id?: UuidWithAggregatesFilter<'team_member'> | string;
    team_id?: UuidWithAggregatesFilter<'team_member'> | string;
    role?: StringNullableWithAggregatesFilter<'team_member'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    contract?: ContractListRelationFilter;
    project?: ProjectListRelationFilter;
    team_member?: Team_memberListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    contract?: contractOrderByRelationAggregateInput;
    project?: projectOrderByRelationAggregateInput;
    team_member?: team_memberOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      contract?: ContractListRelationFilter;
      project?: ProjectListRelationFilter;
      team_member?: Team_memberListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type contractCreateInput = {
    id?: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutContractInput;
  };

  export type contractUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type contractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutContractNestedInput;
  };

  export type contractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type contractCreateManyInput = {
    id?: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type contractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type contractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type projectCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutProjectInput;
    task?: taskCreateNestedManyWithoutProjectInput;
  };

  export type projectUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    task?: taskUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutProjectNestedInput;
    task?: taskUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type projectCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project: projectCreateNestedOneWithoutTaskInput;
  };

  export type taskUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    project_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: projectUpdateOneRequiredWithoutTaskNestedInput;
  };

  export type taskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    project_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    team_member?: team_memberCreateNestedManyWithoutTeamInput;
  };

  export type teamUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    team_member?: team_memberUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type teamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team_member?: team_memberUpdateManyWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team_member?: team_memberUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type teamCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateInput = {
    id?: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    team: teamCreateNestedOneWithoutTeam_memberInput;
    user: userCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateInput = {
    id?: string;
    user_id: string;
    team_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUpdateOneRequiredWithoutTeam_memberNestedInput;
    user?: userUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateManyInput = {
    id?: string;
    user_id: string;
    team_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type contractCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type contractMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type contractMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type TaskListRelationFilter = {
    every?: taskWhereInput;
    some?: taskWhereInput;
    none?: taskWhereInput;
  };

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ProjectRelationFilter = {
    is?: projectWhereInput;
    isNot?: projectWhereInput;
  };

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    project_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    project_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    project_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Team_memberListRelationFilter = {
    every?: team_memberWhereInput;
    some?: team_memberWhereInput;
    none?: team_memberWhereInput;
  };

  export type team_memberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TeamRelationFilter = {
    is?: teamWhereInput;
    isNot?: teamWhereInput;
  };

  export type team_memberCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    team_id?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    team_id?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    team_id?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ContractListRelationFilter = {
    every?: contractWhereInput;
    some?: contractWhereInput;
    none?: contractWhereInput;
  };

  export type ProjectListRelationFilter = {
    every?: projectWhereInput;
    some?: projectWhereInput;
    none?: projectWhereInput;
  };

  export type contractOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutContractInput = {
    create?: XOR<userCreateWithoutContractInput, userUncheckedCreateWithoutContractInput>;
    connectOrCreate?: userCreateOrConnectWithoutContractInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<userCreateWithoutContractInput, userUncheckedCreateWithoutContractInput>;
    connectOrCreate?: userCreateOrConnectWithoutContractInput;
    upsert?: userUpsertWithoutContractInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutContractInput, userUpdateWithoutContractInput>,
      userUncheckedUpdateWithoutContractInput
    >;
  };

  export type userCreateNestedOneWithoutProjectInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: userCreateOrConnectWithoutProjectInput;
    connect?: userWhereUniqueInput;
  };

  export type taskCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput>
      | taskCreateWithoutProjectInput[]
      | taskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[];
    createMany?: taskCreateManyProjectInputEnvelope;
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
  };

  export type taskUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput>
      | taskCreateWithoutProjectInput[]
      | taskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[];
    createMany?: taskCreateManyProjectInputEnvelope;
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: userCreateOrConnectWithoutProjectInput;
    upsert?: userUpsertWithoutProjectInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutProjectInput, userUpdateWithoutProjectInput>,
      userUncheckedUpdateWithoutProjectInput
    >;
  };

  export type taskUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput>
      | taskCreateWithoutProjectInput[]
      | taskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[];
    upsert?: taskUpsertWithWhereUniqueWithoutProjectInput | taskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: taskCreateManyProjectInputEnvelope;
    set?: taskWhereUniqueInput | taskWhereUniqueInput[];
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[];
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    update?: taskUpdateWithWhereUniqueWithoutProjectInput | taskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: taskUpdateManyWithWhereWithoutProjectInput | taskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[];
  };

  export type taskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput>
      | taskCreateWithoutProjectInput[]
      | taskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[];
    upsert?: taskUpsertWithWhereUniqueWithoutProjectInput | taskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: taskCreateManyProjectInputEnvelope;
    set?: taskWhereUniqueInput | taskWhereUniqueInput[];
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[];
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    update?: taskUpdateWithWhereUniqueWithoutProjectInput | taskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: taskUpdateManyWithWhereWithoutProjectInput | taskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[];
  };

  export type projectCreateNestedOneWithoutTaskInput = {
    create?: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>;
    connectOrCreate?: projectCreateOrConnectWithoutTaskInput;
    connect?: projectWhereUniqueInput;
  };

  export type projectUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>;
    connectOrCreate?: projectCreateOrConnectWithoutTaskInput;
    upsert?: projectUpsertWithoutTaskInput;
    connect?: projectWhereUniqueInput;
    update?: XOR<
      XOR<projectUpdateToOneWithWhereWithoutTaskInput, projectUpdateWithoutTaskInput>,
      projectUncheckedUpdateWithoutTaskInput
    >;
  };

  export type team_memberCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type team_memberUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutTeamInput | team_memberUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutTeamInput | team_memberUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutTeamInput | team_memberUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutTeamInput | team_memberUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutTeamInput | team_memberUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutTeamInput | team_memberUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type teamCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: teamCreateOrConnectWithoutTeam_memberInput;
    connect?: teamWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeam_memberInput;
    connect?: userWhereUniqueInput;
  };

  export type teamUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: teamCreateOrConnectWithoutTeam_memberInput;
    upsert?: teamUpsertWithoutTeam_memberInput;
    connect?: teamWhereUniqueInput;
    update?: XOR<
      XOR<teamUpdateToOneWithWhereWithoutTeam_memberInput, teamUpdateWithoutTeam_memberInput>,
      teamUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type userUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeam_memberInput;
    upsert?: userUpsertWithoutTeam_memberInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTeam_memberInput, userUpdateWithoutTeam_memberInput>,
      userUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type contractCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<contractCreateWithoutUserInput, contractUncheckedCreateWithoutUserInput>
      | contractCreateWithoutUserInput[]
      | contractUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contractCreateOrConnectWithoutUserInput | contractCreateOrConnectWithoutUserInput[];
    createMany?: contractCreateManyUserInputEnvelope;
    connect?: contractWhereUniqueInput | contractWhereUniqueInput[];
  };

  export type projectCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type team_memberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type contractUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<contractCreateWithoutUserInput, contractUncheckedCreateWithoutUserInput>
      | contractCreateWithoutUserInput[]
      | contractUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contractCreateOrConnectWithoutUserInput | contractCreateOrConnectWithoutUserInput[];
    createMany?: contractCreateManyUserInputEnvelope;
    connect?: contractWhereUniqueInput | contractWhereUniqueInput[];
  };

  export type projectUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type contractUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<contractCreateWithoutUserInput, contractUncheckedCreateWithoutUserInput>
      | contractCreateWithoutUserInput[]
      | contractUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contractCreateOrConnectWithoutUserInput | contractCreateOrConnectWithoutUserInput[];
    upsert?: contractUpsertWithWhereUniqueWithoutUserInput | contractUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contractCreateManyUserInputEnvelope;
    set?: contractWhereUniqueInput | contractWhereUniqueInput[];
    disconnect?: contractWhereUniqueInput | contractWhereUniqueInput[];
    delete?: contractWhereUniqueInput | contractWhereUniqueInput[];
    connect?: contractWhereUniqueInput | contractWhereUniqueInput[];
    update?: contractUpdateWithWhereUniqueWithoutUserInput | contractUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: contractUpdateManyWithWhereWithoutUserInput | contractUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contractScalarWhereInput | contractScalarWhereInput[];
  };

  export type projectUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type team_memberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type contractUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<contractCreateWithoutUserInput, contractUncheckedCreateWithoutUserInput>
      | contractCreateWithoutUserInput[]
      | contractUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contractCreateOrConnectWithoutUserInput | contractCreateOrConnectWithoutUserInput[];
    upsert?: contractUpsertWithWhereUniqueWithoutUserInput | contractUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contractCreateManyUserInputEnvelope;
    set?: contractWhereUniqueInput | contractWhereUniqueInput[];
    disconnect?: contractWhereUniqueInput | contractWhereUniqueInput[];
    delete?: contractWhereUniqueInput | contractWhereUniqueInput[];
    connect?: contractWhereUniqueInput | contractWhereUniqueInput[];
    update?: contractUpdateWithWhereUniqueWithoutUserInput | contractUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: contractUpdateManyWithWhereWithoutUserInput | contractUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contractScalarWhereInput | contractScalarWhereInput[];
  };

  export type projectUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type userCreateWithoutContractInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    project?: projectCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutContractInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutContractInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutContractInput, userUncheckedCreateWithoutContractInput>;
  };

  export type userUpsertWithoutContractInput = {
    update: XOR<userUpdateWithoutContractInput, userUncheckedUpdateWithoutContractInput>;
    create: XOR<userCreateWithoutContractInput, userUncheckedCreateWithoutContractInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutContractInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutContractInput, userUncheckedUpdateWithoutContractInput>;
  };

  export type userUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: projectUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutProjectInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutProjectInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutProjectInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
  };

  export type taskCreateWithoutProjectInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskUncheckedCreateWithoutProjectInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskCreateOrConnectWithoutProjectInput = {
    where: taskWhereUniqueInput;
    create: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput>;
  };

  export type taskCreateManyProjectInputEnvelope = {
    data: taskCreateManyProjectInput | taskCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutProjectInput = {
    update: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>;
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutProjectInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>;
  };

  export type userUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type taskUpsertWithWhereUniqueWithoutProjectInput = {
    where: taskWhereUniqueInput;
    update: XOR<taskUpdateWithoutProjectInput, taskUncheckedUpdateWithoutProjectInput>;
    create: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput>;
  };

  export type taskUpdateWithWhereUniqueWithoutProjectInput = {
    where: taskWhereUniqueInput;
    data: XOR<taskUpdateWithoutProjectInput, taskUncheckedUpdateWithoutProjectInput>;
  };

  export type taskUpdateManyWithWhereWithoutProjectInput = {
    where: taskScalarWhereInput;
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutProjectInput>;
  };

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[];
    OR?: taskScalarWhereInput[];
    NOT?: taskScalarWhereInput | taskScalarWhereInput[];
    id?: UuidFilter<'task'> | string;
    name?: StringFilter<'task'> | string;
    description?: StringNullableFilter<'task'> | string | null;
    start_date?: DateTimeNullableFilter<'task'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'task'> | Date | string | null;
    status?: StringNullableFilter<'task'> | string | null;
    project_id?: UuidFilter<'task'> | string;
    created_at?: DateTimeFilter<'task'> | Date | string;
    updated_at?: DateTimeFilter<'task'> | Date | string;
  };

  export type projectCreateWithoutTaskInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutTaskInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectCreateOrConnectWithoutTaskInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>;
  };

  export type projectUpsertWithoutTaskInput = {
    update: XOR<projectUpdateWithoutTaskInput, projectUncheckedUpdateWithoutTaskInput>;
    create: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>;
    where?: projectWhereInput;
  };

  export type projectUpdateToOneWithWhereWithoutTaskInput = {
    where?: projectWhereInput;
    data: XOR<projectUpdateWithoutTaskInput, projectUncheckedUpdateWithoutTaskInput>;
  };

  export type projectUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateWithoutTeamInput = {
    id?: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateWithoutTeamInput = {
    id?: string;
    user_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutTeamInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>;
  };

  export type team_memberCreateManyTeamInputEnvelope = {
    data: team_memberCreateManyTeamInput | team_memberCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type team_memberUpsertWithWhereUniqueWithoutTeamInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutTeamInput, team_memberUncheckedUpdateWithoutTeamInput>;
    create: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutTeamInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutTeamInput, team_memberUncheckedUpdateWithoutTeamInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutTeamInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutTeamInput>;
  };

  export type team_memberScalarWhereInput = {
    AND?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    OR?: team_memberScalarWhereInput[];
    NOT?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    user_id?: UuidFilter<'team_member'> | string;
    team_id?: UuidFilter<'team_member'> | string;
    role?: StringNullableFilter<'team_member'> | string | null;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
  };

  export type teamCreateWithoutTeam_memberInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamCreateOrConnectWithoutTeam_memberInput = {
    where: teamWhereUniqueInput;
    create: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
  };

  export type userCreateWithoutTeam_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeam_memberInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
  };

  export type teamUpsertWithoutTeam_memberInput = {
    update: XOR<teamUpdateWithoutTeam_memberInput, teamUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
    where?: teamWhereInput;
  };

  export type teamUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: teamWhereInput;
    data: XOR<teamUpdateWithoutTeam_memberInput, teamUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type teamUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutTeam_memberInput = {
    update: XOR<userUpdateWithoutTeam_memberInput, userUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTeam_memberInput, userUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type userUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type contractCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type contractUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type contractCreateOrConnectWithoutUserInput = {
    where: contractWhereUniqueInput;
    create: XOR<contractCreateWithoutUserInput, contractUncheckedCreateWithoutUserInput>;
  };

  export type contractCreateManyUserInputEnvelope = {
    data: contractCreateManyUserInput | contractCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type projectCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    task?: taskCreateNestedManyWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    task?: taskUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectCreateOrConnectWithoutUserInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>;
  };

  export type projectCreateManyUserInputEnvelope = {
    data: projectCreateManyUserInput | projectCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type team_memberCreateWithoutUserInput = {
    id?: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    team: teamCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateWithoutUserInput = {
    id?: string;
    team_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>;
  };

  export type team_memberCreateManyUserInputEnvelope = {
    data: team_memberCreateManyUserInput | team_memberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type contractUpsertWithWhereUniqueWithoutUserInput = {
    where: contractWhereUniqueInput;
    update: XOR<contractUpdateWithoutUserInput, contractUncheckedUpdateWithoutUserInput>;
    create: XOR<contractCreateWithoutUserInput, contractUncheckedCreateWithoutUserInput>;
  };

  export type contractUpdateWithWhereUniqueWithoutUserInput = {
    where: contractWhereUniqueInput;
    data: XOR<contractUpdateWithoutUserInput, contractUncheckedUpdateWithoutUserInput>;
  };

  export type contractUpdateManyWithWhereWithoutUserInput = {
    where: contractScalarWhereInput;
    data: XOR<contractUpdateManyMutationInput, contractUncheckedUpdateManyWithoutUserInput>;
  };

  export type contractScalarWhereInput = {
    AND?: contractScalarWhereInput | contractScalarWhereInput[];
    OR?: contractScalarWhereInput[];
    NOT?: contractScalarWhereInput | contractScalarWhereInput[];
    id?: UuidFilter<'contract'> | string;
    description?: StringNullableFilter<'contract'> | string | null;
    start_date?: DateTimeNullableFilter<'contract'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'contract'> | Date | string | null;
    status?: StringNullableFilter<'contract'> | string | null;
    name?: StringFilter<'contract'> | string;
    created_at?: DateTimeFilter<'contract'> | Date | string;
    updated_at?: DateTimeFilter<'contract'> | Date | string;
    user_id?: UuidFilter<'contract'> | string;
    tenant_id?: StringFilter<'contract'> | string;
  };

  export type projectUpsertWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput;
    update: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>;
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>;
  };

  export type projectUpdateWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput;
    data: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>;
  };

  export type projectUpdateManyWithWhereWithoutUserInput = {
    where: projectScalarWhereInput;
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutUserInput>;
  };

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[];
    OR?: projectScalarWhereInput[];
    NOT?: projectScalarWhereInput | projectScalarWhereInput[];
    id?: UuidFilter<'project'> | string;
    name?: StringFilter<'project'> | string;
    description?: StringNullableFilter<'project'> | string | null;
    start_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    status?: StringNullableFilter<'project'> | string | null;
    client_id?: UuidFilter<'project'> | string;
    created_at?: DateTimeFilter<'project'> | Date | string;
    updated_at?: DateTimeFilter<'project'> | Date | string;
  };

  export type team_memberUpsertWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>;
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutUserInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutUserInput>;
  };

  export type taskCreateManyProjectInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateManyTeamInput = {
    id?: string;
    user_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contractCreateManyUserInput = {
    id?: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type projectCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateManyUserInput = {
    id?: string;
    team_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contractUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type contractUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type contractUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type projectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
   */
  export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ProjectCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TeamCountOutputTypeDefaultArgs instead
   */
  export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TeamCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use contractDefaultArgs instead
   */
  export type contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    contractDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use projectDefaultArgs instead
   */
  export type projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    projectDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use taskDefaultArgs instead
   */
  export type taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = taskDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teamDefaultArgs instead
   */
  export type teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teamDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use team_memberDefaultArgs instead
   */
  export type team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    team_memberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
