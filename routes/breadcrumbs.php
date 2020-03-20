<?php
//admin routes
// Home
Breadcrumbs::for('admin.index', function ($trail) {
    $trail->push('Home', route('admin.index'));
});

//clientes
Breadcrumbs::for('clients.index', function ($trail) {
    $trail->parent('admin.index');
    $trail->push('Clientes', route('clients.index'));
});
