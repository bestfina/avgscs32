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

export type TCase = BaseEntity & {
  image: [Image, Image, Image, Image];
  url: URL;
  description: Description[];
  advantages: [string, string, string, string];
  data: string;
};

export type TAdvantages = BaseEntity & {
  icon: Image;
  description: string;
};

export type TFaq = BaseEntity & {
  description: Description[];
};

export type TService = BaseEntity & {
  price: string;
  deadline: string;
  advantages: string[];
};

export type TFeedbacks = {
  id: number;
  name: string;
  avatar: string;
  poster: string;
  video?: [string, string];
};

export type TFields = {
  id: number;
  type: string;
  placeholder: string;
  icon: string;
};

export type TAboutInNumber = BaseEntity & {
  count: number;
  text: string;
};
