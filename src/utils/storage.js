// 把本地存储封装
class Storage {
  get (key) {
    const value = localStorage.getItem(key)
    try {
      return JSON.parse(value) // 如果是JSON 直接返回
    } catch {
      return value // 如果不是JSON 直接返回正常的值
    }
  }

  set (key, value) {
    if (typeof value === 'object' && value !== null) {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }

  remove (key) {
    localStorage.removeItem(key)
  }
}
export default new Storage()
