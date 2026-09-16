export type Partner = {
  id: number;
  slug: string;
  name: string;
  logo: string;
  description: string;
  location: string;
};

export type Candidate = {
  id: number;
  name: string;
  surname: string;
  category: string;
  location: string;
  experience: string;
  tags: string[];
  status: string;
};

export type Job = {
  id: number;
  title: string;
  partnerId: number;
  category: string;
  salary: string;
  location: string;
  description: string;
  type: string;
  partnerSlug?: string;
};

export type Category = {
  id: number;
  title: string;
  slug: string;
};

export type ApplicationFormData = {
  name: string;
  phoneOrTelegram: string;
  message: string;
};
