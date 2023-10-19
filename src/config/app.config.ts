interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Tech Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Business Owner', 'Project Manager', 'Freelancer', 'Client', 'Team Member', 'Tech Admin'],
  tenantName: 'Contract',
  applicationName: 'freelancer marketplace like upwork',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage tasks', 'Read project details', 'Read contract details', 'Manage own user details'],
  ownerAbilities: ['Manage user data', 'Manage project data', 'Manage contract data', 'Manage task data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/dade77bd-a58a-4076-a2ca-e1887fee5762',
};
