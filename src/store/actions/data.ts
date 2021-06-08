import { IUser } from 'models/user';

interface ActionGetUserData {
  userInfo: IUser;
  type: 'GET_USER_DATA';
}

export function getUserData(userId: number): ActionGetUserData {
  // TODO Change with actual API CALL or whatever
  const userInfo: IUser = {
    name: 'Fake User',
    email: 'fakeuser@fakemail.com',
    id: userId,
  };
  return {
    userInfo,
    type: 'GET_USER_DATA',
  };
}

export type DataActions = ActionGetUserData;
