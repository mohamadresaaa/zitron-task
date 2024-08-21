import jwt from "jsonwebtoken";

export interface AccessToken {
  id: string;
}

export interface AccessTokenPayload {
  id: string;
}

export const signToken = (payload: AccessTokenPayload) =>
  jwt.sign(payload, "jwt-key");

export const verifyToken = (token: string) => {
  return jwt.verify(token, "jwt-key") as AccessToken;
};
