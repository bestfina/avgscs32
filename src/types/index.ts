type URL = string;
type Image = string;

interface BaseEntity {
  id: number;
  title: string;
}

export type TLink = BaseEntity & {
  url: URL;
};

interface Description {
  subject: string;
  text: string;
}

export type TCase = BaseEntity & {
<<<<<<< HEAD
  video: Image;
  url: URL;
  description: string;
=======
  image: Image;
  url: URL;
  description: Description[];
  advantages: [string, string, string, string];
  data: string;
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
};

export type TAdvantages = BaseEntity & {
  icon: Image;
  description: string;
};

export type TFaq = BaseEntity & {
  description: Description[];
};

export type TService = BaseEntity & {
  icon: Image;
<<<<<<< HEAD
  url: URL;
  description: string;
=======
  price: string;
  deadline: string;
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
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
