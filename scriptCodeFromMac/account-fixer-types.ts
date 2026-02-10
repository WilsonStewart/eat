import { TStandardErrorReturn } from "./types"

export type TColleageAccount = {
  colleageId: string,
  personId: string,
  email: string
}

export type TAdAccount = {
  username: string,
  email: string,
  ouPath: string,
  groupMembership: string[],
  disabled: boolean,
  userCanChangePassword: boolean,
  passwordExpires: boolean
}

export type TGoogleAccount = {
  email: string,
  firstName: string,
  lastName: string,
  colleageId: string,
  username: string,
  displayName: string
}

export type TPersonPrimaryIdentifiers = {
  colleageId: string,
  username: string
}

export type TColleagePersonPinTableRow = {
  personPinId: string,
  personUserId: string
}

export type TColleagePersonTableRow = {
  id: string,
  email: string,
  firstName: string,
  lastName: string
}

export type TGetPrimaryPersonIdentifiersResult =
  | { returnStatus: "certain"; primaryIdentifiers: TPersonPrimaryIdentifiers }
  | { returnStatus: "uncertain"; possiblePrimaryIdentifiers: TPersonPrimaryIdentifiers[] }
  | TStandardErrorReturn
