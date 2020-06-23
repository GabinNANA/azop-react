// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SuggestionStatus = {
  "NEW": "NEW",
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED",
  "REJECTED": "REJECTED"
};

const TribeRole = {
  "TCHINDA": "TCHINDA",
  "NOTABLE": "NOTABLE",
  "BOMBOCK": "BOMBOCK"
};

const QuestionType = {
  "TEXT": "TEXT",
  "IMAGE": "IMAGE",
  "AUDIO": "AUDIO",
  "VIDEO": "VIDEO"
};

const FileType = {
  "TXT": "TXT",
  "PNG": "PNG",
  "JPG": "JPG",
  "MP3": "MP3",
  "OGG": "OGG",
  "WAV": "WAV",
  "WEBM": "WEBM",
  "MPEG": "MPEG",
  "AVI": "AVI",
  "FLV": "FLV",
  "MOV": "MOV",
  "MP4": "MP4",
  "M4_V": "M4V"
};

const QuestionTemplate = {
  "DEFINITION": "DEFINITION",
  "TRANSLATION": "TRANSLATION",
  "INTEPRETATION": "INTEPRETATION"
};

const AnswerStatus = {
  "NEW": "NEW",
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED",
  "REJECTED": "REJECTED"
};

const QuestionStatus = {
  "NEW": "NEW",
  "PENDING": "PENDING",
  "ANSWERED": "ANSWERED",
  "CLOSED": "CLOSED"
};

const CustomType = {
  "MARRIAGE": "MARRIAGE",
  "BIRTH": "BIRTH",
  "DEATH": "DEATH"
};

const CustomStatus = {
  "NEW": "NEW",
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED",
  "REJECTED": "REJECTED"
};

const { User, Question, Tribe, Suggestion, TribeUser, File, Answer, Country, GeoPosition, Custom, Proverb, Song, Name, Language, Alphabet, Letter, Dictionary, Word, Sentence, Legend, History } = initSchema(schema);

export {
  User,
  Question,
  Tribe,
  SuggestionStatus,
  TribeRole,
  QuestionType,
  FileType,
  QuestionTemplate,
  AnswerStatus,
  QuestionStatus,
  CustomType,
  CustomStatus,
  Suggestion,
  TribeUser,
  File,
  Answer,
  Country,
  GeoPosition,
  Custom,
  Proverb,
  Song,
  Name,
  Language,
  Alphabet,
  Letter,
  Dictionary,
  Word,
  Sentence,
  Legend,
  History
};