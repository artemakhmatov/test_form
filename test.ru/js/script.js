let i, result;
num = document.querySelector("#num_of_licenses");
result = document.querySelector('#result')

for (let c = 0; c < 4; c++) {
    i = document.querySelectorAll('input')[c];
    i.addEventListener('input', function () {
        for (let z = 0; z < 3; z++) {
            let v = document.querySelectorAll('.change_radio')[z];
            if (v.checked == true) {
                v.parentElement.parentElement.style.backgroundColor='rgb(235, 244, 247)'
                result.textContent=`$${num.value*v.value}`;
                document.querySelector(".block_result_sup").style.display='inline';
                document.querySelector("#result_num_of_license").textContent=`#${z+1}`;
            } else if (v.checked == false) {
                v.parentElement.parentElement.style.backgroundColor='inherit'
            }

        }
    })
}