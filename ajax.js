// Store dom object references as constants
const suggestion_box = document.getElementById("suggestions-box");
const search_bar = document.getElementById("searchbar");

function get_suggestions (items_string) {
    let item_list = items_string.toLowerCase().split(", ");
    let last_item  = item_list[item_list.length - 1].replace(",", "");
    //console.log(last_item)
    //alert(last_item)
    //console.log(evaluate_suggestions(last_item));
    return evaluate_suggestions(last_item);
}

function evaluate_suggestions (item) {
    let suggestions_list = [];

    console.log("item: " + item);

    if (item.length !== 0) {
        // Find every matching possible suggestion and assign them a score
        console.log(suggestions)
        for (let suggestion in suggestions) {
            if (suggestions[suggestion].startsWith(item)) {

                suggestions_list.push(suggestions[suggestion]);
                console.log("list:" + suggestions_list)
            }

        }

    }
    return suggestions_list
}

function update_search_string (updated_last_item) {
    let sb_value = search_bar.value;
    let item_list = sb_value.toLowerCase().split(", ");
    let last_item  = item_list[item_list.length - 1].replace(",", "");

    search_bar.value = sb_value.toLowerCase().replace(last_item, updated_last_item + ", ");

    search_bar.focus();

    suggestion_box.innerHTML = "";
}

function show_suggestions () {
    let suggestions_list = get_suggestions(this.value);

    let new_html = "<ul>";

    for (let i = 0; i < suggestions_list.length && i < 6; i++) {
        new_html += "<li><button onclick='update_search_string(\"" + suggestions_list[i] + "\")'>"
                                                                + suggestions_list[i] + "</button></li>";
    }
    suggestion_box.innerHTML = new_html + "</ul>";
}

