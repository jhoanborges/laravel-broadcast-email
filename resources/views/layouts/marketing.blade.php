@extends('welcome')
@section('content')

<section class="dashboard-counts no-padding-bottom">
    <div class="container-fluid dash-content d-flex">
        <h1  class="darkblue  mt-1">Marketing</h1>
        <button class="btn  pmd-btn-raised pmd-ripple-effect btn-primary custom-secondary ml-4 pointer"
        data-toggle="modal" data-target="#addModal"
        >Crear</button>
        <a class="btn pmd-btn-raised pmd-ripple-effect btn-secondary custom-secondary ml-4 pointer"
        href="{{ route('clients.email') }}"
        >Enviar correos masivos</a>
    </div>
</section>

<section class="tables">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                    <table id="myTable" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Empresa</th>
                                <th>Nombre</th>
                                <th>Título</th>
                                <th>Email</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</section>

@include('modals.AddMarketing')
@include('modals.EditMarketing')

@section('extra-js')

<script>

    $(document).ready( function () {
        $.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
        var table =   $('#myTable')
        .on('processing.dt', function (e, settings, processing) {
         if (processing) {
            $('.page').LoadingOverlay("show", {
                image       : "",
                fontawesomeColor: "#009FDA",
                fontawesome : "fas fa-spinner fa-spin",
            });
        } else {
          $('.page').LoadingOverlay("hide", true);
      }
  })
        .DataTable({
//esto es para inicializar los tooltip que por defecto no funcionan ni idea porque
"drawCallback": function( settings ) {
    $('[data-toggle="tooltip"]').tooltip();
},
"pageLength": 50,
stateSave: true,
"processing": false,
"serverSide": true,

//botones
dom: 'Blfrtip',
buttons: [
{
    extend: 'print',
    text: 'Imprimir',
    className: 'buttons-html5 '
},

{ extend: 'pdf', className: '' },
{ extend: 'excel', className: '' },
],


ajax: {
    url: '{{route('clients.get')}}',
    type: 'POST',
    dataType : 'json',
},

"fnDrawCallback": function () {//get total
    $('.total').html(this.fnSettings().fnRecordsTotal())
},

select: true,

"columns": [
{"data": "id"},
{"data": "company"},
{"data": "name"},
{"data": "title"},
{"data": "email"},
],


"columnDefs": [
//esto  para el color de las filas queria algo mas oscuro
{
    "targets":4,
    className: 'dt-body-center'
},

{
    "targets":5,
    className: 'dt-body-center',
    "render": function ( data, type, row, meta ) {
        return ' <a class="pointer mr-2" data-toggle="modal" data-target="#EditModal" \
        data-id="'+row.id+'"\
        data-name="'+row.name+'"\
        data-company="'+row.company+'"\
        data-title="'+row.title+'"\
        data-email="'+row.email+'"\
        >\
        <i class="fas fa-edit fa-2x" style=""></i>\
        </a>\
        <a  onClick="deleteNoty('+row.id+')" class="pointer" class="btn-unstyled red">\
        <i class="fas fa-trash-alt fa-2x"></i>\
        </a>';
    },
},


],

"language": {
    "lengthMenu": "Mostrando _MENU_ registros por página",
    "zeroRecords": "No se ha encontrado registros",
    "info": "Mostrando página _PAGE_ de _PAGES_",
    "infoEmpty": "No se ha encontrado registros",
    "infoFiltered": "(Filtrado de _MAX_ registros totales)",
    "search":         "Buscar:",
    "loadingRecords": "Cargando...",
    "processing":     "Procesando...",
    "paginate": {
        "first":      "Primera",
        "last":       "Última",
        "next":       "Siguiente",
        "previous":   "Anterior"
    },
    "scrollX": true,
},
});
    $('#myTable_filter input').addClass('form-control custom-search'); // <-- add this line
    $('#myTable_length select').addClass('form-control custom-select'); // <-- add this line
    setInterval( function () {
    table.ajax.reload( null, false ); // user paging is not reset on reload
}, 300000 );

} );
</script>


<script>
    $('#EditModal').on('show.bs.modal', function (event) {
      var modal = $(this)
      var button = $(event.relatedTarget)

      var id = button.data('id')
      var name = button.data('name')
      var company = button.data('company')
      var title = button.data('title')
      var email = button.data('email')

      modal.find('.modal-body .id').val(id)
      modal.find('.modal-body .name').val(name)
      modal.find('.modal-body .company').val(company)
      modal.find('.modal-body .title').val(title)
      modal.find('.modal-body .email').val(email)



  })
</script>


<script>
    function deleteNoty(id){
     Swal.fire({
      title: '¿Está seguro de eliminar este registro?',
      text: "No serás capaz de recuperarlo nuevamente",
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar'
  }).then((result) => {
      if (result.value) {

        var table = $('#myTable');
        var page = $('.page');

        var data = new FormData();
        data.append('id', id);

        $.ajax({
            url: "{{ route('clients.delete') }}",
            data: data,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            type: 'POST',

            beforeSend: function () {
                page.LoadingOverlay("show", {
                    image       : "",
                    fontawesomeColor: "#009FDA",
                    fontawesome : "fas fa-spinner fa-spin",
                    progress    : true
                });
            },

            success: function(response) {
                table.DataTable().ajax.reload( null, false);
                page.LoadingOverlay("hide")
                toastr["success"](response.message)

            },

            error:function (xhr, ajaxOptions, thrownError){
                page.LoadingOverlay("hide")

                switch (xhr.status) {
                    case 404:
                    toastr["error"](JSON.parse(xhr.responseText).message)

                    return false;
                }
                toastr["error"](response.message)
            }
        });

    }
})
}

