type URL = string;
type Image = string;

export interface BaseEntity {
  id: number;
  title: string;
}

export type TLink = BaseEntity & {
  url: URL;
};

export type TAdvantagesMain = BaseEntity;

export type TPages = BaseEntity & {
  image: Image;
  url: URL;
  description: {
    subject: string;
    text: string;
  }[];
};

export type TAdvantages = BaseEntity & {
  icon: Image;
  description: string;
};

export type TService = BaseEntity & {
  image: Image;
  advantages: [string, string, string, string];
  buttonFocus?: boolean;
};
