/*
 * 错误码提示
 */
const TIP = {
    '200': '用户名为空',
    '201': '密码为空',
    '202': '用户名已经被占用',
    '203': '电子邮箱地址已经被占用',
    '204': '没有提供电子邮箱地址',
    '205': '找不到电子邮箱地址对应的用户',
    '206': '无法修改用户信息',
    '207': '只能通过注册创建用户，不允许第三方登录',
    '208': '第三方帐号已经绑定到一个用户，不可绑定到其他用户',
    '210': '用户名和密码不匹配',
    '211': '用户不存在，请先注册',
    '212': '请提供手机号码',
    '213': '手机号码对应的用户不存在',
    '214': '手机号码已经被注册',
    '215': '未验证的手机号码',
    '216': '未验证的邮箱地址',
    '217': '无效的用户名，不允许空白用户名',
    '218': '无效的密码，不允许空白密码',
    '219': '登录失败次数超过6次，15分钟后请再次尝试或重置密码'
}

/*
 * errorCode全局方法
 */
exports.install = function(Vue, options) {
    Vue.prototype.errorCode = function(err) {
        this.$alert(TIP[err], '温馨提示', {
            confirmButtonText: '确定',
            /* callback: action => {
                this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                });
            } */
        });
    };
};