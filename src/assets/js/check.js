// 移动电话正则
const PHONE = /^1[0-9]{10}$/;
// 固定电话正则
const FIXPHONE = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;

// 校验移动电话
export function validateMobilePhone(rule, value, callback) {
  if (value === '' || PHONE.test(value)) {
    callback();
  } else {
    callback(new Error('请输入正确的电话号码'));
  }
}

// 校验电话号码
export function validatePhone(rule, value, callback) {
  // 空校验 移动电话校验 固定电话校验
  if (value === '' || PHONE.test(value) || FIXPHONE.test(value)) {
    callback();
  } else {
    callback(new Error('请输入正确的电话'));
  }
}
