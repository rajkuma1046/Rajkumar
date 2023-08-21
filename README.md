<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale= 1">
    <title>"SSC Exam Preparation: Mock Tests, Previous Year Papers and Resources"| credit: codenepali</title>
    <meta http-equiv="Content-Type" content="text/html; " />
    <meta name="description" content="Prepare for SSC exams with our comprehensive resources! Download topic-wise Maths questions for SSC CGL in Hindi. Practice with SSC MTS previous year papers and Hindi mock tests. Boost your preparation with free online SSC CGL mock tests in both Hindi and English, no registration required. Access SSC CGL and CHSL previous year papers in Hindi and English for 2023. Achieve success with our SSC exam-focused materials. Get ready for the challenge!" />
    <meta name="keywords" content="SSC MTS Mock Test in Hindi, Free Online SSC CGL Mock Test without Registration (Hindi/English), SSC MTS Previous Year Paper Mock Test in Hindi, Free SSC CGL Mock Tests Online,Prepare for SSC Exams with Mock Tests and Previous Year Papers,SSC CHSL 2023 Exam Papers,Download SSC CGL Maths Questions in Hindi,SSC CHSL Previous Year Paper Hindi Medium PDF Download,SSC CGL Previous Year Paper in Hindi PDF Download" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js"></script>
    <script src="https://cdn.examgoal.net/room-examgoal-com/v2.7/mathjax.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/input/asciimath.js"></script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js"></script>
    <!-- FontAweome CDN Link for Icons-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
  
