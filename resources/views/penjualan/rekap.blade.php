<h2>Rekap Penjualan</h2>

<table border="1" cellpadding="5">
    <tr>
        <th>Tanggal</th>
        <th>Total Jumlah Barang Terjual</th>
    </tr>
    @foreach ($data as $item)
    <tr>
        <td>{{ $item->tanggal }}</td>
        <td>{{ $item->total }}</td>
    </tr>
    @endforeach
</table>
