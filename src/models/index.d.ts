import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type InfoFormMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class InfoForm {
  readonly id: string;
  readonly fullName?: string | null;
  readonly age?: number | null;
  readonly weight?: number | null;
  readonly height?: number | null;
  readonly weightGoal?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<InfoForm, InfoFormMetaData>);
  static copyOf(source: InfoForm, mutator: (draft: MutableModel<InfoForm, InfoFormMetaData>) => MutableModel<InfoForm, InfoFormMetaData> | void): InfoForm;
}