const handlers = require('./handlers');

function pipline(app) {
  // Auth
  app.post('/client-api/auth/login', handlers.auth.login);
  app.post('/client-api/auth/logout', handlers.auth.logout);

  // Users
  app.get('/client-api/users', handlers.users.query);
  app.put('/client-api/users/:id', handlers.users.update);
  app.post('/client-api/users', handlers.users.add);

  // Folders
  app.get('/client-api/folders', handlers.folders.query);
  app.get('/client-api/folders/:id', handlers.folders.folderDetail);
  app.get('/client-api/folders/:id/targets', handlers.folders.getTargets);
  app.post('/client-api/folders', handlers.folders.create);
  app.put('/client-api/folders/:id', handlers.folders.update);
  app.delete('/client-api/folders/:id', handlers.folders.deleteFolder);
  app.get('/client-api/folders/:id/tree', handlers.folders.getTree);
  app.get('/client-api/folders/:id/statistics/history', handlers.folders.getStatisticsHistory);

  //Profile
  app.get('/client-api/profile', handlers.profile.get);
  app.put('/client-api/profile', handlers.profile.changeInfo);
  app.post('/client-api/profile/change_password', handlers.profile.changePassword);
  app.get('/client-api/profile/bookmarks', handlers.profile.getBookmarks);
  app.post('/client-api/profile/bookmarks', handlers.profile.postBookmarks);
  app.delete('/client-api/profile/bookmarks/:id', handlers.profile.deleteBookmarks);

  //Networks Configs
  app.get('/client-api/settings/network/test', handlers.networks.getNetworkTest);
  app.get('/client-api/settings/network/configs', handlers.networks.getNetworkConfigs);
  app.put('/client-api/settings/network/configs', handlers.networks.changeNetworkConfigs);
  app.get('/client-api/settings/network/interfaces', handlers.networks.getNetworkInterfaces);
  app.put('/client-api/settings/network/interfaces/:id', handlers.networks.changeNetworkInterfaces);

  //Email Configs
  app.get('/client-api/settings/emails/configs', handlers.emails.getEmailServerConfigs);
  app.put('/client-api/settings/emails/configs', handlers.emails.changeEmailServerConfigs);
  app.get('/client-api/settings/emails/test', handlers.emails.getEmailServerTest);
  app.get('/client-api/settings/emails', handlers.emails.getEmailEvents);
  app.post('/client-api/settings/emails', handlers.emails.addEmailEvents);
  app.put('/client-api/settings/emails/:id', handlers.emails.updateEmailEvents);

  //Proxy Configs
  app.get('/client-api/settings/proxy', handlers.proxy.getProxy);
  app.post('/client-api/settings/proxy', handlers.proxy.addProxy);
  app.get('/client-api/settings/proxy/:id', handlers.proxy.getProxyDetail);
  app.put('/client-api/settings/proxy/:id', handlers.proxy.changeProxy);
  app.delete('/client-api/settings/proxy/:id', handlers.proxy.deleteProxy);
  app.get('/client-api/settings/proxy/current', handlers.proxy.getProxyCurrent);

  //Vpn Configs
  app.get('/client-api/settings/vpn/configs', handlers.vpn.getVpn);
  app.get('/client-api/settings/vpn/configs', handlers.vpn.getVpn);
  app.get('/client-api/settings/vpn/providers', handlers.vpn.getProviders);
  app.post('/client-api/settings/vpn/providers', handlers.vpn.create);
  app.post('/client-api/settings/vpn/files', handlers.vpn.uploadVPN);
  app.put('/client-api/settings/vpn/providers/:id', handlers.vpn.update);

  //License Configs
  app.get('/client-api/systems/licenses', handlers.licenses.getLicenses);
  app.put('/client-api/systems/licenses', handlers.licenses.changeLicenses);

  //Slide Banner
  app.get('/get-banner', handlers.slide.getListSlide);

  // Targets
  app.post('/client-api/folders/:folderId/targets', handlers.targets.create);
  app.post('/client-api/folders/:folderId/targets/crawler', handlers.targets.uploadCrawler);
  app.get('/client-api/folders/:folderId/targets/:targetId', handlers.targets.get);
  app.put('/client-api/folders/:folderId/targets/:targetId', handlers.targets.update);
  app.delete('/client-api/folders/:folderId/targets/:targetId', handlers.targets.remove);
  app.get('/client-api/folders/:folderId/targets/:targetId/tree', handlers.targets.getTree);
  app.get('/client-api/folders/:folderId/targets/:targetId/statistics/history', handlers.targets.getStatisticsHistory);
  app.get('/client-api/folders/:folderId/targets/:targetId/statistics', handlers.targets.getStatistics);
  app.put('/client-api/folders/:folderId/targets/:targetId/status', handlers.targets.updateStatus);

  //Tasks
  app.get('/client-api/folders/:folderId/targets/:targetId/tasks', handlers.tasks.getTargetTasks);
  app.get('/client-api/folders/:folderId/tasks', handlers.tasks.getTasks);
  app.get('/client-api/folders/:folderId/targets/:targetId/tasks/:taskId', handlers.tasks.getTasksDetails);
  app.get('/client-api/folders/:folderId/targets/:targetId/tasks/:taskId/hosts', handlers.tasks.getHosts);
  app.get('/client-api/folders/:folderId/targets/:targetId/tasks/:taskId/hosts/:hostId', handlers.tasks.getHostInfo);
  app.get('/client-api/folders/:folderId/targets/:targetId/tasks/:taskId/technology', handlers.tasks.getTechnology);
  app.get('/client-api/folders/:folderId/targets/:targetId/tasks/:taskId/hosts/:hostId/services', handlers.tasks.getServices);
  app.get('/client-api/folders/:folderId/targets/:targetId/tasks/:taskId/urls', handlers.tasks.getUrls);
  app.get('/client-api/folders/:folderId/targets/:targetId/tasks/:taskId/urls/:urlId', handlers.tasks.getUrlInfo);
  app.get('/client-api/folders/:folderId/targets/:targetId/tasks/:taskId/statistics', handlers.tasks.getStatistics);

  //Risks
  //TODO: Đang fake data
  app.get('/client-api/risks', handlers.risks.query);
  //TODO: Đang fake data
  app.get('/client-api/riskdata', handlers.risks.getData);
  //TODO: Đang fake data
  app.put('/client-api/fix', handlers.fix.updateFixStatus);
  //TODO: Đang fake data
  app.put('/client-api/riskdata', handlers.tasks.updateData);
  app.post('/client-api/riskdata/notes', handlers.risks.addNotes);

  //Dashboard
  app.get('/client-api/dashboard/statistics', handlers.dashboard.getStatistics);
  app.get('/client-api/dashboard/statistics/history', handlers.dashboard.getStatisticsHistory);

  //Startup
  app.get('/client-api/systems/started', handlers.startup.getStarted);
  app.post('/client-api/systems/started/users', handlers.startup.createFirstUser);
  app.post('/client-api/systems/started/license', handlers.startup.addLicenseKey);
  app.get('/client-api/systems/started/networks', handlers.startup.getNetworks);
  app.put('/client-api/systems/started/networks', handlers.startup.updateNetwork);
  app.get('/client-api/settings/network/test', handlers.startup.testInterface);
}

module.exports = {
  pipline
};
