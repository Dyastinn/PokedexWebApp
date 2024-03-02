

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#myTable').DataTable({
        "ajax": {url: '/Pokemons/getall'},
        "columns": [
        { data: 'name' },
        { data: 'type1' },
        { data: 'type2' },
        {
            data: 'id',
            "render": function (data) {
                return `<div class="w-75 btn-group" role=group">
                <a href="/Pokemons/details?id=${data}" class="btn btn-primary mx-2"> Details </a>
                <a href="/Pokemons/edit?id=${data}" class="btn btn-secondary mx-2"> Edit </a>
                <a href="/Pokemons/delete?id=${data}" class="btn btn-danger mx-2"> Delete </a>
                
                
                `
            }
        }
        ]
    });
}
