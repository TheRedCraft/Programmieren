<!DOCTYPE html>
<html lang="en">
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatCraft</title>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">
    <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"></script>

    <script src=”https://www.gstatic.com/firebasejs/9.2.1/firebase-app.js”></script>
    <script src=”https://www.gstatic.com/firebasejs/9.2.1/firebase-database.js”></script>



    <script type="module">

    </script>


    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
        import { getDatabase, set, ref, push, child, onValue, onChildAdded } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyATu9qOAaLY8iHckxAo2wKVc2YZiiJRoss",
            authDomain: "chat-ef604.firebaseapp.com",
            projectId: "chat-ef604",
            storageBucket: "chat-ef604.appspot.com",
            messagingSenderId: "559761938339",
            appId: "1:559761938339:web:2d29ab6ac0b0f4a57eec16"
        };

      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        var myname = prompt('Enter your name');

        submit.addEventListener('click', (e) => {
          var message = document.getElementById('message').value;
          var name = myname;

          const id = push(child(ref(database), 'messages' )).key;


          set (ref(database, 'messages/' + id), {
            name: name,
            message: message
          });

          document.getElementById('message').value = "";

        });

        const newMsg = ref(database, 'messages/');
        onChildAdded(newMsg, (data) => {
          if(data.val().name != myname) {
              var divData = '<div class="d-flex justify-content-start mb-4" id="fromDiv">\n' +
                  '                        <div class="msg_cotainer" >\n' +
                  '                            '+ data.val().name + ': ' +data.val().message+'' +
                  '                        </div>\n' +
                  '                    </div>';
              var d1 = document.getElementById('bodymessages');
              d1.insertAdjacentHTML('beforebegin', divData);
          }else{
              var divData = '<div class="d-flex justify-content-end mb-4">\n' +
                  '                        <div class="msg_cotainer_send" id="sendDiv">\n' +
                  '                            '+ data.val().name + ': ' +data.val().message+'' +
                  '                        </div>\n' +
                  '                    </div>';
              var d1 = document.getElementById('bodymessages');
              d1.insertAdjacentHTML('beforebegin', divData);
          }
        });
    </script>
</head>
<body>





  <div class="container-fluid h-100">
      <div class="row justify-content-center h-100">
          <div class="col-md-4 col-xl-3 chat">
              <div class="card-body msg_card_body">
              </div>
          </div>
          <div class="col-md-8 col-xl-6 chat">
              <div class="card">
                  <div class="card-header msg_head">
                      <div class="d-flex bd-highlight">
                          <div class="img_cont">
                              <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                                  class="rounded-circle user_img">
                              <span class="online_icon"></span>
                          </div>
                          <div class="user_info">
                              <span>Chat</span>
                          </div>
                          <div class="video_cam">
                              <span><i class="fas fa-video"></i></span>
                              <span><i class="fas fa-phone"></i></span>
                          </div>
                      </div>
                      <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
                      <div class="action_menu">
                          <ul>
                              <li><i class="fas fa-user-circle"></i> View profile</li>
                              <li><i class="fas fa-users"></i> Add to close friends</li>
                              <li><i class="fas fa-plus"></i> Add to group</li>
                              <li><i class="fas fa-ban"></i> Block</li>
                          </ul>
                      </div>
                  </div>
                  <div class="card-body msg_card_body" id="bodyContent">
                    <div id="bodymessages"></div>
                  </div>
                  <div class="card-footer">
                      <div class="input-group">
                          <div class="input-group-append">
                              <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                          </div>
                          <textarea name="message" id="message" class="form-control type_msg"
                                    placeholder="Type your message..."></textarea>
                          <div class="input-group-append">
                              <button id="submit" class="input-group-text send_btn"><i class="fas fa-location-arrow"></i>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>




    <script>
      $(document).ready(function () {
          $('#action_menu_btn').click(function () {
              $('.action_menu').toggle();
          });
      });
  </script>


    
</body>
</html>