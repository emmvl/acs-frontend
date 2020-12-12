import machineAPI from '@/services/api/machine'

const selectMachine = ({ commit }, id) => {
  commit('selectData', id)
}

const updateSelections = ({ commit }, selections) => {
  commit('updateSelections', selections)
}

const getAllConfigurations = async ({ commit }) => {
  try {
    const response = await machineAPI.getAllConfigurations()

    commit('SET_MACHINES', response.data.configurations)
  } catch (error) {
    console.log(error)
  }
}

const addNote = ({ commit, state }, data) => {
  state.isNoteAdding = true

  return new Promise((resolve, reject) => {
    machineAPI.addNote(data)
      .then((response) => {
        commit('SET_NOTES', response.data.notes)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
      .finally(() => {
        state.isNoteAdding = false
      })
  })
}

const initAcsDashboard = ({ commit, state }) => {
  machineAPI.initAcsDashboard()
    .then((response) => {
      commit('customers/SET_COMPANIES', response.data.companies, { root: true })
      if (!state.selectedCompany)
        commit('SET_SELECTED_COMPANY', response.data.companies[0])
    })
    .catch((error) => {
      console.log(error.response)
    })
    .finally(() => {
    })
}

const changeSelectedCompany = ({ commit }, company) => {
  commit('SET_SELECTED_COMPANY', company)
}

const selectTimeRange = ({ commit, dispatch, state }, key) => {
  commit('SET_CURRENT_TIME_PARAM_KEY', key)
  commit('SET_CURRENT_TIME_RANGE_ITEM', key)
}

// product analytics init
const initProduct = ({ commit, state }, id) => {
  commit('WEIGHT_PRODUCT_LOADING')
  commit('INVENTORY_PRODUCT_LOADING')
  machineAPI.initProduct({
    machineId: id,
    param: state.paramWeightProduct,
    paramInventory: state.paramInventory,
    inventoryTimeRange: state.inventoryTimeRange,
    weightTimeRange: state.weightTimeRange
  })
    .then((response) => {
      // set machine notes
      commit('SET_NOTES', response.data.notes)

      commit('SET_TGT_WEIGHT_VALUES', response.data.targets)
      commit('SET_ACT_WEIGHT_VALUES', response.data.actuals)
      commit('SET_HOP_INVENTORY_VALUES', response.data.hops)
      commit('SET_FRT_INVENTORY_VALUES', response.data.fractions)

      // BD Batch Blender
      commit('SET_RUNNING_PERCENTAGE', parseFloat((response.data.total_running_percentage * 100).toFixed(2)))
      commit('SET_RECIPE_VALUES', response.data.recipe_values)

      // GH Gravimetric Extrusion Control Hopper
      commit('SET_HOPPER_INVENTORIES', response.data.hopper_inventories)
      commit('SET_HAULOFF_LENGTHS', response.data.hauloff_lengths)
      commit('SET_RECIPE_SET_POINTS', response.data.set_points)
      commit('SET_RECIPE_ACTUAL_POINTS', response.data.actual_points)

      commit('alarms/SET_ALARM_TYPES', response.data.alarm_types, { root: true })
      commit('alarms/SET_ALARMS', response.data.alarms, { root: true })
    })
    .catch((error) => {
      console.log(error.response)
    })
    .finally(() => {
      commit('WEIGHT_PRODUCT_LOADED')
      commit('INVENTORY_PRODUCT_LOADED')
    })
}

const getOverview = async ({ commit }, id) => {
  commit('OVERVIEW_LOADING')

  try {
    const response = await machineAPI.getOverview(id)

    commit('SET_OVERVIEW', response.data.overview)        
  } catch (error) {
    console.log(error)
  } finally {
    commit('OVERVIEW_LOADED')
  }
}

const getUtilization = async ({ state, commit }, id) => {
  state.loadingUtilization = true

  try {
    const response = await machineAPI.getUtilization({
      id: id,
      timeRange: state.utilizationTimeRange
    })

    commit('SET_UTILIZATION', response.data.utilizations)
  } catch (error) {
    console.log(error)
  } finally {
    state.loadingUtilization = false
  }
}

const getEnergyConsumption = async ({ state, commit }, id) => {
  state.loadingEnergyConsumption = true

  try {
    const response = await machineAPI.getEnergyConsumption({
      id: id,
      timeRange: state.energyConsumptionTimeRange
    })

    commit('SET_ENERGY_CONSUMPTION', response.data.energy_consumption)
  } catch (error) {
    console.log(error)
  } finally {
    state.loadingEnergyConsumption = false
  }
}

const getRecipe = async ({ state, commit }, id) => {
  state.loadingRecipe = true

  try {
    const response = await machineAPI.getRecipe(id)

    commit('SET_RECIPE_VALUES', response.data.recipe_values)
  } catch (error) {
    console.log(error)
  } finally {
    state.loadingRecipe = false
  }
}

const getWeight = async ({ state, commit }, id) => {
  state.loadingWeight = true

  try {
    const response = await machineAPI.getWeight(id)

    commit('SET_ACTUAL_WEIGHTS', response.data.actuals)
    commit('SET_TARGET_WEIGHTS', response.data.targets)
  } catch (error) {
    console.log(error)
  } finally {
    state.loadingWeight = false
  }
}

const getWeeklyRunningHours = async ({ state, commit }, id) => {
  state.loadingWeeklyRunningHours1 = true

  try {
    const response = await machineAPI.getWeeklyRunningHours(id)

    commit('SET_WEEKLY_RUNNING_HOURS', response.data.hours)        
  } catch (error) {
    console.log(error)
  } finally {
    state.loadingWeeklyRunningHours1 = false
  }
}

const initLocationsTable = async ({ state, commit }) => {
  state.loadingLocationsTable = true

  try {
    const response = await machineAPI.initLocationsTable()

    commit('locations/SET_DATA', response.data.locations, { root: true })
  } catch (error) {
    console.log(error)
  } finally {
    state.loadingLocationsTable = false
  }
}

const initAcsZonesTable = async ({ state, commit }, location_id) => {
  state.loadingZonesTable = true

  try {
    const response = await machineAPI.initAcsZonesTable(location_id)

    commit('zones/SET_DATA', response.data.zones, { root: true })
  } catch (error) {
    console.log(error)
  } finally {
    state.loadingZonesTable = false
  }
}

const initAcsMachinesTable = async ({ state, commit }, zone) => {
  state.loadingMachinesTable = true

  try {
    const response = await machineAPI.initAcsMachinesTable(zone)

    commit('devices/SET_DATA', response.data.devices, { root: true })
  } catch (error) {
    console.log(error)
  } finally {
    state.loadingMachinesTable = false
  }
}

const onProductWeightParamChange = ({ commit, state }) => {
  commit('WEIGHT_PRODUCT_LOADING')
  machineAPI.changeProductWeightMode({
    param: state.paramWeightProduct,
    timeRange: state.weightTimeRange
  })
    .then((response) => {
      commit('SET_TGT_WEIGHT_VALUES', response.data.targets)
      commit('SET_ACT_WEIGHT_VALUES', response.data.actuals)
    })
    .catch((error) => {
      console.log(error.response)
    })
    .finally(() => {
      commit('WEIGHT_PRODUCT_LOADED')
    })
}

const onProductInventoryParamChanged = ({ commit, dispatch, state }, data) => {
  commit('SET_PRODUCT_INVENTORY_PARAM', data.param)

  // dispatch('getInventory')
}

const getInventory = async ({ commit, state }, id) => {
  state.loadingInventories = true

  try {
    const response = await machineAPI.getInventory(id)

    commit('SET_INVENTORIES', response.data.inventories)
  } catch (error) {
    console.log(error)
  } finally {
    state.loadingInventories = false
  }
}

const onTimeRangeChanged = ({ commit, dispatch, state }, data) => {
  if (state.selectedTimeRangeKey === 'utilization') {
    commit('SET_UTILIZATION_TIME_RANGE', data)
    dispatch('getUtilization', data.id)
  } else if (state.selectedTimeRangeKey === 'energy-consumption') {
    commit('SET_ENERGY_CONSUMPTION_TIME_RANGE', data)
    dispatch('getEnergyConsumption', data.id)
  }
}
const getMachines = ({ commit }) => {
  return machineAPI.getMachines().then((response) => {
    commit('SET_MACHINES', response.data.machines)
  })
}

export default {
  getAllConfigurations,
  selectMachine,
  updateSelections,
  addNote,
  initAcsDashboard,
  initLocationsTable,
  initAcsZonesTable,
  initAcsMachinesTable,
  changeSelectedCompany,
  selectTimeRange,
  initProduct,
  getOverview,
  getUtilization,
  getEnergyConsumption,
  getInventory,
  getRecipe,
  getWeight,
  getWeeklyRunningHours,
  onProductWeightParamChange,
  onProductInventoryParamChanged,
  onTimeRangeChanged,
  getMachines
}
