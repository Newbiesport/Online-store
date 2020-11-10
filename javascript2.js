function Shoes() {

var setUpLinks = ['Shoes/Lite racer 2.0 shoes', 'Shoes/Nemeziz 19.3 boots', 'Shoes/Solecourt shoes', 'Shoes/Marathon tech shoes',
                    'Shoes/Fitbouce trainers', 'Shoes/Grand court shoes', 'Shoes/Predator 20.3 boots', 'Shoes/Ultraboost 20 shoes',
                ];
        
        
        
        
var setUpImgs = ['Lite_Racer_2.0_Shoes_Black_EG9831_01_standard', 
                    'Nemeziz_19.3_Firm_Ground_Boots_Orange_EH0300_01_standard', 
                    'SoleCourt_Shoes_White_FU8114_01_standard', 
                    'Marathon_Tech_Shoes_Black_EF4396_01_standard',
                    'FitBounce_Trainers_Black_EG9502_01_standard',
                    'Grand_Court_Shoes_White_F36392_01_standard',
                    'Predator_20.3_Firm_Ground_Boots_Blue_EG0964_01_standard',
                    'Ultraboost_20_Shoes_White_EG5177_01_standard',
                ];
        
        
        
var setUpContents = ['LITE RACER 2.0 SHOES', 'NEMEZIZ 19.3 FIRM GROUND BOOTS', 'SOLECOURT SHOES', 'MARATHON TECH SHOES', 
                    'FITBOUNCE TRAINERS', 'GRAND COURT SHOES', 'PREDATOR 20.3 FIRM GROUND BOOTS', 'ULTRABOOST 20 SHOES',
                    ];
        
var links = document.querySelectorAll(".home-product-a-shoes"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả links
var imgs = document.querySelectorAll(".home-product-a-shoes img"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả hình 
var contents = document.querySelectorAll(".home-product-p-shoes"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả content 
            
        
        
for(i=0;i<4;i++){
    var random=Math.floor(Math.random()*8);
    links[i].href = '/Online-store/' + setUpLinks[random] + '.html'; 
    imgs[i].src = '/Online-store/Images/' + setUpImgs[random] + '.jpg';
    contents[i].textContent = setUpContents[random];
                
                
}
        
console.log(random);
}



function Clothes() {

var setUpLinks = [ 'Clothes/adidas Z.N.E. full-zip hoodie', 'Clothes/AEROREADY 3-stripes pants', 'Clothes/Alphaskin sport short tights', 'Clothes/Climacool polo shirt',
                    'Clothes/FreeLift 360 gradient graphic tee', 'Clothes/HEAT.RDY training shorts', 'Clothes/Manchester united 20-21 home jersey', 'Clothes/Varilite hooded down jacket',
                ];
            
            
            
            
    var setUpImgs = ['adidas_Z.N.E._Full-Zip_Hoodie_Black_GM6531_01_laydown',
                    'AEROREADY_3-Stripes_Pants_Blue_FL4384_01_laydown',
                    'Alphaskin_Sport_Short_Tights_Black_CF7299_01_laydown',
                    'Climacool_Polo_Shirt_Black_FJ2418_01_laydown',
                    'FreeLift_360_Gradient_Graphic_Tee_Black_DX9474_01_laydown',
                    'HEAT.RDY_Training_Shorts_Black_GL7306_01_laydown',
                    'Manchester_United_20-21_Home_Jersey_Red_GC7958_01_laydown',
                    'Varilite_Hooded_Down_Jacket_Black_BQ7782_01_laydown',
                ];
            
            
            
var setUpContents = ['ADIDAS Z.N.E FULL-ZIP HOODIE', 'AEROREADY 3-STRIPES PANTS' , 'ALPHASKIN SPORT SHORT TIGHTS' , 'CLIMACOOL POLO SHIRT',
                    'FREELIFT 360 GRADIENT GRAPHIC TEE', 'HEAT.RDY TRAINING SHORTS BLACK', 'MANCHESTER UNITED 20-21 HOME JERSEY', 'VARILITE HOODED DOWN JACKET',
                    ];
            
var links = document.querySelectorAll(".home-product-a-clothes"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả links
var imgs = document.querySelectorAll(".home-product-a-clothes img"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả hình 
var contents = document.querySelectorAll(".home-product-p-clothes"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả content 
                
            
            
for(i=0;i<4;i++){
    var random=Math.floor(Math.random()*8);
    links[i].href = '/Online-store/' + setUpLinks[random] + '.html'; 
    imgs[i].src = '/Online-store/Images/' + setUpImgs[random] + '.jpg';
    contents[i].textContent = setUpContents[random];
                    
                    
}
            
console.log(random);
}

function Accessories() {

var setUpLinks = ['Accessories/Adicross ball case', 'Accessories/adidas athletics pack dad cap', 'Accessories/AEROREADY visor', 'Accessories/Classic boxy backpack',
                    'Accessories/Cushioned low-cut socks 3 pairs', 'Accessories/Parkhood waist bag', 'Accessories/Tour two-way zip pouch', 'Accessories/WIND.RDY baseball cap'];
                
                
                
                
var setUpImgs = [
                'Adicross_Ball_Case_Black_FM5548_01_standard',
                'adidas_Athletics_Pack_Dad_Cap_Black_FK4419_01_standard',
                'AEROREADY_Visor_White_FK0859_01_standard',
                'Classic_Boxy_Backpack_Black_FS8336_01_standard',
                'Cushioned_Low-Cut_Socks_3_Pairs_Grey_DZ9383_03_standard',
                'Parkhood_Waist_Bag_Black_FJ1125_01_standard',
                'Tour_Two-Way_Zip_Pouch_White_FM4236_01_standard',
                'WIND.RDY_Baseball_Cap_Black_FP8073_01_standard'
                ];
                
                
                
var setUpContents = ['ADICROSS BALL CASE', 'ADIDAS ATHLETICS PACK DAD CAP', 'AEROREADY VISOR', 'CLASSIC BOXY BACKPACK',
                    'CUSHIONED LOW-CUT SOCK 3 PAIRS', 'PARKHOOD WAIST BAG', 'TOUR TWO-WAY ZIP POUCH', 'WIND.RDY BASEBALL CAP',];
                
var links = document.querySelectorAll(".home-product-a-accessories"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả links
var imgs = document.querySelectorAll(".home-product-a-accessories img"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả hình 
var contents = document.querySelectorAll(".home-product-p-accessories"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả content 
                    
                
                
for(i=0;i<4;i++){
    var random=Math.floor(Math.random()*8);
    links[i].href = '/Online-store/' + setUpLinks[random] + '.html'; 
    imgs[i].src = '/Online-store/Images/' + setUpImgs[random] + '.jpg';
    contents[i].textContent = setUpContents[random];
                        
                        
}
                
console.log(random);
}