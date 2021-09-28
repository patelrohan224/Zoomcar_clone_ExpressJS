
                              var date_final_picked=""
                              var day_final_picked=""
                              var date_final_drop=""
                              var day_final_drop=""
                              var p_point=""
                              var d_ponit=""
               function Home() {              
                   window.open("../Home/home.html","_top")    
               }
               
                 var city_array=["Bangalore Palace","U R Rao Satellite Centre","Kempegowda International Airport","Chennai International Airport","University of Madras","Netaji Subhash Chandra Bose International Airport"]
                 var city_array_first_input=["Banglore","Kolkata","Chennai","Ahemdabad","Vadododra"]
                 function city_1() {
                   
                   let count=0
                       for (let i = 0; i < city_array_first_input.length; i++) {
                          if(document.getElementById("first_1").value!==city_array_first_input[i] ) {
                           count++
                          }
                       }
                       let box=document.getElementById("alert_wrong_input")
                           let p=document.createElement("p")
                           box.innerHTML=""
                       if(count==city_array_first_input.length){
                      
                          
                       p.innerText="Sorry! This location is out of your pickup city"
                       p.setAttribute("class","class_alert")
                           box.append(p)
                       }
                      
                   }
                 var city_array_second_input=["Kolkata" ,"Chennai"]
      //second city serach
                 function city_2() {            
                   
                   let count=0
                       for (let i = 0; i < city_array_second_input.length; i++) {
                          if(document.getElementById("second_1").value!==city_array_second_input[i] ) {
                           count++
                          }
                       }
                       let box=document.getElementById("alert_wrong_input_2")
                           let p=document.createElement("p")
                           box.innerHTML=""
                       if(count==city_array_second_input.length){
                      
                          
                       p.innerText="Sorry! This location is out of your pickup city"
                       p.setAttribute("class","class_alert")
                           box.append(p)
                       }
                      
                   }
                 var city_array_2=["Chennai International Airport","University of Madras","Netaji Subhash Chandra Bose International Airport"]
  //stations on first city
               function bang() {                
                   
                   let count=0
                       for (let i = 0; i < city_array.length; i++) {
                          if(document.getElementById("first_2").value!==city_array[i] ) {
                           count++
                          }
                          if(document.getElementById("first_2").value==city_array[i] ){
                           bottom_p_location.textContent=document.getElementById("first_2").value
                          }
                       }
                       let box=document.getElementById("alert_wrong_input")
                           let p=document.createElement("p")
                           box.innerHTML=""
                       if(count==city_array.length){
                      
                          
                       p.innerText="Sorry! This location is out of your pickup city"
                       p.setAttribute("class","class_alert")
                           box.append(p)
                       }
                      
                   }  document.querySelector(".trwhite-box_3").style.visibility="hidden"
                                  document.querySelector(".tr-box_3").style.visibility="hidden"
        //stations on second city
                   function bang_2() {          
                   
                   let count=0
                       for (let i = 0; i < city_array_2.length; i++) {
                          if(document.getElementById("second_2").value!==city_array_2[i]) {
                           count++
                          }
                          if(document.getElementById("second_2").value==city_array_2[i]) {
                           bottom_p_location.innerText=document.getElementById("first_2").value+" To "+document.getElementById("second_2").value
                           bottom_p_location.setAttribute("class","two_city")
                          }
                       }
                       let box=document.getElementById("alert_wrong_input_2")
                           let p=document.createElement("p")
                           box.innerHTML=""
                       if(count==city_array_2.length){
                      
                          
                       p.innerText="Sorry! This location is out of your pickup city"
                       p.setAttribute("class","class_alert")
                           box.append(p)
                       }
                      
                   }
     
                document.getElementById("first_1").value="Banglore"
                    
                   var box=document.querySelector('input[id="checkbox"]')
                   var position=document.querySelector('p[class="circle_p"]')
                   var bottom_p_head=document.querySelector('p[class="start"]')
                   var bottom_p_location=document.querySelector('p[class="first_box_location"]')
                   box.addEventListener("click",add)
               //toggle button for choose second city
                                function add() {                
                                   if(box.checked){
                                       var boxpart=document.getElementById("input_part_2")
                                       boxpart.style.visibility="visible"
                                      
                                       position.textContent="Start & Destination"
                                       position.setAttribute("class","add_p")
                                       bottom_p_head.textContent="START & DESTINATION"
                                       bottom_p_location.innerHTML="<p>Select Starting Point And<br>Destiantion</p>"
                                       bottom_p_location.setAttribute("class","bottom_p_location")

                                   }
                                   if(box.checked!==true){
                                       
                                       var boxpart=document.getElementById("input_part_2")
                                       boxpart.style.visibility="hidden"
                                      
                                       position.textContent="Starting Point"
                                       position.setAttribute("class","circle_p")
                                       bottom_p_head.textContent="STARTING POINT"
                                       bottom_p_location.textContent="Select Pick-up Location"
                                       bottom_p_location.setAttribute("class","first_box_location")

                           
                                   }
                                    
                                }
                                var page_1=0
                                let pick_date=document.getElementById("pickup_page")
               // if value is empty dnt go further                                 
                             function time_page() {                    
                                 if(page_1==0){
                                var c=0
                                   if(document.getElementById("first_2").value!=="")
                                   {
                                      
                                       c++
                                   }
                               
                               if(box.checked!==true){
                                   if(document.getElementById("first_2").value!=="" && document.getElementById("second_2").value!==""){
                                     
                                       c++
                                   }
                               }
                                  if(c>0){
                                      
                                   let pickup_point=document.getElementById("first_2").value
                               
                                   let dropoff_point=document.getElementById("second_2").value
                                   d_ponit=dropoff_point
                                   p_point=pickup_point

                                   document.getElementById('page').style.display="none"


                                   pick_date.setAttribute("id","pick_date_div");
                                   document.querySelector('div[class="first_fillup"]').setAttribute("class","first_fillup_fillup")
                                   document.querySelector('div[class="first_circle"]').setAttribute("class","first_circle_fillup")
                                   document.querySelector('div[class="second_circle"]').setAttribute("class","second_circle_fillup")
                                   document.querySelector('div[class="line"]').setAttribute("class","line_fillup")


                                   document.querySelector(".start_2").innerText="PICKUP TIME"
                                  document.querySelector(".start_2").setAttribute("class","start")
                                  document.querySelector(".second_box").setAttribute("class","first_box")
                                  document.querySelector(".first_box").setAttribute("class","first_box_fillup")
                                  document.querySelector(".tr-box").setAttribute("class","fill_tr_box")
                                  document.querySelector(".tr-box_2").setAttribute("class","tr-box")
                                  document.querySelector(".trwhite-box_2").setAttribute("class","trwhite-box")
                                  document.querySelector(".trwhite-box_3").style.visibility="hidden"
                                  document.querySelector(".tr-box_3").style.visibility="hidden"
                                  page_1++
                                  }
                                 

                                  
                                 
                               }
                                 if(page_1==1){
                   //second page call when all search was given
                   if(date_final_picked!=="" && day_final_picked!=="" && pick_month_value!=="" && pick_time_value!==""){
                                    
                                 
                                     last_page()        
                       
                                   }
                                  
                                 }
                                 if(page_1==2){
                               if(pick_time_value_2!=="" && pick_month_value_2!=="" && day_final_drop!=="" && date_final_drop!==""){
                                   end_fun()
                               }
                           }


                               }

                           
                                   
                                   
                               document.getElementById("aug_date").style.display="grid"
                                   document.getElementById("oct_date").style.display="none"
                                   document.getElementById("sep_date").style.display="none"
                                   let aug=document.getElementById("aug")
                                   let oct=document.getElementById("oct")
                                   let sep=document.getElementById("sep")
                                   aug.setAttribute("id","unslect_month")
                                   sep.setAttribute("id","unslect_month")
                                   oct.setAttribute("id","unslect_month")
                                   
                                   
                                   var pick_month_value=""
                // function for the month on pickup point start.....
                               function Sep_month() {

                               document.getElementById("aug_date").style.display="none"
                                   document.getElementById("oct_date").style.display="none"
                                  let a=document.getElementById("sep_date").style.display="grid"
                                  aug.setAttribute("id","unslect_month")
                                   oct.setAttribute("id","unslect_month")
                                   sep.setAttribute("id","shad_month_btn")
                                   sep.value="SEP"
                                  
                                   
                                   pick_month_value=sep.value

                                  
                                   document.querySelector(".second_box_location").innerHTML=pick_month_value+" "+2021+"<br>"+pick_time_value
                                  
                               }
                               function aug_month() {
                                   aug.setAttribute("id","shad_month_btn")
                                   document.getElementById("aug_date").style.display="grid"
                                   document.getElementById("oct_date").style.display="none"
                                   document.getElementById("sep_date").style.display="none"
                                  
                                   sep.setAttribute("id","unslect_month")
                                   oct.setAttribute("id","unslect_month")
                                   aug.value="AUG"
                                   pick_month_value=aug.value
                                
                                   document.querySelector(".second_box_location").innerHTML=pick_month_value+" "+2021+"<br>"+pick_time_value
                               } 
                               function oct_month() {
                                   document.getElementById("aug_date").style.display="none"
                                   document.getElementById("sep_date").style.display="none"
                                   document.getElementById("oct_date").style.display="grid"
                                   aug.setAttribute("id","unslect_month")
                                   sep.setAttribute("id","unslect_month")
                                   oct.setAttribute("id","shad_month_btn")
                                   oct.value="OCT"
                                   pick_month_value=oct.value
                                 
                                   document.querySelector(".second_box_location").innerHTML=pick_month_value+" "+2021+"<br>"+pick_time_value
                               }
                 // function for the month on pickup point end.
                              let time_a=document.getElementById("a")
                              let time_b=document.getElementById("b")
                              let time_c=document.getElementById("c")
                              let time_d=document.getElementById("d")
                              let time_e=document.getElementById("e")
                              let time_f=document.getElementById("f")
                              let time_g=document.getElementById("g")
                              let time_h=document.getElementById("h")
                              var pick_time_value=""
                              time_a.setAttribute("id","unselect_time")
                              time_b.setAttribute("id","unselect_time")
                              time_c.setAttribute("id","unselect_time")
                              time_d.setAttribute("id","unselect_time")
                              time_e.setAttribute("id","unselect_time")
                              time_f.setAttribute("id","unselect_time")
                              time_g.setAttribute("id","unselect_time")
                              time_h.setAttribute("id","unselect_time")

               // function for all time for pcikup time start.....

                             function on_pickup_time_a() {
                               time_a.setAttribute("id","time_select_id")
                              time_b.setAttribute("id","unselect_time")
                              time_c.setAttribute("id","unselect_time")
                              time_d.setAttribute("id","unselect_time")
                              time_e.setAttribute("id","unselect_time")
                              time_f.setAttribute("id","unselect_time")
                              time_g.setAttribute("id","unselect_time")
                              time_h.setAttribute("id","unselect_time")
                              pick_time_value="09:00 pm"
                             let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                             }
                             function on_pickup_time_b() {
                               time_a.setAttribute("id","unselect_time")
                              time_b.setAttribute("id","time_select_id")
                              time_c.setAttribute("id","unselect_time")
                              time_d.setAttribute("id","unselect_time")
                              time_e.setAttribute("id","unselect_time")
                              time_f.setAttribute("id","unselect_time")
                              time_g.setAttribute("id","unselect_time")
                              time_h.setAttribute("id","unselect_time")
                              pick_time_value="12:00 pm"
                             let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                   date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                               }
                               function on_pickup_time_c() {
                                   time_a.setAttribute("id","unselect_time")
                              time_b.setAttribute("id","unselect_time")
                              time_c.setAttribute("id","time_select_id")
                              time_d.setAttribute("id","unselect_time")
                              time_e.setAttribute("id","unselect_time")
                              time_f.setAttribute("id","unselect_time")
                              time_g.setAttribute("id","unselect_time")
                              time_h.setAttribute("id","unselect_time")
                              pick_time_value="03:00 pm"
                             let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                               }
                               function on_pickup_time_d() {
                                   time_a.setAttribute("id","unselect_time")
                              time_b.setAttribute("id","unselect_time")
                              time_c.setAttribute("id","unselect_time")
                              time_d.setAttribute("id","time_select_id")
                              time_e.setAttribute("id","unselect_time")
                              time_f.setAttribute("id","unselect_time")
                              time_g.setAttribute("id","unselect_time")
                              time_h.setAttribute("id","unselect_time")
                              pick_time_value="06:00 pm"
                             let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                               }
                               function on_pickup_time_e() {
                                   time_a.setAttribute("id","unselect_time")
                              time_b.setAttribute("id","unselect_time")
                              time_c.setAttribute("id","unselect_time")
                              time_d.setAttribute("id","unselect_time")
                              time_e.setAttribute("id","time_select_id")
                              time_f.setAttribute("id","unselect_time")
                              time_g.setAttribute("id","unselect_time")
                              time_h.setAttribute("id","unselect_time")
                              pick_time_value="09:00 am"
                             let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                               }
                               function on_pickup_time_f() {
                                   time_a.setAttribute("id","unselect_time")
                              time_b.setAttribute("id","unselect_time")
                              time_c.setAttribute("id","unselect_time")
                              time_d.setAttribute("id","unselect_time")
                              time_e.setAttribute("id","unselect_time")
                              time_f.setAttribute("id","time_select_id")
                              time_g.setAttribute("id","unselect_time")
                              time_h.setAttribute("id","unselect_time")
                              pick_time_value="12:00am"
                             let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                               }
                               function on_pickup_time_g() {
                                   time_a.setAttribute("id","unselect_time")
                              time_b.setAttribute("id","unselect_time")
                              time_c.setAttribute("id","unselect_time")
                              time_d.setAttribute("id","unselect_time")
                              time_e.setAttribute("id","unselect_time")
                              time_f.setAttribute("id","unselect_time")
                              time_g.setAttribute("id","time_select_id")
                              time_h.setAttribute("id","unselect_time")
                              pick_time_value="03:00 am"
                             let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                               } 
                               function on_pickup_time_h() {
                                   time_a.setAttribute("id","unselect_time")
                              time_b.setAttribute("id","unselect_time")
                              time_c.setAttribute("id","unselect_time")
                              time_d.setAttribute("id","unselect_time")
                              time_e.setAttribute("id","unselect_time")
                              time_f.setAttribute("id","unselect_time")
                              time_g.setAttribute("id","unselect_time")
                              time_h.setAttribute("id","time_select_id")
                              pick_time_value="06:00 am"
                             let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                               }
               // function for all time for pcikup time end.
                           function last_page() {
                               if(page_1==1){
                               if(pick_time_value!=="" && pick_month_value!==""){

                                   
                               pick_date.style.display="none"

                               document.getElementById("dropoff_page").setAttribute("id","pick_date_div_2")
                               let secon_p_bottom=document.querySelector(".start_3")
                               secon_p_bottom.innerText="DROP OFF TIME"
                               secon_p_bottom.setAttribute("class","start")
                               document.querySelector(".third_box").setAttribute("class","first_box")
                               document.querySelector(".first_box").setAttribute("class","first_box_fillup_2")
                               document.querySelector(".tr-box").setAttribute("class","fill_tr_box")
                                // document.querySelector("first_box_fillup").setAttribute("class","first_box_fillup_2")
                                 
                                  document.querySelector(".trwhite-box_3").setAttribute("id","trwhite-box_3")
                                  
                                  document.querySelector(".tr-box_3").setAttribute("id","tr-box_3")
                                  
                                  document.querySelector(".second_circle_fillup").setAttribute("class","last_circle")
                                  document.querySelector(".second_fillup").setAttribute("class","last_circle_ffup")
                                  document.querySelector(".line_2").setAttribute("class","line_3")
                                  page_1++
                               }}
                              
                              
                           }
                           document.getElementById("aug_date_2").style.display="grid"
                                   document.getElementById("oct_date_2").style.display="none"
                                   document.getElementById("sep_date_2").style.display="none"
                                   let aug_second=document.getElementById("aug_second")
                                   let oct_second=document.getElementById("oct_second")
                                   let sep_second=document.getElementById("sep_second")
                                   aug_second.setAttribute("id","unslect_month")
                                   sep_second.setAttribute("id","unslect_month")
                                   oct_second.setAttribute("id","unslect_month")
                           var pick_month_value_2=""
           // function for drop off month start.....
                           function Sep_month_2() {

                               document.getElementById("aug_date_2").style.display="none"
                                   document.getElementById("oct_date_2").style.display="none"
                                  let a=document.getElementById("sep_date_2").style.display="grid"
                                  aug_second.setAttribute("id","unslect_month")
                                   oct_second.setAttribute("id","unslect_month")
                                   sep_second.setAttribute("id","shad_month_btn")
                                   sep_second.value="SEP"
                                  
                                   
                                   pick_month_value_2=sep_second.value

                                   document.querySelector(".third_box_location_3").innerHTML=pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                                  
                               }
                               function aug_month_2() {
                                  
                                   document.getElementById("aug_date_2").style.display="grid"
                                   document.getElementById("oct_date_2").style.display="none"
                                   document.getElementById("sep_date_2").style.display="none"
                                  
                                   sep_second.setAttribute("id","unslect_month")
                                   oct_second.setAttribute("id","unslect_month")
                                   aug_second.setAttribute("id","shad_month_btn")
                                   aug_second.value="AUG"
                                   pick_month_value_2=aug_second.value
                                   document.querySelector(".third_box_location_3").innerHTML=pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                               } 
                               function oct_month_2() {
                                   document.getElementById("aug_date_2").style.display="none"
                                   document.getElementById("sep_date_2").style.display="none"
                                   document.getElementById("oct_date_2").style.display="grid"
                                   aug_second.setAttribute("id","unslect_month")
                                   sep_second.setAttribute("id","unslect_month")
                                   oct_second.setAttribute("id","shad_month_btn")
                                   oct_second.value="OCT"
                                   pick_month_value_2=  oct_second.value
                                   document.querySelector(".third_box_location_3").innerHTML=pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                               }
            // function for drop off month end.
                               let time_a_2=document.getElementById("a_2")
                              let time_b_2=document.getElementById("b_2")
                              let time_c_2=document.getElementById("c_2")
                              let time_d_2=document.getElementById("d_2")
                              let time_e_2=document.getElementById("e_2")
                              let time_f_2=document.getElementById("f_2")
                              let time_g_2=document.getElementById("g_2")
                              let time_h_2=document.getElementById("h_2")
                              var pick_time_value_2=""
                              time_a_2.setAttribute("id","unselect_time")
                              time_b_2.setAttribute("id","unselect_time")
                              time_c_2.setAttribute("id","unselect_time")
                              time_d_2.setAttribute("id","unselect_time")
                              time_e_2.setAttribute("id","unselect_time")
                              time_f_2.setAttribute("id","unselect_time")
                              time_g_2.setAttribute("id","unselect_time")
                              time_h_2.setAttribute("id","unselect_time")
               // function for drop off time start....
                             function on_pickup_time_a_2() {
                               time_a_2.setAttribute("id","time_select_id")
                              time_b_2.setAttribute("id","unselect_time")
                              time_c_2.setAttribute("id","unselect_time")
                              time_d_2.setAttribute("id","unselect_time")
                              time_e_2.setAttribute("id","unselect_time")
                              time_f_2.setAttribute("id","unselect_time")
                              time_g_2.setAttribute("id","unselect_time")
                              time_h_2.setAttribute("id","unselect_time")
                              pick_time_value_2="09:00 pm"
                              let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                             
                             }
                             function on_pickup_time_b_2() {
                               time_a_2.setAttribute("id","unselect_time")
                              time_b_2.setAttribute("id","time_select_id")
                              time_c_2.setAttribute("id","unselect_time")
                              time_d_2.setAttribute("id","unselect_time")
                              time_e_2.setAttribute("id","unselect_time")
                              time_f_2.setAttribute("id","unselect_time")
                              time_g_2.setAttribute("id","unselect_time")
                              time_h_2.setAttribute("id","unselect_time")
                              pick_time_value_2="12:00 pm"
                              let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                               }
                               function on_pickup_time_c_2() {
                                   time_a_2.setAttribute("id","unselect_time")
                              time_b_2.setAttribute("id","unselect_time")
                              time_c_2.setAttribute("id","time_select_id")
                              time_d_2.setAttribute("id","unselect_time")
                              time_e_2.setAttribute("id","unselect_time")
                              time_f_2.setAttribute("id","unselect_time")
                              time_g_2.setAttribute("id","unselect_time")
                              time_h_2.setAttribute("id","unselect_time")
                              pick_time_value_2="03:00 pm"
                              let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                               }
                               function on_pickup_time_d_2() {
                                   time_a_2.setAttribute("id","unselect_time")
                              time_b_2.setAttribute("id","unselect_time")
                              time_c_2.setAttribute("id","unselect_time")
                              time_d_2.setAttribute("id","time_select_id")
                              time_e_2.setAttribute("id","unselect_time")
                              time_f_2.setAttribute("id","unselect_time")
                              time_g_2.setAttribute("id","unselect_time")
                              time_h_2.setAttribute("id","unselect_time")
                              pick_time_value_2="06:00 pm"
                              let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                               }
                               function on_pickup_time_e_2() {
                                   time_a_2.setAttribute("id","unselect_time")
                              time_b_2.setAttribute("id","unselect_time")
                              time_c_2.setAttribute("id","unselect_time")
                              time_d_2.setAttribute("id","unselect_time")
                              time_e_2.setAttribute("id","time_select_id")
                              time_f_2.setAttribute("id","unselect_time")
                              time_g_2.setAttribute("id","unselect_time")
                              time_h_2.setAttribute("id","unselect_time")
                              pick_time_value_2="09:00 am"
                              let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                               }
                               function on_pickup_time_f_2() {
                                   time_a_2.setAttribute("id","unselect_time")
                              time_b_2.setAttribute("id","unselect_time")
                              time_c_2.setAttribute("id","unselect_time")
                              time_d_2.setAttribute("id","unselect_time")
                              time_e_2.setAttribute("id","unselect_time")
                              time_f_2.setAttribute("id","time_select_id")
                              time_g_2.setAttribute("id","unselect_time")
                              time_h_2.setAttribute("id","unselect_time")
                              pick_time_value_2="12:00am"
                              let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                               }
                               function on_pickup_time_g_2() {
                                   time_a_2.setAttribute("id","unselect_time")
                              time_b_2.setAttribute("id","unselect_time")
                              time_c_2.setAttribute("id","unselect_time")
                              time_d_2.setAttribute("id","unselect_time")
                              time_e_2.setAttribute("id","unselect_time")
                              time_f_2.setAttribute("id","unselect_time")
                              time_g_2.setAttribute("id","time_select_id")
                              time_h_2.setAttribute("id","unselect_time")
                              pick_time_value_2="03:00 am"
                              let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                               } 
                               function on_pickup_time_h_2() {
                                   time_a_2.setAttribute("id","unselect_time")
                              time_b_2.setAttribute("id","unselect_time")
                              time_c_2.setAttribute("id","unselect_time")
                              time_d_2.setAttribute("id","unselect_time")
                              time_e_2.setAttribute("id","unselect_time")
                              time_f_2.setAttribute("id","unselect_time")
                              time_g_2.setAttribute("id","unselect_time")
                              time_h_2.setAttribute("id","time_select_id")
                              pick_time_value_2="06:00 am"
                              let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                               }
               // function for drop off time end.
                              


                           var date_pciker_array_aug=["aug_29","aug_30","aug_31"]
                           var date_pciker_array_aug_2=["aug_2_30","aug_2_31"]
                               var pic_date=""
                               var pic_date_2=""
               // function for date picker for drop off and pick up point start...
                               function date_picker_aug(n) {
                                   for (let i = 0; i < date_pciker_array_aug.length; i++) {
                                       if(date_pciker_array_aug[i]!==n){
                                       
                                           document.getElementById(date_pciker_array_aug[i]).style.border="1px solid #323a44"
                                           document.getElementById(date_pciker_array_aug[i]).style.boxShadow="none"
                                       }
                                       
                                   }
                                   document.getElementById(n).style.border="2px solid #70ad4d"
                                   document.getElementById(n).style.boxShadow=" 0 4px 12px rgb(0 0 0 / 18%)"
                                   pic_date=n

                                  let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                                  
                               }
                               function date_picker_aug_2(n) {
                                   for (let i = 0; i < date_pciker_array_aug_2.length; i++) {
                                       if(date_pciker_array_aug_2[i]!==n){
                                       
                                           document.getElementById(date_pciker_array_aug_2[i]).style.border="1px solid #323a44"
                                           document.getElementById(date_pciker_array_aug_2[i]).style.boxShadow="none"
                                       }
                                       
                                   }
                                   document.getElementById(n).style.border="2px solid #70ad4d"
                                   document.getElementById(n).style.boxShadow=" 0 4px 12px rgb(0 0 0 / 18%)"
                                   pic_date_2=n
                                   let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                                  
                               }
                               var date_pciker_array_sep=["sep_1","sep_2","sep_3","sep_4","sep_5","sep_6","sep_7","sep_8","sep_9","sep_10",
                               "sep_11","sep_12","sep_13","sep_14","sep_15","sep_16","sep_17","sep_18","sep_19","sep_20",
                               "sep_21","sep_22","sep_23","sep_24","sep_25","sep_26","sep_27","sep_28","sep_29","sep_30"]
                               var date_pciker_array_sep_2=["sep_2_1","sep_2_2","sep_2_3","sep_2_4","sep_2_5","sep_2_6","sep_2_7","sep_2_8","sep_2_9","sep_2_10",
                               "sep_2_11","sep_2_12","sep_2_13","sep_2_14","sep_2_15","sep_2_16","sep_2_17","sep_2_18","sep_2_19","sep_2_20",
                               "sep_2_21","sep_2_22","sep_2_23","sep_2_24","sep_2_25","sep_2_26","sep_2_27","sep_2_28","sep_2_29","sep_2_30"]
                               function date_picker_sep(n) {
                                   for (let i = 0; i < date_pciker_array_sep.length; i++) {
                                       if(date_pciker_array_sep[i]!==n){
                                       
                                           document.getElementById(date_pciker_array_sep[i]).style.border="1px solid #323a44"
                                           document.getElementById(date_pciker_array_sep[i]).style.boxShadow="none"
                                           document.getElementById(date_pciker_array_sep[i]).style.color="black"
                                       }
                                       
                                   }
                                   document.getElementById(n).style.border="2px solid #70ad4d"
                                   document.getElementById(n).style.boxShadow=" 0 4px 12px rgb(0 0 0 / 18%)"
                                   document.getElementById(n).style.color="goldenrod"
                                   pic_date=n
                                  let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                               }
                               function date_picker_sep_2(n) {
                                   for (let i = 0; i < date_pciker_array_sep_2.length; i++) {
                                       if(date_pciker_array_sep_2[i]!==n){
                                       
                                           document.getElementById(date_pciker_array_sep_2[i]).style.border="1px solid #323a44"
                                           document.getElementById(date_pciker_array_sep_2[i]).style.boxShadow="none"
                                           document.getElementById(date_pciker_array_sep_2[i]).style.color="black"
                                       }
                                       
                                   }
                                   document.getElementById(n).style.border="2px solid #70ad4d"
                                   document.getElementById(n).style.boxShadow=" 0 4px 12px rgb(0 0 0 / 18%)"
                                   document.getElementById(n).style.color="goldenrod"
                                   pic_date_2=n
                                   let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                               }
                               var date_pciker_array_oct=["oct_1","oct_2","oct_3","oct_4","oct_5","oct_6","oct_7","oct_8","oct_9","oct_10",
                               "oct_11","oct_12","oct_13","oct_14","oct_15","oct_16","oct_17","oct_18","oct_19","oct_20",
                               "oct_21","oct_22","oct_23","oct_24","oct_25","oct_26","oct_27","oct_28","oct_29","oct_30","oct_31"]
                               var date_pciker_array_oct_2=["oct_2_1","oct_2_2","oct_2_3","oct_2_4","oct_2_5","oct_2_6","oct_2_7","oct_2_8","oct_2_9","oct_2_10",
                               "oct_2_11","oct_2_12","oct_2_13","oct_2_14","oct_2_15","oct_2_16","oct_2_17","oct_2_18","oct_2_19","oct_2_20",
                               "oct_2_21","oct_2_22","oct_2_23","oct_2_24","oct_2_25","oct_2_26","oct_2_27","oct_2_28","oct_2_29","oct_2_30","oct_2_31"]
                           
                               function date_picker_oct(n) {
                                   for (let i = 0; i < date_pciker_array_oct.length; i++) {
                                       if(date_pciker_array_oct[i]!==n){
                                       
                                           document.getElementById(date_pciker_array_oct[i]).style.border="1px solid #323a44"
                                           document.getElementById(date_pciker_array_oct[i]).style.boxShadow="none"
                                           document.getElementById(date_pciker_array_oct[i]).style.color="black"
                                       }
                                       
                                   }
                                   document.getElementById(n).style.border="2px solid #70ad4d"
                                   document.getElementById(n).style.boxShadow=" 0 4px 12px rgb(0 0 0 / 18%)"
                                   document.getElementById(n).style.color="goldenrod"
                                   pic_date=n
                                  let qqq=document.getElementById(pic_date).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_picked=lll
                                   day_final_picked=qqq
                                   
                                   document.querySelector(".second_box_location").innerHTML=qqq+"  "+lll+" , "+pick_month_value+" "+2021+"<br>"+pick_time_value
                                   
                               }
                               
                               function date_picker_oct_2(n) {
                                   for (let i = 0; i < date_pciker_array_oct_2.length; i++) {
                                       if(date_pciker_array_oct_2[i]!==n){
                                       
                                           document.getElementById(date_pciker_array_oct_2[i]).style.border="1px solid #323a44"
                                           document.getElementById(date_pciker_array_oct_2[i]).style.boxShadow="none"
                                           document.getElementById(date_pciker_array_oct_2[i]).style.color="black"
                                       }
                                       
                                   }
                                   document.getElementById(n).style.border="2px solid #70ad4d"
                                   document.getElementById(n).style.boxShadow=" 0 4px 12px rgb(0 0 0 / 18%)"
                                   document.getElementById(n).style.color="goldenrod"
                                   pic_date_2=n
                                   let qqq=document.getElementById(pic_date_2).textContent
                                   let lll=qqq.slice(3, 5)
                                   qqq=qqq.substring(0, 3)
                                    date_final_drop=lll
                                   day_final_drop=qqq
                              document.querySelector(".third_box_location_3").innerHTML=qqq+"  "+lll+" , "+pick_month_value_2+" "+2021+"<br>"+pick_time_value_2
                                   
                               }
                               document.querySelector(".second_box_location").style.color="#f8f8f8"
                               document.querySelector(".second_box_location").style.margin="0px 0px 2px 60px"
                               document.querySelector(".third_box_location_3").style.color="#f8f8f8"
                               document.querySelector(".third_box_location_3").style.margin="0px 0px 2px 60px"
                               
          // function for date picker for drop off and pick up point end.


          //fatch the values 
          var db_array=[]
          
                                     function end_fun() {
                                    console.log(date_final_picked,day_final_picked,pick_month_value,pick_time_value)
                                    console.log(date_final_drop,day_final_drop,pick_month_value_2,pick_time_value_2);
                                    console.log(p_point);
                                    console.log(d_ponit);
                                    if(d_ponit!=="" && p_point!==""){
                                       let first_one=document.getElementById("first_1").value
                                       let second_one=document.getElementById("second_1").value
                                       Object={
                                           p_location:p_point,
                                           p_time:pick_time_value,
                                           p_date:date_final_picked,
                                           p_day:day_final_picked,
                                           p_month:pick_month_value,
                                           p_city:first_one,

                                           d_location:d_ponit,
                                           d_time:pick_time_value_2,
                                           d_date:date_final_drop,
                                           d_day:day_final_drop,
                                           d_month:pick_month_value_2,
                                           d_city:second_one,
                                       }
                                       db_array.push(Object)
                                       console.log(db_array);
                                       const db_locations=JSON.stringify(db_array) 
                                      localStorage.setItem("pick_drop_points",db_locations);
                                      window.open("../Car_page/car.html","_top")
                                   }

                                      if(d_ponit==""){
                                       let first_one=document.getElementById("first_1").value
                                       Object={
                                           p_location:p_point,
                                           p_time:pick_time_value,
                                           p_date:date_final_picked,
                                           p_day:day_final_picked,
                                           p_month:pick_month_value,
                                           p_city:first_one,

                                           d_location:p_point,
                                           d_time:pick_time_value_2,
                                           d_date:date_final_drop,
                                           d_day:day_final_drop,
                                           d_month:pick_month_value_2,
                                           d_city:first_one,
                                       } 
                                       db_array.push(Object)
                                       console.log(db_array);
                                       const db_locations=JSON.stringify(db_array) 
                                      
                                      localStorage.setItem("pick_drop_points",db_locations);
                                      window.open("../Car_page/car.html","_top")
                                      }


                                     }