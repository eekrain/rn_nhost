export enum UserRolesEnum {
  user = 'user',
  me = 'me',
  anonymous = 'anonymous',
  administrator = 'administrator',
  karyawan = 'karyawan',
}

export type TUserRoleOptions = keyof typeof UserRolesEnum;
