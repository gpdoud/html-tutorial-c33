
$().ready(() => {
    console.log("jquery is ready!");

    $("#refresh").on("click", () => {
        getAllProducts();
    });

    getAllProducts();
});

const getAllProducts = () => {
    $.getJSON("http://localhost:5000/api/products")
        .done(
            res => {
                display(res);
            }
        )
        .fail(
            err =>  {
                console.error(err);
            }
        );
}

const display = (products) => {
    let tbody = $("#data");
    tbody.empty();
    for(let product of products) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${product.id}</td>`);
        tr.append(tdId);
        tr.append( $(`<td>${product.partNbr}</td>`) );
        tr.append( $(`<td>${product.name}</td>`) );
        tr.append( $(`<td>${product.price.toFixed(2)}</td>`) );
        tr.append( $(`<td>${product.unit}</td>`) );
        let tdAction = $("<td></td>");
        tdAction.append( $(`<a href="product-detail.html?id=${product.id}">Detail | </a>`) );
        tdAction.append( $(`<a href="product-edit.html?id=${product.id}">Edit</a>`) );
        tr.append(tdAction);
        tbody.append(tr);
    }
}