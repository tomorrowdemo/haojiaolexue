
//注册页面js
$(document).ready(function(){
              $("#Register").validate({
                debug:true,  
                rules: { 
                    Mobile: {
                        required: true,  
                        minlength: 11, 
                        digits:true
                    }, 
                    Name: {  
                        required: true,  
                        minlength: 2  
                    },  
                    Email: {  
                        required: true,  
                        email: true  
                    },  
                    PassWord: {
                        required: true,
                        minlength: 6
                    },
                    confirm_PassWord: {
                        required: true,
                        equalTo: "#PassWord",
                        minlength: 6
                        
                    },
                    School:{
                        required: true,                      
                    },
                    Grade:{
                        required: true, 
                    }
                },  
                messages: { 
                    Mobile: {
                        required: '请输入手机号码',  
                        minlength: '请输入正确的手机号码',
                        digits: '请输入正确的手机号码',
                    },  
                    Name: {  
                        required: '请输入姓名',  
                        minlength: '请至少输入两个字符'  
                    },  
                    Email: {  
                        required: '请输入电子邮件',  
                        email: '请检查电子邮件的格式'  
                    },  
                    PassWord: {
                        required: "请输入密码",
                        minlength: "密码不能小于6个字符"
                    },
                    confirm_PassWord: {
                        required: "请输入确认密码",
                        minlength: "确认密码不能小于6个字符",
                        equalTo: "两次输入密码不一致"
                    },
                    School: {
                        required: "请输入学校",                       
                    },
                    Grade:{
                        required: "请输入年级", 
                    }
                } 
                  
             });
         });  
         $(document).ready(function(){
              var options = { 
                  url:"/user/doReg",
                  type:"POST",
                  target: '#hehe',
                  beforeSubmit: showRequest,  //提交前的回调函数  
                  success: showResponse,      //提交后的回调函数  
                  dataType:  'json',

              };            
             // ajaxSubmit
              $("#btn-reg").click(function () {
                  $("#Register").ajaxSubmit(options);
              });
           
             function showResponse(responseText, statusText){  
                  //dataType=xml  
                  //var name = $('name', responseXML).text();  
                  //var address = $('address', responseXML).text();  
                  //$("#xmlout").html(name + "  " + address);  
                  //dataType=json ;
                  $("#hehe").html("");
                  if (statusText=='success') {
                         //showResponse;
                         //$.getJSON()
                         //$("#hehe").append(responseText.msg);
                        
                        if (responseText.status==0) {
                          $("#hehe").append(responseText.msg);
                          $("#btnLogin").show();
                        }
                        else{
                          $("#hehe").append(responseText.msg);
                        }
                        
                    } 
               };  

             function showRequest(formData, jqForm, options) {//在这里对表单进行验证，如果不符合规则，将返回false来阻止表单提交，直到符合规则为止
             //方式一：利用formData参数 
               for (var i=0; i < formData.length; i++) {  
                  if (!formData[i].value) {    
                  return false;  
                   }  
                } 
              console.log(formData);
                   var form=$('#Register') ;
                   if(!form.validate().successList.length){
                    $("#hehe").html("");
                    return false;
                   }              
                  $("#hehe").html("提交中。。。");
                  return true; 
           }            
         });    
//点击切换
$(document).ready(function(){
        $('.btnlogin-reg-login').click(function(){
            $('.register').addClass("login-reg-off");
            $('.login').removeClass("login-reg-off");
        });
        $('.btnlogin-reg-reg').click(function(){
            $('.login').addClass("login-reg-off");
            $('.register').removeClass("login-reg-off");
        });
   });

//登录页面js
    //表单验证
    var demo = $("#login").validate({
            debug:true, 
            focusInvalid: false, //当为false时，验证无效时，没有焦点响应  
            onkeyup: false, 
        //errorClass: "label.error", //默认为错误的样式类为：error
        //提交表单//表单提交句柄,为一回调函数，带一个参数：form               
            rules: {  
                username: {  
                    required: true,  
                    minlength: 2 
                },    
                password: {
                    required: true,
                    minlength: 6,
                }
            },    
            messages: { 
                username: {  
                    required: '',  
                    minlength: '请至少输入两个字符'  
                },  
                password: {
                    required: "",
                    minlength: "密码不能小于6个字符"
                }
            },   
      });
    //提交表单
$(document).ready(function(){
    formSubmit('#login','#btn-login');
    //提交表单函数
    function formSubmit(form,btn){
        var options = { 
            url:"/user/doLogin",
            type:"POST",
            target: '#login-reback',
            beforeSubmit: showRequest,  //提交前的回调函数  
            success: showResponse,      //提交后的回调函数  
            dataType:  'json',
          };            
        // ajaxSubmit
        $(btn).click(function () {
            $(form).ajaxSubmit(options);

        });

    };
    //提交前的回调函数
    function showRequest(formData, jqForm, options){
        if (demo.valid()) { 
            //验证通过
            return true;
        }
            return false;
        

    };
    //提交后的回调函数
    function showResponse(responseText, statusText){  
                  
                  $("#login-reback").empty();
                  if (statusText=='success') {
                         //showResponse;
                         //$.getJSON()
                         //$("#login-reback").append(responseText.msg);
                      if (responseText.status!=0) {
                            $("#login-reback").empty();
                            $("#login-reback").append(responseText.msg);
                      }else if (responseText.status==0) {
                            $("#login-reback").empty();
                            window.location= '..' ;   
                          } 
                      }
                  else if(statusText='null'){
                    $("#login-reback").empty();
                      
                  } 
    };   
  
});
         