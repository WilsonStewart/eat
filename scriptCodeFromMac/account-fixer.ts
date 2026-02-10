import { TColleagePersonPinTableRow, TColleagePersonTableRow, TPersonPrimaryIdentifiers } from "./account-fixer-types";

async function getPrimaryPersonIdentifiers(
  identifier: { colleageId: string } | { username: string }
): Promise<TGetPrimaryPersonIdentifiersResult> {
  let result: Partial<TPersonPrimaryIdentifiers> = {}
  let certain: boolean = false

  if ("colleageId" in identifier) {
    result.colleageId = identifier.colleageId

    // query by colleageId
    let personPinRow = await (async (identifier): Promise<TColleagePersonPinTableRow | undefined> => { return undefined })()

    if (personPinRow) {
      result.username = personPinRow.personUserId
    }
    else { }
  }
  else if ("username" in identifier) {
    result.username = identifier.username

    // query by username
    let personPinRow = await (async (identifier): Promise<TColleagePersonPinTableRow | undefined> => { return undefined })()

    if (personPinRow) {
      result.colleageId = personPinRow.personPinId
    }
    else { }
  }
}