<style type="text/css">
/* importing google fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    
}

body{
    background-image: linear-gradient(to right, #6231e8,#a621cf,#e619c7);
}

::selection{
    color: #fff;
    background: #007bff;
}



.start_btn,
.info_box,
.quiz_box,
.result_box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.info_box.activeInfo,
.quiz_box.activeQuiz,
.result_box.activeResult{
    opacity: 1;
    z-index: 5;
    pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
}

.start_btn button{
    font-size: 25px;
    font-weight: 500;
    color: #007bff;
    padding: 15px 30px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: #fff;
    cursor: pointer;
}

.info_box{
    width: 400px;
    background: #fff;
    border-radius: 5px;
    margin-top: 30vh;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}

.info_box .info-title{
    height: 60px;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-radius: 5px 5px 0 0;
    font-size: 20px;
    font-weight: 600;
}

.info_box .info-list{
    padding: 15px 30px;
}

.info_box .info-list .info{
    margin: 5px 0;
    font-size: 17px;
}

.info_box .info-list .info span{
    font-weight: 600;
    color: #007bff;
}
.info_box .buttons{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 30px;
    border-top: 1px solid lightgrey;
}

.info_box .buttons button{
    margin: 0 5px;
    height: 40px;
    width: 100px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
    border: 1px solid #007bff;
    transition: all 0.3s ease;
}

.quiz_box{
    width: 400px;
    background: #fff;
    margin-top: 30vh;
    border-radius: 5px;
transform: translate(-50%, -50%) scale(0.9);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    overflow: hidden;
   
   
    
}

.quiz_box header{
    position: relative;
    z-index: 2;
    height: 70px;
    padding: 0 30px;
    background: #fff;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.1);
}

.quiz_box header .title{
    font-size: 18px;
    font-weight: 600;
    text-shadow: 2px 2px 1px #939da3;
    margin-left: -20px;
   
}

.quiz_box header .timer{
    color: #004085;
    background: #cce5ff;
    border: 1px solid #b8daff;
    height: 45px;
    padding: 0 8px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 145px;
}

.quiz_box header .timer .time_left_txt{
    font-weight: 400;
    font-size: 17px;
    user-select: none;
}

.quiz_box header .timer .timer_sec{
    font-size: 18px;
    font-weight: 500;
    height: 30px;
    width: 45px;
    color: #fff;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
    background-image: linear-gradient(to right, #681be3, #9a1be3) ;
    border: 1px solid #343a40;
    user-select: none;
}

.quiz_box header .time_line{
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 5px;
    background-color: #48e81c;
 
}




section{
    padding: 25px 30px 20px 30px;
    background: #fff;
}

section .que_text{
    font-size: 13px;
    font-weight: 600;
}

section .option_list{
    padding: 20px 0px;
    display: block;   
}

section .option_list .option{
    background: aliceblue;
    border: 1px solid #84c5fe;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 17px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

section .option_list .option:last-child{
    margin-bottom: 0px;
}

section .option_list .option:hover{
    color: #004085;
    background: #5bafeb;
    border: 1px solid black;
}

section .option_list .option.correct{
    color: black;
    background: #5fc76f;
    border: 2px solid black;
}

section .option_list .option.incorrect{
    color: white;
    background: #db4848;
    border: 2px solid black;
}

section .option_list .option.disabled{
    pointer-events: none;
}

section .option_list .option .icon{
    height: 26px;
    width: 26px;
    border: 2px solid transparent;
    border-radius: 50%;
    text-align: center;
    font-size: 13px;
    pointer-events: none;
    transition: all 0.3s ease;
    line-height: 24px;
}
.option_list .option .icon.tick{
    color: #23903c;
    border-color: #23903c;
    background: #d4edda;
}

.option_list .option .icon.cross{
    color: #a42834;
    background: #f8d7da;
    border-color: #a42834;
}

footer{
    height: 60px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid lightgrey;
}

footer .total_que span{
    display: flex;
    user-select: none;
}

footer .total_que span p{
    font-weight: 500;
    padding: 0 5px;
}

footer .total_que span p:first-child{
    padding-left: 0px;
}

footer button{
    height: 40px;
    padding: 0 13px;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 5px;
    background: #007bff;
    border: 1px solid #007bff;
    line-height: 10px;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.95);
    transition: all 0.3s ease;
}

footer button:hover{
    background: #0263ca;
}

footer button.show{
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
}

.result_box{
    background: #fff;
    border-radius: 5px;
    display: flex;
    padding: 25px 30px;
    width: 450px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    transform: translate(-50%, -50%) scale(1.0);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    background-image: url('https://bit.ly/44pY9sI');
    background-size: cover;
    background-repeat: no-repeat;
}

.result_box .icon{
    font-size: 100px;
    color: #007bff;
    margin-bottom: 10px;
}

.result_box .complete_text{
    width: 370px;
    height: auto;
    font-size: 20px;
    font-weight: 500;
    background-color: white;
    color: #007bff;
    padding: 8px 8px;
    border-radius: 5px;
    margin-top: -30px;
    text-align:center;
  
}

.result_box .score_text span{
    display: flex;
    margin: 10px 0;
    font-size: 18px;
    font-weight: 500;
}

.result_box .score_text span p{
    padding: 0 4px;
    font-weight: 600;
}

.result_box .buttons{
    display: flex;
    margin: 20px 0;
}

.result_box .buttons button{
    margin: 0 10px;
    height: 45px;
    padding: 0 20px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    margin-top: -15px;
    border: none;
    outline: none;
    border-radius: 5px;
    border: 1px solid #007bff;
    transition: all 0.3s ease;
}

.buttons button.restart{
    color: #fff;
    background: #007bff;
}

.buttons button.restart:hover{
    background: #0263ca;
}

.buttons button.quit{
    color: #007bff;
    background: #fff;
}

.buttons button.quit:hover{
    color: #fff;
    background: #007bff;
}


.sol_img{
width:100%;
height: auto;
box-shadow: 1px 2px 3px 3px #b7b6b8;
padding: 5px;
border-radius: 5px;
border: 1px solid black;
}

.sol_btn{
width: 130px;
height: 40px;
margin-top: 10px;
background-image: linear-gradient(to right, #138a76, #14b341);
color: white;
font-weight: bold;
border-radius: 8px;
padding: 1px;
margin-left: 30px;
text-shadow: 2px 1px 2px #c9c9c9;
font-size: 23px;
}
.sol_btn:hover{
width: 130px;
height: 40px;
margin-top: 10px;
background-color: white;
color: white;
font-weight: bold;
border-radius: 5px;
padding: 1px;
margin-left: 30px;
text-shadow: 2px 1px 2px black;
font-size: 23px;
}

.back_btn{

width: 130px;
height: 40px;
text-shadow: 2px 1px 2px #c9c9c9;
margin-top: 10px;
background-image: linear-gradient(to right, #16a0db, #1278a3);
color: white;
font-weight: bold;
border-radius: 8px;
padding: 1px;
font-size: 23px;


}
.back_btn:hover{

width: 130px;
height: 40px;
text-shadow: 2px 1px 2px black;
margin-top: 10px;
background-color: white;
color: white;
font-weight: bold;
border-radius: 5px;
border: 2px solid blue;
padding: 1px;
font-size: 23px;
}



body  .que_menu{
display: block;
width: 400px;
height: 50px ;
}
body div .que_menu1{
width: 100%;
height: 50px ;
border: 1px solid black;
border-radius: 2px;
overflow: auto;
position: fixed;
display: flex;
flex-direction: row;
padding: 5px;
box-shadow: 2px 2px 2px 2px #d6d4fa ;

}
body div div .que_menu_number{
width: 100%;
height: 100%;
text-decoration: none;
font-size: 25px;
color: #007bff;
text-shadow: 2px 1.5px 1.9px #6f6bf2;
background-color: none;
justify-content: center;
margin-left: 30px;
padding: 0px;
border: 1px solid #007bff;
border-radius: 3px;
}
body div  .que_menu_number:hover{
width: 100%;
height: 100%;
font-size: 25px;
color: white;
text-shadow: 2px 1.5px 1.9px #6f6bf2;
background-color: #007bff;
margin-left: 30px;
padding: 2px;
border-radius: 3px;
}

#q59{
width: 200px;
height: 40px;
border: 2px solid black;
margin-left: 8px;
font-weight: bold;
font-size: 15px;

}
#q59:hover{
width: 200px;
height: 40px;
border: 2px solid orange;
margin-left: 8px;
}

#go_btn{
width: 120px;
height: 40px;
text-shadow: 2px 1px 2px black;
background-image: linear-gradient(to right, red, orange);
color: white;
font-weight: bold;
padding: 1px;
margin-left: 10px;
border-radius: 20px;
font-size: 15px;
}

#go_btn:hover{
width: 120px;
height: 40px;
text-shadow: 2px 1px 2px black;
background-image: linear-gradient(to left, red, orange);
color: white;
font-weight: bold;
padding: 1px;
margin-left: 10px;
border-radius: 20px;
font-size: 15px;
border: 2px solid yellow;
}

div .tbtn{
width: 65px;
height: 30px;
text-shadow: 0.5px 0.5px 8px grey;
background-image: linear-gradient(to left, white, white);
color: black;
padding: 1px;
margin-left: 7px;
border-radius: 5px;
font-size: 13px;
border: 1.2px solid black;
}
div .tbtn:hover{
width: 65px;
height: 30px;
text-shadow: 0.5px 0.5px 8px white;
background-image: linear-gradient(to left, blue, blue);
color: white;
padding: 1px;
margin-left: 7px;
border-radius: 5px;
font-size: 13px;
border: 1.2px solid black;
}


#chapterName{
width:80%;
text-transform: auto;
background-image: linear-gradient(
to right,
#1691de 0%,
#a629ff 29%,
#ff29d4 67%,
#cacccc 100%
);
background-size: auto auto;
background-clip: border-box;
background-size: 200% auto;
color: #fff;
background-clip: text;
text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: textclip 4s ease infinite;
display: inline-block;
font-size: 1rem;
}

@keyframes textclip {
to {
background-position: 200% center;
}
}

#smt_btn{
width: 100%;
height: 50px;
text-shadow: 2px 1px 2px grey;
background-image: linear-gradient(to left, #1cff20, #1cff20);
color: white;
font-weight: bold;
padding: 8px 8px;
margin-left: 0px;
border-radius: 25px;
font-size: 20px;
border: none;
margin-bottom: 50px;
margin-top: 10px;

}
#year{
width: 60px;
height: 20px;
text-shadow: 2px 1px 2px grey;
background-image: linear-gradient(to left, red, orange);
color: white;
font-weight: bold;
padding: 1px;
margin-left: 10px;
border-radius: 20px;
font-size: 12px;
border: 0.5px solid black;

}
</style>
</head>
<body>
                     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6738179060246081"
                     crossorigin="anonymous"></script>
                     <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-format="fluid"
                     data-ad-layout-key="-gw-3+1f-3d+2z"
                     data-ad-client="ca-pub-6738179060246081"
                     data-ad-slot="6850459124"></ins>
                     <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                     </script>
                     
                     
    
    
    
    
    
    <!-- start Quiz button -->
         <div class="start_btn">
             <button style="display:none;">Start Test</button>
         </div>
         <br>
         <br>
         
    <!-- Info Box -->
    <div class="info_box">
        <div class="info-title"><span>ध्यान दें:</span></div>
            <div class="info-list">
                    <div class="info">1. आपके पास प्रत्येक प्रश्न के लिए केवल <span> 2 Minute</span> है.</div>
                    <div class="info">2. किसी भी क्वेश्चन का आंसर करने के लिए आपके पास केवल एक मौका है</div>
                    <div class="info">3. समय समाप्त होने के बाद आप किसी भी क्वेश्चन को आंसर नहीं कर पाएंगे</div>
                    <div class="info">4. एक बार Test Start होने के बाद आप बीच में नहीं छोड़ सकते।</div>
                    <div class="info">5. आपके सही उत्तरों के आधार पर हर एक सही उत्तर का 1 पॉइंट मिलेगा</div>
            </div>
            
        <div class="buttons">
            <button class="quit">Exit Test</button>
            <button class="restart">Start Test</button>
        </div>
    </div>

<!--$$$$$$$$$$$$$$$$$ Quiz Box $$$$$$$$$$$$$$$$$-->
<div class="quiz_box">

              <div class="header-ad-unit">
                      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6738179060246081"
                      crossorigin="anonymous"></script>
                      <ins class="adsbygoogle"
                      style="display:block"
                      data-ad-format="fluid"
                      data-ad-layout-key="-gw-3+1f-3d+2z"
                      data-ad-client="ca-pub-6738179060246081"
                      data-ad-slot="6850459124"></ins>
                      <script>
                      (adsbygoogle = window.adsbygoogle || []).push({});
                      </script>
              </div>
         <br>
         
           <header>
                 <div class="title">SSC MATHS PYQ's</div>
                    <div class="timer">
                       <div class="time_left_txt">Time Left</div>
                           <div class="timer_sec"></div>
                    </div>
                               <div class="time_line"></div>
           </header>
           
           <div class="que_menu">
              <div class="que_menu1">
                  <h3 style=" font-size: 13px;color:#bf11a8;">Que No. </h3>
                     <input oninput="raj()" placeholder="from 1 to 143 🔍" type="number" id="q59" min="1" max="143">
                        <button   id="go_btn"> Go To Que.
                  </button>
              </div>
           </div>
           
           <script>
           const go_btn = document.querySelector("div #go_btn");
           function raj() {
           var que59 = document.querySelector("#q59").value;
           p = parseInt(que59);
           if (p < 1) {
           p = 1;
           } else if (p > 143) {
           p = 143;
           }
           back_btn.style.display = "block";
           next_btn.innerText = "Skip";  
           }
           </script>
       <center> <h4 id="chapterName" >•••लाभ और हानि•••</h4></center>
        <div class="que_menu1">
        <div style=" display: flex;">
        <h5>View In:</h5>
        <button class="tbtn" onclick="translatePage('en')">English</button>
        <button  class="tbtn" onclick="translatePage('ta')">Tamil</button>
        <button  class="tbtn" onclick="translatePage('te')">Telegu</button>
        <button  class="tbtn" onclick="translatePage('bn')">Bangali</button>
        <button  class="tbtn" onclick="translatePage('gu')">Gujarati</button>
        <h1></h1>
        </div></div>
        <br>
        <br>
  <section> 
       <div id="content-to-translate"> 
            <div class="que_text">
               <!-- Here I've inserted question from JavaScript -->
            </div>
       </div>
           
           <div id="translated-content"></div>
           
           
           
           
              <audio  style="display: none;" class="read_que"  src="" type="audio/mpeg" controls>
                 </audio>
                      <h5 class="playAudio_btn" onclick="playAudio()"></h5>
           <div class="option_list">
              <!-- Here I've inserted options from JavaScript -->
                </div>
       <hr>
           <div class="solution">
              <img src="" style="display:none;" class="sol_img" alt="solution image"/>
                 </div>
                    <!-- back and solution butttons-->
                      <div style="display: flex;">
                          <button style="display: block;" class="back_btn">Back</button>
                             <button style="display:none;" onclick="showImage()" class="sol_btn"><b> Solution</b></button>
                      </div>
   </section>



        <!-- footer of Quiz Box -->
        <footer>
           <div class="total_que">
              <!-- Here I've inserted Question Count Number from JavaScript -->
                </div>
                   <button class="next_btn">Skip</button>
        </footer>
        <hr width="100%">
       <button id="smt_btn"> SUBMIT</button>
</div>
<script>
function translatePage(targetLanguage) {
  // Get the content you want to translate
  var content = document.getElementById('content-to-translate').textContent;

  // Use Google Translate API to translate the content
  new google.translate.TranslateElement(
    { pageLanguage: 'hi', includedLanguages: targetLanguage },
    'translated-content'
  );
}
</script>
<!--$$$$$$$$$$$$$$$$$ Result Box $$$$$$$$$$$$$$$$$-->
      <div class="result_box">
         <div class="icon">
            <i class="fas fa-crown"></i>
                 </div>
              <div class="complete_text">You've completed the Quiz!</div>
                 <h4 class="score_text">
                    </h4>
                        <h4 class="score_textN">
                            </h4>
                               <h4 class="skipQue_count">
                                   </h4>
                                       <h4 id="timeSpent"> </h4>
                       <div class="buttons">
                           <button class="restart">Replay Quiz</button>
                               <button class="quit">Quit Quiz</button>
                       </div>
       </div>
       
       <script>
       let startTime1;
       let endTime;
       
       
       document.getElementById('smt_btn').addEventListener('click', function() {
       if (!startTime1) {
       alert('Timer not started yet.');
       return;
       }
       
       endTime = new Date().getTime();
       const timeDifference = endTime - startTime1;
       const hours = Math.floor(timeDifference / 3600000);
       const minutes = Math.floor((timeDifference % 3600000) / 60000);
       const seconds = Math.floor((timeDifference % 60000) / 1000);
       
       const timeSpentMessage = `Time spent :  <span style="color: #ff1cfb;"><b>${hours}</b></span> Hr. <span style="color: #ff1cfb;"><b>${minutes}</b></span> min.and <span style="color: #ff1cfb;"><b>${seconds}</b></span> sec.`;
       document.getElementById('timeSpent').innerHTML = timeSpentMessage;
       });
       </script>
   
<script>
        /** show solution image**/
           function showImage() {
           a = document.querySelector(".sol_img");
           a.style.display = "block";
           }
           
           let read_que = document.querySelector(".read_que");
           function playAudio(){
           read_que.play();
           }
    /**Inside this JavaScript file I've inserted Questions and Options only**/
    let questions = [
    {
    numb: 1,
    question: "एक दुकानदार ने 30% की हानि पर लेख बेचा। यदि विक्रय मूल्य ₹ 350 है, तो लागत मूल्य ज्ञात करें।",
    answer: "500",
    options: [
    "500",
    "550",
    "600",
    "539"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipE50PVYyPNo1vkccGul_7f_1YC4vKXAgG5KJxZzPGkocOlSqw0IN2VGoc57Lh6Axz7oFnKIANdZ7Mo5M2kX5-qSNQbQLcI_znlfvk2LUjCQBLoAJoPEWq4fXgoWxIH6bUDdUs3qCpsfTw_qgFeTdPLK8xJeOY0RbAdfiKllJbGjsoV695j-1H_TVu/s1830/Ques.%201%20.jpg',
    queAudio: "https://archive.org/download/25_20230615/Q1.mp3",
    },
    {
    numb: 2,
    question: "एक दुकानदार ने 40% हानि पर लेख बेचा। यदि विक्रय मूल्य ₹6000 है तो लागत मूल्य ज्ञात कीजिए।",
    answer: "10000",
    options: [
    "10000",
    "3000",
    "6000",
    "none"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCJKQvzuPtrm80bedr90dqLM9px27mrzTn5KyZ5z2klFCmAcwSJaQQk7Zi6Kp1w2bBVs8xVD4bUwnW1yGKsyEcahHcSsH20__v5WFBeZPPTN-kc1Qycq-I_Tw3LEVFhJmaYuVav3uMkyfc8NtpeRiIJXAZJ8rsZytkSDWSvVItqJ_DLFEbika9XDc0/s2029/question%202.jpg',
    queAudio: "https://archive.org/download/25_20230615/Q2.mp3",
    },
    {
    numb: 3,
    question: "एक दुकानदार ने 16⅔% की हानि पर लेख बेचा।  यदि विक्रय मूल्य ₹500 है तो लागत मूल्य ज्ञात करें।",
    answer: "600",
    options: [
    "500",
    "600",
    "1000",
    "450"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPeyDwK2zQF0AabBJEx2JyVz24lFhUmjO9FsDzDcAMi96-T0eClF2DQiv2hC7HLQ1hJ_xlE9dztD15AW_D5-bAtisMni7ELuN1UNszuXSwxw5GDFsLaFStRGJVdFDmWIyC8413H4JWnWdwHottk4ZZs43G2l9-SKtDO_uiF8QcBrIB0GLh-UcXTrDt/s1922/Question%203.jpg',
    queAudio: "https://archive.org/download/25_20230615/Q3.mp3",
    },
    {
    numb: 4,
    question: "एक मोबाइल फोन का विक्रय पूल्य 59,620 रुपये है और इसे 8.4% लाभ पर बेचा गया। मोबाइल फोन का लागत मूल्य (रु में ) है <br> <span style='width: 60px; height: 20px; text-shadow: 1.5px 1.3px 1px black;background-image: linear-gradient(to left, green, green, green);  color: white;  font-weight: bold; padding: 1px;margin-left: 10px; border-radius: 20px; font-size: 12px; border: 0.5px solid black;'> SSC CGL 21.04.2022 (Afternoon)</span>",
    answer: "55000",
    options: [
    "52000",
    "50000",
    "55000",
    "45000"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAIwxC7RAwyx4hvq2Srk5hKIVXflDvM5_SEL0etM257AbknV6CRnT5FkVFu_uIedaeL1y2GhPKHa1OGKkFCAqEYcd_qa3fL2mEqvYEzqSUeNq5_ODc7zRXI6xwer0ObHmDMzZVEfp1blD5ZW2fPvQM9qNP3U2mt6m8wXRs57Ptp5EYECmNKFzkCh21/s2090/question%204.jpg',
    queAudio: "https://archive.org/download/25_20230615/Q4.mp3",
    },
    
    {
    numb: 5,
    question: "एक दुकानदार ने 6⅔% की लाभ पर लेख बेचा। यदि विक्रय मूल्य ₹1,600 हैं तो क्रय मूल्य ज्ञात करें।",
    answer: "1500",
    options: [
    "1200",
    "1400",
    "1500",
    "none"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q5.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgft1dTIorXR_vREmPBQI7MjNKs75FGwmsKsvH9bVC4Lb82wqVhRGNbUBikFc7QIBeHqtCetlM1U1i9A6nZTIdM1DAw8Qyrlvkh8zB-JnFw_1Djd9XjB0Npjdea5Ca6HazKbFADSaPsceBrqhoSzhyqpL7UqrCkJkG70MBc0g_zkQ5y5LrIQ3kemq6M/s2070/question%205.jpg',
    },
    {
    numb: 6,
    question: "लागत मूल्य और विक्रय मूल्य का अनुपात 10 : 11 है। लाभ प्रतिशत ज्ञात कीजिए।",
    answer: "10%",
    options: [
    "10%",
    "15%",
    "20%",
    "19%"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q6.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH5CbGHzAr6wJsaSXNd9lWzlKUcP7kvgQqBm6rsqCmhzMqK51LepI51k1ItwruDfZOclppv95PvQDTXng1SBzGAEM0iBrrBlTnt6RjqrY1arZ1fygk64bHViVfVXKlBZjikXLYdzJTtbO-V7BCkRo1k66puP9KjgPQdlUs-kc3BREs97zOry5bxFHZ/s2275/DocScanner%2011-Jun-2023%206-46%20pm%20%281%29.jpg',
    },
    {
    numb: 7,
    question: "यदि किसी पुस्तक को 20% लाभ पर बेचा जाता है, तो क्रय मूल्य और विक्रय मूल्य का अनुपात है ",
    answer: "5:6",
    options: [
    "5:6",
    "5:7",
    "1:4",
    "2:3"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q7.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifTXmgCLgh8f78KPGiR9DzLDrayFyFYD1eKj29GZrqgx2NXHrYHojOPdP7gcGhywkTlQhIJLg7Eo31QNCgYU4_UAEJqnRf1xs0bcjZhM2TgAvCJQX9RouafXdEqciGUQpiE7xWthAIPltZpUtuHohZx0qQM6auKcOWAqiNnwBx0bH_SYOJka3T0Rx7/s1554/question%207.jpg',
    },
    {
    numb: 8,
    question: "यदि कोई पुस्तक 300% लाभ पर बेची जाती है, तो क्रय मूल्य और विक्रय मूल्य का अनुपात है",
    answer: "1:4",
    options: [
    "1:4",
    "1:2",
    "1:3",
    "2:3"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q8.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2rfbe74MOd6gfGEjDKJNroyyeeGuTfVh_j7DyT2l09Ihw5-UOGxQDeMA5AU0Dp4zxz62hQD3wo1PvdZ92s1SNgQFDJEY7fRLIFQwDkMUpZHzvR5ccNQyIg4f5oD1ksSnVSoAxS10Kvdf2CfD-cgJlWnUZJeUHR6VVi5utUudomLsXFi3J9yIzi5AB/s1744/question%208.jpg',
    },
    {
    numb: 9,
    question: "यदि कोई पुस्तक 25% हानि पर बेची जाती है, तो क्रय मूल्य का विक्रय मूल्य से अनुपात है :",
    answer: "4:3",
    options: [
    "4:3",
    "2:3",
    "1:4",
    "4:2"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q9.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf-o2Cnq1Gb7tdrILnJJKjlIA-JM7wR_RJjhlzxru5Y6rsO_qxewFLYHjClm5BTO7BJyEW9XyRBP_sMnPNkfjVsiyCv153o8hIfIuyLoQDO8jnpvHFB76-4i7c8pkAsFFuxxfdJkcmtfQTIxUC2rhdm0HMZF5EtumOGVZ5rL9yN1cgURBV17eQgnyT/s1599/question%209.jpg',
    },
    {
    numb: 10,
    question: "यदि एक सेब की लागत मूल्य उसके विक्रय मूल्य का ৪0% है, तो लाभ प्रतिशत ज्ञात करें।",
    answer: "25%",
    options: [
    "23%",
    "40%",
    "25%",
    "65%"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q10.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSh7Ad588AGBLsinwOXyZdrQIWseb6Cr9-V_ZqPfUMxYnJKMC2-PTg1n2-d4v5PqjJYEImeZdXc_AyYWCHxEg-HUk-VwYWMfyt1y0BZU7M73eFLAaneDbfecQxBEc0rDkGf6C__1FBKIt5qpkdGV77YjoqwtZ-J2Pl6N5vuCkPOhQa4XchPn11uMdv/s1919/question%2010.jpg',
    },
    {
    numb: 11,
    question: "₹ 450 के लिए एक किताब बेचकर मैं 20% खो देता हूँ। किस राशि के लिए मुझे इसे 20% हासिल करने के लिए बेचना चाहिए।",
    answer: "675",
    options: [
    "544",
    "864",
    "675",
    "467"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q11.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA1XfGRxp0TE8ZdRdB3tKn3LPeakLBqSYUwcQum7fLfbzp2NUdWAPA7MUsWfud7wLNesQmF5BKuQwqHErEhej4VqIzx1b8zl1DVa561v4_AucfJoakdmgD11ERAzDDWrdqGBlT1mTGVuIiJWYiP8EFe3VtDQznJ1UBO5KsMFL9NNQAedNm-fsCjKGJ/s2014/question%2011.jpg',
    },
    {
    numb: 12,
    question: "जब कोई वस्तु 355 रूपए में बेची जाती है तो 29% की हानि होती है तो 21% का लाभ कमाने के लिए इसे किस कीमत पर बेचा जाना चाहिए? <br><span style='width: 60px; height: 20px; text-shadow: 1.5px 1.3px 1px black;background-image: linear-gradient(to left, green, green, green);  color: white;  font-weight: bold; padding: 1px;margin-left: 10px; border-radius: 20px; font-size: 12px; border: 0.5px solid black;'>(ssc cgl tier-2, 11 Sept. 2019)</span>",
    answer: "605",
    options: [
    "605",
    "655",
    "600",
    "624"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q12.mp3	",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtxuIz4nuSNHa8MlWtIiLEjlNO84zIUAQ9JAEpFO6BNyzam0JlCUCMZ6D7jB1aHM1h6CMFY5nsdG1gwEgUFTJ8b4A4tjJZnNhylShH72iEBIUht5NX4FBICml7gX318iFh9cU0cdYeYEX4n0VKcvDyI3gd7EYXfCrgXMV56vjnQFXujhIR7CLCY4HN/s1939/question%2012.jpg',
    },
    {
    numb: 13,
    question: "यदि एक वस्तु को 355 रुपये में बेचा जाता है, तो 29% की हानि होती है। 31% लाभ प्राप्त करने के लिए इसे किस कीमत पर (रु में) बेचा जाना चाहिए? (SSC CGL MAINS 29 Jan 2022)",
    answer: "655",
    options: [
    "655",
    "458",
    "754",
    "355"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q13.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq_xXj5zfFIGmE0lst5q9YmpdXzTLYXIaINVRBn2EtTGTSREdfd4pM5c3cfOwluQ3l-vylNtfLq4WAxD-7L5z38c3kTFDVWShUnZt4uu686WPmkgAgt6TurmZqw3hFgTKb3vQ52gH3O1M8pWYukd6Hj0SL1vUZ6wNf1YPFwejvETtOGkHWWipwf2ZK/s2155/13.jpg',
    },
    {
    numb: 14,
    question: "एक वस्तु 10% की हानि पर ₹ 810 में बेची जाती है। यदि हानि 20% है तो विक्रय मूल्य कितना होना चाहिए? ssc mts 2 august 2019 (evening)",
    answer: "720",
    options: [
    "456",
    "865",
    "720",
    "665"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q14.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2iSoppju3pCO-51a4d1AG-Nab1YMIUHCTGef_E1YMaPKkVfsHAWdLV0Jtnm-CW4Lw4KF8D9Ebl0Eth5rNOXIo2rksK1vm-9i8lQhMFHrfT0tgieoB5b8itvOYEcqvLel-MwbICjZid1bgm32G9UHuOzpld6XSZQyL-g0GHcT_ZXBugZtI9pk1XkrQ/s1967/14.jpg',
    },
    {
    numb: 15,
    question: "जब कोई वस्तु ₹480 में बेची जाती है तो 16⅔% की हानि होती है तो ৪⅓% का लाभ कमाने के लिए इसे किस कीमत पर बेचा जाना चाहिए?",
    answer: "624",
    options: [
    "345",
    "415",
    "344",
    "624"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q15.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7o9QG7OpeXaXjAtgM-0Si5BhLASDRFpWJVAbGAf1KIIPuUm_sZda2cJ-D3039yvcdw7kGsnlzukscgeBl23QsPDPgIDjYEKhFx0WMJE_jsxjJlUA9D6XZS4rdLGiX1zpWFNXb7Fgos9ddSEEMerir97S8Ql1LgA78X3WHEPYQUw6qhtn-qtNq_Spn/s1672/15.jpg',
    },
    {
    numb: 16,
    question: " जब कोई वस्तु ₹ 990 में बेची जाती है तो 11⅑% का लाभ होता है तो 9 <sup>1</sup> / <sub>11</sub> % की हानि के लिए इसे  किस कीमत पर बेचा जाना चाहिए?",
    answer: "810",
    options: [
    "345",
    "810",
    "800",
    "815"
    ],
    queAudio: "https://archive.org/download/25_20230615/16.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmwWayjstlPTPI12mDH5-GyhYB7IWDKjcFBS4HVYw3U74SCeAP7iOQdGBfqL6gn6z0plpYZGCHqfHLn4DyZ6we7z9Mhun9azMsmdUec-Vr4ZBRjdek7LRWEBziY969pZPT1BZvbmvEjZhnl8QL4vfMplNVXj9tDO5goEMiqd7F6fBf-r9LvgXfeun4/s2427/16.jpg',
    },
    {
    numb: 17,
    question: " जब कोई वस्तु ₹ 1050 में बेची जाती है तो 12½% की हानि होती है तो 25% का लाभ कमाने के लिए इसे किस कीमत पर बेचा जाना चाहिए?",
    answer: "1500",
    options: [
    "1500",
    "457",
    "1109",
    "1200"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q17.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI3-bAQc0N5RyCDEadcY4cUKgCYW_aaoBSCffRwfe3DDpyCm3iRVb2GIqXGPCJNLbKTQO4ccNZghx1QL-dcj6Yxdnt_BzeG7oXSEzbcF5Y0ePwGo-W-ju3pfev_fQuuxNuZmYinKpzdLQ6ZOUNRn-ABpSviHDWdSXCx3d4j6SDahUBIr3f-3QHhAS3/s2315/17.jpg',
    },
    {
    numb: 18,
    question: "एक वस्तु को Rs.2,200 में बेचने पर 10% का लाभ प्राप्त होता है। यदि इस वस्तु को Rs.2,600 बेचा गया होता, तो लाभ प्रतिशत क्या होता? (SSC CGL MAINS 03 Feb 2022)",
    answer: "30%",
    options: [
    "20%",
    "30%",
    "45%",
    "25%"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q18.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgwAIAGj2Crd6OeDI3waz2w-lFQlvyWXduHeyYZVRxDJMoIagjCjDZf--RpyrSZIOdFgXKZHcdpHPLhU5PSRLgtOPDp7jQ4znjtmYpqsAgcmBTVsY2DQHrKFsuhwWUrVMxiEBaknvlgrzqQ8L0WTLRD0X8_I5jhqw_d-AJ1ymsJSC-LL8-d0GaEav2/s2115/18.jpg',
    },
    {
    numb: 19,
    question: "एक वस्तु 15% की लाभ पर ₹2070 में बेची जाती है । यदि लेख ₹ 1890 में बेचा जाता है, तो लाभ या हानि प्रतिशत क्या होगा? (ssc mts 2 august 2019 (evening))",
    answer: "5% gain",
    options: [
    "3% loss",
    "4% gain",
    "5% gain",
    "5% loss"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q19.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5VOEO5-Efrh5hQR-azAVipBUOGFLRoOxegPnErOAFPE4LIHpJKgF06esCO8TvQ22TiJJ26_hTgSTJvPzk8Ls9NwqBlnRnzbCAKDyoXG86XPHkgYetaTrju85mtyRYuQC23jnedSdpUTvtRtOAUODGKs8ILEiL40dvwtzaN-MpjLSFJjSH7vlRn4Ie/s2235/19.jpg',
    },
    {
    numb: 20,
    question: "विपिन ने एक खिलौना ₹1200 में खरीदा। इसकी मरम्मत पर उसने ₹200 खर्च किए, उसने इसे ₹ 1680 रुपये में बेच दिया। है, तो उसका लाभ प्रतिशत क्या है।",
    answer: "20%",
    options: [
    "30%",
    "22%",
    "43%",
    "20%"
    ],
    queAudio: "https://archive.org/download/25_20230615/20.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSP9FpTykaucmw2GwyBWKJlEeHB-kH0_r13ttGL_UHwg5x82_9wGfV13NNaA3IpI4rLTfD_BDBBmXSeZcqy5Cs4QHFZYpoFLWrS1HX4v4B5XTfrL_wwr5LSCp2fgnyRH4hyinIqUnuDxJGGsiPphTB47EI00w5IIjzleTyNET982Xqi_VUH4ySvjJV/s2335/20.jpg',
    },
    {
    numb: 21,
    question: "एक वस्तु की लागत मूल्य और वि्क्रय मूल्य के बीच का अंतर ₹ 360 है। यदि लाभ 20% है, तो विक्रय मूल्य क्या है?",
    answer: "2160",
    options: [
    "2160",
    "3417",
    "2450",
    "2311"
    ],
    queAudio: "https://archive.org/download/25_20230615/21.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPZz66lhr11uKnmCw50NCosZJQi86dFYGRxvsS3sZ2wF8pENJhN9sq_NlR4yWH1rR0MBpPZR3nzl5OaKsCVpwszs4F0UsMt18AWYLuP-1XvPTbUcH-V9RlUYDZE4FokffTRYSkmn3463zOdeJFqPc_T0WfL6RD0BAVvmLxwdBM5MDOxOD5z4dHk-Zn/s2180/21.jpg',
    },
    {
    numb: 22,
    question: "एक बल्ला की लागत मूल्य और विक्रय मूल्य के बीच का अंतर ₹180 है। यदि लाभ 20% है, तो बल्ला का विक्रय मूल्य क्या है। {ssc mts 7 august 2019 (morning)}",
    answer: "1080",
    options: [
    "1080",
    "264",
    "1000",
    "1230"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q22.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj47UcY7i48vsFv0zceBTy39hU2MoZZugZmJn5Yy7080TlUbcryarhJz07DFzFfwiZSRa2Rz1sPOO-V3gBuEAp4aWv3_4cHYJDRsgqITpo4HACLYzs2hEX0oguLZ-pkRVaRt_vSyzJtZtj_rrdJmo5xgcLowJMh1Eb9TphdCWCcGz2sJWhwundtanMy/s1707/22.jpg',
    },
    {
    numb: 23,
    question: "जब कोई वस्तु 15% लाभ और 17% की हानि पर बेचीं जाती है तो इसके विक्रय मूल्य में ₹ 96 का अंतर आता है, यदि इसे 10% लाभ पर बेचा जाये तो विक्रय मूल्य क्या होगा? {ssc mts 8 august 2019 (morning)}",
    answer: "330",
    options: [
    "220",
    "440",
    "330",
    "520"
    ],
    queAudio: "https://archive.org/download/25_20230615/Q23.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD-SRS-WmhuSHeTXqas86GAOwPLBondYyEo_QPrg-8ZXuD9E7kQTSRfTbPlpelzIdtgRggArBdeg1U8_n-yGl17-bj9lroQrFOIyhnvn-IQtpP-TpY9m8vKxozDCQiMkXVTyrBa7XpiPbw3beZthAnKbRJ6IhfFwJBaHy-aWvNlfIa6udyx-Wjidvi/s1792/23.jpg',
    },
    {
    numb: 24,
    question: "एक व्यक्ति ने 8% की हानि पर एक लेख बेचा। अगर उसने इसे 10.5% का लाभ बेचा तो। उन्हें ₹37 अधिक मिले। लेख की क्रय मूल्य क्या है? {ssc chsl 2 july 2019 (morning)}",
    answer: "200",
    options: [
    "300",
    "550",
    "200",
    "600"
    ],
    queAudio: "https://archive.org/download/25_20230615/24.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOZyZOnU54H196wp16KBrem_JIPRIQAEunKp7nzGTc3u0lEjoHaQJ9v4fo2BMuIddjQjV0T3jD1CFUDgUcc8XtqWCNq7oGvd52ZRuhto5u5wIHNl1WGM_4w1mGA-FBb7TS_OgP_fyYj43QqTBxhxKxHVnH9aM6m_nlbRGzwHOyJp8c6erWEZQ4V09d/s1727/24.jpg',
    },
    {
    numb: 25,
    question: "एक वस्तु को 13¼%  के लाभ पर बेचा जाता है। अगर  इसे 76.70 रुपये अधिक में बेचा जाता, तो लाभ 16⅕%  होता। वस्तु के लागत मूल्य का 50% (रु में ) है: SSC CGL Pre 19.04.2022 (Afternoon)",
    answer: "1300",
    options: [
    "1500",
    "1300",
    "1200",
    "1000"
    ],
    queAudio: "https://archive.org/download/25_20230615/25.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWBnHbprTmlhxNyVeOrnqhs52ecoKbDHvhqkQytJiWFRE-83cvlnnoucXGdv4Smh6EJxL0J5ME0-mQFWRcQ4RjCV_8vKcKlczyrNq6L4X9XzJPmjazmkuf_qjvN2KARdM7aUIcmfRsUlTN4eGkhggYB2UuPY8yQpvKYf6ErIUHBF78aXAJ9--RWUhc/s2421/25.jpg',
    },
    {
    numb: 26,
    question: "एक व्यक्ति ने एक वस्तु को 18% की हानि पर बेचा। यदि वह इसे 960 रुपये अधिक में बेचता, तो उसे 12% का लाभ होता। यदि वस्तु 3840 रुपये में बेची जाती है तो लाभ प्रतिशत कितना है? {SSC CGL 11.04.2022 (Evening)}",
    answer: "20%",
    options: [
    "24%",
    "23%",
    "30%",
    "20%"
    ],
    queAudio: "https://archive.org/download/25_20230615/26.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiejjPAU2wcQkYi5BHUZBUyR8Zk8hHiUqZdiqzjI9Qb1gm5_rEKlbVCaX4KxdkoR-sMNFO53AWFR8my9qzV-uzLwKTCu8vCcP8Pcss0D1-u61FNaIoQbp6l0-KHM_U9z-O59qu7nLaeY9xsMCv4H9kQyEIVKg2LaKJxX5dTuSLqbxeuFJSbEW60vUCx3g/s2222/26.jpg',
    },
    {
    numb: 27,
    question: "जब एक वस्तु को 768 रुपये में बेचा जाता है, तो लाभ प्रतिशत x % होता है। जब उसी वस्तु को 896 रुपये में बेचा जाता है, तो लाभ प्रतिशत (x + 20)% होता है। x का मूल्य क्या है? {SSC MTS (Shift- II) 06/10/2021}",
    answer: "20",
    options: [
    "30",
    "20",
    "29",
    "50"
    ],
    queAudio: "https://archive.org/download/25_20230615/27.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnUQJ7oG7n6wuPOM93h3W79bPivbak9PiybM9WMVUk6PlSJwyA5h-q1f85ZIYP6eW0YxaAjAykUY66CtCcuwte37w9aQXA3tHtfW6z_CYTOl2dfvF02fXBxceI7pwRbbP057Ptix8NrjPr6RUF8XBg79aPGa5rCch7BaeRFTd8wOt60byVCfLxCkNY0w/s2197/27%281%27.jpg',
    },
    {
    numb: 28,
    question: "15 वस्तु की लागत मूल्य 10 वस्तु की विक्रय मूल्य के बराबर है। फिर लाभ या हानि प्रतिशत ज्ञात करें।",
    answer: "50%",
    options: [
    "30%",
    "60%",
    "50%",
    "20%"
    ],
    queAudio: "https://archive.org/download/25_20230615/28.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj5a-KH-9JMGThrpo3I5ZNZOrhOZSRu1zhKV6cq41zucWLBiSaNC3rRrEVH0mQhExpejkvvwEJOSD5wGYv0NsR4iHndJCrXaUZ37srX_NXP_WoTKYUoHtPiBSoQTEcfNbZXnews4amSa0lisqjKXEaqLTiHtNDEqodOJzE8c1juTtmr3Gt2BrWz3o6Tg/s2127/28.jpg',
    },
    {
    numb: 29,
    question: "यदि 40 लेखों की विक्रय मूल्य 50 लेखों की लागत मूल्य के बराबर है, तो प्रतिशत हानि या लाभ है: {ssc cgl 13 june 2019 (evening)}",
    answer: "25% gain",
    options: [
    "25% loss",
    "25% gain",
    "20% loss",
    "20% gain"
    ],
    queAudio: "https://archive.org/download/25_20230615/29.mp3",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaHnlHfUKJ7F8LL87ExBl0gmH8D0XDzsPXlo4ozHvZQtJjHz5MXzF4h7UEjhOsagxCYBftXeWv_Me5CWZxODLH5-g1XBrLQY-J4IWsO7TsSPQHtwoIXYZcKnmMgwao3_XETFfctoFponCHxZnLrHC4e9xOBJ4KXKafGGJML6N5-nyc3RO9-6qJOIQqgQ/s2077/29.jpg',
    },
    {
    numb: 30,
    question: "यदि 7 वस्तुओं का विक्रय मूल्य ৪ वस्तुओं के क्रय मूल्य के बराबर है, तो लाभ प्रतिशत ( एक दशमलव स्थान तक सही) क्या है? {SSC CGL MAINS 29 Jan 2022}",
    answer: "14.3%",
    options: [
    "12.5%",
    "13.5%",
    "14.3%",
    "5.6%"
    ],
    queAudio: "https://archive.org/download/25_20230615/30.mp3	",
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi46OJc1JzKq9LdOETJEicuI907hKVfbgZU8R_5YPqAVHfZ8g-UE3EzMa-eeLdkTFyeY40cSVdT9c77F0xbu52sQZQPLj61aaFz98HRNA4KJlT0zGhuUHbhBob-SLlSVl8rFsMw5CMwH-skzqkvH-W45x9WuGY6NKZz0xWLuxPQj0ARgT4xD43HWmnnAw/s2092/30.jpg',
    },
    {
    numb: 31,
    question: "33 मीटर कपड़ा बेचकर राधे को 11 मीटर की लागत मूल्य का लाभ प्राप्त होता है। उसका लाभ प्रतिशत क्या है?",
    answer: "33.33%",
    options: [
    "33.33%",
    "14.28%",
    "40%",
    "23%"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiR75CB9h9HiVuKJw1RjeqELZuaKgdd975sPvQeln_4q35gmh3naLZH4r51TfC9kqDbSQcu3i3r-0PA-Wx0ToKHnYtLRVXvplB4DbehkojwEV-zNif84QzjQJm_qT3txYhCyIjAkXf-oWMYzNng_o6t44p1-BJeLO1DCzVVXVjRmMoIEyGQFbXZ4YbgDg/s2255/31.jpg',
    },
    {
    numb: 32,
    question: "14 वस्तुओं बेचने पर एक व्यक्ति को 2 वस्तुओं के लागत मूल्य की हानि होती है। इसका हानि प्रतिशत क्या है? (एक दशमलवर स्थान तक)",
    answer: "14.3%",
    options: [
    "20%",
    "28%",
    "14.3%",
    "12%"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWskreNRRw5gG07DC4647G-_kDw7qyKLfBGep7UAK7LXTPxfXyvVvLE40TUqobznTWmp9xTwZ2Pb1YjsjSET6YFhG2KuwlPp0AgSzerXmMziOoHTBQeaepkuH5SweGflhZ6P_k7j7QgRia3aRIYySq4C2s69PU6Hg2rmcHMvzPWiCpQX-NpIk5jpcjvA/s1902/32.jpg',
    },
    {
    numb: 33,
    question: "25 मीटर कपड़ा बेचकर रिया 5 मीटर की बिक्री मूल्य हासिल करती है। उसका लाभ प्रतिशत क्या है?",
    answer: "25%",
    options: [
    "20%",
    "25%",
    "45%",
    "5%"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKXUJ8EUySNTcH2J2cdSKrjbCuB5L9mZmtGT235hXtWfXAxXKDVivzsHyramm6KBdmcZcwMxoIY1ZY7D-bsyKXVRPOdhPQc0smoOipjidGClQsUuT8cnuUygaJqrr5k3SjEpIWfNZq12i7fm0fzpgb9hP74O11vyUPqFrwSqpFs00MaEbrPCCTPhbfzQ/s2165/33.jpg',
    },
    {
    numb: 34,
    question: "72 लेखों को बेचने से, 8 लेखों की बिक्री मूल्य बराबर नुकसान हुआ। नुकसान प्रतिशत क्या है?",
    answer: "10%",
    options: [
    "15%",
    "28%",
    "10%",
    "22%"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqI-FTM4qRd4AeRS7lhaXiRg7XxRHukbAlUZ8HuFWv4YzSm__Kls40SJMsv26U7IOMq3hHjd3mhqWt-t8QB3he4rqFNrta1uyn2fa4pW0XCObAJ7XSeLPWDog28RQFqeHGQlqRo0M1IQqTK1figK5d_P4vXEvxHTGteeiJk4EMEjccFsFXXeAtM2FZ3g/s1942/34.jpg',
    },
    {
    numb: 35,
    question: "800 रुपये में दो लेख बेचकर, एक व्यक्ति 5 लेखों की लागत मूल्य का लाभ प्राप्त करता है। लाभ प्रतिशत है: {ssc cgl 13 june 2019 (evening)}",
    answer: "250%",
    options: [
    "200%",
    "150%",
    "100%",
    "250%"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj30ttKcGqrrTHNrJ92A3k9n3OoaPbeKA5RxaVexO2rZYGNeMraakpNOoECHn47Pmx-X9x2195zXwtSFRxeH9jdI6a0ToIimctub_KhUTZegTuL7YI4d4bloR7iNPrLisTrekPxiqUhySaJzowAkfY9oZ75j1U3SJNoXRTCoapcA9Bggmb4AW94wEE-/s1869/35.1.jpg',
    },
    {
    numb: 36,
    question: "25 लेख बेचने के बाद, एक दुकानदार 5 लेखों की लागत मूल्य के बराबर लाभ कमाता है। अगर उसने कुल ৪০০ के लेख खरीदे हैं तो उसने उसे कितने में बेच दिया होगा ?",
    answer: "960",
    options: [
    "960",
    "907",
    "864",
    "380"
    ],
    solution: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaKH6zZFJQwx3GyFB4tlLedupqq9iy5aMUrVYURTROngadZicOsEjPr7jSAClqV3gzPhq4WaxrWbfbYdKG-9WVTU9OjOZ0Gz5M5_1R55eWcBk7u3ytc2NX99Q9i7jC37PbFvmUhjwUGirMXc3IbL-077YjWJQKnqJB-S7t2p3XqxB3J_I9sCGMdX0m/s1869/36.jpg',
    },
    {
    numb: 37,
    question: "यदि कोई व्यक्ति विक्रय मूल्य पर अपने लाभ % की गणना करता है और उसके अनुसार, उसका लाभ 20% है। उसका वास्तविक लाभ% ज्ञात करें।",
    answer: "25%",
    options: [
    "30%",
    "22%",
    "25%",
    "15%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 38,
    question: "यदि कोई व्यक्ति विक्रय मूल्य पर अपने नुकसान प्रतिशत की गणना करता है और उसके अनुसार, उसका नुकसान 37.5% है। उसका वास्तविक नुकसान प्रतिशत ज्ञात कीजिये।",
    answer: "300/11%",
    options: [
    "300/11%",
    "200%",
    "32%",
    "100/3%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 39,
    question: "किसी वस्तु को ₹ 800 में बेचने पर एक व्यक्ति को इसके विक्रय मूल्य पर 20% की हानि होती है तो क्रय मूल्य पर 25% लाभ कमाने के लिए उसे इस वस्तु को किस कीमत पर बेचना चाहिए। {ssc cgl 4 june 2019 (evening)}",
    answer: "₹1250",
    options: [
    "₹1000",
    "₹1225",
    "₹1250",
    "₹1050"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 40,
    question: "कोई वस्तु 640 रू में बेचकर किसी व्यक्ति को वस्तु के विक्रय मूल्य पर 15% की हानि होती है। वस्तु के क्रय मूल्य पर 15% लाभ प्राप्त करने के लिए उसे वस्तु को किस मूल्य (रूपये में ) पर बेचना चाहिए? {SSC CGL 17.08.2021 (Morning)}",
    answer: "846.40",
    options: [
    "800",
    "767.4",
    "859.4",
    "846.40"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 41,
    question: "नीरज और दीपक 2 दोस्त हैं। नीरज विक्रय मूल्य पर अपने लाभ % की गणना करता है जबकि दीपक क्रय मूल्य पर अपने लाभ % की गणना करता है। यदि दोनों 20% लाभ कमाने का दावा करते हैं और दोनों के वास्तविक लाभ के बीच का अंतर ₹ 100 है एवं दोनों का विक्रय मूल्य समान है तो उनका विक्रय मूल्य ज्ञात करें।",
    answer: "3000",
    options: [
    "2500",
    "3100",
    "3000",
    "3280"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 42,
    question: "एक वस्तु को ₹13400 में बेचने से होने वाला लाभ, 11600 में उसी वस्तु को बेचने पर हुए नुकसान के बराबर है। अगर इसे ₹14,750 (₹ में ) बेचा जाता है तो क्या लाभ होगा। SSC CHSL 2019",
    answer: "2250",
    options: [
    "2250",
    "1200",
    "1125",
    "1250"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 43,
    question: "किसी वस्तु को 832 रुपये में बेचने पर अर्जित लाभ उस वस्तु को 448 रुपये में बेचने पर हुई हानि के बराबर है। यदि वस्तु को 10% हानि पर बेचा जाता है तो उसका विक्रय मूल्य क्या होगा? { SSC CGL 11.04.2022 (Afternoon) }",
    answer: "576",
    options: [
    "390",
    "576",
    "466",
    "422"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 44,
    question: "एक दुकानदार को किसी वस्तु को ₹ 455 में बेचने पर कुछ रुपये की हानि होती है। यदि वह इसे ₹ 490 में बेचता तो उसे हानि से चार गुने के बराबर लाभ होता। 25% लाभ प्राप्त करने के लिए उसे वस्तु को किस मूल्य पर (₹ में ) बेचना चाहिए?  {ssc cgl 24.08.2021}",
    answer: "577.5",
    options: [
    "300",
    "432.5",
    "325",
    "577.5"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 45,
    question: "एक महिला ने एक वस्तु को कुछ लाभ पर 960 रुपये में बेचा। अगर उसने इसे 800 रुपये में बेचा होता, तो शुरुआती लाभ के 1/3 के बराबर हानि हुई होती। वस्तु का लाभ प्रतिशत कितना था?  {SSC CGL MAINS 03 Feb 2022}",
    answer: "100/7%",
    options: [
    "100/7%",
    "300/7%",
    "100/3%",
    "14.28%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 46,
    question: "सुलेखा एक वस्तु को 870 में बेचती है, तो उसे जो लाभ (रु में ) प्राप्त होता है, वह 450 रूपये में बेचने पर हुई हानि (रु में) के दुगुने के बराबर होता है। 15% का लाभ अर्जित करने के लिए, उसे वस्तु को कितने में बेचना चाहिए? {SsC MTS (Shift- I) 12/10/2021}",
    answer: "678.50",
    options: [
    "678.50",
    "578",
    "600",
    "695.5"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 47,
    question: "अनु ने कुछ लाभ में ₹480 में एक लेख बेचा। अगर उसने इसे ₹400 में बेचा होता, तो शुरुआती लाभ के एक-तिहाई के बराबर नुकसान होता। लेख का लागत मूल्य क्या था?  {ssc cgl tier-2, 11/09/ 2019}",
    answer: "420",
    options: [
    "420",
    "432",
    "560",
    "321"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 48,
    question: "किसी वस्तु को ₹ 246.80 रुपये में बेचने पर लाभ ₹216 में बेचने पर हुई हानि से 20% अधिक है। यदि वस्तु को ₹220.75 में बेचा जाए तो लाभ / हानि प्रतिशत क्या है?  SSC CGL 2020 Tier-I",
    answer: "4% loss",
    options: [
    "5% loss",
    "4% loss",
    "4% profit",
    "5% profit"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 49,
    question: "₹10 में 11 की दर से कुछ वस्तु खरीदी गयी और ₹11 में 10 के हिसाब से बेच दी। लाभ /हानि प्रतिशत ज्ञात कीजिए?",
    answer: "21% profit",
    options: [
    "21% profit",
    "40% loss",
    "30% loss",
    "33% profit"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 50,
    question: "₹189 में 36 के हिसाब से कुछ वस्तु खरीदी। ₹ 189 में 45 के हिसाब से बेच दी। तो लाभ / हानि % ज्ञात कीजिए।",
    answer: "20% profit",
    options: [
    "21% loss",
    " 25 profit",
    "20% profit",
    "15% loss"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 51,
    question: "₹11 में 7 के हिसाब से कुछ संतरे खरीदें और ₹3 में 2 के हिसाब से बेच दिए, तो ₹ 30 की हानि हुई तो बताएँ उसने कितने संतरे बेचे?",
    answer: "420",
    options: [
    "432",
    "420",
    "300",
    "400"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 52,
    question: "₹5 में 4 के हिसाब से कुछ संतरे खरीदे और ₹7 में 5 के हिसाब से बेच दिए, तो ₹ 18 का लाभ हुआ तो बताएँ उसने कितने संतरे बेचे?",
    answer: "120",
    options: [
    "120",
    "100",
    "140",
    "366"
    ],
    solution: 'img/1mg.png',
    },
    
    {
    numb: 53,
    question: "₹ 8 में 15 के हिसाब से कुछ सेब खरीदें और ₹ 2 में x के हिसाब से बेच दिए। तो 25% का लाभ हुआ । x का मान बताएँ।",
    answer: "3",
    options: [
    "3",
    "2",
    "6",
    "none"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 54,
    question: "₹7 में 9 के हिसाब से कुछ सेब खरीदी और ₹2 में   X के हिसाब से बेच दिए तो 14 <sup>2</sup>/<sub>7</sub>% की हानि हूुई। X का मान बताएँ। ",
    answer: "3",
    options: [
    "2",
    "1",
    "4",
    "3"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 55,
    question: "टॉफी ₹ 10 में 11 की दर से खरीदी गई। उतनी ही टॉफियाँ ₹ 10 में 9 के दर से खरीदी गई। पूरे भंडार को ₹1/टॉफी के हिसाब से बेच दिया। लाभ / हानि प्रतिशत ज्ञात कीजिए।",
    answer: "1% loss",
    options: [
    "2% loss",
    "1% loss",
    "3% profit",
    "1% profit"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 56,
    question: "एक दुकानदार ने 5 रुपये में 4 की दर से 60 पेंसिलें खरीदीं और 60 पेंसिलें, 3 रुपये में 2 की दर से खरीदीं। उस ने सभी पेंसिलों को मिलाकर 4 रूपये में 3 की दर से बेच दिया। उसका लाभ या हानि प्रतिशत ज्ञात करें। SSC CGL 19.04.2022 (Evening)",
    answer: "loss 100/3%",
    options: [
    "loss 100/3%",
    "loss 14⅐%",
    "profit 6⅔%",
    "profit 20%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 57,
    question: "एक दुकानदार 60 संतरे 72 रुपये में 10 की दर से खरीदता है, और समान संख्या 90 रुपये में 12 की दर से खरीदता है। वह लेनदेन पर 118 रुपये अतिरिक्त खर्च करता है। और वह सभी संतरे बेचता है जो वह खरीदता है। यदि पुरे लेन-देन में 26% का लाभ होता है, तो 32 संतरे का विक्रय मूल्य क्या है?  {SSC MTS (Shift- II) 27/10/2021}",
    answer: "₹336",
    options: [
    "₹345",
    "₹300",
    "₹400",
    "₹336"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 58,
    question: "अमिता 100 सेब 100.80 रुपये में 12 की दर से और 200 सेब 117 रुपये में 15 की दर से खरीदती है। यह पाया गया कि 10% सेब खराब हो गए थे। उसने सभी सेबों को 204 रुपये में 20 की दर से बेच दिया। पूरे लेनदेन में उसका लाभ प्रतिशत है: {SSC MTS (Shift- II) 14/10/2021}",
    answer: "14.75%",
    options: [
    "14.28%",
    "14.75%",
    "30%",
    "28%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 59,
    question: "एक आदमी ने कुछ संतरे 5 संतरे ₹1 की दर से, समान संतरे 4 संतरे ₹ 1 की दर से खरीदें। उसने सभी संतरे 9 संतरे ₹2 की दर से बेच दिए। इन सब में उसको ₹ 30 की हानि हुई, संतरों की संख्या ज्ञात करें?",
    answer: "10800",
    options: [
    "3987",
    "10000",
    "10800",
    "3600"
    ],
    solution: 'img/1mg.png',
    },
    
    {
    numb: 60,
    question: " ₹ 20 में 6 के दर से कुछ वस्तु खरीदी और ₹26 में 8 के दर से उससे दोगुनी वस्तु खरीदी। दोनों को मिलाकर ₹118 रुपए में 24 के दर से बेच दिया गया। लाभ /हानि प्रतिशत ज्ञात कीजिए।",
    answer: "50% profit",
    options: [
    "50% profit",
    "30% loss",
    "42% loss",
    "25% profit"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 61,
    question: "एक फल विक्रेता ने कुछ केले खरीदे। उनमें से ⅕ सड़  गए और उन्हें फेंक दिया गया। उसके पास बचे  हुए ‌केलो को फेंक दिया गया ।  उसने बचें हुए  केलो में से ⅖  को 15% लाभ पर और शेष केलों को  10% लाभ पर बेचा। कुल लाभ या हानि प्रतिशत ज्ञात करें। SSC CGL 23.08.2021 (Evening)",
    answer: "loss 10.4%",
    options: [
    "loss 10.4%",
    "profit 20%",
    "loss 20%",
    "loss 3%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 62,
    question: "एक व्यक्ति ने तीन वस्तु ओं में से प्रत्येक को ₹3,000 रुपये में खरीदा। उसने इन वस्तुओं को क्रमश: 10% लाभ, 5% लाभ और 15% हानि पर बेचा। उसके द्वारा प्राप्त कुल लाभ /हानि  % ज्ञात करें। {SSC CHSL 9 July 2019}",
    answer: "no profit no loss",
    options: [
    "23% profit",
    "20% profit",
    "20% loss",
    "no profit no loss"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 63,
    question: "एक व्यक्ति ने तीन वस्तुओं में से प्रत्येक को ₹6000 में खरीदा। उसने इन वस्तुओं को क्रमशः 15% लाभ, 12% लाभ और 15% हानि पर बेचा। उसे कुल कितने प्रतिशत का लाभ या हानि हुआ /हुई? {SSC CHSL 9 July 2019}",
    answer: "4% profit",
    options: [
    "3% loss",
    "4% profit",
    "4% loss",
    "20% profit"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 64,
    question: "एक व्यक्ति ने कुछ वस्तुएँ खरीदी। उसने ⅓ वस्तुएँ 14% लाभ पर, ⅗  वस्तुएँ 17.5% लाभ पर और शेष वस्तुएँ  20% लाभ पर बेच दी। इस सौदे में उसे कितना प्रतिशत लाभ हुआा?",
    answer: "18.5%",
    options: [
    "20.4%",
    "22%",
    "18.5%",
    "12%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 65,
    question: "एक विक्रेता ने कुछ खिलौने ₹ 1800 में खरीदें । उसने इनमें से 40% को 15% की हानि और शेष खिलौनों के 33⅓% को 20% के लाभ पर बेचा। कुल 10% का  लाभ प्राप्त करने हेतु उसे शेष खिलौनों को कितने प्रतिशत के लाभ पर बेचना चाहिए?  {SSC CGL 23.08.2021 (Evening)}",
    answer: "30%",
    options: [
    "20%",
    "30%",
    "36%",
    "22%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 66,
    question: "यदि एक प्रेषित वस्तु का 2/3 भाग 5% के लाभ पर बेचा जाता है और शेष 2% की हानि पर बेचा जाता है। यदि कुल लाभ ₹ 400 हो तो प्रेषित सामान का मूल्य था-",
    answer: "15000",
    options: [
    "15000",
    "16500",
    "14000",
    "14222"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 67,
    question: "एक आदमी 76 गाय खरीदता है। 40 को 19% लाभ पर, 16 को 25% लाभ पर तथा 20 गाय को 15% लाभ पर बेच दिया। उसे ₹6570 का फायदा हुआ तो एक गाय का क्रय मूल्य ज्ञात करें?",
    answer: "450",
    options: [
    "246",
    "450",
    "130",
    "800"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 68,
    question: "एक दुकानदार ने 50 रुपये प्रति वस्तु की दर से एक वस्तु के 40 टुकड़े खरीदे। उसने 20% लाभ के साथ 35 टुकड़े बेचे। शेष 5 टुकड़े क्षतिग्रस्त पाए गए और उसने उन्हें 10% हानि के साथ बेच दिया। उसका कुल लाभ प्रतिशत ज्ञात कीजिए। {SSC CGL 13.04.2022 (Evening)}",
    answer: "16.25%",
    options: [
    "20.24%",
    "16.25%",
    "16 5%",
    "20.2%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 69,
    question: "⅓ वस्तुएं  15% लाभ, ¼ वस्तुएं 20% लाभ   और शेष को 24%  लाभ पर बेचा जाता है तो कूल ₹ 62 का लाभ होता है। वस्तुओं की कीमत ज्ञात करें?",
    answer: "310",
    options: [
    "310",
    "316",
    "290",
    "300"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 70,
    question: "यदि वस्तुओं का दो-तिहाई हिस्सा 25% लाभ पर, 20% हिस्सा 20% की हानि पर और शेष हिस्सा 20% के लाभ पर बेचा जाता है, तो ₹3,312 का लाभ होता है। वस्तुओं का लागत मूल्य हैं: SSC MTS 20 August 2019",
    answer: "₹ 21600",
    options: [
    "₹ 216000",
    "₹ 42565",
    "₹ 22650",
    "₹ 5400"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 71,
    question: "एक कपड़ा व्यापारी अपने पास के आधे कपड़े को 20 प्रतिशत लाभ पर तथा बचे हुए कपड़े के आधे को 20 प्रतिशत हानि पर तथा शेष कपड़े को लागत मूल्य पर बेचता है तो पूरे सौदे में उसका प्रतिशत लाभ या हानि ज्ञात करें?",
    answer: "5% profit",
    options: [
    "6% profit",
    "5% profit",
    "10% loas",
    "5% loss"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 72,
    question: "एक व्यक्ति ₹ 50 प्रति कलम की दर से 50 कलम खरीदता हैं वह 40 कलमों को 5 प्रतिशत हानि पर बेच देता है। बचे हुए कलमों कितने प्रतिशत लाभ पर बेचा जाए कि कुल 10 प्रतिशत लाभ हो।",
    answer: "₹ 70",
    options: [
    "₹ 20",
    "₹ 70",
    "₹ 200",
    "₹ 100"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 73,
    question: "एक दुकानदार ने 120 क्विंटल गेहूँ खरीदा। इसकी 20% मात्रा 25% हानि पर बेची गयी। पुरे लेन-देन पर 25% का लाभ कमाने के लिए उसे शेष मात्रा को कितने प्रतिशत लाभ पर बेचना चाहिए?  {ssc cgl mains 11/09/2019}",
    answer: "37½ %",
    options: [
    "45⅐ %",
    "13⅖ %",
    "25⅔ %",
    "37½ %"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 74,
    question: "एक दुकानदार दो कैमरा समान क्रय मूल्य पर खरीदता है। वह एक कैमरा 18% लाभ पर तथा दूसरे को पहले से 10% कम पर बेचता है। उसका कुल लाभ या हानि, प्रतिशत ज्ञात करें।",
    answer: "12.1 % profit",
    options: [
    "26% profit",
    "26 % loss",
    "14.3 % loss",
    "12.1 % profit"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 75,
    question: "दो घोड़े में से प्रत्येक को ₹1599 की दर से बेचा गया उनमें से पहले घोड़े को 25% लाभ पर तथा दूसरे को 20% हानि पर बेचा गया। पूरे सौदे में लाभ या हानि प्रतिशत ज्ञत करें।",
    answer: "loss of 100/41 %",
    options: [
    "loss of 100/41 %",
    "profit of 200 %",
    "loss of 300/22 %",
    "profit of 34⅛ %"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 76,
    question: "राधा एक फ्रीज और एक वाशिंग मशीन एक साथ ₹ 57300 में खरीदी। उसने फ्रीज को 15% लाभ और वारशिंग मशीन को 24% की हानि पर बेचा और दोनों का विक्रय मूल्य समान है। वाशिंग मशीन का क्रय मूल्य (₹ में ) क्या है?  SSC CGL 23.08.2021 (Afternoon)",
    answer: "34500",
    options: [
    "32450",
    "20000",
    "35000",
    "34500"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 77,
    question: "आदित्य अपने निजी संग्रह से कलाई घड़ियाँ 12600 रुपये में बेचता है। पहली घड़ी में उसे 26% का लाभ होता है और दूसरी बार उसे 10% की हानि होती है। कुल लाभ या हानति प्रतिशत ज्ञात कीजिए। Ssc CGL 12.04.2022 (Evening)",
    answer: "loss of 5%",
    options: [
    "loss of 5%",
    "loss of 4%",
    "loss of 3%",
    "profit of 5%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 78,
    question: "दो घोड़े ₹ 1920 प्रत्येक के दर से बेचा जाता है। एक को 20% हानि तथा दुसरे को 20% लाभ पर बेचा जाता है। कुल कितने रुपये का लाभ या हानि हुआ ?",
    answer: "loss of 4%",
    options: [
    "profit of 4%",
    "profit of 5%",
    "loss of 5%",
    "loss of 4%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 79,
    question: "एक मकान तथा एक दुकान में से प्रत्येक को एक लाख रुपए में बेचा गया। मकान पर 20% की हानि तथा दुकान पर 20% लाभ रहा। कूल सौदे का परिणाम रहा-",
    answer: "₹ <sup>1</sup>/<sub>12</sub> lakh loss",
    options: [
    "₹ <sup>2</sup>/<sub>51</sub> lakh profit",
    "₹ <sup>1</sup>/<sub>12</sub> lakh loss",
    "₹ <sup>5</sup>/<sub>12</sub> lakh profit",
    "₹ <sup>3</sup>/<sub>12</sub> lakh loss"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 80,
    question: "विजय एक फ्रीज और एक वाशिंग मशीन एक साथ ₹ 38,200 में खरीदा। उसने फ्रीज को 15% लाभ और वाशिंग मशीन को 24% की हानि पर बेचा और दोनों का विक्रय मूल्य समान है। वारशिंग मशीन का क्रय मूल्य (₹ में) क्या है? ssc CHSL 2020",
    answer: "₹ 24000",
    options: [
    "₹ 24000",
    "Rs 4000",
    "Rs 3000",
    "Rs 3550"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 81,
    question: "x, दो वस्तुओं को ₹ 4000 प्रति वस्तु की दर से किसी लाभ-हानि पर बेचता है। कुल मिलाकर उसे न लाभ और न हानि होती है। यदि एक वस्तु को 25% लाभ पर बेची जाती है तो दूसरी वस्तु कितनी हानि पर बेची जाएगी?",
    answer: "16.66%",
    options: [
    "14.3%",
    "22.4%",
    "16.66%",
    "12½ %"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 82,
    question: "वस्तुओं में से प्रत्येक को एक दकानदार ने ₹ 2400 में बेचा। दुकानदार को पूरे लेन-देन में ना तो लाभ हुआ ना ही हानि हुई। यदि इनमें से एक वस्तु 20% के लाभ पर बेची गयी, तो दूसरी वस्तु पर कितने रुपये की हानि हुई  ssc mts 2019",
    answer: "Rs400",
    options: [
    "Rs400",
    "Rs500",
    "Rs450",
    "Rs456"
    ],
    solution: '',
    },
    {
    numb: 83,
    question: "मुन्नी ने ₹ 115 में एक मोबाइल और एक बंदूक खरीदी। उसने 20% लाभ पर बंदूक और 30% लाभ पर मोबाइल बेचा। उसने पाया कि बंदूक की क्रय मूल्य मोबाइल के क्रय मूल्य के बराबर है। उसकी कुल लाभ राशि और लाभ प्रतिशत ज्ञात कीजिये?",
    answer: "28 , 24 <sup>8</sup>/<sub>23</sub> %",
    options: [
    "28 , 24 <sup>8</sup>/<sub>23</sub> %",
    "23.4%",
    "14.3%",
    "25.26%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 84,
    question: "एक दुकानदार दो वस्तुएँ बेचता है। पहली वस्तु का विक्रय मूल्य दूसरे वस्तु के क्रय मूल्य के बराबर है। उसने पहली वस्तु 20% के लाभ और दूसरे वस्तु को 10% की हानि पर बेचा। कुल लाभ या हानि प्रतिशत क्या है? SSC CGL 20.08.2021 (Afternoon)",
    answer: "profit 3 <sup>7</sup>/<sub>11</sub> %",
    options: [
    "profit 4 <sup>7</sup>/<sub>15</sub> %",
    "23½ %",
    "profit 3 <sup>7</sup>/<sub>11</sub> %",
    "15⅖ %"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 85,
    question: "शीला ने एक निश्चित मूल्य पर एक साड़ी और एक लहंगा खरीदा। उसने साड़ी 10% और लहंगा 25% लाभ पर बेची। उसने पाया कि साड़ी की कीमत मूल्य लहंगा की बिक्री मुल्य के बराबर है। उसका लाभ प्रतिशत ज्ञात कीजिये?",
    answer: "16.66 %",
    options: [
    "16.66 %",
    "23½ %",
    "14.6 %",
    "20%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 86,
    question: "₹160 में 90 बॉल पेन बेचने पर एक व्यक्ति को 20 प्रतिशत हानि होती है, तो 20 प्रतिशत लाभ कमाने के लिए उसे ₹ 9 में कितने बॉल पेन बेचने चाहिये?",
    answer: "36",
    options: [
    "36",
    "20",
    "46",
    "24"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 87,
    question: "₹3 के 7 सेब खरीदे। 100 सेब कितने में बेचे कि 33% का फायदा हो?",
    answer: "57",
    options: [
    "27",
    "33",
    "57",
    "49"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 88,
    question: "रूपये 405 में 3 दर्जन संतरे बेचकर किसी व्यापारी को 25% की हानि होती है। यदि वह सौदे में 20% का लाभ प्राप्त करना चाहता है, तो उसे 288 रूपये में कितने संतरे बेचने चाहिए?  SSC CHSL 04.08.2021 (Evening)",
    answer: "16",
    options: [
    "16",
    "24",
    "36",
    "4"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 89,
    question: "₹1 के 32 संतरे बेचने पर एक व्यक्ति को 40% की हानि होती है, ₹1 के कितने संतरे बेचे की उसे 20% का लाभ हो।",
    answer: "16",
    options: [
    "9",
    "8",
    "32",
    "16"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 90,
    question: "₹1 में 4 वस्तुएँ बेच कर एक आदमी को 4% हानि होती है। यदि उसने ₹ 1 में तीन वस्तुएँ बेची होती, तो उसका लाभ प्रतिशत क्या होता?",
    answer: "28",
    options: [
    "14",
    "26",
    "28",
    "7"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 91,
    question: "₹ 160 में 70 वस्तु बेचने पर 20% की हानि होती है। ₹ 96 में कितने वस्तु बेचे कि 20% का फायदा हो ?",
    answer: "28",
    options: [
    "92",
    "32",
    "28",
    "29"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 92,
    question: "18 टेबल पंखों को ₹ 11,664 में बेचने के बाद एक व्यक्ति को 10% की हानि होती है। 10% का लाभ कमाने के लिए उसे ₹ 17,424 में कितने पंखे बेचने चाहिए?  SSC CGL 7 March 2020",
    answer: "22",
    options: [
    "44",
    "17",
    "27",
    "22"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 93,
    question: " कोई बेईमान व्यापारी वस्तु को क्रय मूल्य पर बेचने का दावा करता है, पर वह एक किलोग्राम भार की जगह 950 ग्राम भार का इस्तेमाल करता है। उसे कितना प्रतिशत मुनाफा हुआ?",
    answer: "5.30 %",
    options: [
    "5.30 %",
    "10.4%",
    "20%",
    "23.5%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 94,
    question: "एक बेईमान दुकानदार अपनी लागत मूल्य पर अपना माल बेचने का वादा करता है लेकिन वह 30% कम वजन का उपयोग करता है। उसका लाभ%् ज्ञात कीजिये?",
    answer: "42 <sup>6</sup>/<sub>7</sub> %",
    options: [
    "42.9%",
    "42 <sup>6</sup>/<sub>7</sub> %",
    "45.25%",
    "40%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 95,
    question: "एक बेईमान दुकानदार अपने माल को 30% लाभ पर बेचने का वादा करता है लेकिन वह 1 किलो के बजाय 800 ग्राम वजन का उपयोग करता है। उसका वास्तविक लाभ% क्या होगा?d",
    answer: "62.5%",
    options: [
    "62.4%",
    "60%",
    "62.5%",
    "30%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 96,
    question: "एक बेईमान दुकानदार 44% नुकसान पर अपने माल को बेचने का वादा करता है लेकिन वह 1 किलो के बजाय 910 ग्राम वजन का उपयोग करता है। उसका वास्तविक नुकसान प्रतिशत क्या होगा? (लगभग)",
    answer: "38.4%",
    options: [
    "56.2%",
    "23.4%",
    "38.4%",
    "22%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 97,
    question: "एक आदमी अपने माल को 15% तक चिह्नित करता है, लेकिन वह अपने ग्राहक को 1 किलोग्राम के बदले 920 ग्राम देता है। लाभ प्रतिशत प्राप्त करें?",
    answer: "25%",
    options: [
    "25%",
    "40%",
    "20%",
    "5%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 98,
    question: "एक व्यापारी दोषपूर्ण भार का उपयोग करके अपने आपूर्तिकर्ता और उसके ग्राहक दोनों को धोखा देता है। जब वह आपूर्तिकर्ता से खरीदता है, तो वह संकेतित भार से 20% अधिक लेता है। जब वह अपने ग्राहक को बेचता है, तो वह संकेतित वजन से 20% कम देता है। यदि वह लागत मूल्य पर अपने लेख बेचता है, तो उसका शुद्ध लाभ % क्या है:",
    answer: "50%",
    options: [
    "10%",
    "30%",
    "55%",
    "50%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 99,
    question: "एक दुकानदार लागत मूल्य से 35% ऊपर अपने माल को चिह्नित करता है और ग्राहक को 23% की छूट देता है। खरीदने के समय वह 1 किलो के बजाय 1120 ग्राम का उपयोग करता है और सामान बेचने के समय वह 1 किलो के बजाय 880 ग्राम वजन देता है। उसका लाभ% ज्ञात कीजिये?",
    answer: "32.3%",
    options: [
    "34.2%",
    "32.3%",
    "32%",
    "35%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 100,
    question: "एक दुकानदार ने लागत मूल्य पर अपना माल बेचने क वादा किया, लेकिन उसने 945 ग्राम के बजाय कुछ ग्राम का गलत वजन इस्तेमाल किया और उसे 26% लाभ हुआ झूठे वजन का पता लगाए?",
    answer: "750 gm",
    options: [
    "750 gm",
    "600 gm",
    "452 gm",
    "700 gm"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 101,
    question: "एक बेईमान डीलर लागत मूल्य पर 15% हानि पर सामान बेचता है लेकिन गलत वजन का उपयोग करता है। तो उसका कुल लाभ 25% है तो ज्ञात कीजिए कि उसने 1 किग्रा के स्थान पर कितने वजन का उपयोग किया।",
    answer: "680",
    options: [
    "240",
    "680",
    "350",
    "500"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 102,
    question: "एक बेईमान फल विक्रेता फलों को 5% हानि पर बेचता है। यदि वह 1 किलो के स्थान पर 850 ग्राम का वजन इस्तेमाल करता है तो उसका लाभ % ज्ञात कीजिए।",
    answer: "11 <sup>13</sup>/<sub>17</sub> %",
    options: [
    "11 <sup>13</sup>/<sub>17</sub> %",
    "11.23%",
    "12 <sup>13</sup>/<sub>15</sub> %",
    "14.3%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 103,
    question: "एक बेईमान दुकानदार क्रय मूल्य पर 6¼%  की हानि उठाता है यदि 12½% कम तौलता है। तो उसको होने वाला लाभ या हानि प्रतिशत ज्ञात करें ?",
    answer: "7 <sup>1</sup>/<sub>7</sub> %",
    options: [
    "14 <sup>1</sup>/<sub>7</sub> %",
    "7 <sup>1</sup>/<sub>7</sub> %",
    "14.5%",
    "20%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 104,
    question: "एक वस्तु को 12% लाभ बेचा जाता है। यदि 10% कम में खरीदा गया होता और ₹5.75 ज्यादा में बेचा गया होता तो 30% लाभ होता। वस्तु का क्रय मूल्य ज्ञात करें?",
    answer: "Rs 115",
    options: [
    "Rs 115",
    "Rs 220",
    "Rs 43",
    "Rs 212"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 105,
    question: "कोई व्यक्ति 10 प्रतिशत मुनाफा लेकर एक वस्तु बेचता है। यदि उसने इस वस्तु को 10 प्रतिशत कम मूल्य पर खरीदा होता एवं 3 रु. अधिक लेकर बेचा होता तो 25 प्रतिशत मुनाफा होता। क्रय मूल्य बताएँ।",
    answer: "Rs 150",
    options: [
    "Rs 120",
    "Rs 220",
    "Rs 134",
    "$s 150"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 106,
    question: "एक आदमी ने एक वस्तु को खरीदा और उसे 10% की लाभ पर बेचा। यदि उसने 20% कम में वस्तु खरीदा होता और इसे ₹ 1000 अधिक मे बेचा होता, तो उसने 40% का लाभ कमाया होता। वस्तु का क्रय मूल्ये (₹ में) ज्ञात करें। [cpo 2019]",
    answer: "50,000",
    options: [
    "48,000",
    "35,000",
    "20,000",
    "50,000"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 107,
    question: "एक व्योक्ति ने एक मकान 15% लाभ पर बेचा। यदि उसने इसे 25% कम में खरीदा होता और ₹60 कम पर बेचता तो उसे 32% लाभ होता। मकान का क्रय मूल्य ज्ञात करो?",
    answer: "Rs 375",
    options: [
    "Rs 4000",
    "Rs 4356",
    "Rs 375",
    "Rs 4600"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 108,
    question: "एक व्यक्ति किसी वस्तु को 12% लाभ पर बेचता है। यदि उसने इसे 12% कम में खरीदा होता और इसे ₹ 9 कम में बेचा होता, तो उसे 27% का लाभ होता। इस वस्तु का वास्तविक क्रय मूल्य ज्ञात करें।",
    answer: "Rs 3750",
    options: [
    "Rs 4400",
    "Rs 4306",
    "Rs 3750",
    "Rs 4650"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 109,
    question: " एक पुस्तक विक्रेता एक किताब 10% लाभ पर बेचता है। यदि वह उस किताब को 4% कम मूल्य पर खरीदता  तथा 6 रुपए अधिक मूल्य पर बेचता तो उसे 18¾ %  का लाभ होता, पुस्तक का क्रय मूल्य ज्ञात करें।",
    answer: "150",
    options: [
    "200",
    "180",
    "120",
    "150"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 110,
    question: "अनु किसी वस्तु का विक्रय मूल्य इसके उत्पादन लागत से 25% अधिक निर्धारित करती है। यदि उत्पादन की लागत 20% बढ़ जाती है एवं वह विक्रय मूल्य 10% बढ़ा देती है, तो उसका प्रतिशत लाभ होगा : (दशमलव के एक स्थान तक) SSC CGL 3 March 2020",
    answer: "14.6%",
    options: [
    "14.6|",
    "23 5%",
    "12.5%",
    "10%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 111,
    question: "एक वस्तु को बेचने पर एक औरत 20%™लाभ कमाती है। यदि उसने इसे 1000 रु. कम में खरीदा होता एवं 400 रु. कम में बेचती तो उसे 40% लाभ होता। वस्तु का प्रारभिक क्रय मूल्य क्या था?",
    answer: "5000",
    options: [
    "2000",
    "2020",
    "2030",
    "5000"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 112,
    question: "एक वस्तु को 20% लाभ पर बेचा जाता है। यदि क्रय मूल्य एवं विक्रय मूल्य दोनों ही ₹20 कम हो तो लाभ % पहले से 10% ज्यादा होगा। वस्तु का क्रय मूल्य ज्ञात करें?",
    answer: "Rs 60",
    options: [
    "Rs 60",
    "Rs 40",
    "Rs 50",
    "Rs 20"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 113,
    question: "एक आदमी किसी वस्तु को 25 प्रतिशत लाभ पर बेचता है। अगर उसने इसे 900 रु. कम में खरीदा होता और 900 रु. कम में बेचा होता तो उसे 5 प्रतिशत का अतिरिक्त लाभ होता। वस्तु का क्रय मूल्य ज्ञात करो?",
    answer: "5400",
    options: [
    "23570",
    "25660",
    "3250",
    "5400"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 114,
    question: "एक वस्तु को 20% लाभ पर बेचा जाता है। यदि क्रय मूल्य एवं विक्रय मूल्य दोनों ही ₹ 50 कम हो तो लाभ % पहले से 24% होगा। वस्तु का क्रय मूल्य ज्ञात करें ?",
    answer: "Rs 300",
    options: [
    "Rs 300",
    "Rs 400",
    "Rs 200",
    "Rs 250"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 115,
    question: "एक आदमी एक टेबल को 12% हानि तथा किताब को 19% लाभ पर बेचता है तथा ₹ 160 का लाभ कमाता है। परन्तु यदि वह टेबल को 12% लाभ तथा किताब को 16% हानि पर बेचता है तब उसे ₹ 40 की हानि होती है। टेबल तथा किताब के मूल्य में अन्तर ज्ञात करो।",
    answer: "Rs 1000",
    options: [
    "Rs 10020",
    "Rs 2000",
    "Rs 1000",
    "Rs 3000"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 116,
    question: "रमेश एक कलम को 5 प्रतिशत हानि तथा किताब को 15 प्रतिशत लाभ पर बेचकर कूल 7 रु. लाभ कमाता है। अगर वह कलम को 5 प्रतिशत लाभ और किताब को 10 प्रतिशत लाभ पर बेचे तो ₹6 ज्यादा कमाता है। किताब और कलम का मल्य ज्ञात करो?",
    answer: "80 & 100",
    options: [
    "20",
    "80 & 100",
    "100 & 120",
    "100"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 117,
    question: "एक आदमी दो घड़ियाँ ₹ 1800 में खरीदता है तथा उनमें से एक को 10% लाभ तथा दूसरे को 20% लाभ पर बेचता है। यदि वह पहले को 20% लाभ तथा दूसरे को 10% लाभ पर बेचता तो 15 रुपये अधिक प्राप्त होते। दोनों घड़ियों के क्रय मूल्यों में अन्तर ज्ञात करो।",
    answer: "Rs 150",
    options: [
    "Rs 150",
    "Rs 120",
    "Rs 300",
    "Rs 200"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 118,
    question: "दो घोड़े ₹1600 के खरीदे गये। पहले घोड़े को 10% लाभ पर बेच दिया तथा दसरे को 20% लाभ पर बेच दिया। यदि उसने पहले को 20% लाभ और दूसरे को 10% लाभ पर बेचा होता तो 5 रुपए ज्यादा मिलते। दोनों घोडों के क्रय मल्य का अन्तर ज्ञात करें ",
    answer: "Rs 50",
    options: [
    "Rs 200",
    "Rs 50",
    "Rs 20",
    "Rs 210"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 119,
    question: "एक आदमी एक टेबल पर 12½% लाभ और कुर्सी  को 8⅓% हानि पर बेचता है तो उसे कुल ₹25  फायदा होता है। यदि वो टेबल को ৪⅓% हानि पर  बेचता और कुर्सी को 12½% लाभ पर बेचता तो उसे  न हानि होती न लाभ टेबल का क्रय मूल्य ज्ञात करें?",
    answer: "Rs 360",
    options: [
    "Rs 360",
    "Rs 100",
    "Rs 230",
    "Rs 220"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 120,
    question: "एक व्यक्ति 5 मेज और 9 कुर्सियों को ₹15,400 में खरीदा। उसने मेजों को 10% लाभ पर तथा कुर्सियों को 20% लाभ पर बेच दिया। यदि सभी मेज एवं कुर्सियों को बेचकर उसका कुल लाभ ₹2,080 का था, तो 3 कुर्सियों का का क्रय मूल्य कितना है?  SSC CGL 4 March 2020",
    answer: "Rs 18,00",
    options: [
    "Rs 19,00",
    "Rs 2,000",
    "Rs 18,00",
    "Rs 1000"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 121,
    question: "एक आदमी 5 घोड़े और 10 गाय ₹ 10,000 में खरीदता है वह घोड़ों को 15% लाभ और गाय को 10% हानि पर बेचता है तो उसे ₹375 का लाभ होता। एक घोड़ा एवं एक गाय का क्रय मूल्य अलग-अलग ज्ञात करें।",
    answer: "Rs 1100, Rs 450",
    options: [
    "Rs 1100, Rs 450",
    "Rs 1300, Rs 700",
    "Rs 100, Rs 40",
    "Rs 1500, Rs 400"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 122,
    question: "यदि मैं एक घोड़ा ₹ 6200 में और एक गाय ₹2600 में बेचता हूँ तो दोनों की लागत पर 10% लाभ कमाता हूँ। यदि मैं घोड़ा को ₹6000 में और गाय को उसके क्रय मूल्य पर बेचता हूँ तो मुझे 12½% का लाभ होता है। घोड़े का क्रय मूल्य ज्ञात करें।",
    answer: "Rs 5000",
    options: [
    "Rs 3000",
    "Rs 5500",
    "Rs 5000",
    "Rs 2000"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 123,
    question: "एक बेडमान दूधवाला दूध को लागत मूल्य पर बेचता है  पर दूध में पानी मिलाता है और 16⅔% लाभ कमाता  है। मिश्रण से दूध का अनुपात ज्ञात कीजिए?",
    answer: "7:6",
    options: [
    "7:6",
    "8:5",
    "2:5",
    "1:9"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 124,
    question: "एक बेइमान दूधवाला दूध को लागत मूल्य पर बेचता है  पर दुध में पानी मिलाता है और 14<sup>2</sup> / <sub>7</sub>% लाभ कमाता 7 है। मिश्रण से दूध का अनुपात ज्ञात कीजिए?",
    answer: "8:7",
    options: [
    "8:5",
    "8:3",
    "8:7",
    "1:2"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 125,
    question: "एक बेडमान दूधवाला दूध को लागत मूल्य पर बेचता है। पर दुध में पानी मिलाता है और 25% लाभ कमाता है। मिश्रण में पानी का प्रतिशत कितना है?",
    answer: "20%",
    options: [
    "25%",
    "30%",
    "20%",
    "10%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 126,
    question: "किसी वस्तु को 131.25 रूपये में बेचकर, एक व्यापारी को वस्तु को क्रय मूल्य को अंकों के बराबर प्रतिशत में लाभ होता है। 40% लाभ प्राप्त करने के लिए उसे वस्तु को किस मूल्य पर (रूपये में ) बेचना चाहिए? SSC CGL 18.08.2021 (Afternoon)",
    answer: "105",
    options: [
    "105",
    "110",
    "280",
    "100"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 127,
    question: "एक निश्चित मूल्य पर आामों को बेचकर एक फल विक्रेता 20% लाभ कमाता है। यदि वह 1 रुपये अधिक में एक आम बेचता है, तो उसे 40% लाभ होगा। पहली स्थिति में एक आम का विक्रय मूल्य ज्ञात करें।",
    answer: "Rs 6",
    options: [
    "Rs 3",
    "Rs 4",
    "Rs 2",
    "Rs 6"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 128,
    question: "एक आदमी एक टी.वी. को 25% लाभ पर बेचता है। यदि उसको इस टी.वी. पर विक्रय मूल्य के 25% के बराबर लाभ हुआ होता तो उसे ( क्रय मूल्य का 5% + ₹ ৪০) ज्यादा मिलते तो उस टी.वी. का क्रय मूल्य क्या है ?",
    answer: "6400",
    options: [
    "3200",
    "6840",
    "6400",
    "12800"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 129,
    question: "एक चाय बेचने वाला 9 रुपये प्रति कप पर चाय बेचकर 50% लाभ कमाता था। जब सामग्री की कीमत में 25% की वृद्धि हुई, तो उसने 10 रुपये प्रति कप पर चाय बेचना शुरू कर दिया। अब उसका लाभ प्रतिशत क्या है?   SSC CGL 13.04.2022 (Morning)",
    answer: "33.33%",
    options: [
    "33.33%",
    "14.28%",
    "20%",
    "30%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 130,
    question: "एक सब्जी विक्रेता ने 1 किलो आलू 25 सुपये में बेचा और 25% लाभ अर्जित किया। शाम को, उसने केवल 10% लाभ के साथ आलू बेचना शुरू किया। उसने शाम को आलू किस कीमत पर (रुपये में ) प्रति किलो बेचा?  SSC CGL 21.04.2022 (Evening)",
    answer: "22",
    options: [
    "11",
    "57",
    "23",
    "22"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 131,
    question: "एक वस्तु एक निश्चत कीमत पर बेची जाती है। यदि इसे इस मूल्य के 70% पर बेचा जाता है, तो 10% की हानि होती है। मूल विक्रय मूल्य पर बेचने पर लाभ का प्रतिशत क्या है?   SSC CGL 20.04,2022 (Evening)",
    answer: "200/7 %",
    options: [
    "200/7 %",
    "100/3 %",
    "300/7 %",
    "200%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 132,
    question: "एक वस्तु एक निश्चत मूल्य पर बेचा जाता है। यदि इसे इस मूल्य के 33.33% पर बेचा जाता है, तो 33.33% की हानि होती है। मूल विक्रय मूल्य के 60% पर बेचे जाने पर प्रतिशत लाभ क्या है?  SSC CGL Tier-II, 11 September, 2019",
    answer: "20",
    options: [
    "20",
    "50",
    "10",
    "30"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 133,
    question: "एक वस्तु एक निश्चत मूल्य पर बेची जाती है। यदि इसे  इस मूल्य के 33⅓ % पर बेचा जाता, तो 33⅓% की  हानि होती। यदि वस्तु को उसके मूल्य विक्रय मूल्य के 80% पर बेचा जाता है तो प्रतिशत लाभ क्या होगा?  SSC CGL MAINS 29 Jan 2022",
    answer: "60%",
    options: [
    "35%",
    "15%",
    "30%",
    "60%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 134,
    question: "मंजीत ने 22000 रुपये में एक सेकेंड हैंड मोटरबाइक खरीदी और इसके ओवरहालिंग और रखरखाव पर 3000 रुपये खर्च किए। फिर उसने इसे 12% लाभ के साथ बेच दिया। यदि वह इसे 500 रुपये कम पर बेचता, तो उसका लाभ प्रतिशत क्या होता?   SSC CGL 20.04.2022 (Morning)",
    answer: "10%",
    options: [
    "20%",
    "10%",
    "25%",
    "11%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 135,
    question: "एक वस्तु के निर्माण की लागत 24,000 रुपये थी, और इसका 20% पैकेजिंग और एक खुदरा विक्रेता को इसकी शिपमेंट पर खर्च किया गया था। निर्माता को 50% का लाभ हुआ, जबकि खुरदरा विक्रेता को इसे ग्राहक को बेचने में 20% की हानि हूुई। फुटकर विक्रेता द्वारा वस्तु को किस कीमत पर (रुपये में ) बेचा गया?   SsC MTS (Shift- II) 05/10/2021",
    answer: "34,560",
    options: [
    "34,560",
    "23,450",
    "32,870",
    "28,325"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 136,
    question: "एक दुकानदार ने 4600 रुपये में एक मेज और 1800 रुपये में एक कु्सी खरीदी। वह मेज को 10% लाभ और कुर्सी को 6% लाभ पर बेचता है। कुल लाभ प्रतिशत ज्ञात कीजिए।  SSC CGL 18.04.2022 (Morning)",
    answer: "8 <sup>7</sup> / <sub>8</sub>",
    options: [
    "12",
    "9 <sup>1</sup> / <sub>9</sub>",
    "8 <sup>7</sup> / <sub>8</sub>",
    "10"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 137,
    question: "एक दुकानदार ने ₹ 45 प्रति किग्रा. की दर से 20 किग्रा. ₹ 25 प्रति किग्रा. की दर से 50 किग्रा. और 40 प्रति किग्रा, की दर से 35 किग्रा. चीनी खरीदी। उसने ₹ 450 परिवहन और अन्य खचों के लिए खर्च किये। उसने तीनों प्रकारों की चीनी को मिला दिया और ₹ 52.50 प्रति किग्रा. की दर से बेच दिया। संपूर्ण लेन-देन में उसका लाभ प्रतिशत है : SSC CGL 17.08.2021 (Afternoon)",
    answer: "5%",
    options: [
    "5%",
    "7%",
    "8%",
    "6%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 138,
    question: "दो वस्तुओं A और B के क्रय मूल्य का अनुपात 4:5 है। इन वस्तुओं को बेचने पर, दुकानदार को वस्तु A पर 10% और वस्तु B पर 20% का लाभ होता है और उनके विक्रय मूल्य में अंतर 480 रुपये है। वस्तु B और A का लागत मूल्य (रु में ) है:  SSC CGL 12/18.04.2022 (Afternoon)",
    answer: "300",
    options: [
    "100",
    "169",
    "200",
    "300"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 139,
    question: "एक वस्तु को 25% के लाभ पर बेचा जाता है। योदि वस्तु के क्रय मूल्य और विक्रय मूल्य दोनों में 200 रुपये की वृद्धि की जाती है, तो लाभ प्रतिशत 20% है। वस्तु का मूल लागत मूल्य क्या है?  SSC MTS (Shift- II) 08/10/2021",
    answer: "Rs 800",
    options: [
    "Rs 800",
    "Rs 500",
    "Rs 200",
    "Rs 400"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 140,
    question: "एक दुकानदार ने 600 पेन खरीदे। उसने उनमें से 480 को उस कीमत पर बेचा, जो उसने 600 पेन के लिए चुकाई थी, 100 पेन उस कीमत से 10% अधिक दर पर, जिस पर उसने 480 पेन बेचे थे, और बाकी को लागत मूल्य पर बेचा। लेन-देन में उसका लाभ प्रतिशत है: sSC MTS (Shift- II) 26/10/2021",
    answer: "26.25%",
    options: [
    "13.6%",
    "12.7%",
    "26.25%",
    "20%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 141,
    question: "वस्तुओ A और B का क्रय मूल्य समान है। वस्तु A को 24% की हानि पर बेचा जाता है और वस्तु B को A के विक्रय मूल्य से 270 अधिक पर बेचा जाता है। यदि दोनों वस्तुओं को बेचने से शुद्ध लाभ 12% है, तो वस्तु का विक्रय मुल्य ( रूपये में ) क्या है? B?  SELECTION POST - PHASE IX (Graduation",
    answer: "555",
    options: [
    "440",
    "200",
    "145",
    "555"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 142,
    question: "एक दुकानदार एक वस्तु का विक्रय मूल्य उसकी लागत से 20% अधिक निर्धारित करता है। यदि लागत मूल्य 20% की वृद्धि होती है और वह विक्रय मूल्य में 16% की वृद्धि करता है, तो उसका लाभ प्रतिशत है:  SELECTION POST - PHASE IX (Graduation",
    answer: "16%",
    options: [
    "24%",
    "33%",
    "27%",
    "16%"
    ],
    solution: 'img/1mg.png',
    },
    {
    numb: 143,
    question: "वस्तु X और Y का लागत मूल्य समान है। वस्तु X को 20% लाभ पर बेचा जाता है और वस्तु Y को x के विक्रय मूल्य से 126 कम पर बेचा जाता है। यदि दोनों वस्तुओं को बेचने से शुद्ध लाभ 14% है, तो प्रत्येक वस्तु का लागत मूल्य (रूपये में) क्या है?  SELECTION POST - PHASE IX (Graduation Level)",
    answer: "1050",
    options: [
    "246",
    "268",
    "1050",
    "1460"
    ],
    solution: 'img/1mg.png',
    } 
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
    //{
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //            ]
    // },
    ];
 </script>
    
 <script>
    // Inside this JavaScript file I've coded all Quiz Codes 
  
    //selecting all required elements
    const start_btn = document.querySelector(".start_btn button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");
    const result_box = document.querySelector(".result_box");
    const option_list = document.querySelector(".option_list");
    const time_line = document.querySelector("header .time_line");
    const timeText = document.querySelector(".timer .time_left_txt");
    const timeCount = document.querySelector(".timer .timer_sec");
    const smt_btn = document.querySelector("#smt_btn");
    
        // if startQuiz button clicked""
    onload = ()=>{
    info_box.classList.add("activeInfo"); //show info box

    }
    
    start_btn.onclick = ()=>{
    start_btn.style.display = "none";
    info_box.classList.add("activeInfo"); //show info box
    
    }
    // if exitQuiz button clicked
    exit_btn.onclick = ()=>{
    start_btn.style.display = "block";
    info_box.classList.remove("activeInfo"); //hide info box
    }
    
    // if continueQuiz button clicked
    continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    next_btn.classList.add("show");
    startTime1 = new Date().getTime();
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(120); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
    }
    
    
    let timeValue =  120;
    let que_count = 0;
    let que_numb = 1;
    let userScore = 0;
    let negativeScore = 0;
    let counter;
    let counterLine;
    let widthValue = 0;
    let skipQue = 0;
    let backQue = 0;
    const restart_quiz = result_box.querySelector(".buttons .restart");
    const quit_quiz = result_box.querySelector(".buttons .quit");
    
    // if restartQuiz button clicked
    restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 120; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    negativeScore = 0;
    skipQue = 0;
    backQue = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
   // next_btn.classList.remove("show"); //hide the next button
    }
    
    // if quitQuiz button clicked
    quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
    }
    
    const sol_btn = document.querySelector("section .sol_btn");
    const next_btn = document.querySelector("footer .next_btn");
    const bottom_ques_counter = document.querySelector("footer .total_que");
    
    
    // if Next Que button clicked
    next_btn.onclick = ()=>{
    back_btn.style.display = "block";
    next_btn.innerText = "Skip";
    if(que_count < questions.length - 1){ //if question count is less than total question length
    que_count += 1; //increment the que_count value
    que_numb+= 1; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the timeText to Time Left
    //next_btn.classList.remove("show"); //hide the  button
    sol_btn.style.display = "none";
    a.style.display = "none";
    timeText.style.color = "black";
    time_line.style.background = "#48e81c";
    }
    else{
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
    next_btn.innerText = "SUBMIT";
    }
    }
    
    //if submit buttton clicked
    smt_btn.onclick = ()=>{
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
    
    }
    
    // if jump go to btn clicked
    go_btn.onclick = ()=>{
    back_btn.style.display = "block";
    next_btn.innerText = "Skip";
    if(que_count < questions.length - 1){ //if question count is less than total question length
    que_count = (p-1); //increment the que_count value
    que_numb = (p); //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the timeText to Time Left
    //next_btn.classList.remove("show"); //hide the next button
    sol_btn.style.display = "none";
    a.style.display = "none";
    timeText.style.color = "black";
    time_line.style.background = "#48e81c";
    }
    }
    
      // if previous Que button clicked
    const back_btn = document.querySelector("section .back_btn");
    back_btn.onclick = ()=>{
    if(que_count >  0){ //if question count is less than total question length
        que_count--; //increment the que_count value
        que_numb--; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine);//clear counter
        
        back_btn.style.display = "block";
        sol_btn.style.display = "none";
        a.style.display = "none";
        timeText.style.color = "black";
        time_line.style.background = "#48e81c";
    }
    else{
    back_btn.style.display = "block";
    }
    }
    
   
    // getting questions and options from array
    function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    let solutionImage = document.querySelector(".solution .sol_img");
    let sol_tag = questions[index].solution;
    solutionImage.src = sol_tag;
    let audio_tag = questions[index].queAudio;
    read_que.src = audio_tag;
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div  class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>'
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    const option = option_list.querySelectorAll(".option");
   
   
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)");
    }
    }
    // creating the new div tags which for icons
    let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
    let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
    
    
    
    //if user clicked on option
    function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    next_btn.innerText = "Next";
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
    sol_btn.style.display = "block";
    back_btn.style.display = "block";
    }
    else if(userAns !== correcAns){
    negativeScore += 1;
    back_btn.style.display = "block";
    sol_btn.style.display = "block";
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    console.log("Wrong Answer");
    
    
    for(i=0; i < allOptions; i++){
    if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    console.log("Auto selected correct answer.");
    }
    }
    }
    for(i=0; i < allOptions; i++){
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
    }
    
    
    function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    const scoreTextN = result_box.querySelector(".score_textN");  
    const skip_que = result_box.querySelector(".skipQue_count");
    
    scoreText.innerHTML = "correct : " + userScore;
    scoreTextN.innerHTML = "wrong : " + negativeScore;
    const  skip_que_txt =  (que_count+1) - (userScore + negativeScore);
    skip_que.innerHTML = "skiped : " + skip_que_txt;
    }
    
    
    function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if(time < 9){ //if timer is less than 9
    let addZero = timeCount.textContent; 
    timeCount.textContent = "0" + addZero; //add a 0 before time value
 
    time_line.style.background = "red";
    }
    if(time < 0){ //if timer is less than 0
    clearInterval(timer);
    clearInterval(counter); //clear counter
    timeText.textContent = "Time Off"; //change the time text to time off
    const allOptions = option_list.children.length; //getting all option items
    let correcAns = questions[que_count].answer; //getting correct answer from array
    sol_btn.style.display = "block";
    for(i=0; i < allOptions; i++){
    if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    console.log("Time Off: Auto selected correct answer.");
    }
    }
    for(i=0; i < allOptions; i++){
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
    }
    }
    }
    
    function startTimerLine(time){
    counterLine = setInterval(timer, 323);
    function timer(){
    time += 1; //upgrading time value with 1
    time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if(time > 549){ //if time value is greater than 549
    clearInterval(counterLine); //clear counterLine
    }
    }
    }
    
    function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
    }
</script>
</div>
</body>
</html>
