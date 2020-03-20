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
           <label for="name" class="required">Nombre:</label>
           <input name="name" type="text" class="form-control name" required  autofocus  maxlength="191">
           <span class="error" role="alert"> </span>

       </div>

       <div class="col">
           <label for="lastname" class="required">Apellidos:</label>
           <input name="lastname" type="text" class="form-control lastname"  required  maxlength="191">
           <span class="error" role="alert"> </span>
       </div>

   </div>

   <div class="row">

      <div class="col">
       <label for="email" class="required">Email:</label>
       <input name="email" type="email" class="form-control email" required  maxlength="191">
       <span class="error" role="alert"> </span>
   </div>

   <div class="col">
       <label for="username" class="required">Username:</label>
       <input name="username" type="text" class="form-control username"  required  maxlength="191">
       <span class="error" role="alert"> </span>
   </div>


</div>


<div class="row">

  <div class="col">
   <label for="password" class="required">Password:</label>
   <input name="password" type="password" class="form-control password" maxlength="191" minlength="8" placeholder="Introduce una nueva contraseña">
   <span class="error" role="alert"> </span>
</div>

<div class="col">
   <label for="password_confirmation" class="required">Confirmar Password:</label>
   <input name="password_confirmation" type="password" class="form-control password_confirmation" maxlength="191" minlength="8" placeholder="Introduce una nueva contraseña">
   <span class="error" role="alert"> </span>
</div>


</div>


<div class="row">

    <div class="col">
      <label for="rol" class="required">Rol</label>
      <select required class="form-control rol"  name="rol" >
          <option disabled selected value="">Seleccione una opción</option>
          <option value="1">Administrador</option>
          <option value="2">Ejecutivo</option>
          <option value="3">Cliente de la plataforma</option>
      </select>
      <span class="error" role="alert"> </span>
  </div>

   <div class="col">
       <label for="phone" class="required">Teléfono:</label>
       <input name="phone" type="text" class="form-control phone"  required  maxlength="191">
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
