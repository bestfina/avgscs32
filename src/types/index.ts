type URL = string;
type Image = string;

interface BaseEntity {
  id: number;
  title: string;
}

export type TLink = BaseEntity & {
  url: URL;
};

export type TAdvantagesMain = BaseEntity;

interface Description {
  subject: string;
  text: string;
}

export type TPages = BaseEntity & {
  image: Image;
  url: URL;
  description: Description[];
  data: string;
};

export type TAdvantages = BaseEntity & {
  icon: Image;
  description: string;
};

export type TFaq = BaseEntity & {
  text: string;
};

export type TService = BaseEntity & {
  image: Image;
  advantages: [string, string, string, string];
};

export type TFeedbacks = {
  id: number;
  name: string;
  avatar: string;
  poster: string;
  video?: [string, string];
};
