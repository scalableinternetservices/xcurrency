/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchAccounts
// ====================================================

export interface FetchAccounts_user_account {
  __typename: "Account";
  id: number;
  name: string | null;
  balance: number;
  country: string;
}

export interface FetchAccounts_user {
  __typename: "User";
  account: FetchAccounts_user_account[] | null;
}

export interface FetchAccounts {
  user: FetchAccounts_user | null;
}

export interface FetchAccountsVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchAccount
// ====================================================

export interface FetchAccount_account {
  __typename: "Account";
  name: string | null;
}

export interface FetchAccount {
  account: FetchAccount_account | null;
}

export interface FetchAccountVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: AccountsSubscription
// ====================================================

export interface AccountsSubscription_accountUpdates_user {
  __typename: "User";
  id: number;
}

export interface AccountsSubscription_accountUpdates {
  __typename: "Account";
  user: AccountsSubscription_accountUpdates_user;
  name: string | null;
  balance: number;
}

export interface AccountsSubscription {
  accountUpdates: AccountsSubscription_accountUpdates | null;
}

export interface AccountsSubscriptionVariables {
  userId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateAccount
// ====================================================

export interface CreateAccount {
  createAccount: boolean;
}

export interface CreateAccountVariables {
  input: AccountInfo;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ModifyAccountBalance
// ====================================================

export interface ModifyAccountBalance {
  updateBalance: boolean;
}

export interface ModifyAccountBalanceVariables {
  input: AccountInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUserContext
// ====================================================

export interface FetchUserContext_self {
  __typename: "User";
  id: number;
  name: string;
  userType: UserType;
}

export interface FetchUserContext {
  self: FetchUserContext_self | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchExchangeRequests
// ====================================================

export interface FetchExchangeRequests_exchangeRequests_user {
  __typename: "User";
  id: number;
}

export interface FetchExchangeRequests_exchangeRequests {
  __typename: "ExchangeRequest";
  user: FetchExchangeRequests_exchangeRequests_user | null;
  requestId: number;
  amountWant: number;
  bidRate: number;
  amountPay: number;
  currentRate: number;
  fromCurrency: string;
  toCurrency: string;
}

export interface FetchExchangeRequests {
  exchangeRequests: (FetchExchangeRequests_exchangeRequests | null)[] | null;
}

export interface FetchExchangeRequestsVariables {
  id?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: RequestSubscription
// ====================================================

export interface RequestSubscription_requestUpdates_user {
  __typename: "User";
  id: number;
}

export interface RequestSubscription_requestUpdates {
  __typename: "ExchangeRequest";
  user: RequestSubscription_requestUpdates_user | null;
  requestId: number;
  amountWant: number;
  bidRate: number;
  amountPay: number;
  currentRate: number;
  fromCurrency: string;
  toCurrency: string;
}

export interface RequestSubscription {
  requestUpdates: RequestSubscription_requestUpdates | null;
}

export interface RequestSubscriptionVariables {
  userId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateRequest
// ====================================================

export interface CreateRequest {
  createRequest: boolean;
}

export interface CreateRequestVariables {
  input: ExchangeRequestInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchSurveys
// ====================================================

export interface FetchSurveys_surveys_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface FetchSurveys_surveys_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: FetchSurveys_surveys_currentQuestion_answers[];
}

export interface FetchSurveys_surveys {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: FetchSurveys_surveys_currentQuestion | null;
}

export interface FetchSurveys {
  surveys: FetchSurveys_surveys[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SurveySubscription
// ====================================================

export interface SurveySubscription_surveyUpdates_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface SurveySubscription_surveyUpdates_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: SurveySubscription_surveyUpdates_currentQuestion_answers[];
}

export interface SurveySubscription_surveyUpdates {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: SurveySubscription_surveyUpdates_currentQuestion | null;
}

export interface SurveySubscription {
  surveyUpdates: SurveySubscription_surveyUpdates | null;
}

export interface SurveySubscriptionVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchSurvey
// ====================================================

export interface FetchSurvey_survey_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface FetchSurvey_survey_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: FetchSurvey_survey_currentQuestion_answers[];
}

export interface FetchSurvey_survey {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: FetchSurvey_survey_currentQuestion | null;
}

export interface FetchSurvey {
  survey: FetchSurvey_survey | null;
}

export interface FetchSurveyVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AnswerSurveyQuestion
// ====================================================

export interface AnswerSurveyQuestion {
  answerSurvey: boolean;
}

export interface AnswerSurveyQuestionVariables {
  input: SurveyInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: NextSurveyQuestion
// ====================================================

export interface NextSurveyQuestion_nextSurveyQuestion_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface NextSurveyQuestion_nextSurveyQuestion_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: NextSurveyQuestion_nextSurveyQuestion_currentQuestion_answers[];
}

export interface NextSurveyQuestion_nextSurveyQuestion {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: NextSurveyQuestion_nextSurveyQuestion_currentQuestion | null;
}

export interface NextSurveyQuestion {
  nextSurveyQuestion: NextSurveyQuestion_nextSurveyQuestion | null;
}

export interface NextSurveyQuestionVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser {
  createUser: number;
}

export interface CreateUserVariables {
  input: UserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Account
// ====================================================

export interface Account_user {
  __typename: "User";
  id: number;
}

export interface Account {
  __typename: "Account";
  user: Account_user;
  name: string | null;
  balance: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ExchangeRequest
// ====================================================

export interface ExchangeRequest_user {
  __typename: "User";
  id: number;
}

export interface ExchangeRequest {
  __typename: "ExchangeRequest";
  user: ExchangeRequest_user | null;
  requestId: number;
  amountWant: number;
  bidRate: number;
  amountPay: number;
  currentRate: number;
  fromCurrency: string;
  toCurrency: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Survey
// ====================================================

export interface Survey_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface Survey_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: Survey_currentQuestion_answers[];
}

export interface Survey {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: Survey_currentQuestion | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SurveyQuestion
// ====================================================

export interface SurveyQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface SurveyQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: SurveyQuestion_answers[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AccountType {
  EXTERNAL = "EXTERNAL",
  INTERNAL = "INTERNAL",
}

export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface AccountInfo {
  country: string;
  type: AccountType;
  balance: number;
  name: string;
  userId: number;
}

export interface AccountInput {
  id: number;
  balance: number;
}

export interface ExchangeRequestInput {
  amountWant: number;
  bidRate: number;
  amountPay: number;
  currentRate: number;
  fromCurrency: string;
  toCurrency: string;
}

export interface SurveyInput {
  questionId: number;
  answer: string;
}

export interface UserInput {
  userType: UserType;
  email: string;
  name: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
