interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Trainee'],
  customerRoles: [],
  tenantRoles: ['Trainee'],
  tenantName: 'Organization',
  applicationName: 'JIBA_Trade',
  addOns: ['chat', 'notifications', 'file'],
};
