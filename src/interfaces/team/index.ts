import { TeamMemberInterface } from 'interfaces/team-member';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  team_member?: TeamMemberInterface[];

  _count?: {
    team_member?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
