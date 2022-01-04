import api from "../api";

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}

export const signIn = async (data: SignInData) => {
  //const user = await api.post('/user/signin', data);
  //Se usar o return não precisa passar o await
  return api.post("/user/signin", data);
};

export const me = async () => {
  return api.get<UserDto>("/user/me");
};

export const signUp = async (data: SignUpData) => {
  return api.post("/user/signup", data);
};
