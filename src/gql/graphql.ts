/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "actions" */
export type Actions = {
  __typename?: 'actions';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  hand: Hands;
  hand_id: Scalars['uuid'];
  id: Scalars['uuid'];
  move: Scalars['String'];
  order: Scalars['Int'];
  position?: Maybe<Scalars['String']>;
  size: Scalars['Float'];
  street: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "actions" */
export type Actions_Aggregate_Order_By = {
  avg?: InputMaybe<Actions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Actions_Max_Order_By>;
  min?: InputMaybe<Actions_Min_Order_By>;
  stddev?: InputMaybe<Actions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Actions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Actions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Actions_Sum_Order_By>;
  var_pop?: InputMaybe<Actions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Actions_Var_Samp_Order_By>;
  variance?: InputMaybe<Actions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "actions" */
export type Actions_Arr_Rel_Insert_Input = {
  data: Array<Actions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};

/** order by avg() on columns of table "actions" */
export type Actions_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "actions". All fields are combined with a logical 'AND'. */
export type Actions_Bool_Exp = {
  _and?: InputMaybe<Array<Actions_Bool_Exp>>;
  _not?: InputMaybe<Actions_Bool_Exp>;
  _or?: InputMaybe<Array<Actions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hand?: InputMaybe<Hands_Bool_Exp>;
  hand_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  move?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Float_Comparison_Exp>;
  street?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "actions" */
export enum Actions_Constraint {
  /** unique or primary key constraint on columns "id" */
  ActionsPkey = 'actions_pkey'
}

/** input type for incrementing numeric columns in table "actions" */
export type Actions_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "actions" */
export type Actions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hand?: InputMaybe<Hands_Obj_Rel_Insert_Input>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  move?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "actions" */
export type Actions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  move?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "actions" */
export type Actions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  move?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "actions" */
export type Actions_Mutation_Response = {
  __typename?: 'actions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Actions>;
};

/** on_conflict condition type for table "actions" */
export type Actions_On_Conflict = {
  constraint: Actions_Constraint;
  update_columns?: Array<Actions_Update_Column>;
  where?: InputMaybe<Actions_Bool_Exp>;
};

/** Ordering options when selecting data from "actions". */
export type Actions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hand?: InputMaybe<Hands_Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  move?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: actions */
export type Actions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "actions" */
export enum Actions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Move = 'move',
  /** column name */
  Order = 'order',
  /** column name */
  Position = 'position',
  /** column name */
  Size = 'size',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "actions" */
export type Actions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  move?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** order by stddev() on columns of table "actions" */
export type Actions_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "actions" */
export type Actions_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "actions" */
export type Actions_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "actions" */
export type Actions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Actions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Actions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  move?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** order by sum() on columns of table "actions" */
export type Actions_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** update columns of table "actions" */
export enum Actions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Move = 'move',
  /** column name */
  Order = 'order',
  /** column name */
  Position = 'position',
  /** column name */
  Size = 'size',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Actions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Actions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Actions_Set_Input>;
  where: Actions_Bool_Exp;
};

/** order by var_pop() on columns of table "actions" */
export type Actions_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "actions" */
export type Actions_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "actions" */
export type Actions_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** columns and relationships of "cards" */
export type Cards = {
  __typename?: 'cards';
  /** An array relationship */
  hands_cards: Array<Hands_Cards>;
  id: Scalars['uuid'];
  mark: Scalars['String'];
  num: Scalars['String'];
};


/** columns and relationships of "cards" */
export type CardsHands_CardsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "cards". All fields are combined with a logical 'AND'. */
export type Cards_Bool_Exp = {
  _and?: InputMaybe<Array<Cards_Bool_Exp>>;
  _not?: InputMaybe<Cards_Bool_Exp>;
  _or?: InputMaybe<Array<Cards_Bool_Exp>>;
  hands_cards?: InputMaybe<Hands_Cards_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mark?: InputMaybe<String_Comparison_Exp>;
  num?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cards" */
export enum Cards_Constraint {
  /** unique or primary key constraint on columns "num", "mark" */
  CardsNumMarkKey = 'cards_num_mark_key',
  /** unique or primary key constraint on columns "id" */
  CardsPkey = 'cards_pkey'
}

/** input type for inserting data into table "cards" */
export type Cards_Insert_Input = {
  hands_cards?: InputMaybe<Hands_Cards_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  mark?: InputMaybe<Scalars['String']>;
  num?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "cards" */
export type Cards_Mutation_Response = {
  __typename?: 'cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cards>;
};

/** input type for inserting object relation for remote table "cards" */
export type Cards_Obj_Rel_Insert_Input = {
  data: Cards_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cards_On_Conflict>;
};

/** on_conflict condition type for table "cards" */
export type Cards_On_Conflict = {
  constraint: Cards_Constraint;
  update_columns?: Array<Cards_Update_Column>;
  where?: InputMaybe<Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "cards". */
export type Cards_Order_By = {
  hands_cards_aggregate?: InputMaybe<Hands_Cards_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  mark?: InputMaybe<Order_By>;
  num?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cards */
export type Cards_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cards" */
export enum Cards_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Mark = 'mark',
  /** column name */
  Num = 'num'
}

/** input type for updating data in table "cards" */
export type Cards_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  mark?: InputMaybe<Scalars['String']>;
  num?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "cards" */
export type Cards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cards_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  mark?: InputMaybe<Scalars['String']>;
  num?: InputMaybe<Scalars['String']>;
};

/** update columns of table "cards" */
export enum Cards_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Mark = 'mark',
  /** column name */
  Num = 'num'
}

export type Cards_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cards_Set_Input>;
  where: Cards_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "hands" */
export type Hands = {
  __typename?: 'hands';
  /** An array relationship */
  actions: Array<Actions>;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  es: Scalars['Float'];
  /** An array relationship */
  hands_cards: Array<Hands_Cards>;
  id: Scalars['uuid'];
  /** An array relationship */
  labels: Array<Labels>;
  /** An array relationship */
  pots: Array<Pots>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};


/** columns and relationships of "hands" */
export type HandsActionsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


/** columns and relationships of "hands" */
export type HandsHands_CardsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


/** columns and relationships of "hands" */
export type HandsLabelsArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


/** columns and relationships of "hands" */
export type HandsPotsArgs = {
  distinct_on?: InputMaybe<Array<Pots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pots_Order_By>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "hands". All fields are combined with a logical 'AND'. */
export type Hands_Bool_Exp = {
  _and?: InputMaybe<Array<Hands_Bool_Exp>>;
  _not?: InputMaybe<Hands_Bool_Exp>;
  _or?: InputMaybe<Array<Hands_Bool_Exp>>;
  actions?: InputMaybe<Actions_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  es?: InputMaybe<Float_Comparison_Exp>;
  hands_cards?: InputMaybe<Hands_Cards_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  labels?: InputMaybe<Labels_Bool_Exp>;
  pots?: InputMaybe<Pots_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "hands_cards" */
export type Hands_Cards = {
  __typename?: 'hands_cards';
  /** An object relationship */
  card: Cards;
  card_id: Scalars['uuid'];
  /** An object relationship */
  hand: Hands;
  hand_id: Scalars['uuid'];
  id: Scalars['uuid'];
  order: Scalars['Int'];
};

/** order by aggregate values of table "hands_cards" */
export type Hands_Cards_Aggregate_Order_By = {
  avg?: InputMaybe<Hands_Cards_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Hands_Cards_Max_Order_By>;
  min?: InputMaybe<Hands_Cards_Min_Order_By>;
  stddev?: InputMaybe<Hands_Cards_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Hands_Cards_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Hands_Cards_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Hands_Cards_Sum_Order_By>;
  var_pop?: InputMaybe<Hands_Cards_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Hands_Cards_Var_Samp_Order_By>;
  variance?: InputMaybe<Hands_Cards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "hands_cards" */
export type Hands_Cards_Arr_Rel_Insert_Input = {
  data: Array<Hands_Cards_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Hands_Cards_On_Conflict>;
};

/** order by avg() on columns of table "hands_cards" */
export type Hands_Cards_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "hands_cards". All fields are combined with a logical 'AND'. */
export type Hands_Cards_Bool_Exp = {
  _and?: InputMaybe<Array<Hands_Cards_Bool_Exp>>;
  _not?: InputMaybe<Hands_Cards_Bool_Exp>;
  _or?: InputMaybe<Array<Hands_Cards_Bool_Exp>>;
  card?: InputMaybe<Cards_Bool_Exp>;
  card_id?: InputMaybe<Uuid_Comparison_Exp>;
  hand?: InputMaybe<Hands_Bool_Exp>;
  hand_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "hands_cards" */
export enum Hands_Cards_Constraint {
  /** unique or primary key constraint on columns "card_id", "hand_id", "order" */
  HandsCardsHandIdCardIdOrderKey = 'hands_cards_hand_id_card_id_order_key',
  /** unique or primary key constraint on columns "id" */
  HandsCardsPkey = 'hands_cards_pkey'
}

/** input type for incrementing numeric columns in table "hands_cards" */
export type Hands_Cards_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "hands_cards" */
export type Hands_Cards_Insert_Input = {
  card?: InputMaybe<Cards_Obj_Rel_Insert_Input>;
  card_id?: InputMaybe<Scalars['uuid']>;
  hand?: InputMaybe<Hands_Obj_Rel_Insert_Input>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
};

/** order by max() on columns of table "hands_cards" */
export type Hands_Cards_Max_Order_By = {
  card_id?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "hands_cards" */
export type Hands_Cards_Min_Order_By = {
  card_id?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "hands_cards" */
export type Hands_Cards_Mutation_Response = {
  __typename?: 'hands_cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hands_Cards>;
};

/** on_conflict condition type for table "hands_cards" */
export type Hands_Cards_On_Conflict = {
  constraint: Hands_Cards_Constraint;
  update_columns?: Array<Hands_Cards_Update_Column>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "hands_cards". */
export type Hands_Cards_Order_By = {
  card?: InputMaybe<Cards_Order_By>;
  card_id?: InputMaybe<Order_By>;
  hand?: InputMaybe<Hands_Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hands_cards */
export type Hands_Cards_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "hands_cards" */
export enum Hands_Cards_Select_Column {
  /** column name */
  CardId = 'card_id',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order'
}

/** input type for updating data in table "hands_cards" */
export type Hands_Cards_Set_Input = {
  card_id?: InputMaybe<Scalars['uuid']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "hands_cards" */
export type Hands_Cards_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "hands_cards" */
export type Hands_Cards_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "hands_cards" */
export type Hands_Cards_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "hands_cards" */
export type Hands_Cards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hands_Cards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hands_Cards_Stream_Cursor_Value_Input = {
  card_id?: InputMaybe<Scalars['uuid']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "hands_cards" */
export type Hands_Cards_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "hands_cards" */
export enum Hands_Cards_Update_Column {
  /** column name */
  CardId = 'card_id',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order'
}

export type Hands_Cards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Hands_Cards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hands_Cards_Set_Input>;
  where: Hands_Cards_Bool_Exp;
};

/** order by var_pop() on columns of table "hands_cards" */
export type Hands_Cards_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "hands_cards" */
export type Hands_Cards_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "hands_cards" */
export type Hands_Cards_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "hands" */
export enum Hands_Constraint {
  /** unique or primary key constraint on columns "id" */
  HandsPkey = 'hands_pkey'
}

/** input type for incrementing numeric columns in table "hands" */
export type Hands_Inc_Input = {
  es?: InputMaybe<Scalars['Float']>;
};

/** input type for inserting data into table "hands" */
export type Hands_Insert_Input = {
  actions?: InputMaybe<Actions_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  es?: InputMaybe<Scalars['Float']>;
  hands_cards?: InputMaybe<Hands_Cards_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  labels?: InputMaybe<Labels_Arr_Rel_Insert_Input>;
  pots?: InputMaybe<Pots_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "hands" */
export type Hands_Mutation_Response = {
  __typename?: 'hands_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hands>;
};

/** input type for inserting object relation for remote table "hands" */
export type Hands_Obj_Rel_Insert_Input = {
  data: Hands_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Hands_On_Conflict>;
};

/** on_conflict condition type for table "hands" */
export type Hands_On_Conflict = {
  constraint: Hands_Constraint;
  update_columns?: Array<Hands_Update_Column>;
  where?: InputMaybe<Hands_Bool_Exp>;
};

/** Ordering options when selecting data from "hands". */
export type Hands_Order_By = {
  actions_aggregate?: InputMaybe<Actions_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  hands_cards_aggregate?: InputMaybe<Hands_Cards_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  labels_aggregate?: InputMaybe<Labels_Aggregate_Order_By>;
  pots_aggregate?: InputMaybe<Pots_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hands */
export type Hands_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "hands" */
export enum Hands_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Es = 'es',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "hands" */
export type Hands_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  es?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "hands" */
export type Hands_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hands_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hands_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  es?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "hands" */
export enum Hands_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Es = 'es',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Hands_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Hands_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hands_Set_Input>;
  where: Hands_Bool_Exp;
};

/** columns and relationships of "labels" */
export type Labels = {
  __typename?: 'labels';
  color?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  /** An object relationship */
  hand: Hands;
  hand_id: Scalars['uuid'];
  id: Scalars['uuid'];
};

/** order by aggregate values of table "labels" */
export type Labels_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Labels_Max_Order_By>;
  min?: InputMaybe<Labels_Min_Order_By>;
};

/** input type for inserting array relation for remote table "labels" */
export type Labels_Arr_Rel_Insert_Input = {
  data: Array<Labels_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};

/** Boolean expression to filter rows from the table "labels". All fields are combined with a logical 'AND'. */
export type Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Labels_Bool_Exp>>;
  _not?: InputMaybe<Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Labels_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  hand?: InputMaybe<Hands_Bool_Exp>;
  hand_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "labels" */
export enum Labels_Constraint {
  /** unique or primary key constraint on columns "id" */
  LabelsPkey = 'labels_pkey'
}

/** input type for inserting data into table "labels" */
export type Labels_Insert_Input = {
  color?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  hand?: InputMaybe<Hands_Obj_Rel_Insert_Input>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "labels" */
export type Labels_Max_Order_By = {
  color?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "labels" */
export type Labels_Min_Order_By = {
  color?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "labels" */
export type Labels_Mutation_Response = {
  __typename?: 'labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Labels>;
};

/** on_conflict condition type for table "labels" */
export type Labels_On_Conflict = {
  constraint: Labels_Constraint;
  update_columns?: Array<Labels_Update_Column>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

/** Ordering options when selecting data from "labels". */
export type Labels_Order_By = {
  color?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  hand?: InputMaybe<Hands_Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: labels */
export type Labels_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "labels" */
export enum Labels_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Content = 'content',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "labels" */
export type Labels_Set_Input = {
  color?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "labels" */
export type Labels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Labels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Labels_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "labels" */
export enum Labels_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Content = 'content',
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id'
}

export type Labels_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Labels_Set_Input>;
  where: Labels_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "actions" */
  delete_actions?: Maybe<Actions_Mutation_Response>;
  /** delete single row from the table: "actions" */
  delete_actions_by_pk?: Maybe<Actions>;
  /** delete data from the table: "hands" */
  delete_hands?: Maybe<Hands_Mutation_Response>;
  /** delete single row from the table: "hands" */
  delete_hands_by_pk?: Maybe<Hands>;
  /** delete data from the table: "hands_cards" */
  delete_hands_cards?: Maybe<Hands_Cards_Mutation_Response>;
  /** delete single row from the table: "hands_cards" */
  delete_hands_cards_by_pk?: Maybe<Hands_Cards>;
  /** delete data from the table: "labels" */
  delete_labels?: Maybe<Labels_Mutation_Response>;
  /** delete single row from the table: "labels" */
  delete_labels_by_pk?: Maybe<Labels>;
  /** delete data from the table: "pots" */
  delete_pots?: Maybe<Pots_Mutation_Response>;
  /** delete single row from the table: "pots" */
  delete_pots_by_pk?: Maybe<Pots>;
  /** insert data into the table: "actions" */
  insert_actions?: Maybe<Actions_Mutation_Response>;
  /** insert a single row into the table: "actions" */
  insert_actions_one?: Maybe<Actions>;
  /** insert data into the table: "cards" */
  insert_cards?: Maybe<Cards_Mutation_Response>;
  /** insert a single row into the table: "cards" */
  insert_cards_one?: Maybe<Cards>;
  /** insert data into the table: "hands" */
  insert_hands?: Maybe<Hands_Mutation_Response>;
  /** insert data into the table: "hands_cards" */
  insert_hands_cards?: Maybe<Hands_Cards_Mutation_Response>;
  /** insert a single row into the table: "hands_cards" */
  insert_hands_cards_one?: Maybe<Hands_Cards>;
  /** insert a single row into the table: "hands" */
  insert_hands_one?: Maybe<Hands>;
  /** insert data into the table: "labels" */
  insert_labels?: Maybe<Labels_Mutation_Response>;
  /** insert a single row into the table: "labels" */
  insert_labels_one?: Maybe<Labels>;
  /** insert data into the table: "pots" */
  insert_pots?: Maybe<Pots_Mutation_Response>;
  /** insert a single row into the table: "pots" */
  insert_pots_one?: Maybe<Pots>;
  /** update data of the table: "actions" */
  update_actions?: Maybe<Actions_Mutation_Response>;
  /** update single row of the table: "actions" */
  update_actions_by_pk?: Maybe<Actions>;
  /** update multiples rows of table: "actions" */
  update_actions_many?: Maybe<Array<Maybe<Actions_Mutation_Response>>>;
  /** update data of the table: "cards" */
  update_cards?: Maybe<Cards_Mutation_Response>;
  /** update single row of the table: "cards" */
  update_cards_by_pk?: Maybe<Cards>;
  /** update multiples rows of table: "cards" */
  update_cards_many?: Maybe<Array<Maybe<Cards_Mutation_Response>>>;
  /** update data of the table: "hands" */
  update_hands?: Maybe<Hands_Mutation_Response>;
  /** update single row of the table: "hands" */
  update_hands_by_pk?: Maybe<Hands>;
  /** update data of the table: "hands_cards" */
  update_hands_cards?: Maybe<Hands_Cards_Mutation_Response>;
  /** update single row of the table: "hands_cards" */
  update_hands_cards_by_pk?: Maybe<Hands_Cards>;
  /** update multiples rows of table: "hands_cards" */
  update_hands_cards_many?: Maybe<Array<Maybe<Hands_Cards_Mutation_Response>>>;
  /** update multiples rows of table: "hands" */
  update_hands_many?: Maybe<Array<Maybe<Hands_Mutation_Response>>>;
  /** update data of the table: "labels" */
  update_labels?: Maybe<Labels_Mutation_Response>;
  /** update single row of the table: "labels" */
  update_labels_by_pk?: Maybe<Labels>;
  /** update multiples rows of table: "labels" */
  update_labels_many?: Maybe<Array<Maybe<Labels_Mutation_Response>>>;
  /** update data of the table: "pots" */
  update_pots?: Maybe<Pots_Mutation_Response>;
  /** update single row of the table: "pots" */
  update_pots_by_pk?: Maybe<Pots>;
  /** update multiples rows of table: "pots" */
  update_pots_many?: Maybe<Array<Maybe<Pots_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ActionsArgs = {
  where: Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Actions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_HandsArgs = {
  where: Hands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hands_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Hands_CardsArgs = {
  where: Hands_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hands_Cards_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_LabelsArgs = {
  where: Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Labels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PotsArgs = {
  where: Pots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pots_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ActionsArgs = {
  objects: Array<Actions_Insert_Input>;
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Actions_OneArgs = {
  object: Actions_Insert_Input;
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CardsArgs = {
  objects: Array<Cards_Insert_Input>;
  on_conflict?: InputMaybe<Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cards_OneArgs = {
  object: Cards_Insert_Input;
  on_conflict?: InputMaybe<Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HandsArgs = {
  objects: Array<Hands_Insert_Input>;
  on_conflict?: InputMaybe<Hands_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hands_CardsArgs = {
  objects: Array<Hands_Cards_Insert_Input>;
  on_conflict?: InputMaybe<Hands_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hands_Cards_OneArgs = {
  object: Hands_Cards_Insert_Input;
  on_conflict?: InputMaybe<Hands_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hands_OneArgs = {
  object: Hands_Insert_Input;
  on_conflict?: InputMaybe<Hands_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LabelsArgs = {
  objects: Array<Labels_Insert_Input>;
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Labels_OneArgs = {
  object: Labels_Insert_Input;
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PotsArgs = {
  objects: Array<Pots_Insert_Input>;
  on_conflict?: InputMaybe<Pots_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pots_OneArgs = {
  object: Pots_Insert_Input;
  on_conflict?: InputMaybe<Pots_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ActionsArgs = {
  _inc?: InputMaybe<Actions_Inc_Input>;
  _set?: InputMaybe<Actions_Set_Input>;
  where: Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_By_PkArgs = {
  _inc?: InputMaybe<Actions_Inc_Input>;
  _set?: InputMaybe<Actions_Set_Input>;
  pk_columns: Actions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_ManyArgs = {
  updates: Array<Actions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CardsArgs = {
  _set?: InputMaybe<Cards_Set_Input>;
  where: Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cards_By_PkArgs = {
  _set?: InputMaybe<Cards_Set_Input>;
  pk_columns: Cards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cards_ManyArgs = {
  updates: Array<Cards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HandsArgs = {
  _inc?: InputMaybe<Hands_Inc_Input>;
  _set?: InputMaybe<Hands_Set_Input>;
  where: Hands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_By_PkArgs = {
  _inc?: InputMaybe<Hands_Inc_Input>;
  _set?: InputMaybe<Hands_Set_Input>;
  pk_columns: Hands_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_CardsArgs = {
  _inc?: InputMaybe<Hands_Cards_Inc_Input>;
  _set?: InputMaybe<Hands_Cards_Set_Input>;
  where: Hands_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_Cards_By_PkArgs = {
  _inc?: InputMaybe<Hands_Cards_Inc_Input>;
  _set?: InputMaybe<Hands_Cards_Set_Input>;
  pk_columns: Hands_Cards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_Cards_ManyArgs = {
  updates: Array<Hands_Cards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Hands_ManyArgs = {
  updates: Array<Hands_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LabelsArgs = {
  _set?: InputMaybe<Labels_Set_Input>;
  where: Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Labels_By_PkArgs = {
  _set?: InputMaybe<Labels_Set_Input>;
  pk_columns: Labels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Labels_ManyArgs = {
  updates: Array<Labels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PotsArgs = {
  _inc?: InputMaybe<Pots_Inc_Input>;
  _set?: InputMaybe<Pots_Set_Input>;
  where: Pots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pots_By_PkArgs = {
  _inc?: InputMaybe<Pots_Inc_Input>;
  _set?: InputMaybe<Pots_Set_Input>;
  pk_columns: Pots_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pots_ManyArgs = {
  updates: Array<Pots_Updates>;
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

/** columns and relationships of "pots" */
export type Pots = {
  __typename?: 'pots';
  /** An object relationship */
  hand: Hands;
  hand_id: Scalars['uuid'];
  id: Scalars['uuid'];
  size: Scalars['Float'];
  street: Scalars['Int'];
};

/** order by aggregate values of table "pots" */
export type Pots_Aggregate_Order_By = {
  avg?: InputMaybe<Pots_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pots_Max_Order_By>;
  min?: InputMaybe<Pots_Min_Order_By>;
  stddev?: InputMaybe<Pots_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pots_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pots_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pots_Sum_Order_By>;
  var_pop?: InputMaybe<Pots_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pots_Var_Samp_Order_By>;
  variance?: InputMaybe<Pots_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pots" */
export type Pots_Arr_Rel_Insert_Input = {
  data: Array<Pots_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pots_On_Conflict>;
};

/** order by avg() on columns of table "pots" */
export type Pots_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pots". All fields are combined with a logical 'AND'. */
export type Pots_Bool_Exp = {
  _and?: InputMaybe<Array<Pots_Bool_Exp>>;
  _not?: InputMaybe<Pots_Bool_Exp>;
  _or?: InputMaybe<Array<Pots_Bool_Exp>>;
  hand?: InputMaybe<Hands_Bool_Exp>;
  hand_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  size?: InputMaybe<Float_Comparison_Exp>;
  street?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "pots" */
export enum Pots_Constraint {
  /** unique or primary key constraint on columns "hand_id", "street" */
  PotsHandIdStreetKey = 'pots_hand_id_street_key',
  /** unique or primary key constraint on columns "id" */
  PotsPkey = 'pots_pkey'
}

/** input type for incrementing numeric columns in table "pots" */
export type Pots_Inc_Input = {
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "pots" */
export type Pots_Insert_Input = {
  hand?: InputMaybe<Hands_Obj_Rel_Insert_Input>;
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
};

/** order by max() on columns of table "pots" */
export type Pots_Max_Order_By = {
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "pots" */
export type Pots_Min_Order_By = {
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pots" */
export type Pots_Mutation_Response = {
  __typename?: 'pots_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pots>;
};

/** on_conflict condition type for table "pots" */
export type Pots_On_Conflict = {
  constraint: Pots_Constraint;
  update_columns?: Array<Pots_Update_Column>;
  where?: InputMaybe<Pots_Bool_Exp>;
};

/** Ordering options when selecting data from "pots". */
export type Pots_Order_By = {
  hand?: InputMaybe<Hands_Order_By>;
  hand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pots */
export type Pots_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "pots" */
export enum Pots_Select_Column {
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size',
  /** column name */
  Street = 'street'
}

/** input type for updating data in table "pots" */
export type Pots_Set_Input = {
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "pots" */
export type Pots_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "pots" */
export type Pots_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "pots" */
export type Pots_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pots" */
export type Pots_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pots_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pots_Stream_Cursor_Value_Input = {
  hand_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['Float']>;
  street?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pots" */
export type Pots_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** update columns of table "pots" */
export enum Pots_Update_Column {
  /** column name */
  HandId = 'hand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size',
  /** column name */
  Street = 'street'
}

export type Pots_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pots_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pots_Set_Input>;
  where: Pots_Bool_Exp;
};

/** order by var_pop() on columns of table "pots" */
export type Pots_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "pots" */
export type Pots_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "pots" */
export type Pots_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  actions: Array<Actions>;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>;
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table: "hands" */
  hands: Array<Hands>;
  /** fetch data from the table: "hands" using primary key columns */
  hands_by_pk?: Maybe<Hands>;
  /** An array relationship */
  hands_cards: Array<Hands_Cards>;
  /** fetch data from the table: "hands_cards" using primary key columns */
  hands_cards_by_pk?: Maybe<Hands_Cards>;
  /** An array relationship */
  labels: Array<Labels>;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** An array relationship */
  pots: Array<Pots>;
  /** fetch data from the table: "pots" using primary key columns */
  pots_by_pk?: Maybe<Pots>;
};


export type Query_RootActionsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Query_RootActions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCardsArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};


export type Query_RootCards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootHandsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Order_By>>;
  where?: InputMaybe<Hands_Bool_Exp>;
};


export type Query_RootHands_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootHands_CardsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


export type Query_RootHands_Cards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLabelsArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


export type Query_RootLabels_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPotsArgs = {
  distinct_on?: InputMaybe<Array<Pots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pots_Order_By>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};


export type Query_RootPots_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  actions: Array<Actions>;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>;
  /** fetch data from the table in a streaming manner : "actions" */
  actions_stream: Array<Actions>;
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table in a streaming manner : "cards" */
  cards_stream: Array<Cards>;
  /** fetch data from the table: "hands" */
  hands: Array<Hands>;
  /** fetch data from the table: "hands" using primary key columns */
  hands_by_pk?: Maybe<Hands>;
  /** An array relationship */
  hands_cards: Array<Hands_Cards>;
  /** fetch data from the table: "hands_cards" using primary key columns */
  hands_cards_by_pk?: Maybe<Hands_Cards>;
  /** fetch data from the table in a streaming manner : "hands_cards" */
  hands_cards_stream: Array<Hands_Cards>;
  /** fetch data from the table in a streaming manner : "hands" */
  hands_stream: Array<Hands>;
  /** An array relationship */
  labels: Array<Labels>;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** fetch data from the table in a streaming manner : "labels" */
  labels_stream: Array<Labels>;
  /** An array relationship */
  pots: Array<Pots>;
  /** fetch data from the table: "pots" using primary key columns */
  pots_by_pk?: Maybe<Pots>;
  /** fetch data from the table in a streaming manner : "pots" */
  pots_stream: Array<Pots>;
};


export type Subscription_RootActionsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootActions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootActions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Actions_Stream_Cursor_Input>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootCardsArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};


export type Subscription_RootCards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCards_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cards_Stream_Cursor_Input>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};


export type Subscription_RootHandsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Order_By>>;
  where?: InputMaybe<Hands_Bool_Exp>;
};


export type Subscription_RootHands_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootHands_CardsArgs = {
  distinct_on?: InputMaybe<Array<Hands_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hands_Cards_Order_By>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


export type Subscription_RootHands_Cards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootHands_Cards_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Hands_Cards_Stream_Cursor_Input>>;
  where?: InputMaybe<Hands_Cards_Bool_Exp>;
};


export type Subscription_RootHands_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Hands_Stream_Cursor_Input>>;
  where?: InputMaybe<Hands_Bool_Exp>;
};


export type Subscription_RootLabelsArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


export type Subscription_RootLabels_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLabels_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Labels_Stream_Cursor_Input>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};


export type Subscription_RootPotsArgs = {
  distinct_on?: InputMaybe<Array<Pots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pots_Order_By>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};


export type Subscription_RootPots_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPots_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pots_Stream_Cursor_Input>>;
  where?: InputMaybe<Pots_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetAllHandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHandsQuery = { __typename?: 'query_root', hands: Array<{ __typename?: 'hands', id: any, title: string, content: string, es: number, user_id: string, created_at: any, updated_at: any, actions: Array<{ __typename?: 'actions', id: any, hand_id: any, position?: string | null, move: string, size: number, street: number, order: number, created_at: any, updated_at: any }>, hands_cards: Array<{ __typename?: 'hands_cards', order: number, card: { __typename?: 'cards', id: any, num: string, mark: string } }>, pots: Array<{ __typename?: 'pots', id: any, hand_id: any, size: number, street: number }> }> };

export type InsertHandMutationVariables = Exact<{
  object: Hands_Insert_Input;
  on_conflict?: InputMaybe<Hands_On_Conflict>;
}>;


export type InsertHandMutation = { __typename?: 'mutation_root', insert_hands_one?: { __typename?: 'hands', id: any, title: string, content: string, es: number, user_id: string, created_at: any, updated_at: any, actions: Array<{ __typename?: 'actions', id: any, hand_id: any, position?: string | null, move: string, size: number, order: number, street: number, created_at: any, updated_at: any }>, hands_cards: Array<{ __typename?: 'hands_cards', order: number, card: { __typename?: 'cards', id: any, num: string, mark: string } }>, pots: Array<{ __typename?: 'pots', id: any, hand_id: any, size: number, street: number }> } | null };


export const GetAllHandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllHands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"es"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"street"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hand_id"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"move"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hands_cards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"num"}},{"kind":"Field","name":{"kind":"Name","value":"mark"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hand_id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"street"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllHandsQuery, GetAllHandsQueryVariables>;
export const InsertHandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertHand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"hands_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"hands_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_hands_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"es"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"street"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hand_id"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"move"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hands_cards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"num"}},{"kind":"Field","name":{"kind":"Name","value":"mark"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hand_id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"street"}}]}}]}}]}}]} as unknown as DocumentNode<InsertHandMutation, InsertHandMutationVariables>;