// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here

for(let i=0; i < restaurants.length; i++){
   newRestaurants.push(restaurants[i]);
   //นำเอาที่วนจากบบรทัดบนมาpush(ใส่)ใน newRestaurants
    
   console.log(`Restaurant Name: ${restaurants[i]}`); 
   //ให้นำ console.log ไปอยู่ในลูปแทนจะทำให้ผลลัพธ์เรียงทุกชื่อ
};


