const { clipboard, ipcMain } = require('electron')
const { getUrl, deleteData, getApiUrl } = require('./getData')

ipcMain.handle('COPY_URL', async () => {
  const url = await getUrl()
  if (url) {
    clipboard.writeText(url)
    return true
  }
  return false
})

ipcMain.handle('COPY_API_URL', async () => {
  const apiUrl = await getApiUrl()
  if (apiUrl) {
    clipboard.writeText(apiUrl)
    return true
  }
  return false
})

ipcMain.handle('DELETE_DATA', async (event, uid, action) => {
  await deleteData(uid, action)
})