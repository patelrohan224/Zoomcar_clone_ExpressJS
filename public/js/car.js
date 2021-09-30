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

   
    function signup_roh() {
        
        document.querySelector('.cont').style.display = "flex"
        
    }
   
   