
            function removeExamBox(){
                      examBox.style.display = "none";
                      }
            function showExamBox(){
            examBox.style.display = "block";
            subBoxChsl.style.display ="none";
            subBoxMts.style.display ="none";
            subBoxCgl.style.display ="none";
            subBoxCpo.style.display ="none";
            subBoxGd.style.display ="none";
            }
                      
           function allChapListRemove(){
           const allChapBox = document.querySelector("#all-exam-chap-list");
           allChapBox.style.display="none";
           removeExamBox();
           }
            //examBox.classList.remove(".activeExamBox");


              const examBox = document.querySelector(".exam_list_box");
    // all exam name list        
              const examSelectChsl = document.querySelector("#chs");
              const examSelectMts = document.querySelector("#mts");
              const examSelectCgl = document.querySelector("#cgl");
              const examSelectCpo = document.querySelector("#cpo");
              const examSelectGd = document.querySelector("#gd");
              
    // select all exam subject list box
             const subBoxChsl = document.querySelector("#chslSubList");
             const subBoxMts = document.querySelector("#mtsSubList");
             const subBoxCgl = document.querySelector("#cglSubList");
             const subBoxCpo = document.querySelector("#cpoSubList");
             const subBoxGd = document.querySelector("#gdSubList");
    // select all exam math chap list box
             const mathBoxChsl = document.querySelector(".chsl-maths-chap-box");
             const mathBoxMts = document.querySelector(".mts-maths-chap-box");
             const mathBoxCgl = document.querySelector(".cgl-maths-chap-box");
             const mathBoxCpo = document.querySelector(".cpo-maths-chap-box");
             const mathBoxGd = document.querySelector(".gd-maths-chap-box");
    // select all exam reson chap list box
             const resonBoxChsl = document.querySelector(".chsl-reson-chap-box");
             const resonBoxMts = document.querySelector(".mts-reson-chap-box");
             const resonBoxCgl = document.querySelector(".cgl-reson-chap-box");
             const resonBoxCpo = document.querySelector(".cpo-reson-chap-box");
             const resonBoxGd = document.querySelector(".gd-reson-chap-box");
   // select all exam english chap list box
             const englBoxChsl = document.querySelector(".chsl-engl-chap-box");
             const englBoxMts = document.querySelector(".mts-engl-chap-box");
             const englBoxCgl = document.querySelector(".cgl-engl-chap-box");
             const englBoxCpo = document.querySelector(".cpo-engl-chap-box");
             const englBoxGd = document.querySelector(".gd-engl-chap-box");
 // select all exam gk chap list box       
             const gkBoxChsl = document.querySelector(".chsl-gk-chap-box");
             const gkBoxMts = document.querySelector(".mts-gk-chap-box");
             const gkBoxCgl = document.querySelector(".cgl-gk-chap-box");
             const gkBoxCpo = document.querySelector(".cpo-gk-chap-box");
             const gkBoxGd = document.querySelector(".gd-gk-chap-box");
             
 // select all exam comp chap list box
             const compBoxChsl = document.querySelector(".chsl-comp-chap-box");
             const compBoxMts = document.querySelector(".mts-comp-chap-box");
             const compBoxCgl = document.querySelector(".cgl-comp-chap-box");
             const compBoxCpo = document.querySelector(".cpo-comp-chap-box");
             const compBoxGd = document.querySelector(".gd-comp-chap-box");
             
             
             
    // all exam subject = maths in sub list
             const mathSelectChsl = subBoxChsl.querySelector("#chsl-math");
             const mathSelectMts = document.querySelector("#mts-math");
             const mathSelectCgl = document.querySelector("#cgl-math");
             const mathSelectCpo = document.querySelector("#cpo-math");
             const mathSelectGd = document.querySelector("#gd-math");
   // all exam subject = reson in sub list
             const resonSelectChsl = subBoxChsl.querySelector("#chsl-reso");
             const resonSelectMts = document.querySelector("#mts-reso");
             const resonSelectCgl = document.querySelector("#cgl-reso");
             const resonSelectCpo = document.querySelector("#cpo-reso");
             const resonSelectGd = document.querySelector("#gd-reso");
   // all exam subject = english in sub list
             const englSelectChsl = subBoxChsl.querySelector("#chsl-engl");
             const englSelectMts = document.querySelector("#mts-engl");
             const englSelectCgl = document.querySelector("#cgl-engl");
             const englSelectCpo = document.querySelector("#cpo-engl");
             const englSelectGd = document.querySelector("#gd-engl");
   // all exam subject = gk in sub list
             const gkSelectChsl = subBoxChsl.querySelector("#chsl-gk");
             const gkSelectMts = document.querySelector("#mts-gk");
             const gkSelectCgl = document.querySelector("#cgl-gk");
             const gkSelectCpo = document.querySelector("#cpo-gk");
             const gkSelectGd = document.querySelector("#gd-gk");
             
             
   // all exam subject = comp in sub list
             const compSelectChsl = subBoxChsl.querySelector("#chsl-comp");
             const compSelectMts = document.querySelector("#mts-comp");
             const compSelectCgl = document.querySelector("#cgl-comp");
             const compSelectCpo = document.querySelector("#cpo-comp");
             const compSelectGd = document.querySelector("#gd-comp");
             
         
         
         
         
         // Function to set a delay and show selected box
         function showSelectedBox(selectedBox) {
         setTimeout(() => {
         showExamBox();
         examBox.style.display = "none";
         selectedBox.style.display = "block";
         }, 200);
         }
         
         // CHSL
         examSelectChsl.onclick = () => showSelectedBox(subBoxChsl);
         mathSelectChsl.onclick = () => showSelectedBox(mathBoxChsl);
         resonSelectChsl.onclick = () => showSelectedBox(resonBoxChsl);
         englSelectChsl.onclick = () => showSelectedBox(englBoxChsl);
         gkSelectChsl.onclick = () => showSelectedBox(gkBoxChsl);
         compSelectChsl.onclick = () => showSelectedBox(compBoxChsl);
         
         // MTS
         examSelectMts.onclick = () => showSelectedBox(subBoxMts);
         mathSelectMts.onclick = () => showSelectedBox(mathBoxMts);
         resonSelectMts.onclick = () => showSelectedBox(resonBoxMts);
         englSelectMts.onclick = () => showSelectedBox(englBoxMts);
         gkSelectMts.onclick = () => showSelectedBox(gkBoxMts);
         compSelectMts.onclick = () => showSelectedBox(compBoxMts);
         
         // CGL
         examSelectCgl.onclick = () => showSelectedBox(subBoxCgl);
         mathSelectCgl.onclick = () => showSelectedBox(mathBoxCgl);
         resonSelectCgl.onclick = () => showSelectedBox(resonBoxCgl);
         englSelectCgl.onclick = () => showSelectedBox(englBoxCgl);
         gkSelectCgl.onclick = () => showSelectedBox(gkBoxCgl);
         compSelectCgl.onclick = () => showSelectedBox(compBoxCgl);
         
         // CPO
         examSelectCpo.onclick = () => showSelectedBox(subBoxCpo);
         mathSelectCpo.onclick = () => showSelectedBox(mathBoxCpo);
         resonSelectCpo.onclick = () => showSelectedBox(resonBoxCpo);
         englSelectCpo.onclick = () => showSelectedBox(englBoxCpo);
         gkSelectCpo.onclick = () => showSelectedBox(gkBoxCpo);
         compSelectCpo.onclick = () => showSelectedBox(compBoxCpo);
         
         // GD
         examSelectGd.onclick = () => showSelectedBox(subBoxGd);
         mathSelectGd.onclick = () => showSelectedBox(mathBoxGd);
         resonSelectGd.onclick = () => showSelectedBox(resonBoxGd);
         englSelectGd.onclick = () => showSelectedBox(englBoxGd);
         gkSelectGd.onclick = () => showSelectedBox(gkBoxGd);
         compSelectGd.onclick = () => showSelectedBox(compBoxGd);
         
         /**
         
             
    // chsl raj function    
             
              examSelectChsl.onclick = () =>{  
              setTimeout(() => {     
              removeExamBox();
              subBoxChsl.style.display ="block";
              }, 200);
              }
           //if maths selected   
              mathSelectChsl.onclick = () => {
              setTimeout(() => {
              showExamBox();
              examBox.style.display = "none";
              mathBoxChsl.style.display = "block";
              }, 200); // 2000 milliseconds = 2 seconds
              };
              
           // if reasoning selected 
              resonSelectChsl.onclick = ()=>{
               setTimeout(() => {   
              showExamBox()
              examBox.style.display = "none";
              resonBoxChsl.style.display = "block";
              }, 200);
              }
          // if english selected 
              englSelectChsl.onclick = ()=>{
              setTimeout(() => {   
              showExamBox()
              examBox.style.display = "none";
              englBoxChsl.style.display = "block";
              }, 200);
              }
          // if gk selected     
              gkSelectChsl.onclick = ()=>{
              setTimeout(() => { 
              showExamBox()
              examBox.style.display = "none";
              gkBoxChsl.style.display = "block";
              }, 200);
              }
          
          // if comp selected 
              compSelectChsl.onclick = ()=>{
              setTimeout(() => { 
              showExamBox()
              examBox.style.display = "none";
              compBoxChsl.style.display = "block";
              }, 200);
              }
 // mts function          
              examSelectMts.onclick = ()=>{  
              setTimeout(() => {        
              removeExamBox();
              subBoxMts.style.display ="block";
              }, 200);
              }
          //if maths selected       
              mathSelectMts.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              mathBoxMts.style.display = "block";
              }, 200);
              }
          // if reson is selected    
              resonSelectMts.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              resonBoxMts.style.display = "block";
              }, 200);
              }
         // if english is selected    
              englSelectMts.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              englBoxMts.style.display = "block";
              }, 200);
              }
         // if gk is selected       
              gkSelectMts.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              gkBoxMts.style.display = "block";
              }, 200);
              }
         // if comp is selected     
              compSelectMts.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              compBoxMts.style.display = "block";
              }, 200);
              }
  // cgl function          
              examSelectCgl.onclick = ()=>{   
              setTimeout(() => {       
              removeExamBox();
              subBoxCgl.style.display ="block";
              }, 200);
              }
          //if maths selected       
              mathSelectCgl.onclick = ()=>{
              setTimeout(() => {    
              showExamBox();
              examBox.style.display = "none";
              mathBoxCgl.style.display = "block";
              }, 200);
              }
         //if reson selected       
              resonSelectCgl.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              resonBoxCgl.style.display = "block";
              }, 200);
              }
         // if english is selected    
              englSelectCgl.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              englBoxCgl.style.display = "block";
              }, 200);
              }
         // if gk is selected    
              gkSelectCgl.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              gkBoxCgl.style.display = "block";
              }, 200);
              }
         // if comp is selected    
              compSelectCgl.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              compBoxCgl.style.display = "block";
              }, 200);
              
              }
// cpo function          
              examSelectCpo.onclick = ()=>{   
              setTimeout(() => {       
              removeExamBox();
              subBoxCpo.style.display ="block";
              }, 200);
              }
              
          //if maths selected      
              mathSelectCpo.onclick = ()=>{
              setTimeout(() => {  
              showExamBox();
              examBox.style.display = "none";
              mathBoxCpo.style.display = "block";
              }, 200);
              }
         //if reson selected      
              resonSelectCpo.onclick = ()=>{
              setTimeout(() => {  
              showExamBox();
              examBox.style.display = "none";
              resonBoxCpo.style.display = "block";
              }, 200);
              }
         // if english is selected    
              englSelectCpo.onclick = ()=>{
              setTimeout(() => {  
              showExamBox();
              examBox.style.display = "none";
              englBoxCpo.style.display = "block";
              }, 200);
              }
         // if gk is selected    
              gkSelectCpo.onclick = ()=>{
              setTimeout(() => {  
              showExamBox();
              examBox.style.display = "none";
              gkBoxCpo.style.display = "block";
              }, 200);
              }
               
         // if computer is selected    
              compSelectCpo.onclick = ()=>{
              setTimeout(() => {  
              showExamBox();
              examBox.style.display = "none";
              compBoxCpo.style.display = "block";
              }, 200);
              }
 // gd function          
              examSelectGd.onclick = ()=>{    
              setTimeout(() => {      
              removeExamBox();
              subBoxGd.style.display ="block";
              }, 200);
              }
        //if maths selected   
              mathSelectGd.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              mathBoxGd.style.display = "block";
              }, 200);
              }
        //if raj reson selected   
              resonSelectGd.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              resonBoxGd.style.display = "block";
              }, 200);
              }
         // if english is selected    
              englSelectGd.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              englBoxGd.style.display = "block";
              }, 200);
              }
         // if gk is selected    
              gkSelectGd.onclick = ()=>{
              setTimeout(() => { 
              showExamBox();
              examBox.style.display = "none";
              gkBoxGd.style.display = "block";
              }, 200);
              }
            
            
         // if computer is selected      
               compSelectGd.onclick = ()=>{
               setTimeout(() => { 
               showExamBox();
               examBox.style.display = "none";
               compBoxGd.style.display = "block";
               }, 200);
               }
                      
            **/
        
                      
                      
                      
                      
                      
                      function showQuiz(){
                      info_box.style.display ="block";
                      allChapListRemove();
                      }
                      