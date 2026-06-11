export interface User {
  username: string;
  password: string;
}

export interface AuthResponse {
  msg: string;
  token: string;
}

export interface RegisterResponse {
  msg: string;
}
