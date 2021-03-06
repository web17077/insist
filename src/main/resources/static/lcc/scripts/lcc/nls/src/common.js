/**
 * LCC console message file declaration.
 *
 * label = lb
 * tooltip = hv(hover info)
 * button = bt
 * tab = tab
 * table = tb
 *
 * @moduleName ecs
 *
 * @type {{}}
 */


var ALIYUN_LCC_CONSOLE_MESSAGE = {

  /************   LCC common module   ************/
  "lcc.cons.var.all": "全部",
  "lcc.common.dlg.bt.post": "提交",
  "lcc.common.dlg.bt.submit": "确定",
  "lcc.common.dlg.bt.delete": "删除",
  "lcc.common.dlg.bt.cancel": "取消",
  "lcc.common.dlg.bt.close": "关闭",
  "lcc.common.dlg.bt.pre": "上一步",
  "lcc.common.dlg.bt.next": "下一步",
  "lcc.common.dlg.lb.title": "提醒",
  "lcc.common.dlg.lb.title_warning": "警告信息",
  "lcc.common.dlg.lb.act_tips": "操作提示",
  "lcc.common.list.lb.no_data": "没有查询到符合条件的记录",
  "lcc.common.list.lb.length_limit_tips": "长度限制为2-128个字符。",
  "lcc.common.list.lb.length_limit_min_max": "长度限制为{{min}}-{{max}}个字符。",
  "lcc.common.list.lb.status": "状态",
  "lcc.common.list.lb.progress": "进度",
  "lcc.common.list.lb.action": "操作项",
  "lcc.common.list.lb.more": "更多",
  "lcc.cm.lb.refresh": "刷新",
  "lcc.vmlist.lb.instance_list": "实例列表",
  "ecs.vm.act.rst.restart": "重启实例{0}操作提交完成。",
  "ecs.vm.act.dlg.start_title": "启动实例",
  "ecs.vm.act.dlg.restart_title": "重启实例",
  "ecs.vm.act.dlg.restart_action_name": "重启",
  "ecs.vm.act.dlg.restart_action_type_name": "重启方式",
  "ecs.vm.act.dlg.restart_force_action_type_name": "强制重启",
  "ecs.vm.act.dlg.restart_force_action_message": "强制重启模式，会导致云服务器实例当前未保存的数据丢失。",
  "ecs.vm.act.dlg.stop_title": "停止实例",
  "ecs.vm.act.dlg.stop_tips": "包年包月实例停止后不会改变到期时间，",
  "ecs.vm.act.dlg.stop_tips_after_pay": "按量付费实例停止后依然会收取您资源占用费用（如CPU/内存等费用），",
  "ecs.vm.act.dlg.stop_action_name": "停止",
  "ecs.vm.act.dlg.stop_action_type_name": "停止方式",
  "ecs.vm.act.dlg.stop_force_action_type_name": "强制停止",
  "ecs.vm.act.dlg.stop_force_action_message": "强制停止模式，会导致云服务器实例当前未保存的数据丢失。",
  "ecs.vm.act.dlg.common_action_type_name": "{{actionTypeName}}：",
  "ecs.vm.act.dlg.common_action_name": "{{actionName}}",
  "ecs.vm.act.dlg.common_force_action_name": "{{forceActionTypeName}}",
  "ecs.vm.act.dlg.common_force_action_message": "{{forceActionMessage}}",
  "ecs.vm.act.dlg.common_force_action_confirm_message": "确定要强制{{actionName}}",
  "ecs.vm.act.dlg.common_confirm_message": "您确定要对 <strong class=\"text-warning\">{{instanceId}}/{{instanceName}}</strong> 实例进行{{actionName}}操作吗？",

  "ecs.vm.act.rst.delete": "删除实例{0}操作提交完成。",
  "ecs.vm.act.dlg.delete_title": "删除实例",
  "ecs.vm.act.dlg.delete_action_name": "删除",
  "ecs.vm.act.dlg.delete_action_type_name": "删除方式",
  "ecs.vm.act.dlg.delete_force_action_type_name": "强制删除",
  "ecs.vm.act.dlg.delete_force_action_message": "强制删除模式，会导致云服务器实例当前未保存的数据丢失。",
  "ecs.vm.act.dlg.delete_force_action_confirm_message": "确定要强制{{actionName}}",
  "ecs.vm.act.dlg.delete_confirm_message": "您确定要对 <strong class=\"text-warning\">{{instanceId}}</strong> 实例进行{{actionName}}操作吗？",


}

module.exports = ALIYUN_LCC_CONSOLE_MESSAGE;