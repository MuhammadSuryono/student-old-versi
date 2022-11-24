const module = "/statistics/module/visitor";
const activity = "/statistics/activity/visitor";
const page = "/statistics/page/visitor";

export default ($axios) => ({
  addModuleStatistic(payload) {
    return $axios.post(`${module}`, {
      module_id: payload.module_id,
    });
  },
  addActivityStatistic(payload) {
    return $axios.post(`${activity}`, {
      activity_id: payload.activity_id,
      activity_name: payload.activity_name,
      activity_type_id: payload.activity_type_id,
    });
  },
  addPageStatistic(payload) {
    return $axios.post(`${page}`, {
      page_name: payload.page_name,
    });
  },
});