</script>






<script>
    $(function () {

        function clear_messages(){
            var form =  $("#formEdit, #form")
            form.find('.invalid-feedback').each(function(){
                $(this).remove()
            })
        }
        $("#form").on("submit", function(e){

            var form = $(this)
            var table = $('#myTable');
            var page = $('.page');

            var array = $(this).serializeArray();
            dataObj = {};

            $(array).each(function(i, field){
              dataObj[field.name] = field.value;
          });

            data = new FormData();
            data.append('company', dataObj['company']);
            data.append('name', dataObj['name']);
            data.append('title', dataObj['title']);
            data.append('email', dataObj['email']);

            e.preventDefault();

            $.ajaxSetup({
              headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

            $.ajax({
                url: '{{route('clients.add')}}',
                data: data,
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                type: 'POST',

                beforeSend: function () {
                    form.LoadingOverlay("show", {
                        image       : "",
                        fontawesomeColor: "#009FDA",
                        fontawesome : "fas fa-spinner fa-spin",
                        progress    : true
                    });
                },

                success: function(response) {

                    $('.modal').modal('hide');
                    //LIMPIAR EL MODAL SI SE CREO EXITOSAMENTE

                    var form =  $("#form")
                    form.find('.invalid-feedback').each(function(){
                        $(this).remove()

                    })
                    document.getElementById('form').reset();

                    table.DataTable().ajax.reload( null, false);
                    form.LoadingOverlay("hide")
                    toastr["success"](response.message)

                },

                error:function (xhr, ajaxOptions, thrownError){
                    clear_messages();
                    form.LoadingOverlay("hide")


                    toastr.clear()

                    if (xhr.responseJSON.errors) {
                        $.each(xhr.responseJSON.errors, function(key, value){
                            toastr["error"](value)
                        });
                        return false;
                    }

                    switch (xhr.status) {
                        case 404:
                        if (xhr.responseJSON.errors) {
                            $.each(xhr.responseJSON.errors, function(key, value){
                                console.log(key)
                                console.log(value)
                                $('#'+key).next('.error').append('<strong style="display:inline-block" class="invalid-feedback">'+value+'</strong>').show();
                            });
                        }

                        toastr["success"](JSON.parse(xhr.responseText).message)

                        return false;
                    }

                    toastr["error"](response.message)


                }
            });
})//add modal


        $("#formEdit").on("submit", function(e){

            var form = $(this)
            var table = $('#myTable');
            var page = $('.page');

            var array = $(this).serializeArray();
            dataObj = {};

            $(array).each(function(i, field){
              dataObj[field.name] = field.value;
          });

            data = new FormData();
            data.append('id', dataObj['id']);
            data.append('company', dataObj['company']);
            data.append('name', dataObj['name']);
            data.append('title', dataObj['title']);
            data.append('email', dataObj['email']);

            e.preventDefault();

            $.ajaxSetup({
              headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

            $.ajax({
                url: '{{route('clients.update')}}',
                data: data,
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                type: 'POST',

                beforeSend: function () {
                    form.LoadingOverlay("show", {
                        image       : "",
                        fontawesomeColor: "#009FDA",
                        fontawesome : "fas fa-spinner fa-spin",
                        progress    : true
                    });
                },

                success: function(response) {

                    $('.modal').modal('hide');

                    table.DataTable().ajax.reload( null, false);

                    form.LoadingOverlay("hide")

                    toastr.clear()
                    toastr["success"](response.message)


                },


                error:function (xhr, ajaxOptions, thrownError){

                    clear_messages();

                    form.LoadingOverlay("hide")
                    toastr.clear()

                    if (xhr.responseJSON.errors) {
                        $.each(xhr.responseJSON.errors, function(key, value){
                            toastr["error"](value)
                        });
                        return false;
                    }


                    switch (xhr.status) {
                        case 404:
                        if (xhr.responseJSON.errors) {

                            $.each(xhr.responseJSON.errors, function(key, value){

                                form.find('.modal-body .'+key+' ')
                                .next('.error')
                                .append('<strong style="display:block;" class="invalid-feedback">'+value+'</strong>')
                                .show()
                                ;
                            });
                        }

                        toastr["error"](JSON.parse(xhr.responseText).message)

                        break

                        case 500:
                        toastr["error"]( JSON.parse(xhr.responseText).errors['errorInfo'][2] )

                        break

                        return false;

                    }
                    if (response.message) {
                        toastr["error"](response.message)
                    }

                }
            });

    })//edit modal

        $('#EditModal').on('hidden.bs.modal', function (event) {
            var form =  $("#formEdit")
            form.find('.invalid-feedback').each(function(){
                $(this).remove()

            })
            document.getElementById('formEdit').reset();
        })


    })
</script>


@endsection
@endsection
