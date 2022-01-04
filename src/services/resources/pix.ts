import api from "../api";

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const request = async (value: number) => {
  return api.post("/pix/request", {
    value,
  });
};

export const pay = async (key: string) => {
  return api.post(`/pix/pay/${key}`);
};

export const transactions = async () => {
  return api.get(`/pix/transactions`);
};
