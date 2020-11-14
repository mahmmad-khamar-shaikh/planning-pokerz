import { IUser } from './user.interface';

export interface ISession {
  userInfo: IUser;
  teamId: string;
  ceremonyId: string;
}
