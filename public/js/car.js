let db_arr=localStorage.getItem("pick_drop_points")
        var new_db_location=JSON.parse(db_arr)
        console.log(new_db_location);
        console.log(new_db_location[0].d_city);
        document.querySelector(".pick_city").innerText=new_db_location[0].p_city
        document.querySelector(".drop_city").innerText=new_db_location[0].d_city
        document.querySelector(".d_point_car").innerText=new_db_location[0].d_location
        document.querySelector(".p_point_car").innerText=new_db_location[0].p_location
      
        document.querySelector(".left_date").innerText=new_db_location[0].p_date
        document.querySelector(".right_date").innerText=new_db_location[0].d_date
        document.querySelector(".p_day").innerText=new_db_location[0].p_month
        document.querySelector(".d_day").innerText=new_db_location[0].d_month
        document.querySelector(".s_time_date").innerText=new_db_location[0].p_time
        document.querySelector(".e_time_date").innerText=new_db_location[0].d_time
        const cars=[
            {
                name:"Maruti Swift",
                average:"Excess Rs8/Km",
                img:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/1f3585c2e226fb30f85664a669b8c2ee1fdc1703.png?1503039545",
                drive:"manual",
                bags:"2 bags",
                price:"8,889",
                price1:"15,631"

            },
            {
                name:"Tata Tiago",
                average:"Excess Rs8/Km",
                img:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/8e78d99a6ddd6b6e6c858dad6f223fe74875e370.jpg?1506410553",
                drive:"manual",
                bags:"3 bags",
                price:"8,409",
                price1:"14,621"

            },
            {
                name:"Hundai i20",
                average:"Excess Rs10/Km",
                img:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/669ef153e37fe722e57d75af972c5740662b79e5.png?1503045133",
                drive:"manual",
                bags:"3 bags",
                price:"7,287",
                price1:"12,631"

            },
            {
                name:"Maruti Swift At",
                average:"Excess Rs11/Km",
                img:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/964a9433a21c9b95c25217ecdbe653abb658c9f1.png?1521810661",
                drive:"Automatic",
                bags:"3 bags",
                price:"6,989",
                price1:"11,631"

            },
            {
                name:"Ford ecosport",
                average:"Excess Rs18/Km",
                img:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/16f10a6059e90dc8193fa5a8ace6263fc39e7689.png?1503048248",
                drive:"manual",
                bags:"4 bags",
                price:"6,289",
                price1:"11,431"

            },
           
            {
                name:"Maruti Brezza",
                average:"Excess Rs12/Km",
                img:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/442cc622b1d00816cedc3f8ef316ee49aab2ebcd.png?1512544852",
                drive:"Automatic",
                bags:"4 bags",
                price:"6,209",
                price1:"10,010"

            },
        ];
      

        const cars_JSON=JSON.stringify(cars);
      //store above data in local storage
      localStorage.setItem("Mycars",cars_JSON);
      
      //display on web page
      let Mycars=localStorage.getItem("Mycars");

      //convert JSON into object;
       Mycars=JSON.parse(Mycars);
       var final=document.getElementById("final"); 
       function showProduct(){
        var main_con=document.getElementById("main_cont"); 
        Mycars.forEach(function (Product) {
            var div1=document.createElement("div");
            div1.setAttribute("class","left");
            var image=document.createElement("img");
            image.src=Product.img;
            div1.append(image);
            var div2=document.createElement("div");
            div2.setAttribute("class","middle")
            var h3=document.createElement("h3");
            h3.innerHTML=Product.name;
            div2.append(h3);
            var div2_2=document.createElement("div");
            div2_2.setAttribute("class","seats");

            var div2_2_1=document.createElement("div");
            var span2_2_1=document.createElement("span");
            var img2_2_1=document.createElement("img");
            img2_2_1.src="../Images/seat.png";
            span2_2_1.append(img2_2_1);
            var span2_2_2=document.createElement("span");
            span2_2_2.innerText="5 Seater";
            div2_2_1.append(span2_2_1);
            div2_2_1.append(span2_2_2);
            div2_2.append(div2_2_1);

            var div2_2_3=document.createElement("div");
            var span2_2_3=document.createElement("span");
            var img2_2_3=document.createElement("img");
            img2_2_3.src="../Images/car-.png";
            span2_2_3.append(img2_2_3);
            var span2_2_4=document.createElement("span");
            span2_2_4.innerText=Product.drive;
            div2_2_3.append(span2_2_3);
            div2_2_3.append(span2_2_4);
            div2_2.append(div2_2_3);

            var div2_2_5=document.createElement("div");
            var span2_2_5=document.createElement("span");
            var img2_2_5=document.createElement("img");
            img2_2_5.src="../Images/height.png";
            span2_2_5.append(img2_2_5);
            var span2_2_6=document.createElement("span");
            span2_2_6.innerText=Product.bags;
            div2_2_5.append(span2_2_5);
            div2_2_5.append(span2_2_6);
            div2_2.append(div2_2_5);

            var  div2_2_7=document.createElement("div");
            var span2_2_7=document.createElement("span");
            span2_2_7.innerText="AGE-LIMIT:18+";
            div2_2_7.append(span2_2_7);
            div2_2.append(div2_2_7);

            div2.append(div2_2)

            var div2_2_0=document.createElement("div");
            div2_2_0.setAttribute("class","pick-up");
            var div2_2_0_1=document.createElement("div");
            var p_pickup=document.createElement("p");
            p_pickup.innerText="Pickup at "+new_db_location[0].p_location;
            var h3_pickup=document.createElement("h3");
            h3_pickup.innerText="1.5 km from starting point";
            div2_2_0_1.append(p_pickup,h3_pickup)

            var div2_2_0_2=document.createElement("div");
            var p_endup=document.createElement("p");
            p_endup.innerText="Drop at "+new_db_location[0].d_location;
            var h3_endup=document.createElement("h3");
           h3_endup.innerText="1.7 km from drop point";

            div2_2_0_2.append(p_endup,h3_endup)
            div2_2_0.append(div2_2_0_1,div2_2_0_2);
            div2.append(div2_2_0)

            var div3=document.createElement("div");
            div3.setAttribute("class","right")
            var h1=document.createElement("h1");
            h1.innerText=`₹${Product.price}`;
           
            var p=document.createElement("p");
            p.innerText=Product.average;
            var btn=document.createElement("button");
            btn.innerText="Book Now"
            div3.append(h1,p,btn)
           btn.onclick=function(){
                add_to_cart(Product.name,Product.price,Product.img)
            }

            div3.setAttribute("class","right");
            main_con.append(div1,div2,div3);
            final.append(main_con)

         
        }); 
       
    }  
               
    function showProduct4(){

        var main_con3=document.getElementById("main_cont3"); 
        var main_con4=document.getElementById("main_cont4"); 
        Mycars.forEach(function (Product) {
            if(Product.drive=="Automatic"){
            var div1=document.createElement("div");
            div1.setAttribute("class","left");
            var image=document.createElement("img");
            image.src=Product.img;
            div1.append(image);
            var div2=document.createElement("div");
            div2.setAttribute("class","middle")
            var h3=document.createElement("h3");
            h3.innerHTML=Product.name;
            div2.append(h3);
            var div2_2=document.createElement("div");
            div2_2.setAttribute("class","seats");

            var div2_2_1=document.createElement("div");
            var span2_2_1=document.createElement("span");
            var img2_2_1=document.createElement("img");
            img2_2_1.src="../Images/seat.png";
            span2_2_1.append(img2_2_1);
            var span2_2_2=document.createElement("span");
            span2_2_2.innerText="5 Seater";
            div2_2_1.append(span2_2_1);
            div2_2_1.append(span2_2_2);
            div2_2.append(div2_2_1);

            var div2_2_3=document.createElement("div");
            var span2_2_3=document.createElement("span");
            var img2_2_3=document.createElement("img");
            img2_2_3.src="../Images/car-.png";
            span2_2_3.append(img2_2_3);
            var span2_2_4=document.createElement("span");
            span2_2_4.innerText=Product.drive;
            div2_2_3.append(span2_2_3);
            div2_2_3.append(span2_2_4);
            div2_2.append(div2_2_3);

            var div2_2_5=document.createElement("div");
            var span2_2_5=document.createElement("span");
            var img2_2_5=document.createElement("img");
            img2_2_5.src="../Images/height.png";
            span2_2_5.append(img2_2_5);
            var span2_2_6=document.createElement("span");
            span2_2_6.innerText=Product.bags;
            div2_2_5.append(span2_2_5);
            div2_2_5.append(span2_2_6);
            div2_2.append(div2_2_5);

            var  div2_2_7=document.createElement("div");
            var span2_2_7=document.createElement("span");
            span2_2_7.innerText="AGE-LIMIT:18+";
            div2_2_7.append(span2_2_7);
            div2_2.append(div2_2_7);

            div2.append(div2_2)

            var div2_2_0=document.createElement("div");
            div2_2_0.setAttribute("class","pick-up");
            var div2_2_0_1=document.createElement("div");
            var p_pickup=document.createElement("p");
            p_pickup.innerText="Pickup at "+new_db_location[0].p_location;
            var h3_pickup=document.createElement("h3");
            h3_pickup.innerText="1.5 km from starting point";
            div2_2_0_1.append(p_pickup,h3_pickup)

            var div2_2_0_2=document.createElement("div");
            var p_endup=document.createElement("p");
            p_endup.innerText="Drop at "+new_db_location[0].d_location;
            var h3_endup=document.createElement("h3");
           h3_endup.innerText="1.7 km from drop point";

            div2_2_0_2.append(p_endup,h3_endup)
            div2_2_0.append(div2_2_0_1,div2_2_0_2);
            div2.append(div2_2_0)

            var div3=document.createElement("div");
            div3.setAttribute("class","right")
            var h1=document.createElement("h1");
            h1.innerText=`₹${Product.price}`;
           
            var p=document.createElement("p");
            p.innerText=Product.average;
            var btn=document.createElement("button");
            btn.innerText="Book Now"
            div3.append(h1,p,btn)
           btn.onclick=function(){
                add_to_cart(Product.name,Product.price,Product.img)
            }

            div3.setAttribute("class","right");  
            main_con3.append(div1,div2,div3)
                final.append(main_con3)
            }else{
                var div1=document.createElement("div");
            div1.setAttribute("class","left");
            var image=document.createElement("img");
            image.src=Product.img;
            div1.append(image);
            var div2=document.createElement("div");
            div2.setAttribute("class","middle")
            var h3=document.createElement("h3");
            h3.innerHTML=Product.name;
            div2.append(h3);
            var div2_2=document.createElement("div");
            div2_2.setAttribute("class","seats");

            var div2_2_1=document.createElement("div");
            var span2_2_1=document.createElement("span");
            var img2_2_1=document.createElement("img");
            img2_2_1.src="../Images/seat.png";
            span2_2_1.append(img2_2_1);
            var span2_2_2=document.createElement("span");
            span2_2_2.innerText="5 Seater";
            div2_2_1.append(span2_2_1);
            div2_2_1.append(span2_2_2);
            div2_2.append(div2_2_1);

            var div2_2_3=document.createElement("div");
            var span2_2_3=document.createElement("span");
            var img2_2_3=document.createElement("img");
            img2_2_3.src="../Images/car-.png";
            span2_2_3.append(img2_2_3);
            var span2_2_4=document.createElement("span");
            span2_2_4.innerText=Product.drive;
            div2_2_3.append(span2_2_3);
            div2_2_3.append(span2_2_4);
            div2_2.append(div2_2_3);

            var div2_2_5=document.createElement("div");
            var span2_2_5=document.createElement("span");
            var img2_2_5=document.createElement("img");
            img2_2_5.src="../Images/height.png";
            span2_2_5.append(img2_2_5);
            var span2_2_6=document.createElement("span");
            span2_2_6.innerText=Product.bags;
            div2_2_5.append(span2_2_5);
            div2_2_5.append(span2_2_6);
            div2_2.append(div2_2_5);

            var  div2_2_7=document.createElement("div");
            var span2_2_7=document.createElement("span");
            span2_2_7.innerText="AGE-LIMIT:18+";
            div2_2_7.append(span2_2_7);
            div2_2.append(div2_2_7);

            div2.append(div2_2)

            var div2_2_0=document.createElement("div");
            div2_2_0.setAttribute("class","pick-up");
            var div2_2_0_1=document.createElement("div");
            var p_pickup=document.createElement("p");
            p_pickup.innerText="Pickup at "+new_db_location[0].p_location;
            var h3_pickup=document.createElement("h3");
            h3_pickup.innerText="1.5 km from starting point";
            div2_2_0_1.append(p_pickup,h3_pickup)

            var div2_2_0_2=document.createElement("div");
            var p_endup=document.createElement("p");
            p_endup.innerText="Drop at "+new_db_location[0].d_location;
            var h3_endup=document.createElement("h3");
           h3_endup.innerText="1.7 km from drop point";

            div2_2_0_2.append(p_endup,h3_endup)
            div2_2_0.append(div2_2_0_1,div2_2_0_2);
            div2.append(div2_2_0)

            var div3=document.createElement("div");
            div3.setAttribute("class","right")
            var h1=document.createElement("h1");
            h1.innerText=`₹${Product.price}`;
           
            var p=document.createElement("p");
            p.innerText=Product.average;
            var btn=document.createElement("button");
            btn.innerText="Book Now"
            div3.append(h1,p,btn)
           btn.onclick=function(){
                add_to_cart(Product.name,Product.price,Product.img)
            }

            div3.setAttribute("class","right");  
                main_con4.append(div1,div2,div3)
                final.append(main_con4)
            }
          
        }); 
    }




    function add_to_cart(a,b,c) {
        var value=localStorage.getItem("value")
        console.log(value);
        if(value==="true"){
        var ar_Cart=[]
        ar_Cart.push(a)
        ar_Cart.push(b)
        ar_Cart.push(c)
        let db=JSON.stringify(ar_Cart)
        localStorage.setItem("car_cart",db)
            window.open("../Checkout/checkout_page.html","_top")
        }
        else{
          
        document.querySelector('.cont').style.display = "flex"
          
        }

    }
    function showProduct1(){
        var main_con1=document.getElementById("main_cont1"); 
        Mycars.forEach(function (Product) {
            var div1=document.createElement("div");
            div1.setAttribute("class","left");
            var image=document.createElement("img");
            image.src=Product.img;
            div1.append(image);
            var div2=document.createElement("div");
            div2.setAttribute("class","middle")
            var h3=document.createElement("h3");
            h3.innerHTML=Product.name;
            div2.append(h3);
            var div2_2=document.createElement("div");
            div2_2.setAttribute("class","seats");

            var div2_2_1=document.createElement("div");
            var span2_2_1=document.createElement("span");
            var img2_2_1=document.createElement("img");
            img2_2_1.src="../Images/seat.png";
            span2_2_1.append(img2_2_1);
            var span2_2_2=document.createElement("span");
            span2_2_2.innerText="5 Seater";
            div2_2_1.append(span2_2_1);
            div2_2_1.append(span2_2_2);
            div2_2.append(div2_2_1);

            var div2_2_3=document.createElement("div");
            var span2_2_3=document.createElement("span");
            var img2_2_3=document.createElement("img");
            img2_2_3.src="../Images/car-.png";
            span2_2_3.append(img2_2_3);
            var span2_2_4=document.createElement("span");
            span2_2_4.innerText=Product.drive;
            div2_2_3.append(span2_2_3);
            div2_2_3.append(span2_2_4);
            div2_2.append(div2_2_3);

            var div2_2_5=document.createElement("div");
            var span2_2_5=document.createElement("span");
            var img2_2_5=document.createElement("img");
            img2_2_5.src="../Images/height.png";
            span2_2_5.append(img2_2_5);
            var span2_2_6=document.createElement("span");
            span2_2_6.innerText=Product.bags;
            div2_2_5.append(span2_2_5);
            div2_2_5.append(span2_2_6);
            div2_2.append(div2_2_5);

            var  div2_2_7=document.createElement("div");
            var span2_2_7=document.createElement("span");
            span2_2_7.innerText="AGE-LIMIT:18+";
            div2_2_7.append(span2_2_7);
            div2_2.append(div2_2_7);

            div2.append(div2_2)

            var div2_2_0=document.createElement("div");
            div2_2_0.setAttribute("class","pick-up");
            var div2_2_0_1=document.createElement("div");
            var p_pickup=document.createElement("p");
            p_pickup.innerText="Pickup at "+new_db_location[0].p_location;
            var h3_pickup=document.createElement("h3");
            h3_pickup.innerText="1.5 km from starting point";
            div2_2_0_1.append(p_pickup,h3_pickup)

            var div2_2_0_2=document.createElement("div");
            var p_endup=document.createElement("p");
            p_endup.innerText="Drop at "+new_db_location[0].d_location;
            var h3_endup=document.createElement("h3");
           h3_endup.innerText="1.7 km from drop point";

            div2_2_0_2.append(p_endup,h3_endup)
            div2_2_0.append(div2_2_0_1,div2_2_0_2);
            div2.append(div2_2_0)

            var div3=document.createElement("div");
            div3.setAttribute("class","right")
            var h1=document.createElement("h1");
            h1.innerText=`₹${Product.price1}`;
           
            var p=document.createElement("p");
            p.innerText=Product.average;
            var btn=document.createElement("button");
            btn.innerText="Book Now"
           btn.onclick=function(){
                add_to_cart(Product.name,Product.price,Product.img)
            }
            div3.append(h1,p,btn)

            div3.setAttribute("class","right");
            main_con1.append(div1,div2,div3);
            final.append(main_con1)
        }); 
    }
    showProduct() 
    showProduct1()



   var main_con2=document.getElementById("main_cont2"); 
   function showlow(){
    var re=Mycars.reverse();
        var count=0;
        re.forEach(function (Product) {
           
            var div1=document.createElement("div");
            div1.setAttribute("class","left");
            var image=document.createElement("img");
            image.src=Product.img;
            div1.append(image);
            var div2=document.createElement("div");
            div2.setAttribute("class","middle")
            var h3=document.createElement("h3");
            h3.innerHTML=Product.name;
            div2.append(h3);
            var div2_2=document.createElement("div");
            div2_2.setAttribute("class","seats");

            var div2_2_1=document.createElement("div");
            var span2_2_1=document.createElement("span");
            var img2_2_1=document.createElement("img");
            img2_2_1.src="../Images/seat.png"    
            span2_2_1.append(img2_2_1);
            var span2_2_2=document.createElement("span");
            span2_2_2.innerText="5 Seater";
            div2_2_1.append(span2_2_1);
            div2_2_1.append(span2_2_2);
            div2_2.append(div2_2_1);

            var div2_2_3=document.createElement("div");
            var span2_2_3=document.createElement("span");
            var img2_2_3=document.createElement("img");
            img2_2_3.src="../Images/car-.png";
            span2_2_3.append(img2_2_3);
            var span2_2_4=document.createElement("span");
            span2_2_4.innerText=Product.drive;
            div2_2_3.append(span2_2_3);
            div2_2_3.append(span2_2_4);
            div2_2.append(div2_2_3);

            var div2_2_5=document.createElement("div");
            var span2_2_5=document.createElement("span");
            var img2_2_5=document.createElement("img");
            img2_2_5.src="../Images/height.png";
            span2_2_5.append(img2_2_5);
            var span2_2_6=document.createElement("span");
            span2_2_6.innerText=Product.bags;
            div2_2_5.append(span2_2_5);
            div2_2_5.append(span2_2_6);
            div2_2.append(div2_2_5);

            var  div2_2_7=document.createElement("div");
            var span2_2_7=document.createElement("span");
            span2_2_7.innerText="AGE-LIMIT:18+";
            div2_2_7.append(span2_2_7);
            div2_2.append(div2_2_7);

            div2.append(div2_2)

            var div2_2_0=document.createElement("div");
            div2_2_0.setAttribute("class","pick-up");
            var div2_2_0_1=document.createElement("div");
            var p_pickup=document.createElement("p");
            p_pickup.innerText="Pickup at "+new_db_location[0].p_location;
            var h3_pickup=document.createElement("h3");
            h3_pickup.innerText="1.5 km from starting point";
            div2_2_0_1.append(p_pickup,h3_pickup)

            var div2_2_0_2=document.createElement("div");
            var p_endup=document.createElement("p");
            p_endup.innerText="Drop at "+new_db_location[0].d_location;
            var h3_endup=document.createElement("h3");
           h3_endup.innerText="1.7 km from drop point";

            div2_2_0_2.append(p_endup,h3_endup)
            div2_2_0.append(div2_2_0_1,div2_2_0_2);
            div2.append(div2_2_0)

            var div3=document.createElement("div");
            div3.setAttribute("class","right")
            var h1=document.createElement("h1");
            h1.innerText=`₹${Product.price}`;
           
            var p=document.createElement("p");
            p.innerText=Product.average;
            var btn=document.createElement("button");
            btn.innerText="Book Now"
            btn.onclick=function(){
                add_to_cart(Product.name,Product.price,Product.img)
            }
            div3.append(h1,p,btn)

            div3.setAttribute("class","right");
           

         
            main_con2.append(div1,div2,div3);
            final.append(main_con2) 
           
        });   
   }
   showlow();
   document.getElementById('main_cont2').style.display = "none"

        document.getElementById("sortlow").addEventListener("click", function(){
            document.getElementById('main_cont2').style.display = "grid"
        document.getElementById('main_cont').style.display = "none"
        document.getElementById('main_cont1').style.display = "none"
        document.getElementById('main_cont3').style.display = "none"
        document.getElementById('main_cont4').style.display = "none"
        document.querySelector('.auto_trs').style.backgroundColor = "white"
      document.querySelector('.manu_trs').style.backgroundColor = "white"


        document.querySelector('.no_fuel').style.color = "white"
        document.querySelector('.no_fuel').style.backgroundColor = "rgb(112, 173, 77)"
        document.querySelector('.with_fuel').style.color = "black"
        document.querySelector('.with_fuel').style.backgroundColor = "rgb(255, 255, 255)"
    })


    document.getElementById("sort").addEventListener("click", function(){
        document.getElementById('main_cont2').style.display = "none"
        document.getElementById('main_cont1').style.display = "none"
        document.getElementById('main_cont').style.display = "grid"
        document.querySelector('.auto_trs').style.backgroundColor = "white"
      document.querySelector('.manu_trs').style.backgroundColor = "white"
      document.getElementById('main_cont3').style.display = "none"
        document.getElementById('main_cont4').style.display = "none"

        document.querySelector('.no_fuel').style.color = "white"
        document.querySelector('.no_fuel').style.backgroundColor = "rgb(112, 173, 77)"
        document.querySelector('.with_fuel').style.color = "black"
        document.querySelector('.with_fuel').style.backgroundColor = "rgb(255, 255, 255)"
    })


    document.getElementById('main_cont1').style.display = "none"
    document.querySelector('.no_fuel').style.color = "white"

    document.querySelector(".no_fuel").addEventListener("click", function(){
        document.querySelector('.no_fuel').style.color = "White"
        document.querySelector('.no_fuel').style.backgroundColor = "rgb(112, 173, 77)"
        document.querySelector('.with_fuel').style.color = "black"
        document.querySelector('.with_fuel').style.backgroundColor = "rgb(255, 255, 255)"
        document.getElementById('main_cont1').style.display = "none"
        document.getElementById('main_cont').style.display = "grid"
        document.getElementById('main_cont2').style.display = "none"
        document.querySelector('.auto_trs').style.backgroundColor = "white"
        document.querySelector('.manu_trs').style.backgroundColor = "white"
        document.getElementById('main_cont3').style.display = "none"
        document.getElementById('main_cont4').style.display = "none"
        
    })

    document.querySelector('.auto_trs').style.backgroundColor = "white"
    document.querySelector('.manu_trs').style.backgroundColor = "white"

    document.querySelector(".auto_trs").addEventListener("click", function(){
        document.querySelector('.tran_p').style.color = "white"
        document.querySelector('.auto_trs').style.backgroundColor = "rgb(112, 173, 77)"
        document.querySelector('.manu_trs').style.backgroundColor = "white"
        document.querySelector('.tran_p').style.color = "black"
        document.getElementById('main_cont1').style.display = "none"
        document.getElementById('main_cont').style.display = "none"
        document.getElementById('main_cont2').style.display = "none"
        document.getElementById('main_cont3').style.display = "grid"
        document.getElementById('main_cont4').style.display = "none"
        document.querySelector('.no_fuel').style.color = "white"
        document.querySelector('.no_fuel').style.backgroundColor = "rgb(112, 173, 77)"
        document.querySelector('.with_fuel').style.color = "black"
        document.querySelector('.with_fuel').style.backgroundColor = "rgb(255, 255, 255)"
    
      

        
    })
      showProduct4()
      document.getElementById('main_cont3').style.display = "none"
        document.getElementById('main_cont4').style.display = "none"


    document.querySelector(".manu_trs").addEventListener("click", function(){
        document.querySelector('.tran_p').style.color = "black"
        document.querySelector('.manu_trs').style.backgroundColor = "rgb(112, 173, 77)"
        document.querySelector('.auto_trs').style.backgroundColor = "white"
        document.querySelector('.tran_p').style.color = "black"
        document.getElementById('main_cont1').style.display = "none"
        document.getElementById('main_cont').style.display = "none"
        document.getElementById('main_cont2').style.display = "none"
        document.getElementById('main_cont3').style.display = "none"
        document.getElementById('main_cont4').style.display = "grid"
        document.querySelector('.no_fuel').style.color = "white"
        document.querySelector('.no_fuel').style.backgroundColor = "rgb(112, 173, 77)"
        document.querySelector('.with_fuel').style.color = "black"
        document.querySelector('.with_fuel').style.backgroundColor = "rgb(255, 255, 255)"
     
       
        
    })
   
    document.querySelector(".with_fuel").addEventListener("click", function(){
        document.querySelector('.with_fuel').style.color = "white"
        document.querySelector('.with_fuel').style.backgroundColor = "rgb(112, 173, 77)"
        document.querySelector('.no_fuel').style.color = "black"
        document.querySelector('.no_fuel').style.backgroundColor = "rgb(247, 247, 247)"
        document.getElementById('main_cont').style.display = "none"
        document.getElementById('main_cont1').style.display = "grid"
        document.getElementById('main_cont2').style.display = "none"
        document.querySelector('.auto_trs').style.backgroundColor = "white"
        document.querySelector('.manu_trs').style.backgroundColor = "white"
        document.getElementById('main_cont3').style.display = "none"
        document.getElementById('main_cont4').style.display = "none"
    })
    
    var slides1 = document.querySelector('.promo1')
    var slides2 = document.querySelector('.promo2')
    var slides3 = document.querySelector('.promo3')
   
    var slides_arr = [slides1, slides2, slides3]
  
     

    var time = 2000;
    var j = 0;
    function changeImg(){
        slides3.style.display = "none"
        slides1.style.display = "none"
        slides2.style.display = "none"
        slides_arr[j].style.display = "block"
        if(j < slides_arr.length - 1){
             j++; 
        } else { 
            j = 0;
        }
        setTimeout("changeImg()", time);
    }

    
    
    
    

    document.querySelector(".close").addEventListener("click", function(){
        document.querySelector('.cont').style.display = "none"
    })


    var slides4 = document.querySelector('.promo4')
    var slides5 = document.querySelector('.promo5')
    var slides6 = document.querySelector('.promo6')
   
    var slides_arr1 = [slides4, slides5, slides6]
    var time = 2000;
    var i = 0;
    function changeImg1(){
        slides6.style.display = "none"
        slides4.style.display = "none"
        slides5.style.display = "none"
        slides_arr1[i].style.display = "block"
        if(i < slides_arr1.length - 1){
        i++; 
        } else { 
            i = 0;
        }
        setTimeout("changeImg1()", time);
        
    }
    window.onload = function(){
        changeImg()
        changeImg1()
    }
    

    
    function validateEmail() {
        
        var phone = document.getElementById('input_format').value
        var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
        if (phone == "") {
            document.getElementById("lbltext").innerHTML = "Please enter a valid email address or mobile number."
            document.getElementById("lbltext").style.visibility = "visible";
            document.getElementById("lbltext").style.color = "red";
            // return false;
        }
        else if (!mailFormat.test(phone)) {
            document.getElementById("lbltext").innerHTML = "Please enter a valid email address or mobile number."
            document.getElementById("lbltext").style.visibility = "visible";
            document.getElementById("lbltext").style.color = "red";
            // return false;
        }
        else {
            document.querySelector('.cont1').style.display = "flex"
            document.querySelector('.cont').style.display = "none"
            document.querySelector('.cont2').style.display = "none"
            // return true; 
           
        }
        var phone_json = JSON.stringify(phone)
        localStorage.setItem("phone", phone_json)
        var phone1 = localStorage.getItem("phone")
        // console.log('phone1:', phone1)
        phone1 = JSON.parse(phone1)
        console.log(phone1);

        document.getElementById("phone1").value = phone1

        // console.log("jay"); 
       
    } 

    document.getElementById("next").addEventListener('click', validateEmail)
    document.querySelector(".close1").addEventListener("click", function(){
                document.querySelector('.cont1').style.display = "none"
    })

    function form_details(){
        // e.preventDefault();
        const form = {
            email: document.getElementById("email").value,
            name: document.getElementById("drive").value,
            password: document.getElementById("min8").value,
        }
        var mailFormat1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
        if (form.email == "") {
            document.getElementById("lbltext1").innerHTML = "Please enter a valid email address."
            document.getElementById("lbltext1").style.visibility = "visible";
            document.getElementById("lbltext1").style.color = "red";
            // return false;
        }
        else if (!mailFormat1.test(form.email)) {
            document.getElementById("lbltext1").innerHTML = "Please enter a valid email address."
            document.getElementById("lbltext1").style.visibility = "visible";
            document.getElementById("lbltext1").style.color = "red";
            // return false;
        }
        else if (form.password.length < 8) {
            document.getElementById("lbltext2").innerHTML = "Please enter a Minimum 8 Character Password."
            document.getElementById("lbltext2").style.visibility = "visible";
            document.getElementById("lbltext2").style.color = "red";
            // return false;   
        }
        else {
            document.querySelector('.cont2').style.display = "flex"
            document.querySelector('.cont').style.display = "none"
            document.querySelector('.cont1').style.display = "none"
            
            // true;
        }
        if(form.email!=="" && form.password.length >=8 && mailFormat1.test(form.email)==true){
             const form_json = JSON.stringify(form)
        localStorage.setItem("form_details", form_json)
        var otp = Math.round(Math.random() *999999)+1;
        if(otp > 99999){
            
            const otp_json = JSON.stringify(otp);
            localStorage.setItem("otp", otp_json);
            alert(otp)
        }  
        }
           
    }
    document.getElementById("login_submit_button").addEventListener('click', form_details)

    function validateotp() {
        var otp_local = localStorage.getItem("otp");
        var otp_input = document.getElementById("otp-cont").value
        // console.log(otp_input);
        if(otp_input != otp_local){
            document.getElementById("otplabel").innerHTML = "Invalid"
            document.getElementById("otplabel").style.visibility = "visible";
            document.getElementById("otplabel").style.color = "red";
        }
        else {
            document.querySelector('.cont2').style.display = "none"
            true
        }
        var value=true
        localStorage.setItem("value",value)
        
    }
    document.getElementById("otp").addEventListener('click', validateotp)
    

    function signup_roh() {
        
        document.querySelector('.cont').style.display = "flex"
        
    }
   
   