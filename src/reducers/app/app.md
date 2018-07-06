register:  注册
if (type == "loginname")     //支持登录名+密码登陆
 {
     user.LoginName = model.UserName;
     user.LoginPsw = MathUtils.Md5(model.Password.Trim());
 }
 else if (type == "mobilephone")//支持手机+验证码登陆
 {
     user.MobilePhone = model.UserName;
 }
 else if (type == "email")//支持Email+密码登陆
 {
     user.Email = model.UserName;
 }
 else if (type == "mobilephonepsw")//支持手机+密码登陆