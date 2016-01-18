var menu1 = '{"menu": {"header": "menu", "items": [{"id": 27}, {"id": 0, "label": "Label 0"}, null, {"id": 93}, {"id": 85}, {"id": 54}, null, {"id": 46, "label": "Label 46"}]}}';
var menu2 = '{"menu": {"header": "menu", "items": [{"id": 82}]}}';
var menu3 = '{"menu": {"header": "menu", "items": [{"id": 71, "label": "Label 70"}, {"id": 85, "label": "Label 85"}, {"id": 93, "label": "Label 93"}, {"id": 2}]}}';

function calcSumOfIds(menu) {
    var items = menu.menu.items;
    var sum = 0;
    
    items.forEach(function(i) {
        if (i && i.label) {
            sum += i.id;
        }
    });

    return sum;
}

console.log(calcSumOfIds(JSON.parse(line)));
