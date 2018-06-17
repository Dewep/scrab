const getString = (namespace) => {
  try {
    return window.localStorage.getItem(namespace)
  } catch (e) {}
  return null
}

const setString = (namespace, value) => {
  try {
    window.localStorage.setItem(namespace, value)
  } catch (e) {}
}

const removeString = (namespace) => {
  try {
    return window.localStorage.removeItem(namespace)
  } catch (e) {}
}

const getObject = (namespace) => {
  try {
    return JSON.parse(getString(namespace)) || {}
  } catch (e) {}
  return {}
}

const setObject = (namespace, value) => {
  try {
    setString(namespace, JSON.stringify(value))
  } catch (e) {}
}

const removeObject = (namespace) => {
  removeString(namespace)
}

const updateObject = (namespace, modifier) => {
  const value = modifier(getObject(namespace))
  if (value !== undefined) {
    setObject(namespace, value)
  } else {
    removeObject(namespace)
  }
}

const getDictItem = (namespace, key) => {
  return getObject(namespace)[key]
}

const setDictItem = (namespace, key, value) => {
  updateObject(namespace, dict => {
    dict[key] = value
    return dict
  })
}

const removeDictItem = (namespace, key, value) => {
  updateObject(namespace, dict => {
    if (dict[key] !== undefined) {
      delete dict[key]
    }
    return dict
  })
}

export default {
  getString,
  setString,
  removeString,
  getObject,
  setObject,
  updateObject,
  removeObject,
  getDictItem,
  setDictItem,
  removeDictItem
}
