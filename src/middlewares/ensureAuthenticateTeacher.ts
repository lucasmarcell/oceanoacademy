import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}


export async function ensureAuthenticateTeacher(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token Missing"
    })
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, "91cd2b3a7db8cd1a3594425eda856409") as IPayload

    request.id_teacher = sub;

    return next()
  } catch (err) {
    return response.status(401).json({
      message: "Invalid Token"
    })
  }
}