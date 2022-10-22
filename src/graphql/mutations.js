/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInfoForm = /* GraphQL */ `
  mutation CreateInfoForm(
    $input: CreateInfoFormInput!
    $condition: ModelInfoFormConditionInput
  ) {
    createInfoForm(input: $input, condition: $condition) {
      id
      fullName
      age
      weight
      height
      weightGoal
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateInfoForm = /* GraphQL */ `
  mutation UpdateInfoForm(
    $input: UpdateInfoFormInput!
    $condition: ModelInfoFormConditionInput
  ) {
    updateInfoForm(input: $input, condition: $condition) {
      id
      fullName
      age
      weight
      height
      weightGoal
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteInfoForm = /* GraphQL */ `
  mutation DeleteInfoForm(
    $input: DeleteInfoFormInput!
    $condition: ModelInfoFormConditionInput
  ) {
    deleteInfoForm(input: $input, condition: $condition) {
      id
      fullName
      age
      weight
      height
      weightGoal
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
