import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SuggestionStatus {
  NEW = "NEW",
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

export enum TribeRole {
  TCHINDA = "TCHINDA",
  NOTABLE = "NOTABLE",
  BOMBOCK = "BOMBOCK"
}

export enum QuestionType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  AUDIO = "AUDIO",
  VIDEO = "VIDEO"
}

export enum FileType {
  TXT = "TXT",
  PNG = "PNG",
  JPG = "JPG",
  MP3 = "MP3",
  OGG = "OGG",
  WAV = "WAV",
  WEBM = "WEBM",
  MPEG = "MPEG",
  AVI = "AVI",
  FLV = "FLV",
  MOV = "MOV",
  MP4 = "MP4",
  M4_V = "M4V"
}

export enum QuestionTemplate {
  DEFINITION = "DEFINITION",
  TRANSLATION = "TRANSLATION",
  INTEPRETATION = "INTEPRETATION"
}

export enum AnswerStatus {
  NEW = "NEW",
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

export enum QuestionStatus {
  NEW = "NEW",
  PENDING = "PENDING",
  ANSWERED = "ANSWERED",
  CLOSED = "CLOSED"
}

export enum CustomType {
  MARRIAGE = "MARRIAGE",
  BIRTH = "BIRTH",
  DEATH = "DEATH"
}

export enum CustomStatus {
  NEW = "NEW",
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

export declare class Suggestion {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly status?: SuggestionStatus | keyof typeof SuggestionStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Suggestion>);
}

export declare class TribeUser {
  readonly id: string;
  readonly tribeId: string;
  readonly userId: string;
  readonly tribeName?: string;
  readonly userName?: string;
  readonly role: TribeRole | keyof typeof TribeRole;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TribeUser>);
}

export declare class File {
  readonly type?: FileType | keyof typeof FileType;
  readonly url?: string;
  readonly size?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<File>);
}

export declare class Answer {
  readonly id: string;
  readonly status?: AnswerStatus | keyof typeof AnswerStatus;
  readonly type: QuestionType | keyof typeof QuestionType;
  readonly title: string;
  readonly vote?: number;
  readonly user?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Answer>);
}

export declare class Country {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Country>);
}

export declare class GeoPosition {
  readonly lat: number;
  readonly long: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<GeoPosition>);
}

export declare class Custom {
  readonly id: string;
  readonly tribeID: string;
  readonly type?: CustomType | keyof typeof CustomType;
  readonly title: string;
  readonly description?: string;
  readonly status?: CustomStatus | keyof typeof CustomStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Custom>);
}

export declare class Proverb {
  readonly id: string;
  readonly tribeID: string;
  readonly title: string;
  readonly meaning: string;
  readonly content: string;
  readonly track?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Proverb>);
}

export declare class Song {
  readonly id: string;
  readonly tribeID: string;
  readonly title: string;
  readonly lyric: string;
  readonly songs: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Song>);
}

export declare class Name {
  readonly id: string;
  readonly tribeID: string;
  readonly name: string;
  readonly gender: string;
  readonly signification: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Name>);
}

export declare class Language {
  readonly id: string;
  readonly tribeID: string;
  readonly name: string;
  readonly description: string;
  readonly questions?: Question[];
  readonly alphabets?: Alphabet[];
  readonly dictionaries?: Dictionary[];
  readonly sentences?: Sentence[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Language>);
}

export declare class Alphabet {
  readonly id: string;
  readonly languageID: string;
  readonly letters?: Letter[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Alphabet>);
}

export declare class Letter {
  readonly id: string;
  readonly symbol: string;
  readonly order: number;
  readonly pronociation?: File;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Letter>);
}

export declare class Dictionary {
  readonly id: string;
  readonly languageID: string;
  readonly name: string;
  readonly words?: Word[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Dictionary>);
}

export declare class Word {
  readonly id: string;
  readonly title: string;
  readonly prononciation?: File;
  readonly meaning: string;
  readonly picture?: File;
  readonly usages?: Sentence[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Word>);
}

export declare class Sentence {
  readonly id: string;
  readonly languageID: string;
  readonly languageName?: string;
  readonly title: string;
  readonly translations?: string;
  readonly track: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Sentence>);
}

export declare class Legend {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly birthdate: string;
  readonly picture: string;
  readonly tribeIds?: string[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Legend>);
}

export declare class History {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly start_at?: string;
  readonly end_at?: string;
  readonly legends?: Legend[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<History>);
}

export declare class User {
  readonly id: string;
  readonly cognitoId: string;
  readonly firstName: string;
  readonly lastName?: string;
  readonly avatar?: string;
  readonly suggestions?: Suggestion[];
  readonly tribes?: TribeUser[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Question {
  readonly id: string;
  readonly title: string;
  readonly type: QuestionType | keyof typeof QuestionType;
  readonly asset?: File;
  readonly languageID: string;
  readonly question_template: QuestionTemplate | keyof typeof QuestionTemplate;
  readonly answers: Answer[];
  readonly status: QuestionStatus | keyof typeof QuestionStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class Tribe {
  readonly id: string;
  readonly name: string;
  readonly symbol?: File;
  readonly description?: string;
  readonly country?: Country;
  readonly localization?: GeoPosition[];
  readonly users?: TribeUser[];
  readonly customs?: Custom[];
  readonly proverbs?: Proverb[];
  readonly songs?: Song[];
  readonly names?: Name[];
  readonly languages?: Language[];
  readonly legends?: Legend[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Tribe>);
  static copyOf(source: Tribe, mutator: (draft: MutableModel<Tribe>) => MutableModel<Tribe> | void): Tribe;
}