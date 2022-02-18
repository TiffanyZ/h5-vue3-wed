import { post } from "./index.js";
export const getIdData = p => post("home_id", p); // 获取lastId
export const resetId = p => post("home_id_reset", p); // 重置lastId
export const addHomeData = p => post("home_data_add", p); // 新增内容
export const delHomeData = p => post("home_data_del", p); // 删除内容
export const addHomeList = p => post("home_list_set", p); // 内容审核通过（添加list按照栏目划分）
export const getHomeAll = p => post("home_all", p); // all
export const getHomeList = p => post("home_list", p); // list（按照栏目取）
export const getTagList = p => post("tag_list", p); // tag
export const getColumnList = p => post("column_list", p); // 根据栏目获取list（审核通过）
export const backColumnList = p => post("home_back_all", p); // 根据栏目获取list（撤回）
export const saveDraft = p => post("save_draft", p); // 保存草稿
export const getDraft = p => post("get_draft", p); // 保存草稿
export const getOper = p => post("oper_code", p); // czy
export const addTag = p => post("add_tag", p); // 新增标签
