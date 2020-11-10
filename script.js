function myFunction() {

    var setUpLinks = ['Lite racer 2.0 shoes', 'Nemeziz 19.3 boots', 'Solecourt shoes', 'Marathon tech shoes']; // sau nay em cong chuoi vao src, 1 lan thoi,
    var setUpImgs = ['Lite_Racer_2.0_Shoes_Black_EG9831_01_standard', 
                        'Nemeziz_19.3_Firm_Ground_Boots_Orange_EH0300_01_standard', 
                        'SoleCourt_Shoes_White_FU8114_01_standard', 
                        'Marathon_Tech_Shoes_Black_EF4396_01_standard'];
    var setUpContents = ['Lite_Racer_2.0_Shoes', 'Nemeziz_19.3', 'SoleCourt_Shoes', 'Marathon_Tech_Shoes'];

    var links = document.querySelectorAll(".other-product-a"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả links
    var imgs = document.querySelectorAll(".other-product-a img"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả hình 
    var contents = document.querySelectorAll(".other-product-p"); //querySelectorAll, lấy nhiều giá trị, như cái này là lấy tất cả content 
    var random=Math.floor(Math.random()*4); // Ví dụ như random từ 0 đến 3

    // R = 0, link[0] = setUplink[random];
    // R = 0, link[1] = setUplink[random+1];
    // R = 0, link[2] = setUplink[random+2];
    // R = 0, link[3] = setUplink[random+3];

    // R = 1, link[0] = setUplink[random];
    // R = 0, link[1] = setUplink[random+1];
    // R = 0, link[2] = setUplink[random+2];
    // R = 0, link[3] = setUplink[random-1];

    // R = 2, link[0] = setUplink[random];
    // R = 0, link[1] = setUplink[random+1];okay, ngủ ngon dạ
    // R = 0, link[2] = setUplink[random-1];
    // R = 0, link[3] = setUplink[random-2];mai làm tiếp được không anh, em buồn ngủ quá rooifm okay, chờ anh copy cái code
//
    // em hỏi cái
    //làm sao để add 1 cái gì đó vào var a=[]
    // a là mảng, nếu muốn add thì dùng các phương thức như push, pop, em vào đó tìm hiểu thêm các phương thức
    //vậy nếu add cái random vào a rồi random tiếp, nếu đã có trong a thì tiếp tục random c
    // à không, add là em add phần tử, với lại add vào nó sẽ làm tăng độ dài của mảng lên, mỗi lần chạy thì mảng sẽ rất dài
    //em thửu thôi

    
    // if(random == 0){
        // links[0].href = '/Online-store/Shoes/' + setUpLinks[random] + '.html'; 
        // links[1].href = '/Online-store/Shoes/' + setUpLinks[random] + '.html'; // chờ anh chút, để load lại não =)))
        //hay là cho random lặp lại, trùng luôn cũng được?
        //kiểu var random trong for được không anh?
        // em làm thử được không :))


        
    //     imgs[random].src = '/Online-store/Images/' + setUpImgs[random] + '.jpg';
    //     links[0].href = '/Online-store/Shoes/' + setUpLinks[random] + '.html'; 

    //     contents[0].textContent = setUpContents[random];
    //     links[0].href = '/Online-store/Shoes/' + setUpLinks[random] + '.html'; 

    // }else if(random == 1){
        
    // }else if(random == 2){
    //     return;
    // }else{
    //     return;
    // }




    for(i=0;i<4;i++){
        var random=Math.floor(Math.random()*4);
        links[i].href = '/Online-store/Shoes/' + setUpLinks[random] + '.html'; // vậy được không anh?cho nó trùng , em làm thử xem
        imgs[i].src = '/Online-store/Images/' + setUpImgs[random] + '.jpg';
        contents[i].textContent = setUpContents[random];//có cách nào cho nó không trùng không anh?
        
        
    }
//vậy thôi khỏi đi anh, cứ cho nó trùng lại, chờ anh 5 phút, để anh tính trường hợp

    // Dùng for thì cũng okay, nó bị trùng là do u nó trùng với random
    //có cách nào mà kiểu lưu các số random đã có rồi không anh?
    // là sao?
    //kiểu if random có trong a thì random lại cho tới khi mà không trùng nữa
    // cũng được nhưng nó sẽ tốn bộ nhớ, làm vậy không hay
    //thử đi anh :))
    //sao vẫn bị trùng ?
    // okay, để làm lại thử

    
    console.log(random);
}