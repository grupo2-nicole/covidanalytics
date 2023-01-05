export interface iContextProviderProps {
  children: React.ReactNode;
}

export interface iRegisterData {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  state: string;
  img: string;
}

export interface iLoginData {
  email: string;
  password: string;
}
