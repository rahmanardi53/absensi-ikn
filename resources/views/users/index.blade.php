@extends('layouts.master')

@section('content')

<div class="content-wrapper">
<div class="row">
<div class="col-md-12">
<div class="card">
            <div class="card-body">
                <p class="card-title">Data Penjualan</p>
                <p class="text-muted mb-3">Berikut adalah rekap Penjualan.</p>

<a href="#" class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#tambahUserModal">+ Tambah User</a>
<div class="table-responsive">
<table class="table table-bordered">
    <thead>
        <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Role</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
        @foreach($users as $user)
        <tr>
            <td>{{ $user->name }}</td>
            <td>{{ $user->email }}</td>
            <td>{{ ucfirst($user->role) }}</td>
            <td>
                <!-- Edit -->
                <button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editUserModal{{ $user->id }}">Edit</button>

                <!-- Hapus -->
                <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#hapusUserModal{{ $user->id }}">Hapus</button>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
</div>
</div>
</div>
</div>
</div>
<!-- Modal Tambah User -->
<div class="modal fade" id="tambahUserModal" tabindex="-1">
  <div class="modal-dialog">
    <form method="POST" action="{{ route('users.store') }}">
      @csrf
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Tambah User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <label>Nama</label>
            <input type="text" name="name" class="form-control" required>
          </div>
          <div class="mb-2">
            <label>Email</label>
            <input type="email" name="email" class="form-control" required>
          </div>
          <div class="mb-2">
            <label>Password</label>
            <input type="password" name="password" class="form-control" required>
          </div>
          <div class="mb-2">
            <label>Konfirmasi Password</label>
            <input type="password" name="password_confirmation" class="form-control" required>
          </div>
          <div class="mb-2">
            <label>Role</label>
            <select name="role" class="form-control" required>
              <option value="pedagang">Pedagang</option>
              <option value="owner">Owner</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-success" type="submit">Simpan</button>
        </div>
      </div>
    </form>
  </div>
</div>


@foreach($users as $user)
<div class="modal fade" id="editUserModal{{ $user->id }}" tabindex="-1">
  <div class="modal-dialog">
    <form method="POST" action="{{ route('users.update', $user->id) }}">
      @csrf @method('PUT')
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <label>Nama</label>
            <input type="text" name="name" class="form-control" value="{{ $user->name }}" required>
          </div>
          <div class="mb-2">
            <label>Email</label>
            <input type="email" name="email" class="form-control" value="{{ $user->email }}" required>
          </div>
          <div class="mb-2">
            <label>Password (isi jika ingin diubah)</label>
            <input type="password" name="password" class="form-control">
          </div>
          <div class="mb-2">
            <label>Role</label>
            <select name="role" class="form-control" required>
              <option value="pedagang" @selected($user->role === 'pedagang')>Pedagang</option>
              <option value="owner" @selected($user->role === 'owner')>Owner</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-warning" type="submit">Update</button>
        </div>
      </div>
    </form>
  </div>
</div>
@endforeach


@foreach($users as $user)
<div class="modal fade" id="hapusUserModal{{ $user->id }}" tabindex="-1">
  <div class="modal-dialog">
    <form method="POST" action="{{ route('users.destroy', $user->id) }}">
      @csrf @method('DELETE')
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Konfirmasi Hapus</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p>Yakin ingin menghapus user <strong>{{ $user->name }}</strong>?</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger" type="submit">Hapus</button>
        </div>
      </div>
    </form>
  </div>
</div>
@endforeach

@endsection
