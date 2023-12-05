function boot() {
    if (!localStorage.getItem('zosho')) {
        init();
        location.reload();
    }
}
function manualInit() {
    init();
    location.reload();
}
function execute() {
    alasql('ATTACH localStorage DATABASE zosho');
    alasql("USE zosho");
    let query = document.getElementById("query");
    let result = alasql(query.value);
    console.log(result);
    showResult(result);
}
function showResult(result) {
    let table = document.createElement("table");
    for (let i = 0; i < result.length; i++) {
        let record = result[i];
        let tr = document.createElement("tr");

        for (key in record) {
            let value = record[key];
            let td = document.createElement("td");
            td.innerHTML = value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("result").appendChild(table);
}
function insertPerson() {
    alasql('ATTACH localStorage DATABASE zosho');
    alasql("USE zosho");

    let name = document.getElementById("name").value;
    let note = document.getElementById("note").value;
    let sql = "INSERT into person (name,note) values ('" + name +"','" + note + "');";
    alert(sql + "を実行しました");
}
function insertBook() {
    alasql('ATTACH localStorage DATABASE zosho');
    alasql("USE zosho");

    let book_id;
    sql = "SELECT max(id) as max FROM book;";
    result = alasql(sql);
    alert(sql + "を実行しました");
    book_id = result[0].max;
    alert(book_id);

    let text = document.getElementById("name").value;
    if (text) {
        let sql = "INSERT into author (book_id,author_id) values ('" + book_id +"','" + text + "');";    
        alert(sql + "を実行しました");
    }
    let author1 = document.getElementById("author1").value;
    if (author1) {
        let sql = "INSERT into author (book_id,author_id) values ('" + book_id +"','" + author1 + "');";    
        alert(sql + "を実行しました");
    }
}
function showBookTable() {
    alasql('ATTACH localStorage DATABASE zosho');
    alasql("USE zosho");
    let sql = "SELECT * FROM book;";
    let result = alasql(sql);   
    let tbody = document.getElementById("bookTableBody");

    for (let i = 0; i < result.length; i++) {
        let record = result[i];
        let tr = document.createElement("tr");
        let td;
        // id
        td = document.createElement("td");
        td.innerHTML = record.id;
        tr.appendChild(td);
        // 名前
        td = document.createElement("td");
        td.innerHTML = record.name;
        tr.appendChild(td);
        // レコード追加
        tbody.appendChild(tr);
    }
}
function initInsertBook() {
    alasql('ATTACH localStorage DATABASE zosho');
    alasql("USE zosho");
    let sql = "SELECT id,name FROM person";
    let result = alasql(sql);

    let author1 = document.getElementById("author1");
    let author2 = document.getElementById("author2");
    let author3 = document.getElementById("author3");
    let author4 = document.getElementById("author4");
    let author5 = document.getElementById("author5");
    let author6 = document.getElementById("author6");

    for (let i = 0; i < result.length; i++) {
        let record = result[i];
        let option = document.createElement("option");
        option.value = record.id;
        option.innerText = record.name;
        author1.appendChild(option);
    }
    for (let i = 0; i < result.length; i++) {
        let record = result[i];
        let option = document.createElement("option");
        option.value = record.id;
        option.innerText = record.name;
        author2.appendChild(option);
    }
    for (let i = 0; i < result.length; i++) {
        let record = result[i];
        let option = document.createElement("option");
        option.value = record.id;
        option.innerText = record.name;
        author3.appendChild(option);
    }
    for (let i = 0; i < result.length; i++) {
        let record = result[i];
        let option = document.createElement("option");
        option.value = record.id;
        option.innerText = record.name;
        author4.appendChild(option);
    }
    for (let i = 0; i < result.length; i++) {
        let record = result[i];
        let option = document.createElement("option");
        option.value = record.id;
        option.innerText = record.name;
        author5.appendChild(option);
    }
    for (let i = 0; i < result.length; i++) {
        let record = result[i];
        let option = document.createElement("option");
        option.value = record.id;
        option.innerText = record.name;
        author6.appendChild(option);
    }
}