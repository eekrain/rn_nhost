export enum UserRolesEnum {
  user = 'user',
  me = 'me',
  anonymous = 'anonymous',
  admin = 'admin',
  karyawan = 'karyawan',
}

export type TUserRoleOptions = keyof typeof UserRolesEnum;
