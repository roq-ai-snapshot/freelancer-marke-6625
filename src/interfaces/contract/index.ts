import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContractInterface {
  id?: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  status?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;

  user?: UserInterface;
  _count?: {};
}

export interface ContractGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  status?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
