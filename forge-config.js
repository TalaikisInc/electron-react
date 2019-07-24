module.exports = { // https://www.electronforge.io/configuration
  makers: [
    {
      name: '@electron-forge/maker-deb',
      config: {
        name: "my_app",
        options: {
          maintainer: 'Tadas Talaikis',
          homepage: 'https://talaikis.com'
        }
      }
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        name: "my_app",
        options: {
          maintainer: 'Tadas Talaikis',
          homepage: 'https://talaikis.com'
        }
      }
    },
    {
      name: '@electron-forge/maker-squirrel', // https://js.electronforge.io/maker/squirrel/interfaces/makersquirrelconfig
      config: {
        certificateFile: './cert.pfx',
        certificatePassword: 'this-is-a-secret'
      }
    }
  ]
}
