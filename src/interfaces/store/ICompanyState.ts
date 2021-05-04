import { ICompany } from '../ICompany'

export interface ICompanyState {
  companies: ICompany[]
  selectedCompany: ICompany
}
