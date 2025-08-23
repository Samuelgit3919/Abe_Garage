import installController from '../service/install.service.js';

async function install(req, res) {
    await installController.install();
  
  res.send('Installation successful');
}

export default install;