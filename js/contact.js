

//  $(document).ready(function () {
//      var nflag=1,aflag=1,eflag=1,pflag=1       
//          $("#inputname").blur(function () {
//              var input = $(this).val()
//              if (input.length < 4) {
//                $("#errorname").show()
//                nflag=1
//                $("#btn").attr('disabled', true)
//              }
//              else {
//                  if(/^[A-z]+$/.test(input)==false){
//                    $("#errorname").show()
//                    nflag=1
//                    $("#btn").attr('disabled', true)

//                  }else{
//                    $("#errorname").hide()
//                    nflag=0
//                    if(eflag==0 && pflag==0 && aflag==0){
//                      $("#btn").attr('disabled', false)
//                    }
//                  }
//              }
//            })
//            $("#inputemail").blur(function () {
//              var text = $(this).val()
//              if (/^[A-z0-9]+\@[a-z]+\.[a-z]+$/.test(text) == false) {
//                $("#erroremail").show()
//                eflag=1
//                $("#btn").attr('disabled', true)
//              }
//              else {
//                $("#erroremail").hide()
//                eflag=0
//                if(nflag==0 && pflag==0  && aflag==0){
//                  $("#btn").attr('disabled', false)
//                }
//              }
//            })
//             $("#inputsubject").blur(function () {
//                var text = $(this).val()
//                if (text.length <3) {
//                  $("#errorsubject").show()
//                  aflag=1
//                  $("#btn").attr('disabled', true)
//                }
//                else {
//                    if(/^[A-z]+$/.test(text)==false){
//                      $("#errorsubject").show()
//                      aflag=1
//                      $("#btn").attr('disabled', true)

//                    }else{
//                      $("#errorsubject").hide()
//                      aflag=0
//                      if(eflag==0 && pflag==0 && nflag==0){
//                        $("#btn").attr('disabled', false)
//                      }
//                    }
//                }
//              })
//              $("#inputmessage").blur(function () {
//                var text = $(this).val()
//                if (text.length <3) {
//                  $("#errormessage").show()
//                  pflag=1
//                  $("#btn").attr('disabled', true)
//                }
//                else {
//                    if(/^[A-z]+$/.test(text)==false){
//                      $("#errormessage").show()
//                      pflag=1
//                      $("#btn").attr('disabled', true)

//                    }else{
//                      $("#errormessage").hide()
//                      pflag=0
//                      if(eflag==0 && nflag==0 && aflag==0){
//                        $("#btn").attr('disabled', false)
//                      }

//                    }

//                }
//              })
//                    $("#submit-form").submit((e)=>{
//                     e.preventDefault()
//                     $.ajax({
//                         url:"https://script.google.com/macros/s/AKfycby1wSFgnhgJcemnVDqswR_a478_Ifz_6hNkn2PdcptCfnsnGcY/exec",
//                         data:$("#submit-form").serialize(),
//                         method:"post",
//                         success:function (response){
//                             alert("Form submitted successfully")
//                             window.location.reload()
//                             // window.location.href="https://google.com"
//                         },
//                         error:function (err){
//                             alert("Something Error")
//                         }
//                     })
//                   })
//

// })



// foam validation //



$(document).ready(function () {
  $("#submit-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
        email: true,
      },
      subject: {
        required: true,
        minlength: 4,
      },
      message: {
        required: true,
        minlength: 3,
      },
    },
    messages: {
      name: {
        required: "Enter Your Name"
      },
      email:{
        required: "Enter Your Email"
      },
      subject:{
        required: "Enter Your Subject"

      },
      message:{
        required: "Enter Your Messages"

      }
    },
    submitHandler: function () {
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycby1wSFgnhgJcemnVDqswR_a478_Ifz_6hNkn2PdcptCfnsnGcY/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
          alert("Form submitted successfully")
          window.location.reload()
          // window.location.href="https://google.com"
        },
        error: function (err) {
          alert("Something Error")
        }
      })

    }







  })

})