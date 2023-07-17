const mapping: Record<string, string> = {
  invitations: 'invitation',
  organizations: 'organization',
  progresses: 'progress',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
