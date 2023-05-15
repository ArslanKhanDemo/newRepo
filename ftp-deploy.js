const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();
let pass = "D2c)ok(ra4p2DcVkDpp*";
const config = {
    user: "myFirstSiteDeployment2",
    password: pass,
    host: 'files.000webhost.com',
    port: 21,
    localRoot:__dirname,
    remoteRoot: '/public_html',
    include: ['*', '**/*'],      // this will upload everything
    deleteRemote: true,          // delete existing files at the remote location
    forcePasv: true,             // force passive mode
    connTimeout: 10000
};

ftpDeploy.deploy(config)
    .then(res => console.log('Deployment complete:', res))
    .catch(err => console.error("ERRORSSsss:",err));
