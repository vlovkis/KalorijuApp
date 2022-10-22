import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type InfoFormMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerInfoForm = {
  readonly id: string;
  readonly fullName?: string | null;
  readonly age?: number | null;
  readonly weight?: number | null;
  readonly height?: number | null;
  readonly weightGoal?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInfoForm = {
  readonly id: string;
  readonly fullName?: string | null;
  readonly age?: number | null;
  readonly weight?: number | null;
  readonly height?: number | null;
  readonly weightGoal?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InfoForm = LazyLoading extends LazyLoadingDisabled ? EagerInfoForm : LazyInfoForm

export declare const InfoForm: (new (init: ModelInit<InfoForm, InfoFormMetaData>) => InfoForm) & {
  copyOf(source: InfoForm, mutator: (draft: MutableModel<InfoForm, InfoFormMetaData>) => MutableModel<InfoForm, InfoFormMetaData> | void): InfoForm;
}