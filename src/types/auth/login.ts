export type Credentials = {
  email: string;
  password: string;
};

export type LoginResponse = {
  jwt: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
};
