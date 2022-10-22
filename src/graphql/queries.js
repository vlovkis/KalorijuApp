/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInfoForm = /* GraphQL */ `
  query GetInfoForm($id: ID!) {
    getInfoForm(id: $id) {
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
export const listInfoForms = /* GraphQL */ `
  query ListInfoForms(
    $filter: ModelInfoFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfoForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncInfoForms = /* GraphQL */ `
  query SyncInfoForms(
    $filter: ModelInfoFormFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInfoForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
