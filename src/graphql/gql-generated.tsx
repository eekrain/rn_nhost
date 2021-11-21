import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type BulkUpdateVariantsMetadataOutput = {
  __typename?: 'BulkUpdateVariantsMetadataOutput';
  is_any_update?: Maybe<Scalars['Boolean']>;
  variant_title?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type InventoryVariantMetadataInsertInput = {
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

export type InventoryVariantMetadataNeedUpdateInput = {
  id: Scalars['Int'];
  variant_value?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "auth.account_providers" */
export type Auth_Account_Providers = {
  __typename?: 'auth_account_providers';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  auth_provider: Scalars['String'];
  auth_provider_unique_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: Auth_Providers;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate = {
  __typename?: 'auth_account_providers_aggregate';
  aggregate?: Maybe<Auth_Account_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Account_Providers>;
};

/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Fields = {
  __typename?: 'auth_account_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Providers_Max_Fields>;
  min?: Maybe<Auth_Account_Providers_Min_Fields>;
};


/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Account_Providers_Max_Order_By>;
  min?: Maybe<Auth_Account_Providers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Providers_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_providers". All fields are combined with a logical 'AND'. */
export type Auth_Account_Providers_Bool_Exp = {
  _and?: Maybe<Array<Auth_Account_Providers_Bool_Exp>>;
  _not?: Maybe<Auth_Account_Providers_Bool_Exp>;
  _or?: Maybe<Array<Auth_Account_Providers_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  auth_provider?: Maybe<String_Comparison_Exp>;
  auth_provider_unique_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider?: Maybe<Auth_Providers_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account_providers" */
export enum Auth_Account_Providers_Constraint {
  /** unique or primary key constraint */
  AccountProvidersAccountIdAuthProviderKey = 'account_providers_account_id_auth_provider_key',
  /** unique or primary key constraint */
  AccountProvidersAuthProviderAuthProviderUniqueIdKey = 'account_providers_auth_provider_auth_provider_unique_id_key',
  /** unique or primary key constraint */
  AccountProvidersPkey = 'account_providers_pkey'
}

/** input type for inserting data into table "auth.account_providers" */
export type Auth_Account_Providers_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider?: Maybe<Auth_Providers_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Account_Providers_Max_Fields = {
  __typename?: 'auth_account_providers_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Providers_Min_Fields = {
  __typename?: 'auth_account_providers_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.account_providers" */
export type Auth_Account_Providers_Mutation_Response = {
  __typename?: 'auth_account_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Providers>;
};

/** on conflict condition type for table "auth.account_providers" */
export type Auth_Account_Providers_On_Conflict = {
  constraint: Auth_Account_Providers_Constraint;
  update_columns?: Array<Auth_Account_Providers_Update_Column>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_providers". */
export type Auth_Account_Providers_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider?: Maybe<Auth_Providers_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_account_providers */
export type Auth_Account_Providers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.account_providers" */
export type Auth_Account_Providers_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "auth.account_roles" */
export type Auth_Account_Roles = {
  __typename?: 'auth_account_roles';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: Auth_Roles;
};

/** aggregated selection of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate = {
  __typename?: 'auth_account_roles_aggregate';
  aggregate?: Maybe<Auth_Account_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Account_Roles>;
};

/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Fields = {
  __typename?: 'auth_account_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Roles_Max_Fields>;
  min?: Maybe<Auth_Account_Roles_Min_Fields>;
};


/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Account_Roles_Max_Order_By>;
  min?: Maybe<Auth_Account_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Roles_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type Auth_Account_Roles_Bool_Exp = {
  _and?: Maybe<Array<Auth_Account_Roles_Bool_Exp>>;
  _not?: Maybe<Auth_Account_Roles_Bool_Exp>;
  _or?: Maybe<Array<Auth_Account_Roles_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  roleByRole?: Maybe<Auth_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.account_roles" */
export enum Auth_Account_Roles_Constraint {
  /** unique or primary key constraint */
  AccountRolesPkey = 'account_roles_pkey',
  /** unique or primary key constraint */
  UserRolesAccountIdRoleKey = 'user_roles_account_id_role_key'
}

/** input type for inserting data into table "auth.account_roles" */
export type Auth_Account_Roles_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  roleByRole?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Auth_Account_Roles_Max_Fields = {
  __typename?: 'auth_account_roles_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Roles_Min_Fields = {
  __typename?: 'auth_account_roles_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.account_roles" */
export type Auth_Account_Roles_Mutation_Response = {
  __typename?: 'auth_account_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Roles>;
};

/** on conflict condition type for table "auth.account_roles" */
export type Auth_Account_Roles_On_Conflict = {
  constraint: Auth_Account_Roles_Constraint;
  update_columns?: Array<Auth_Account_Roles_Update_Column>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_roles". */
export type Auth_Account_Roles_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  roleByRole?: Maybe<Auth_Roles_Order_By>;
};

/** primary key columns input for table: auth_account_roles */
export type Auth_Account_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.account_roles" */
export type Auth_Account_Roles_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.accounts" */
export type Auth_Accounts = {
  __typename?: 'auth_accounts';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  id: Scalars['uuid'];
  is_anonymous: Scalars['Boolean'];
  mfa_enabled: Scalars['Boolean'];
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  /** An array relationship */
  refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** An aggregate relationship */
  refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** An object relationship */
  role: Auth_Roles;
  ticket: Scalars['uuid'];
  ticket_expires_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsCustom_Register_DataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** aggregated selection of "auth.accounts" */
export type Auth_Accounts_Aggregate = {
  __typename?: 'auth_accounts_aggregate';
  aggregate?: Maybe<Auth_Accounts_Aggregate_Fields>;
  nodes: Array<Auth_Accounts>;
};

/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_Fields = {
  __typename?: 'auth_accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Accounts_Max_Fields>;
  min?: Maybe<Auth_Accounts_Min_Fields>;
};


/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.accounts" */
export type Auth_Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Accounts_Max_Order_By>;
  min?: Maybe<Auth_Accounts_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Append_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.accounts" */
export type Auth_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Auth_Accounts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: Maybe<Array<Auth_Accounts_Bool_Exp>>;
  _not?: Maybe<Auth_Accounts_Bool_Exp>;
  _or?: Maybe<Array<Auth_Accounts_Bool_Exp>>;
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>;
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>;
  active?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  custom_register_data?: Maybe<Jsonb_Comparison_Exp>;
  default_role?: Maybe<String_Comparison_Exp>;
  email?: Maybe<Citext_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_anonymous?: Maybe<Boolean_Comparison_Exp>;
  mfa_enabled?: Maybe<Boolean_Comparison_Exp>;
  new_email?: Maybe<Citext_Comparison_Exp>;
  otp_secret?: Maybe<String_Comparison_Exp>;
  password_hash?: Maybe<String_Comparison_Exp>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  role?: Maybe<Auth_Roles_Bool_Exp>;
  ticket?: Maybe<Uuid_Comparison_Exp>;
  ticket_expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.accounts" */
export enum Auth_Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsEmailKey = 'accounts_email_key',
  /** unique or primary key constraint */
  AccountsNewEmailKey = 'accounts_new_email_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
  /** unique or primary key constraint */
  AccountsUserIdKey = 'accounts_user_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Accounts_Delete_At_Path_Input = {
  custom_register_data?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Accounts_Delete_Elem_Input = {
  custom_register_data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Accounts_Delete_Key_Input = {
  custom_register_data?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.accounts" */
export type Auth_Accounts_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  mfa_enabled?: Maybe<Scalars['Boolean']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Arr_Rel_Insert_Input>;
  role?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Accounts_Max_Fields = {
  __typename?: 'auth_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.accounts" */
export type Auth_Accounts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Accounts_Min_Fields = {
  __typename?: 'auth_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.accounts" */
export type Auth_Accounts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.accounts" */
export type Auth_Accounts_Mutation_Response = {
  __typename?: 'auth_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Accounts>;
};

/** input type for inserting object relation for remote table "auth.accounts" */
export type Auth_Accounts_Obj_Rel_Insert_Input = {
  data: Auth_Accounts_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};

/** on conflict condition type for table "auth.accounts" */
export type Auth_Accounts_On_Conflict = {
  constraint: Auth_Accounts_Constraint;
  update_columns?: Array<Auth_Accounts_Update_Column>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.accounts". */
export type Auth_Accounts_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>;
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>;
  active?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  custom_register_data?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_anonymous?: Maybe<Order_By>;
  mfa_enabled?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  refresh_tokens_aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Order_By>;
  role?: Maybe<Auth_Roles_Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_accounts */
export type Auth_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Prepend_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "auth.accounts" */
export enum Auth_Accounts_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.accounts" */
export type Auth_Accounts_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  mfa_enabled?: Maybe<Scalars['Boolean']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.accounts" */
export enum Auth_Accounts_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "auth.providers" */
export type Auth_Providers = {
  __typename?: 'auth_providers';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  provider: Scalars['String'];
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type Auth_Providers_Aggregate = {
  __typename?: 'auth_providers_aggregate';
  aggregate?: Maybe<Auth_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Providers>;
};

/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_Fields = {
  __typename?: 'auth_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Providers_Max_Fields>;
  min?: Maybe<Auth_Providers_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type Auth_Providers_Bool_Exp = {
  _and?: Maybe<Array<Auth_Providers_Bool_Exp>>;
  _not?: Maybe<Auth_Providers_Bool_Exp>;
  _or?: Maybe<Array<Auth_Providers_Bool_Exp>>;
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>;
  provider?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum Auth_Providers_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type Auth_Providers_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  provider?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Providers_Max_Fields = {
  __typename?: 'auth_providers_max_fields';
  provider?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Providers_Min_Fields = {
  __typename?: 'auth_providers_min_fields';
  provider?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type Auth_Providers_Mutation_Response = {
  __typename?: 'auth_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Providers>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type Auth_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Providers_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};

/** on conflict condition type for table "auth.providers" */
export type Auth_Providers_On_Conflict = {
  constraint: Auth_Providers_Constraint;
  update_columns?: Array<Auth_Providers_Update_Column>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type Auth_Providers_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>;
  provider?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_providers */
export type Auth_Providers_Pk_Columns_Input = {
  provider: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum Auth_Providers_Select_Column {
  /** column name */
  Provider = 'provider'
}

/** input type for updating data in table "auth.providers" */
export type Auth_Providers_Set_Input = {
  provider?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum Auth_Providers_Update_Column {
  /** column name */
  Provider = 'provider'
}

/** columns and relationships of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens = {
  __typename?: 'auth_refresh_tokens';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  refresh_token: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate = {
  __typename?: 'auth_refresh_tokens_aggregate';
  aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Auth_Refresh_Tokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'auth_refresh_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Refresh_Tokens_Max_Fields>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Refresh_Tokens_Max_Order_By>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Auth_Refresh_Tokens_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  _not?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  refresh_token?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Refresh_Tokens_Max_Fields = {
  __typename?: 'auth_refresh_tokens_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Refresh_Tokens_Min_Fields = {
  __typename?: 'auth_refresh_tokens_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Mutation_Response = {
  __typename?: 'auth_refresh_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Refresh_Tokens>;
};

/** on conflict condition type for table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint;
  update_columns?: Array<Auth_Refresh_Tokens_Update_Column>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type Auth_Refresh_Tokens_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_refresh_tokens */
export type Auth_Refresh_Tokens_Pk_Columns_Input = {
  refresh_token: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** columns and relationships of "auth.roles" */
export type Auth_Roles = {
  __typename?: 'auth_roles';
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** An array relationship */
  accounts: Array<Auth_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Auth_Accounts_Aggregate;
  role: Scalars['String'];
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type Auth_Roles_Aggregate = {
  __typename?: 'auth_roles_aggregate';
  aggregate?: Maybe<Auth_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Roles>;
};

/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_Fields = {
  __typename?: 'auth_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Roles_Max_Fields>;
  min?: Maybe<Auth_Roles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: Maybe<Array<Auth_Roles_Bool_Exp>>;
  _not?: Maybe<Auth_Roles_Bool_Exp>;
  _or?: Maybe<Array<Auth_Roles_Bool_Exp>>;
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>;
  accounts?: Maybe<Auth_Accounts_Bool_Exp>;
  role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum Auth_Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type Auth_Roles_Insert_Input = {
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  accounts?: Maybe<Auth_Accounts_Arr_Rel_Insert_Input>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Roles_Max_Fields = {
  __typename?: 'auth_roles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Roles_Min_Fields = {
  __typename?: 'auth_roles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type Auth_Roles_Mutation_Response = {
  __typename?: 'auth_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Roles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};

/** on conflict condition type for table "auth.roles" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint;
  update_columns?: Array<Auth_Roles_Update_Column>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type Auth_Roles_Order_By = {
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>;
  accounts_aggregate?: Maybe<Auth_Accounts_Aggregate_Order_By>;
  role?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_roles */
export type Auth_Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum Auth_Roles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type Auth_Roles_Set_Input = {
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum Auth_Roles_Update_Column {
  /** column name */
  Role = 'role'
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: Maybe<Scalars['citext']>;
  _gt?: Maybe<Scalars['citext']>;
  _gte?: Maybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['citext']>;
  _in?: Maybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['citext']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['citext']>;
  _lt?: Maybe<Scalars['citext']>;
  _lte?: Maybe<Scalars['citext']>;
  _neq?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['citext']>;
  _nin?: Maybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['citext']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  bulkUpdateVariantsMetadata?: Maybe<BulkUpdateVariantsMetadataOutput>;
  /** delete data from the table: "auth.account_providers" */
  delete_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.account_providers" */
  delete_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** delete data from the table: "auth.account_roles" */
  delete_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.account_roles" */
  delete_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** delete data from the table: "auth.accounts" */
  delete_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** delete single row from the table: "auth.accounts" */
  delete_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** delete data from the table: "auth.providers" */
  delete_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.providers" */
  delete_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** delete data from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** delete data from the table: "auth.roles" */
  delete_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  delete_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** delete data from the table: "rocketjaket.inventory_variant_metadata" */
  delete_rocketjaket_inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.inventory_variant_metadata" */
  delete_rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** delete data from the table: "rocketjaket.product" */
  delete_rocketjaket_product?: Maybe<Rocketjaket_Product_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.product" */
  delete_rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** delete data from the table: "rocketjaket.product_category" */
  delete_rocketjaket_product_category?: Maybe<Rocketjaket_Product_Category_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.product_category" */
  delete_rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** delete data from the table: "rocketjaket.store" */
  delete_rocketjaket_store?: Maybe<Rocketjaket_Store_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.store" */
  delete_rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "auth.account_providers" */
  insert_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.account_providers" */
  insert_auth_account_providers_one?: Maybe<Auth_Account_Providers>;
  /** insert data into the table: "auth.account_roles" */
  insert_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.account_roles" */
  insert_auth_account_roles_one?: Maybe<Auth_Account_Roles>;
  /** insert data into the table: "auth.accounts" */
  insert_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** insert a single row into the table: "auth.accounts" */
  insert_auth_accounts_one?: Maybe<Auth_Accounts>;
  /** insert data into the table: "auth.providers" */
  insert_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insert_auth_providers_one?: Maybe<Auth_Providers>;
  /** insert data into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens_one?: Maybe<Auth_Refresh_Tokens>;
  /** insert data into the table: "auth.roles" */
  insert_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insert_auth_roles_one?: Maybe<Auth_Roles>;
  /** insert data into the table: "rocketjaket.inventory_variant_metadata" */
  insert_rocketjaket_inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.inventory_variant_metadata" */
  insert_rocketjaket_inventory_variant_metadata_one?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** insert data into the table: "rocketjaket.product" */
  insert_rocketjaket_product?: Maybe<Rocketjaket_Product_Mutation_Response>;
  /** insert data into the table: "rocketjaket.product_category" */
  insert_rocketjaket_product_category?: Maybe<Rocketjaket_Product_Category_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.product_category" */
  insert_rocketjaket_product_category_one?: Maybe<Rocketjaket_Product_Category>;
  /** insert a single row into the table: "rocketjaket.product" */
  insert_rocketjaket_product_one?: Maybe<Rocketjaket_Product>;
  /** insert data into the table: "rocketjaket.store" */
  insert_rocketjaket_store?: Maybe<Rocketjaket_Store_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.store" */
  insert_rocketjaket_store_one?: Maybe<Rocketjaket_Store>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "auth.account_providers" */
  update_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** update single row of the table: "auth.account_providers" */
  update_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** update data of the table: "auth.account_roles" */
  update_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** update single row of the table: "auth.account_roles" */
  update_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** update data of the table: "auth.accounts" */
  update_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** update single row of the table: "auth.accounts" */
  update_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** update data of the table: "auth.providers" */
  update_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** update single row of the table: "auth.providers" */
  update_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** update data of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** update data of the table: "auth.roles" */
  update_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  update_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** update data of the table: "rocketjaket.inventory_variant_metadata" */
  update_rocketjaket_inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Mutation_Response>;
  /** update single row of the table: "rocketjaket.inventory_variant_metadata" */
  update_rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** update data of the table: "rocketjaket.product" */
  update_rocketjaket_product?: Maybe<Rocketjaket_Product_Mutation_Response>;
  /** update single row of the table: "rocketjaket.product" */
  update_rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** update data of the table: "rocketjaket.product_category" */
  update_rocketjaket_product_category?: Maybe<Rocketjaket_Product_Category_Mutation_Response>;
  /** update single row of the table: "rocketjaket.product_category" */
  update_rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** update data of the table: "rocketjaket.store" */
  update_rocketjaket_store?: Maybe<Rocketjaket_Store_Mutation_Response>;
  /** update single row of the table: "rocketjaket.store" */
  update_rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootBulkUpdateVariantsMetadataArgs = {
  needAddVariantMetadata: Array<InventoryVariantMetadataInsertInput>;
  needDeleteIds: Array<Scalars['Int']>;
  needUpdateVariantMetadata: Array<InventoryVariantMetadataNeedUpdateInput>;
  new_variant_title: Scalars['String'];
  old_variant_title: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_ProvidersArgs = {
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_RolesArgs = {
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_AccountsArgs = {
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_ProvidersArgs = {
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_RolesArgs = {
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Variant_MetadataArgs = {
  where: Rocketjaket_Inventory_Variant_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_ProductArgs = {
  where: Rocketjaket_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Product_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Product_CategoryArgs = {
  where: Rocketjaket_Product_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Product_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_StoreArgs = {
  where: Rocketjaket_Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Store_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_ProvidersArgs = {
  objects: Array<Auth_Account_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Providers_OneArgs = {
  object: Auth_Account_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_RolesArgs = {
  objects: Array<Auth_Account_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Roles_OneArgs = {
  object: Auth_Account_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_AccountsArgs = {
  objects: Array<Auth_Accounts_Insert_Input>;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Accounts_OneArgs = {
  object: Auth_Accounts_Insert_Input;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_ProvidersArgs = {
  objects: Array<Auth_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Providers_OneArgs = {
  object: Auth_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_Tokens_OneArgs = {
  object: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_RolesArgs = {
  objects: Array<Auth_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Roles_OneArgs = {
  object: Auth_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Variant_MetadataArgs = {
  objects: Array<Rocketjaket_Inventory_Variant_Metadata_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Inventory_Variant_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Variant_Metadata_OneArgs = {
  object: Rocketjaket_Inventory_Variant_Metadata_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Inventory_Variant_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_ProductArgs = {
  objects: Array<Rocketjaket_Product_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Product_CategoryArgs = {
  objects: Array<Rocketjaket_Product_Category_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Product_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Product_Category_OneArgs = {
  object: Rocketjaket_Product_Category_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Product_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Product_OneArgs = {
  object: Rocketjaket_Product_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_StoreArgs = {
  objects: Array<Rocketjaket_Store_Insert_Input>;
  on_conflict?: Maybe<Rocketjaket_Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Store_OneArgs = {
  object: Rocketjaket_Store_Insert_Input;
  on_conflict?: Maybe<Rocketjaket_Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ProvidersArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>;
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>;
  pk_columns: Auth_Account_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_RolesArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>;
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>;
  pk_columns: Auth_Account_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_AccountsArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>;
  _set?: Maybe<Auth_Accounts_Set_Input>;
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Accounts_By_PkArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>;
  _set?: Maybe<Auth_Accounts_Set_Input>;
  pk_columns: Auth_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_ProvidersArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  pk_columns: Auth_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_Tokens_By_PkArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  pk_columns: Auth_Refresh_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_RolesArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>;
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>;
  pk_columns: Auth_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Variant_MetadataArgs = {
  _inc?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Inc_Input>;
  _set?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Set_Input>;
  where: Rocketjaket_Inventory_Variant_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Inc_Input>;
  _set?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Set_Input>;
  pk_columns: Rocketjaket_Inventory_Variant_Metadata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_ProductArgs = {
  _inc?: Maybe<Rocketjaket_Product_Inc_Input>;
  _set?: Maybe<Rocketjaket_Product_Set_Input>;
  where: Rocketjaket_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Product_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Product_Inc_Input>;
  _set?: Maybe<Rocketjaket_Product_Set_Input>;
  pk_columns: Rocketjaket_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Product_CategoryArgs = {
  _inc?: Maybe<Rocketjaket_Product_Category_Inc_Input>;
  _set?: Maybe<Rocketjaket_Product_Category_Set_Input>;
  where: Rocketjaket_Product_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Product_Category_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Product_Category_Inc_Input>;
  _set?: Maybe<Rocketjaket_Product_Category_Set_Input>;
  pk_columns: Rocketjaket_Product_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_StoreArgs = {
  _inc?: Maybe<Rocketjaket_Store_Inc_Input>;
  _set?: Maybe<Rocketjaket_Store_Set_Input>;
  where: Rocketjaket_Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Store_By_PkArgs = {
  _inc?: Maybe<Rocketjaket_Store_Inc_Input>;
  _set?: Maybe<Rocketjaket_Store_Set_Input>;
  pk_columns: Rocketjaket_Store_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata: Array<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata_aggregate: Rocketjaket_Inventory_Variant_Metadata_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" using primary key columns */
  rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch data from the table: "rocketjaket.product" */
  rocketjaket_product: Array<Rocketjaket_Product>;
  /** fetch aggregated fields from the table: "rocketjaket.product" */
  rocketjaket_product_aggregate: Rocketjaket_Product_Aggregate;
  /** fetch data from the table: "rocketjaket.product" using primary key columns */
  rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** fetch data from the table: "rocketjaket.product_category" */
  rocketjaket_product_category: Array<Rocketjaket_Product_Category>;
  /** fetch aggregated fields from the table: "rocketjaket.product_category" */
  rocketjaket_product_category_aggregate: Rocketjaket_Product_Category_Aggregate;
  /** fetch data from the table: "rocketjaket.product_category" using primary key columns */
  rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** fetch data from the table: "rocketjaket.store" */
  rocketjaket_store: Array<Rocketjaket_Store>;
  /** fetch aggregated fields from the table: "rocketjaket.store" */
  rocketjaket_store_aggregate: Rocketjaket_Store_Aggregate;
  /** fetch data from the table: "rocketjaket.store" using primary key columns */
  rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Query_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Query_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootRocketjaket_Inventory_Variant_MetadataArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Variant_Metadata_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRocketjaket_ProductArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRocketjaket_Product_CategoryArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_Category_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRocketjaket_StoreArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Store_Order_By>>;
  where?: Maybe<Rocketjaket_Store_Bool_Exp>;
};


export type Query_RootRocketjaket_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Store_Order_By>>;
  where?: Maybe<Rocketjaket_Store_Bool_Exp>;
};


export type Query_RootRocketjaket_Store_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata = {
  __typename?: 'rocketjaket_inventory_variant_metadata';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  variant_title: Scalars['String'];
  variant_value: Scalars['String'];
};

/** aggregated selection of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Aggregate = {
  __typename?: 'rocketjaket_inventory_variant_metadata_aggregate';
  aggregate?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Inventory_Variant_Metadata>;
};

/** aggregate fields of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Aggregate_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_aggregate_fields';
  avg?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Max_Fields>;
  min?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Avg_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.inventory_variant_metadata". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Inventory_Variant_Metadata_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  variant_title?: Maybe<String_Comparison_Exp>;
  variant_value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.inventory_variant_metadata" */
export enum Rocketjaket_Inventory_Variant_Metadata_Constraint {
  /** unique or primary key constraint */
  InventoryVariantMetadataPkey = 'inventory_variant_metadata_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Max_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Min_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Mutation_Response = {
  __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Inventory_Variant_Metadata>;
};

/** on conflict condition type for table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_On_Conflict = {
  constraint: Rocketjaket_Inventory_Variant_Metadata_Constraint;
  update_columns?: Array<Rocketjaket_Inventory_Variant_Metadata_Update_Column>;
  where?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.inventory_variant_metadata". */
export type Rocketjaket_Inventory_Variant_Metadata_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  variant_title?: Maybe<Order_By>;
  variant_value?: Maybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_inventory_variant_metadata */
export type Rocketjaket_Inventory_Variant_Metadata_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.inventory_variant_metadata" */
export enum Rocketjaket_Inventory_Variant_Metadata_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VariantTitle = 'variant_title',
  /** column name */
  VariantValue = 'variant_value'
}

/** input type for updating data in table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Stddev_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Sum_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "rocketjaket.inventory_variant_metadata" */
export enum Rocketjaket_Inventory_Variant_Metadata_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VariantTitle = 'variant_title',
  /** column name */
  VariantValue = 'variant_value'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Var_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Var_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Variance_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rocketjaket.product" */
export type Rocketjaket_Product = {
  __typename?: 'rocketjaket_product';
  capital_price: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  discount: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  photo_url?: Maybe<Scalars['String']>;
  /** An object relationship */
  product_category: Rocketjaket_Product_Category;
  product_category_id: Scalars['Int'];
  selling_price: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate = {
  __typename?: 'rocketjaket_product_aggregate';
  aggregate?: Maybe<Rocketjaket_Product_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Product>;
};

/** aggregate fields of "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate_Fields = {
  __typename?: 'rocketjaket_product_aggregate_fields';
  avg?: Maybe<Rocketjaket_Product_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Product_Max_Fields>;
  min?: Maybe<Rocketjaket_Product_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Product_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Product_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Product_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate_Order_By = {
  avg?: Maybe<Rocketjaket_Product_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rocketjaket_Product_Max_Order_By>;
  min?: Maybe<Rocketjaket_Product_Min_Order_By>;
  stddev?: Maybe<Rocketjaket_Product_Stddev_Order_By>;
  stddev_pop?: Maybe<Rocketjaket_Product_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rocketjaket_Product_Stddev_Samp_Order_By>;
  sum?: Maybe<Rocketjaket_Product_Sum_Order_By>;
  var_pop?: Maybe<Rocketjaket_Product_Var_Pop_Order_By>;
  var_samp?: Maybe<Rocketjaket_Product_Var_Samp_Order_By>;
  variance?: Maybe<Rocketjaket_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rocketjaket.product" */
export type Rocketjaket_Product_Arr_Rel_Insert_Input = {
  data: Array<Rocketjaket_Product_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Rocketjaket_Product_Avg_Fields = {
  __typename?: 'rocketjaket_product_avg_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Avg_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rocketjaket.product". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Product_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Product_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Product_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Product_Bool_Exp>>;
  capital_price?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  discount?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  photo_url?: Maybe<String_Comparison_Exp>;
  product_category?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
  product_category_id?: Maybe<Int_Comparison_Exp>;
  selling_price?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category = {
  __typename?: 'rocketjaket_product_category';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  products: Array<Rocketjaket_Product>;
  /** An aggregate relationship */
  products_aggregate: Rocketjaket_Product_Aggregate;
};


/** columns and relationships of "rocketjaket.product_category" */
export type Rocketjaket_Product_CategoryProductsArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.product_category" */
export type Rocketjaket_Product_CategoryProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Aggregate = {
  __typename?: 'rocketjaket_product_category_aggregate';
  aggregate?: Maybe<Rocketjaket_Product_Category_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Product_Category>;
};

/** aggregate fields of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Aggregate_Fields = {
  __typename?: 'rocketjaket_product_category_aggregate_fields';
  avg?: Maybe<Rocketjaket_Product_Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Product_Category_Max_Fields>;
  min?: Maybe<Rocketjaket_Product_Category_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Product_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Product_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Product_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Product_Category_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Product_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Product_Category_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Product_Category_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rocketjaket_Product_Category_Avg_Fields = {
  __typename?: 'rocketjaket_product_category_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.product_category". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Product_Category_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Product_Category_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Product_Category_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  products?: Maybe<Rocketjaket_Product_Bool_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.product_category" */
export enum Rocketjaket_Product_Category_Constraint {
  /** unique or primary key constraint */
  ProductCategoryPkey = 'product_category_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Rocketjaket_Product_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rocketjaket_Product_Category_Max_Fields = {
  __typename?: 'rocketjaket_product_category_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Product_Category_Min_Fields = {
  __typename?: 'rocketjaket_product_category_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Mutation_Response = {
  __typename?: 'rocketjaket_product_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Product_Category>;
};

/** input type for inserting object relation for remote table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Product_Category_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Rocketjaket_Product_Category_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_On_Conflict = {
  constraint: Rocketjaket_Product_Category_Constraint;
  update_columns?: Array<Rocketjaket_Product_Category_Update_Column>;
  where?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.product_category". */
export type Rocketjaket_Product_Category_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  products_aggregate?: Maybe<Rocketjaket_Product_Aggregate_Order_By>;
};

/** primary key columns input for table: rocketjaket_product_category */
export type Rocketjaket_Product_Category_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.product_category" */
export enum Rocketjaket_Product_Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Product_Category_Stddev_Fields = {
  __typename?: 'rocketjaket_product_category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Product_Category_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_product_category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Product_Category_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_product_category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rocketjaket_Product_Category_Sum_Fields = {
  __typename?: 'rocketjaket_product_category_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "rocketjaket.product_category" */
export enum Rocketjaket_Product_Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Product_Category_Var_Pop_Fields = {
  __typename?: 'rocketjaket_product_category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Product_Category_Var_Samp_Fields = {
  __typename?: 'rocketjaket_product_category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rocketjaket_Product_Category_Variance_Fields = {
  __typename?: 'rocketjaket_product_category_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** unique or primary key constraints on table "rocketjaket.product" */
export enum Rocketjaket_Product_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.product" */
export type Rocketjaket_Product_Inc_Input = {
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.product" */
export type Rocketjaket_Product_Insert_Input = {
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  product_category?: Maybe<Rocketjaket_Product_Category_Obj_Rel_Insert_Input>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rocketjaket_Product_Max_Fields = {
  __typename?: 'rocketjaket_product_max_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Max_Order_By = {
  capital_price?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rocketjaket_Product_Min_Fields = {
  __typename?: 'rocketjaket_product_min_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Min_Order_By = {
  capital_price?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "rocketjaket.product" */
export type Rocketjaket_Product_Mutation_Response = {
  __typename?: 'rocketjaket_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Product>;
};

/** on conflict condition type for table "rocketjaket.product" */
export type Rocketjaket_Product_On_Conflict = {
  constraint: Rocketjaket_Product_Constraint;
  update_columns?: Array<Rocketjaket_Product_Update_Column>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.product". */
export type Rocketjaket_Product_Order_By = {
  capital_price?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  product_category?: Maybe<Rocketjaket_Product_Category_Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_product */
export type Rocketjaket_Product_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.product" */
export enum Rocketjaket_Product_Select_Column {
  /** column name */
  CapitalPrice = 'capital_price',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  ProductCategoryId = 'product_category_id',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rocketjaket.product" */
export type Rocketjaket_Product_Set_Input = {
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Product_Stddev_Fields = {
  __typename?: 'rocketjaket_product_stddev_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Stddev_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Product_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_product_stddev_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Stddev_Pop_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Product_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_product_stddev_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Stddev_Samp_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rocketjaket_Product_Sum_Fields = {
  __typename?: 'rocketjaket_product_sum_fields';
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Sum_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** update columns of table "rocketjaket.product" */
export enum Rocketjaket_Product_Update_Column {
  /** column name */
  CapitalPrice = 'capital_price',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  ProductCategoryId = 'product_category_id',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Product_Var_Pop_Fields = {
  __typename?: 'rocketjaket_product_var_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Var_Pop_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Product_Var_Samp_Fields = {
  __typename?: 'rocketjaket_product_var_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Var_Samp_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rocketjaket_Product_Variance_Fields = {
  __typename?: 'rocketjaket_product_variance_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Variance_Order_By = {
  capital_price?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_category_id?: Maybe<Order_By>;
  selling_price?: Maybe<Order_By>;
};

/** columns and relationships of "rocketjaket.store" */
export type Rocketjaket_Store = {
  __typename?: 'rocketjaket_store';
  address?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "rocketjaket.store" */
export type Rocketjaket_Store_Aggregate = {
  __typename?: 'rocketjaket_store_aggregate';
  aggregate?: Maybe<Rocketjaket_Store_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Store>;
};

/** aggregate fields of "rocketjaket.store" */
export type Rocketjaket_Store_Aggregate_Fields = {
  __typename?: 'rocketjaket_store_aggregate_fields';
  avg?: Maybe<Rocketjaket_Store_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Store_Max_Fields>;
  min?: Maybe<Rocketjaket_Store_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Store_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Store_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Store_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Store_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Store_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Store_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Store_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.store" */
export type Rocketjaket_Store_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rocketjaket_Store_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rocketjaket_Store_Avg_Fields = {
  __typename?: 'rocketjaket_store_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.store". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Store_Bool_Exp = {
  _and?: Maybe<Array<Rocketjaket_Store_Bool_Exp>>;
  _not?: Maybe<Rocketjaket_Store_Bool_Exp>;
  _or?: Maybe<Array<Rocketjaket_Store_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  latitude?: Maybe<String_Comparison_Exp>;
  longitude?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.store" */
export enum Rocketjaket_Store_Constraint {
  /** unique or primary key constraint */
  StoreNameKey = 'store_name_key',
  /** unique or primary key constraint */
  StorePkey = 'store_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.store" */
export type Rocketjaket_Store_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.store" */
export type Rocketjaket_Store_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rocketjaket_Store_Max_Fields = {
  __typename?: 'rocketjaket_store_max_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rocketjaket_Store_Min_Fields = {
  __typename?: 'rocketjaket_store_min_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rocketjaket.store" */
export type Rocketjaket_Store_Mutation_Response = {
  __typename?: 'rocketjaket_store_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Store>;
};

/** on conflict condition type for table "rocketjaket.store" */
export type Rocketjaket_Store_On_Conflict = {
  constraint: Rocketjaket_Store_Constraint;
  update_columns?: Array<Rocketjaket_Store_Update_Column>;
  where?: Maybe<Rocketjaket_Store_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.store". */
export type Rocketjaket_Store_Order_By = {
  address?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_store */
export type Rocketjaket_Store_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.store" */
export enum Rocketjaket_Store_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rocketjaket.store" */
export type Rocketjaket_Store_Set_Input = {
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Store_Stddev_Fields = {
  __typename?: 'rocketjaket_store_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Store_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_store_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Store_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_store_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rocketjaket_Store_Sum_Fields = {
  __typename?: 'rocketjaket_store_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "rocketjaket.store" */
export enum Rocketjaket_Store_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Store_Var_Pop_Fields = {
  __typename?: 'rocketjaket_store_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Store_Var_Samp_Fields = {
  __typename?: 'rocketjaket_store_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rocketjaket_Store_Variance_Fields = {
  __typename?: 'rocketjaket_store_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata: Array<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata_aggregate: Rocketjaket_Inventory_Variant_Metadata_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" using primary key columns */
  rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch data from the table: "rocketjaket.product" */
  rocketjaket_product: Array<Rocketjaket_Product>;
  /** fetch aggregated fields from the table: "rocketjaket.product" */
  rocketjaket_product_aggregate: Rocketjaket_Product_Aggregate;
  /** fetch data from the table: "rocketjaket.product" using primary key columns */
  rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** fetch data from the table: "rocketjaket.product_category" */
  rocketjaket_product_category: Array<Rocketjaket_Product_Category>;
  /** fetch aggregated fields from the table: "rocketjaket.product_category" */
  rocketjaket_product_category_aggregate: Rocketjaket_Product_Category_Aggregate;
  /** fetch data from the table: "rocketjaket.product_category" using primary key columns */
  rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** fetch data from the table: "rocketjaket.store" */
  rocketjaket_store: Array<Rocketjaket_Store>;
  /** fetch aggregated fields from the table: "rocketjaket.store" */
  rocketjaket_store_aggregate: Rocketjaket_Store_Aggregate;
  /** fetch data from the table: "rocketjaket.store" using primary key columns */
  rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Subscription_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Subscription_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootRocketjaket_Inventory_Variant_MetadataArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Variant_Metadata_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRocketjaket_ProductArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRocketjaket_Product_CategoryArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: Maybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_Category_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRocketjaket_StoreArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Store_Order_By>>;
  where?: Maybe<Rocketjaket_Store_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rocketjaket_Store_Order_By>>;
  where?: Maybe<Rocketjaket_Store_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Store_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  account?: Maybe<Auth_Accounts>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type Inventory_BulkDeleteInventoryVariantByPKsMutationVariables = Exact<{
  deleteIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type Inventory_BulkDeleteInventoryVariantByPKsMutation = { __typename?: 'mutation_root', delete_rocketjaket_inventory_variant_metadata?: { __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response', affected_rows: number } | null | undefined };

export type Inventory_BatchUpdateVariantTitleMutationVariables = Exact<{
  old_variant_title: Scalars['String'];
  new_variant_title: Scalars['String'];
}>;


export type Inventory_BatchUpdateVariantTitleMutation = { __typename?: 'mutation_root', update_rocketjaket_inventory_variant_metadata?: { __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response', affected_rows: number } | null | undefined };

export type Inventory_BulkUpdateVariantsMetadataMutationVariables = Exact<{
  old_variant_title: Scalars['String'];
  new_variant_title: Scalars['String'];
  needDeleteIds: Array<Scalars['Int']> | Scalars['Int'];
  needAddVariantMetadata: Array<InventoryVariantMetadataInsertInput> | InventoryVariantMetadataInsertInput;
  needUpdateVariantMetadata: Array<InventoryVariantMetadataNeedUpdateInput> | InventoryVariantMetadataNeedUpdateInput;
}>;


export type Inventory_BulkUpdateVariantsMetadataMutation = { __typename?: 'mutation_root', bulkUpdateVariantsMetadata?: { __typename?: 'BulkUpdateVariantsMetadataOutput', variant_title?: string | null | undefined, is_any_update?: boolean | null | undefined } | null | undefined };

export type Inventory_CreateInventoryVariantMetadataMutationVariables = Exact<{
  objects: Array<Rocketjaket_Inventory_Variant_Metadata_Insert_Input> | Rocketjaket_Inventory_Variant_Metadata_Insert_Input;
}>;


export type Inventory_CreateInventoryVariantMetadataMutation = { __typename?: 'mutation_root', insert_rocketjaket_inventory_variant_metadata?: { __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'rocketjaket_inventory_variant_metadata', id: number, variant_title: string }> } | null | undefined };

export type Inventory_UpdateOneVariantValueByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  variant_value?: Maybe<Scalars['String']>;
}>;


export type Inventory_UpdateOneVariantValueByPkMutation = { __typename?: 'mutation_root', update_rocketjaket_inventory_variant_metadata_by_pk?: { __typename?: 'rocketjaket_inventory_variant_metadata', id: number } | null | undefined };

export type Inventory_UpdateVariantValueByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  variant_value?: Maybe<Scalars['String']>;
}>;


export type Inventory_UpdateVariantValueByPkMutation = { __typename?: 'mutation_root', update_rocketjaket_inventory_variant_metadata_by_pk?: { __typename?: 'rocketjaket_inventory_variant_metadata', id: number } | null | undefined };

export type Inventory_GetAllVariantMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type Inventory_GetAllVariantMetadataQuery = { __typename?: 'query_root', rocketjaket_inventory_variant_metadata: Array<{ __typename?: 'rocketjaket_inventory_variant_metadata', variant_title: string, variant_value: string, id: number }> };

export type Inventory_GetVariantMetadataByTitleQueryVariables = Exact<{
  variant_title: Scalars['String'];
}>;


export type Inventory_GetVariantMetadataByTitleQuery = { __typename?: 'query_root', rocketjaket_inventory_variant_metadata: Array<{ __typename?: 'rocketjaket_inventory_variant_metadata', variant_title: string, variant_value: string, id: number }> };

export type Produk_CreateKategoriProdukMutationVariables = Exact<{
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
}>;


export type Produk_CreateKategoriProdukMutation = { __typename?: 'mutation_root', insert_rocketjaket_product_category_one?: { __typename?: 'rocketjaket_product_category', id: number, name: string, description?: string | null | undefined } | null | undefined };

export type Produk_CreateProdukMutationVariables = Exact<{
  capital_price: Scalars['Int'];
  discount?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price: Scalars['Int'];
}>;


export type Produk_CreateProdukMutation = { __typename?: 'mutation_root', insert_rocketjaket_product_one?: { __typename?: 'rocketjaket_product', id: number, name: string } | null | undefined };

export type Produk_DeleteKategoriProdukMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Produk_DeleteKategoriProdukMutation = { __typename?: 'mutation_root', delete_rocketjaket_product_category_by_pk?: { __typename?: 'rocketjaket_product_category', id: number, name: string } | null | undefined };

export type Produk_DeleteProdukByPkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Produk_DeleteProdukByPkMutation = { __typename?: 'mutation_root', delete_rocketjaket_product_by_pk?: { __typename?: 'rocketjaket_product', id: number, name: string } | null | undefined };

export type Produk_UpdateKategoriProdukMutationVariables = Exact<{
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
}>;


export type Produk_UpdateKategoriProdukMutation = { __typename?: 'mutation_root', update_rocketjaket_product_category_by_pk?: { __typename?: 'rocketjaket_product_category', name: string, id: number, description?: string | null | undefined } | null | undefined };

export type Produk_UpdateProdukByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
}>;


export type Produk_UpdateProdukByPkMutation = { __typename?: 'mutation_root', update_rocketjaket_product_by_pk?: { __typename?: 'rocketjaket_product', id: number, name: string } | null | undefined };

export type Produk_GetAllKategoriProdukQueryVariables = Exact<{ [key: string]: never; }>;


export type Produk_GetAllKategoriProdukQuery = { __typename?: 'query_root', rocketjaket_product_category: Array<{ __typename?: 'rocketjaket_product_category', id: number, name: string, description?: string | null | undefined }> };

export type Produk_GetAllProdukQueryVariables = Exact<{ [key: string]: never; }>;


export type Produk_GetAllProdukQuery = { __typename?: 'query_root', rocketjaket_product: Array<{ __typename?: 'rocketjaket_product', name: string, id: number, photo_url?: string | null | undefined, capital_price: number, discount: number, selling_price: number, product_category: { __typename?: 'rocketjaket_product_category', name: string } }> };

export type Produk_GetKategoriProdukByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Produk_GetKategoriProdukByPkQuery = { __typename?: 'query_root', rocketjaket_product_category_by_pk?: { __typename?: 'rocketjaket_product_category', id: number, name: string, description?: string | null | undefined } | null | undefined };

export type Produk_GetProdukByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Produk_GetProdukByPkQuery = { __typename?: 'query_root', rocketjaket_product_by_pk?: { __typename?: 'rocketjaket_product', id: number, name: string, photo_url?: string | null | undefined, selling_price: number, discount: number, capital_price: number, product_category_id: number, created_at: any, updated_at: any } | null | undefined };

export type Store_CreateStoreMutationVariables = Exact<{
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
}>;


export type Store_CreateStoreMutation = { __typename?: 'mutation_root', insert_rocketjaket_store_one?: { __typename?: 'rocketjaket_store', id: number, name: string } | null | undefined };

export type Store_DeleteStoreByPkMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type Store_DeleteStoreByPkMutation = { __typename?: 'mutation_root', delete_rocketjaket_store_by_pk?: { __typename?: 'rocketjaket_store', id: number, name: string } | null | undefined };

export type Store_UpdateStoreMutationVariables = Exact<{
  id: Scalars['Int'];
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}>;


export type Store_UpdateStoreMutation = { __typename?: 'mutation_root', update_rocketjaket_store_by_pk?: { __typename?: 'rocketjaket_store', id: number, name: string } | null | undefined };

export type Store_GetAllStoreQueryVariables = Exact<{ [key: string]: never; }>;


export type Store_GetAllStoreQuery = { __typename?: 'query_root', rocketjaket_store: Array<{ __typename?: 'rocketjaket_store', id: number, name: string, latitude?: string | null | undefined, longitude?: string | null | undefined, address?: string | null | undefined }> };

export type Store_GetStoreByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Store_GetStoreByPkQuery = { __typename?: 'query_root', rocketjaket_store_by_pk?: { __typename?: 'rocketjaket_store', id: number, name: string, latitude?: string | null | undefined, longitude?: string | null | undefined, address?: string | null | undefined, created_at: any, updated_at: any } | null | undefined };

export type User_GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type User_GetUserByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: any, display_name?: string | null | undefined, avatar_url?: string | null | undefined, account?: { __typename?: 'auth_accounts', email?: any | null | undefined, default_role: string } | null | undefined } | null | undefined };

export const namedOperations = {
  Query: {
    Inventory_GetAllVariantMetadata: 'Inventory_GetAllVariantMetadata',
    Inventory_GetVariantMetadataByTitle: 'Inventory_GetVariantMetadataByTitle',
    Produk_GetAllKategoriProduk: 'Produk_GetAllKategoriProduk',
    Produk_GetAllProduk: 'Produk_GetAllProduk',
    Produk_GetKategoriProdukByPK: 'Produk_GetKategoriProdukByPK',
    Produk_GetProdukByPK: 'Produk_GetProdukByPK',
    Store_GetAllStore: 'Store_GetAllStore',
    Store_GetStoreByPK: 'Store_GetStoreByPK',
    User_GetUserById: 'User_GetUserById'
  },
  Mutation: {
    Inventory_BulkDeleteInventoryVariantByPKs: 'Inventory_BulkDeleteInventoryVariantByPKs',
    Inventory_BatchUpdateVariantTitle: 'Inventory_BatchUpdateVariantTitle',
    Inventory_BulkUpdateVariantsMetadata: 'Inventory_BulkUpdateVariantsMetadata',
    Inventory_CreateInventoryVariantMetadata: 'Inventory_CreateInventoryVariantMetadata',
    Inventory_UpdateOneVariantValueByPK: 'Inventory_UpdateOneVariantValueByPK',
    Inventory_UpdateVariantValueByPK: 'Inventory_UpdateVariantValueByPK',
    Produk_CreateKategoriProduk: 'Produk_CreateKategoriProduk',
    Produk_CreateProduk: 'Produk_CreateProduk',
    Produk_DeleteKategoriProduk: 'Produk_DeleteKategoriProduk',
    Produk_DeleteProdukByPK: 'Produk_DeleteProdukByPK',
    Produk_UpdateKategoriProduk: 'Produk_UpdateKategoriProduk',
    Produk_UpdateProdukByPK: 'Produk_UpdateProdukByPK',
    Store_CreateStore: 'Store_CreateStore',
    Store_DeleteStoreByPK: 'Store_DeleteStoreByPK',
    Store_UpdateStore: 'Store_UpdateStore'
  }
}

export const Inventory_BulkDeleteInventoryVariantByPKsDocument = gql`
    mutation Inventory_BulkDeleteInventoryVariantByPKs($deleteIds: [Int!]!) {
  delete_rocketjaket_inventory_variant_metadata(where: {id: {_in: $deleteIds}}) {
    affected_rows
  }
}
    `;
export type Inventory_BulkDeleteInventoryVariantByPKsMutationFn = Apollo.MutationFunction<Inventory_BulkDeleteInventoryVariantByPKsMutation, Inventory_BulkDeleteInventoryVariantByPKsMutationVariables>;

/**
 * __useInventory_BulkDeleteInventoryVariantByPKsMutation__
 *
 * To run a mutation, you first call `useInventory_BulkDeleteInventoryVariantByPKsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_BulkDeleteInventoryVariantByPKsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryBulkDeleteInventoryVariantByPKsMutation, { data, loading, error }] = useInventory_BulkDeleteInventoryVariantByPKsMutation({
 *   variables: {
 *      deleteIds: // value for 'deleteIds'
 *   },
 * });
 */
export function useInventory_BulkDeleteInventoryVariantByPKsMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_BulkDeleteInventoryVariantByPKsMutation, Inventory_BulkDeleteInventoryVariantByPKsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_BulkDeleteInventoryVariantByPKsMutation, Inventory_BulkDeleteInventoryVariantByPKsMutationVariables>(Inventory_BulkDeleteInventoryVariantByPKsDocument, options);
      }
export type Inventory_BulkDeleteInventoryVariantByPKsMutationHookResult = ReturnType<typeof useInventory_BulkDeleteInventoryVariantByPKsMutation>;
export type Inventory_BulkDeleteInventoryVariantByPKsMutationResult = Apollo.MutationResult<Inventory_BulkDeleteInventoryVariantByPKsMutation>;
export type Inventory_BulkDeleteInventoryVariantByPKsMutationOptions = Apollo.BaseMutationOptions<Inventory_BulkDeleteInventoryVariantByPKsMutation, Inventory_BulkDeleteInventoryVariantByPKsMutationVariables>;
export const Inventory_BatchUpdateVariantTitleDocument = gql`
    mutation Inventory_BatchUpdateVariantTitle($old_variant_title: String!, $new_variant_title: String!) {
  update_rocketjaket_inventory_variant_metadata(
    where: {variant_title: {_eq: $old_variant_title}}
    _set: {variant_title: $new_variant_title}
  ) {
    affected_rows
  }
}
    `;
export type Inventory_BatchUpdateVariantTitleMutationFn = Apollo.MutationFunction<Inventory_BatchUpdateVariantTitleMutation, Inventory_BatchUpdateVariantTitleMutationVariables>;

/**
 * __useInventory_BatchUpdateVariantTitleMutation__
 *
 * To run a mutation, you first call `useInventory_BatchUpdateVariantTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_BatchUpdateVariantTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryBatchUpdateVariantTitleMutation, { data, loading, error }] = useInventory_BatchUpdateVariantTitleMutation({
 *   variables: {
 *      old_variant_title: // value for 'old_variant_title'
 *      new_variant_title: // value for 'new_variant_title'
 *   },
 * });
 */
export function useInventory_BatchUpdateVariantTitleMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_BatchUpdateVariantTitleMutation, Inventory_BatchUpdateVariantTitleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_BatchUpdateVariantTitleMutation, Inventory_BatchUpdateVariantTitleMutationVariables>(Inventory_BatchUpdateVariantTitleDocument, options);
      }
export type Inventory_BatchUpdateVariantTitleMutationHookResult = ReturnType<typeof useInventory_BatchUpdateVariantTitleMutation>;
export type Inventory_BatchUpdateVariantTitleMutationResult = Apollo.MutationResult<Inventory_BatchUpdateVariantTitleMutation>;
export type Inventory_BatchUpdateVariantTitleMutationOptions = Apollo.BaseMutationOptions<Inventory_BatchUpdateVariantTitleMutation, Inventory_BatchUpdateVariantTitleMutationVariables>;
export const Inventory_BulkUpdateVariantsMetadataDocument = gql`
    mutation Inventory_BulkUpdateVariantsMetadata($old_variant_title: String!, $new_variant_title: String!, $needDeleteIds: [Int!]!, $needAddVariantMetadata: [InventoryVariantMetadataInsertInput!]!, $needUpdateVariantMetadata: [InventoryVariantMetadataNeedUpdateInput!]!) {
  bulkUpdateVariantsMetadata(
    new_variant_title: $new_variant_title
    old_variant_title: $old_variant_title
    needDeleteIds: $needDeleteIds
    needAddVariantMetadata: $needAddVariantMetadata
    needUpdateVariantMetadata: $needUpdateVariantMetadata
  ) {
    variant_title
    is_any_update
  }
}
    `;
export type Inventory_BulkUpdateVariantsMetadataMutationFn = Apollo.MutationFunction<Inventory_BulkUpdateVariantsMetadataMutation, Inventory_BulkUpdateVariantsMetadataMutationVariables>;

/**
 * __useInventory_BulkUpdateVariantsMetadataMutation__
 *
 * To run a mutation, you first call `useInventory_BulkUpdateVariantsMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_BulkUpdateVariantsMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryBulkUpdateVariantsMetadataMutation, { data, loading, error }] = useInventory_BulkUpdateVariantsMetadataMutation({
 *   variables: {
 *      old_variant_title: // value for 'old_variant_title'
 *      new_variant_title: // value for 'new_variant_title'
 *      needDeleteIds: // value for 'needDeleteIds'
 *      needAddVariantMetadata: // value for 'needAddVariantMetadata'
 *      needUpdateVariantMetadata: // value for 'needUpdateVariantMetadata'
 *   },
 * });
 */
export function useInventory_BulkUpdateVariantsMetadataMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_BulkUpdateVariantsMetadataMutation, Inventory_BulkUpdateVariantsMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_BulkUpdateVariantsMetadataMutation, Inventory_BulkUpdateVariantsMetadataMutationVariables>(Inventory_BulkUpdateVariantsMetadataDocument, options);
      }
export type Inventory_BulkUpdateVariantsMetadataMutationHookResult = ReturnType<typeof useInventory_BulkUpdateVariantsMetadataMutation>;
export type Inventory_BulkUpdateVariantsMetadataMutationResult = Apollo.MutationResult<Inventory_BulkUpdateVariantsMetadataMutation>;
export type Inventory_BulkUpdateVariantsMetadataMutationOptions = Apollo.BaseMutationOptions<Inventory_BulkUpdateVariantsMetadataMutation, Inventory_BulkUpdateVariantsMetadataMutationVariables>;
export const Inventory_CreateInventoryVariantMetadataDocument = gql`
    mutation Inventory_CreateInventoryVariantMetadata($objects: [rocketjaket_inventory_variant_metadata_insert_input!]!) {
  insert_rocketjaket_inventory_variant_metadata(objects: $objects) {
    affected_rows
    returning {
      id
      variant_title
    }
  }
}
    `;
export type Inventory_CreateInventoryVariantMetadataMutationFn = Apollo.MutationFunction<Inventory_CreateInventoryVariantMetadataMutation, Inventory_CreateInventoryVariantMetadataMutationVariables>;

/**
 * __useInventory_CreateInventoryVariantMetadataMutation__
 *
 * To run a mutation, you first call `useInventory_CreateInventoryVariantMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_CreateInventoryVariantMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryCreateInventoryVariantMetadataMutation, { data, loading, error }] = useInventory_CreateInventoryVariantMetadataMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInventory_CreateInventoryVariantMetadataMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_CreateInventoryVariantMetadataMutation, Inventory_CreateInventoryVariantMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_CreateInventoryVariantMetadataMutation, Inventory_CreateInventoryVariantMetadataMutationVariables>(Inventory_CreateInventoryVariantMetadataDocument, options);
      }
export type Inventory_CreateInventoryVariantMetadataMutationHookResult = ReturnType<typeof useInventory_CreateInventoryVariantMetadataMutation>;
export type Inventory_CreateInventoryVariantMetadataMutationResult = Apollo.MutationResult<Inventory_CreateInventoryVariantMetadataMutation>;
export type Inventory_CreateInventoryVariantMetadataMutationOptions = Apollo.BaseMutationOptions<Inventory_CreateInventoryVariantMetadataMutation, Inventory_CreateInventoryVariantMetadataMutationVariables>;
export const Inventory_UpdateOneVariantValueByPkDocument = gql`
    mutation Inventory_UpdateOneVariantValueByPK($id: Int!, $variant_value: String) {
  update_rocketjaket_inventory_variant_metadata_by_pk(
    pk_columns: {id: $id}
    _set: {variant_value: $variant_value}
  ) {
    id
  }
}
    `;
export type Inventory_UpdateOneVariantValueByPkMutationFn = Apollo.MutationFunction<Inventory_UpdateOneVariantValueByPkMutation, Inventory_UpdateOneVariantValueByPkMutationVariables>;

/**
 * __useInventory_UpdateOneVariantValueByPkMutation__
 *
 * To run a mutation, you first call `useInventory_UpdateOneVariantValueByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_UpdateOneVariantValueByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryUpdateOneVariantValueByPkMutation, { data, loading, error }] = useInventory_UpdateOneVariantValueByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      variant_value: // value for 'variant_value'
 *   },
 * });
 */
export function useInventory_UpdateOneVariantValueByPkMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_UpdateOneVariantValueByPkMutation, Inventory_UpdateOneVariantValueByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_UpdateOneVariantValueByPkMutation, Inventory_UpdateOneVariantValueByPkMutationVariables>(Inventory_UpdateOneVariantValueByPkDocument, options);
      }
export type Inventory_UpdateOneVariantValueByPkMutationHookResult = ReturnType<typeof useInventory_UpdateOneVariantValueByPkMutation>;
export type Inventory_UpdateOneVariantValueByPkMutationResult = Apollo.MutationResult<Inventory_UpdateOneVariantValueByPkMutation>;
export type Inventory_UpdateOneVariantValueByPkMutationOptions = Apollo.BaseMutationOptions<Inventory_UpdateOneVariantValueByPkMutation, Inventory_UpdateOneVariantValueByPkMutationVariables>;
export const Inventory_UpdateVariantValueByPkDocument = gql`
    mutation Inventory_UpdateVariantValueByPK($id: Int!, $variant_value: String) {
  update_rocketjaket_inventory_variant_metadata_by_pk(
    pk_columns: {id: $id}
    _set: {variant_value: $variant_value}
  ) {
    id
  }
}
    `;
export type Inventory_UpdateVariantValueByPkMutationFn = Apollo.MutationFunction<Inventory_UpdateVariantValueByPkMutation, Inventory_UpdateVariantValueByPkMutationVariables>;

/**
 * __useInventory_UpdateVariantValueByPkMutation__
 *
 * To run a mutation, you first call `useInventory_UpdateVariantValueByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInventory_UpdateVariantValueByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inventoryUpdateVariantValueByPkMutation, { data, loading, error }] = useInventory_UpdateVariantValueByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      variant_value: // value for 'variant_value'
 *   },
 * });
 */
export function useInventory_UpdateVariantValueByPkMutation(baseOptions?: Apollo.MutationHookOptions<Inventory_UpdateVariantValueByPkMutation, Inventory_UpdateVariantValueByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Inventory_UpdateVariantValueByPkMutation, Inventory_UpdateVariantValueByPkMutationVariables>(Inventory_UpdateVariantValueByPkDocument, options);
      }
export type Inventory_UpdateVariantValueByPkMutationHookResult = ReturnType<typeof useInventory_UpdateVariantValueByPkMutation>;
export type Inventory_UpdateVariantValueByPkMutationResult = Apollo.MutationResult<Inventory_UpdateVariantValueByPkMutation>;
export type Inventory_UpdateVariantValueByPkMutationOptions = Apollo.BaseMutationOptions<Inventory_UpdateVariantValueByPkMutation, Inventory_UpdateVariantValueByPkMutationVariables>;
export const Inventory_GetAllVariantMetadataDocument = gql`
    query Inventory_GetAllVariantMetadata {
  rocketjaket_inventory_variant_metadata(order_by: {id: asc}) {
    variant_title
    variant_value
    id
  }
}
    `;

/**
 * __useInventory_GetAllVariantMetadataQuery__
 *
 * To run a query within a React component, call `useInventory_GetAllVariantMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventory_GetAllVariantMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventory_GetAllVariantMetadataQuery({
 *   variables: {
 *   },
 * });
 */
export function useInventory_GetAllVariantMetadataQuery(baseOptions?: Apollo.QueryHookOptions<Inventory_GetAllVariantMetadataQuery, Inventory_GetAllVariantMetadataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Inventory_GetAllVariantMetadataQuery, Inventory_GetAllVariantMetadataQueryVariables>(Inventory_GetAllVariantMetadataDocument, options);
      }
export function useInventory_GetAllVariantMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Inventory_GetAllVariantMetadataQuery, Inventory_GetAllVariantMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Inventory_GetAllVariantMetadataQuery, Inventory_GetAllVariantMetadataQueryVariables>(Inventory_GetAllVariantMetadataDocument, options);
        }
export type Inventory_GetAllVariantMetadataQueryHookResult = ReturnType<typeof useInventory_GetAllVariantMetadataQuery>;
export type Inventory_GetAllVariantMetadataLazyQueryHookResult = ReturnType<typeof useInventory_GetAllVariantMetadataLazyQuery>;
export type Inventory_GetAllVariantMetadataQueryResult = Apollo.QueryResult<Inventory_GetAllVariantMetadataQuery, Inventory_GetAllVariantMetadataQueryVariables>;
export const Inventory_GetVariantMetadataByTitleDocument = gql`
    query Inventory_GetVariantMetadataByTitle($variant_title: String!) {
  rocketjaket_inventory_variant_metadata(
    where: {variant_title: {_eq: $variant_title}}
    order_by: {id: asc}
  ) {
    variant_title
    variant_value
    id
  }
}
    `;

/**
 * __useInventory_GetVariantMetadataByTitleQuery__
 *
 * To run a query within a React component, call `useInventory_GetVariantMetadataByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventory_GetVariantMetadataByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventory_GetVariantMetadataByTitleQuery({
 *   variables: {
 *      variant_title: // value for 'variant_title'
 *   },
 * });
 */
export function useInventory_GetVariantMetadataByTitleQuery(baseOptions: Apollo.QueryHookOptions<Inventory_GetVariantMetadataByTitleQuery, Inventory_GetVariantMetadataByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Inventory_GetVariantMetadataByTitleQuery, Inventory_GetVariantMetadataByTitleQueryVariables>(Inventory_GetVariantMetadataByTitleDocument, options);
      }
export function useInventory_GetVariantMetadataByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Inventory_GetVariantMetadataByTitleQuery, Inventory_GetVariantMetadataByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Inventory_GetVariantMetadataByTitleQuery, Inventory_GetVariantMetadataByTitleQueryVariables>(Inventory_GetVariantMetadataByTitleDocument, options);
        }
export type Inventory_GetVariantMetadataByTitleQueryHookResult = ReturnType<typeof useInventory_GetVariantMetadataByTitleQuery>;
export type Inventory_GetVariantMetadataByTitleLazyQueryHookResult = ReturnType<typeof useInventory_GetVariantMetadataByTitleLazyQuery>;
export type Inventory_GetVariantMetadataByTitleQueryResult = Apollo.QueryResult<Inventory_GetVariantMetadataByTitleQuery, Inventory_GetVariantMetadataByTitleQueryVariables>;
export const Produk_CreateKategoriProdukDocument = gql`
    mutation Produk_CreateKategoriProduk($description: String, $name: String!) {
  insert_rocketjaket_product_category_one(
    object: {description: $description, name: $name}
  ) {
    id
    name
    description
  }
}
    `;
export type Produk_CreateKategoriProdukMutationFn = Apollo.MutationFunction<Produk_CreateKategoriProdukMutation, Produk_CreateKategoriProdukMutationVariables>;

/**
 * __useProduk_CreateKategoriProdukMutation__
 *
 * To run a mutation, you first call `useProduk_CreateKategoriProdukMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_CreateKategoriProdukMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkCreateKategoriProdukMutation, { data, loading, error }] = useProduk_CreateKategoriProdukMutation({
 *   variables: {
 *      description: // value for 'description'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useProduk_CreateKategoriProdukMutation(baseOptions?: Apollo.MutationHookOptions<Produk_CreateKategoriProdukMutation, Produk_CreateKategoriProdukMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_CreateKategoriProdukMutation, Produk_CreateKategoriProdukMutationVariables>(Produk_CreateKategoriProdukDocument, options);
      }
export type Produk_CreateKategoriProdukMutationHookResult = ReturnType<typeof useProduk_CreateKategoriProdukMutation>;
export type Produk_CreateKategoriProdukMutationResult = Apollo.MutationResult<Produk_CreateKategoriProdukMutation>;
export type Produk_CreateKategoriProdukMutationOptions = Apollo.BaseMutationOptions<Produk_CreateKategoriProdukMutation, Produk_CreateKategoriProdukMutationVariables>;
export const Produk_CreateProdukDocument = gql`
    mutation Produk_CreateProduk($capital_price: Int!, $discount: Int, $name: String!, $photo_url: String, $product_category_id: Int, $selling_price: Int!) {
  insert_rocketjaket_product_one(
    object: {selling_price: $selling_price, product_category_id: $product_category_id, photo_url: $photo_url, name: $name, discount: $discount, capital_price: $capital_price}
  ) {
    id
    name
  }
}
    `;
export type Produk_CreateProdukMutationFn = Apollo.MutationFunction<Produk_CreateProdukMutation, Produk_CreateProdukMutationVariables>;

/**
 * __useProduk_CreateProdukMutation__
 *
 * To run a mutation, you first call `useProduk_CreateProdukMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_CreateProdukMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkCreateProdukMutation, { data, loading, error }] = useProduk_CreateProdukMutation({
 *   variables: {
 *      capital_price: // value for 'capital_price'
 *      discount: // value for 'discount'
 *      name: // value for 'name'
 *      photo_url: // value for 'photo_url'
 *      product_category_id: // value for 'product_category_id'
 *      selling_price: // value for 'selling_price'
 *   },
 * });
 */
export function useProduk_CreateProdukMutation(baseOptions?: Apollo.MutationHookOptions<Produk_CreateProdukMutation, Produk_CreateProdukMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_CreateProdukMutation, Produk_CreateProdukMutationVariables>(Produk_CreateProdukDocument, options);
      }
export type Produk_CreateProdukMutationHookResult = ReturnType<typeof useProduk_CreateProdukMutation>;
export type Produk_CreateProdukMutationResult = Apollo.MutationResult<Produk_CreateProdukMutation>;
export type Produk_CreateProdukMutationOptions = Apollo.BaseMutationOptions<Produk_CreateProdukMutation, Produk_CreateProdukMutationVariables>;
export const Produk_DeleteKategoriProdukDocument = gql`
    mutation Produk_DeleteKategoriProduk($id: Int!) {
  delete_rocketjaket_product_category_by_pk(id: $id) {
    id
    name
  }
}
    `;
export type Produk_DeleteKategoriProdukMutationFn = Apollo.MutationFunction<Produk_DeleteKategoriProdukMutation, Produk_DeleteKategoriProdukMutationVariables>;

/**
 * __useProduk_DeleteKategoriProdukMutation__
 *
 * To run a mutation, you first call `useProduk_DeleteKategoriProdukMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_DeleteKategoriProdukMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkDeleteKategoriProdukMutation, { data, loading, error }] = useProduk_DeleteKategoriProdukMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProduk_DeleteKategoriProdukMutation(baseOptions?: Apollo.MutationHookOptions<Produk_DeleteKategoriProdukMutation, Produk_DeleteKategoriProdukMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_DeleteKategoriProdukMutation, Produk_DeleteKategoriProdukMutationVariables>(Produk_DeleteKategoriProdukDocument, options);
      }
export type Produk_DeleteKategoriProdukMutationHookResult = ReturnType<typeof useProduk_DeleteKategoriProdukMutation>;
export type Produk_DeleteKategoriProdukMutationResult = Apollo.MutationResult<Produk_DeleteKategoriProdukMutation>;
export type Produk_DeleteKategoriProdukMutationOptions = Apollo.BaseMutationOptions<Produk_DeleteKategoriProdukMutation, Produk_DeleteKategoriProdukMutationVariables>;
export const Produk_DeleteProdukByPkDocument = gql`
    mutation Produk_DeleteProdukByPK($id: Int!) {
  delete_rocketjaket_product_by_pk(id: $id) {
    id
    name
  }
}
    `;
export type Produk_DeleteProdukByPkMutationFn = Apollo.MutationFunction<Produk_DeleteProdukByPkMutation, Produk_DeleteProdukByPkMutationVariables>;

/**
 * __useProduk_DeleteProdukByPkMutation__
 *
 * To run a mutation, you first call `useProduk_DeleteProdukByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_DeleteProdukByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkDeleteProdukByPkMutation, { data, loading, error }] = useProduk_DeleteProdukByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProduk_DeleteProdukByPkMutation(baseOptions?: Apollo.MutationHookOptions<Produk_DeleteProdukByPkMutation, Produk_DeleteProdukByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_DeleteProdukByPkMutation, Produk_DeleteProdukByPkMutationVariables>(Produk_DeleteProdukByPkDocument, options);
      }
export type Produk_DeleteProdukByPkMutationHookResult = ReturnType<typeof useProduk_DeleteProdukByPkMutation>;
export type Produk_DeleteProdukByPkMutationResult = Apollo.MutationResult<Produk_DeleteProdukByPkMutation>;
export type Produk_DeleteProdukByPkMutationOptions = Apollo.BaseMutationOptions<Produk_DeleteProdukByPkMutation, Produk_DeleteProdukByPkMutationVariables>;
export const Produk_UpdateKategoriProdukDocument = gql`
    mutation Produk_UpdateKategoriProduk($id: Int!, $description: String, $name: String!) {
  update_rocketjaket_product_category_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, description: $description}
  ) {
    name
    id
    description
  }
}
    `;
export type Produk_UpdateKategoriProdukMutationFn = Apollo.MutationFunction<Produk_UpdateKategoriProdukMutation, Produk_UpdateKategoriProdukMutationVariables>;

/**
 * __useProduk_UpdateKategoriProdukMutation__
 *
 * To run a mutation, you first call `useProduk_UpdateKategoriProdukMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_UpdateKategoriProdukMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkUpdateKategoriProdukMutation, { data, loading, error }] = useProduk_UpdateKategoriProdukMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useProduk_UpdateKategoriProdukMutation(baseOptions?: Apollo.MutationHookOptions<Produk_UpdateKategoriProdukMutation, Produk_UpdateKategoriProdukMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_UpdateKategoriProdukMutation, Produk_UpdateKategoriProdukMutationVariables>(Produk_UpdateKategoriProdukDocument, options);
      }
export type Produk_UpdateKategoriProdukMutationHookResult = ReturnType<typeof useProduk_UpdateKategoriProdukMutation>;
export type Produk_UpdateKategoriProdukMutationResult = Apollo.MutationResult<Produk_UpdateKategoriProdukMutation>;
export type Produk_UpdateKategoriProdukMutationOptions = Apollo.BaseMutationOptions<Produk_UpdateKategoriProdukMutation, Produk_UpdateKategoriProdukMutationVariables>;
export const Produk_UpdateProdukByPkDocument = gql`
    mutation Produk_UpdateProdukByPK($id: Int!, $name: String!, $photo_url: String, $product_category_id: Int, $selling_price: Int, $capital_price: Int, $discount: Int) {
  update_rocketjaket_product_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, photo_url: $photo_url, product_category_id: $product_category_id, selling_price: $selling_price, capital_price: $capital_price, discount: $discount}
  ) {
    id
    name
  }
}
    `;
export type Produk_UpdateProdukByPkMutationFn = Apollo.MutationFunction<Produk_UpdateProdukByPkMutation, Produk_UpdateProdukByPkMutationVariables>;

/**
 * __useProduk_UpdateProdukByPkMutation__
 *
 * To run a mutation, you first call `useProduk_UpdateProdukByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProduk_UpdateProdukByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [produkUpdateProdukByPkMutation, { data, loading, error }] = useProduk_UpdateProdukByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      photo_url: // value for 'photo_url'
 *      product_category_id: // value for 'product_category_id'
 *      selling_price: // value for 'selling_price'
 *      capital_price: // value for 'capital_price'
 *      discount: // value for 'discount'
 *   },
 * });
 */
export function useProduk_UpdateProdukByPkMutation(baseOptions?: Apollo.MutationHookOptions<Produk_UpdateProdukByPkMutation, Produk_UpdateProdukByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Produk_UpdateProdukByPkMutation, Produk_UpdateProdukByPkMutationVariables>(Produk_UpdateProdukByPkDocument, options);
      }
export type Produk_UpdateProdukByPkMutationHookResult = ReturnType<typeof useProduk_UpdateProdukByPkMutation>;
export type Produk_UpdateProdukByPkMutationResult = Apollo.MutationResult<Produk_UpdateProdukByPkMutation>;
export type Produk_UpdateProdukByPkMutationOptions = Apollo.BaseMutationOptions<Produk_UpdateProdukByPkMutation, Produk_UpdateProdukByPkMutationVariables>;
export const Produk_GetAllKategoriProdukDocument = gql`
    query Produk_GetAllKategoriProduk {
  rocketjaket_product_category {
    id
    name
    description
  }
}
    `;

/**
 * __useProduk_GetAllKategoriProdukQuery__
 *
 * To run a query within a React component, call `useProduk_GetAllKategoriProdukQuery` and pass it any options that fit your needs.
 * When your component renders, `useProduk_GetAllKategoriProdukQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProduk_GetAllKategoriProdukQuery({
 *   variables: {
 *   },
 * });
 */
export function useProduk_GetAllKategoriProdukQuery(baseOptions?: Apollo.QueryHookOptions<Produk_GetAllKategoriProdukQuery, Produk_GetAllKategoriProdukQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Produk_GetAllKategoriProdukQuery, Produk_GetAllKategoriProdukQueryVariables>(Produk_GetAllKategoriProdukDocument, options);
      }
export function useProduk_GetAllKategoriProdukLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Produk_GetAllKategoriProdukQuery, Produk_GetAllKategoriProdukQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Produk_GetAllKategoriProdukQuery, Produk_GetAllKategoriProdukQueryVariables>(Produk_GetAllKategoriProdukDocument, options);
        }
export type Produk_GetAllKategoriProdukQueryHookResult = ReturnType<typeof useProduk_GetAllKategoriProdukQuery>;
export type Produk_GetAllKategoriProdukLazyQueryHookResult = ReturnType<typeof useProduk_GetAllKategoriProdukLazyQuery>;
export type Produk_GetAllKategoriProdukQueryResult = Apollo.QueryResult<Produk_GetAllKategoriProdukQuery, Produk_GetAllKategoriProdukQueryVariables>;
export const Produk_GetAllProdukDocument = gql`
    query Produk_GetAllProduk {
  rocketjaket_product {
    name
    id
    photo_url
    capital_price
    discount
    selling_price
    product_category {
      name
    }
  }
}
    `;

/**
 * __useProduk_GetAllProdukQuery__
 *
 * To run a query within a React component, call `useProduk_GetAllProdukQuery` and pass it any options that fit your needs.
 * When your component renders, `useProduk_GetAllProdukQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProduk_GetAllProdukQuery({
 *   variables: {
 *   },
 * });
 */
export function useProduk_GetAllProdukQuery(baseOptions?: Apollo.QueryHookOptions<Produk_GetAllProdukQuery, Produk_GetAllProdukQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Produk_GetAllProdukQuery, Produk_GetAllProdukQueryVariables>(Produk_GetAllProdukDocument, options);
      }
export function useProduk_GetAllProdukLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Produk_GetAllProdukQuery, Produk_GetAllProdukQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Produk_GetAllProdukQuery, Produk_GetAllProdukQueryVariables>(Produk_GetAllProdukDocument, options);
        }
export type Produk_GetAllProdukQueryHookResult = ReturnType<typeof useProduk_GetAllProdukQuery>;
export type Produk_GetAllProdukLazyQueryHookResult = ReturnType<typeof useProduk_GetAllProdukLazyQuery>;
export type Produk_GetAllProdukQueryResult = Apollo.QueryResult<Produk_GetAllProdukQuery, Produk_GetAllProdukQueryVariables>;
export const Produk_GetKategoriProdukByPkDocument = gql`
    query Produk_GetKategoriProdukByPK($id: Int!) {
  rocketjaket_product_category_by_pk(id: $id) {
    id
    name
    description
  }
}
    `;

/**
 * __useProduk_GetKategoriProdukByPkQuery__
 *
 * To run a query within a React component, call `useProduk_GetKategoriProdukByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useProduk_GetKategoriProdukByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProduk_GetKategoriProdukByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProduk_GetKategoriProdukByPkQuery(baseOptions: Apollo.QueryHookOptions<Produk_GetKategoriProdukByPkQuery, Produk_GetKategoriProdukByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Produk_GetKategoriProdukByPkQuery, Produk_GetKategoriProdukByPkQueryVariables>(Produk_GetKategoriProdukByPkDocument, options);
      }
export function useProduk_GetKategoriProdukByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Produk_GetKategoriProdukByPkQuery, Produk_GetKategoriProdukByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Produk_GetKategoriProdukByPkQuery, Produk_GetKategoriProdukByPkQueryVariables>(Produk_GetKategoriProdukByPkDocument, options);
        }
export type Produk_GetKategoriProdukByPkQueryHookResult = ReturnType<typeof useProduk_GetKategoriProdukByPkQuery>;
export type Produk_GetKategoriProdukByPkLazyQueryHookResult = ReturnType<typeof useProduk_GetKategoriProdukByPkLazyQuery>;
export type Produk_GetKategoriProdukByPkQueryResult = Apollo.QueryResult<Produk_GetKategoriProdukByPkQuery, Produk_GetKategoriProdukByPkQueryVariables>;
export const Produk_GetProdukByPkDocument = gql`
    query Produk_GetProdukByPK($id: Int!) {
  rocketjaket_product_by_pk(id: $id) {
    id
    name
    photo_url
    selling_price
    discount
    capital_price
    product_category_id
    created_at
    updated_at
  }
}
    `;

/**
 * __useProduk_GetProdukByPkQuery__
 *
 * To run a query within a React component, call `useProduk_GetProdukByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useProduk_GetProdukByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProduk_GetProdukByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProduk_GetProdukByPkQuery(baseOptions: Apollo.QueryHookOptions<Produk_GetProdukByPkQuery, Produk_GetProdukByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Produk_GetProdukByPkQuery, Produk_GetProdukByPkQueryVariables>(Produk_GetProdukByPkDocument, options);
      }
export function useProduk_GetProdukByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Produk_GetProdukByPkQuery, Produk_GetProdukByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Produk_GetProdukByPkQuery, Produk_GetProdukByPkQueryVariables>(Produk_GetProdukByPkDocument, options);
        }
export type Produk_GetProdukByPkQueryHookResult = ReturnType<typeof useProduk_GetProdukByPkQuery>;
export type Produk_GetProdukByPkLazyQueryHookResult = ReturnType<typeof useProduk_GetProdukByPkLazyQuery>;
export type Produk_GetProdukByPkQueryResult = Apollo.QueryResult<Produk_GetProdukByPkQuery, Produk_GetProdukByPkQueryVariables>;
export const Store_CreateStoreDocument = gql`
    mutation Store_CreateStore($name: String!, $address: String, $latitude: String, $longitude: String) {
  insert_rocketjaket_store_one(
    object: {name: $name, address: $address, latitude: $latitude, longitude: $longitude}
  ) {
    id
    name
  }
}
    `;
export type Store_CreateStoreMutationFn = Apollo.MutationFunction<Store_CreateStoreMutation, Store_CreateStoreMutationVariables>;

/**
 * __useStore_CreateStoreMutation__
 *
 * To run a mutation, you first call `useStore_CreateStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStore_CreateStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storeCreateStoreMutation, { data, loading, error }] = useStore_CreateStoreMutation({
 *   variables: {
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *   },
 * });
 */
export function useStore_CreateStoreMutation(baseOptions?: Apollo.MutationHookOptions<Store_CreateStoreMutation, Store_CreateStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Store_CreateStoreMutation, Store_CreateStoreMutationVariables>(Store_CreateStoreDocument, options);
      }
export type Store_CreateStoreMutationHookResult = ReturnType<typeof useStore_CreateStoreMutation>;
export type Store_CreateStoreMutationResult = Apollo.MutationResult<Store_CreateStoreMutation>;
export type Store_CreateStoreMutationOptions = Apollo.BaseMutationOptions<Store_CreateStoreMutation, Store_CreateStoreMutationVariables>;
export const Store_DeleteStoreByPkDocument = gql`
    mutation Store_DeleteStoreByPK($id: Int = 10) {
  delete_rocketjaket_store_by_pk(id: $id) {
    id
    name
  }
}
    `;
export type Store_DeleteStoreByPkMutationFn = Apollo.MutationFunction<Store_DeleteStoreByPkMutation, Store_DeleteStoreByPkMutationVariables>;

/**
 * __useStore_DeleteStoreByPkMutation__
 *
 * To run a mutation, you first call `useStore_DeleteStoreByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStore_DeleteStoreByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storeDeleteStoreByPkMutation, { data, loading, error }] = useStore_DeleteStoreByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStore_DeleteStoreByPkMutation(baseOptions?: Apollo.MutationHookOptions<Store_DeleteStoreByPkMutation, Store_DeleteStoreByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Store_DeleteStoreByPkMutation, Store_DeleteStoreByPkMutationVariables>(Store_DeleteStoreByPkDocument, options);
      }
export type Store_DeleteStoreByPkMutationHookResult = ReturnType<typeof useStore_DeleteStoreByPkMutation>;
export type Store_DeleteStoreByPkMutationResult = Apollo.MutationResult<Store_DeleteStoreByPkMutation>;
export type Store_DeleteStoreByPkMutationOptions = Apollo.BaseMutationOptions<Store_DeleteStoreByPkMutation, Store_DeleteStoreByPkMutationVariables>;
export const Store_UpdateStoreDocument = gql`
    mutation Store_UpdateStore($id: Int!, $address: String, $latitude: String, $longitude: String, $name: String) {
  update_rocketjaket_store_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, address: $address, latitude: $latitude, longitude: $longitude}
  ) {
    id
    name
  }
}
    `;
export type Store_UpdateStoreMutationFn = Apollo.MutationFunction<Store_UpdateStoreMutation, Store_UpdateStoreMutationVariables>;

/**
 * __useStore_UpdateStoreMutation__
 *
 * To run a mutation, you first call `useStore_UpdateStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStore_UpdateStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storeUpdateStoreMutation, { data, loading, error }] = useStore_UpdateStoreMutation({
 *   variables: {
 *      id: // value for 'id'
 *      address: // value for 'address'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useStore_UpdateStoreMutation(baseOptions?: Apollo.MutationHookOptions<Store_UpdateStoreMutation, Store_UpdateStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Store_UpdateStoreMutation, Store_UpdateStoreMutationVariables>(Store_UpdateStoreDocument, options);
      }
export type Store_UpdateStoreMutationHookResult = ReturnType<typeof useStore_UpdateStoreMutation>;
export type Store_UpdateStoreMutationResult = Apollo.MutationResult<Store_UpdateStoreMutation>;
export type Store_UpdateStoreMutationOptions = Apollo.BaseMutationOptions<Store_UpdateStoreMutation, Store_UpdateStoreMutationVariables>;
export const Store_GetAllStoreDocument = gql`
    query Store_GetAllStore {
  rocketjaket_store {
    id
    name
    latitude
    longitude
    address
  }
}
    `;

/**
 * __useStore_GetAllStoreQuery__
 *
 * To run a query within a React component, call `useStore_GetAllStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useStore_GetAllStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStore_GetAllStoreQuery({
 *   variables: {
 *   },
 * });
 */
export function useStore_GetAllStoreQuery(baseOptions?: Apollo.QueryHookOptions<Store_GetAllStoreQuery, Store_GetAllStoreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Store_GetAllStoreQuery, Store_GetAllStoreQueryVariables>(Store_GetAllStoreDocument, options);
      }
export function useStore_GetAllStoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Store_GetAllStoreQuery, Store_GetAllStoreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Store_GetAllStoreQuery, Store_GetAllStoreQueryVariables>(Store_GetAllStoreDocument, options);
        }
export type Store_GetAllStoreQueryHookResult = ReturnType<typeof useStore_GetAllStoreQuery>;
export type Store_GetAllStoreLazyQueryHookResult = ReturnType<typeof useStore_GetAllStoreLazyQuery>;
export type Store_GetAllStoreQueryResult = Apollo.QueryResult<Store_GetAllStoreQuery, Store_GetAllStoreQueryVariables>;
export const Store_GetStoreByPkDocument = gql`
    query Store_GetStoreByPK($id: Int!) {
  rocketjaket_store_by_pk(id: $id) {
    id
    name
    latitude
    longitude
    address
    created_at
    updated_at
  }
}
    `;

/**
 * __useStore_GetStoreByPkQuery__
 *
 * To run a query within a React component, call `useStore_GetStoreByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useStore_GetStoreByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStore_GetStoreByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStore_GetStoreByPkQuery(baseOptions: Apollo.QueryHookOptions<Store_GetStoreByPkQuery, Store_GetStoreByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Store_GetStoreByPkQuery, Store_GetStoreByPkQueryVariables>(Store_GetStoreByPkDocument, options);
      }
export function useStore_GetStoreByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Store_GetStoreByPkQuery, Store_GetStoreByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Store_GetStoreByPkQuery, Store_GetStoreByPkQueryVariables>(Store_GetStoreByPkDocument, options);
        }
export type Store_GetStoreByPkQueryHookResult = ReturnType<typeof useStore_GetStoreByPkQuery>;
export type Store_GetStoreByPkLazyQueryHookResult = ReturnType<typeof useStore_GetStoreByPkLazyQuery>;
export type Store_GetStoreByPkQueryResult = Apollo.QueryResult<Store_GetStoreByPkQuery, Store_GetStoreByPkQueryVariables>;
export const User_GetUserByIdDocument = gql`
    query User_GetUserById($id: uuid!) {
  users_by_pk(id: $id) {
    id
    display_name
    avatar_url
    account {
      email
      default_role
    }
  }
}
    `;

/**
 * __useUser_GetUserByIdQuery__
 *
 * To run a query within a React component, call `useUser_GetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUser_GetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUser_GetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUser_GetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>(User_GetUserByIdDocument, options);
      }
export function useUser_GetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>(User_GetUserByIdDocument, options);
        }
export type User_GetUserByIdQueryHookResult = ReturnType<typeof useUser_GetUserByIdQuery>;
export type User_GetUserByIdLazyQueryHookResult = ReturnType<typeof useUser_GetUserByIdLazyQuery>;
export type User_GetUserByIdQueryResult = Apollo.QueryResult<User_GetUserByIdQuery, User_GetUserByIdQueryVariables>;