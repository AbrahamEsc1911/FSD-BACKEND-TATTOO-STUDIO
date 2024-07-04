export interface TokenDecoded {
    id: number,
    role: number,
    email: string
  }
  declare global {
      namespace Express {
          export interface Request {
              tokenData: TokenDecoded;
          }
      }
}