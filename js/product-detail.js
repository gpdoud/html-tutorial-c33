
$().ready(() => {
    console.log("jQuery is ready!");
    $("input").css("border-radius", "7px");

    $("#remove").on("click", () => {
        // delete here
    });

    getProductByPk();

});

const getProductByPk = () => {
    let id = getUrlId();
    $.getJSON(`${baseurl}/api/products/${id}`)
        .done(res => {
            console.log(res);
            display(res);
        })
        .fail(err => {
            console.error(err);
        });
}

const display = (product) => {
    $("#xid").val(product.id);
    $("#xpartnbr").val(product.partNbr);
    $("#xname").val(product.name);
    $("#xprice").val(product.price.toFixed(2));
    $("#xunit").val(product.unit);
    $("#xvendor").val(product.vendor.name);
}