<div class="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </div>

  <form id="formEdit" method="post"  role="form"   accept-charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <div class="modal-body">

       <input type="hidden" name="id" id="id" class="id">

       <div class="row">
               <div class="col">
           <label for="company" class="required">Empresa:</label>
           <input name="company" type="text" class="form-control company"  required  maxlength="191">
           <span class="error" role="alert"> </span>
       </div>

        <div class="col">
           <label for="name" class="required">Nombre:</label>
           <input name="name" type="text" class="form-control name" required  autofocus  maxlength="191">
           <span class="error" role="alert"> </span>

       </div>



   </div>

   <div class="row">

   <div class="col">
       <label for="title" class="required">Título:</label>
       <input name="title" type="text" class="form-control title"  required  maxlength="191">
       <span class="error" role="alert"> </span>
   </div>


      <div class="col">
       <label for="email" class="required">Email:</label>
       <input name="email" type="email" class="form-control email" required  maxlength="191">
       <span class="error" role="alert"> </span>
   </div>


</div>


<div class="modal-footer">
    <button type="button" class="btn  pmd-btn-raised pmd-ripple-effect btn-secondary" data-dismiss="modal">Cerrar</button>
    <button type="submit" class="btn  pmd-btn-raised pmd-ripple-effect btn-primary">Guardar</button>
</div>
</div>
</form>

</div>
</div>
</div>
