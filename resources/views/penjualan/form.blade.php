<form method="POST" action="/penjualan">
    @csrf
    <label>Tanggal:</label>
    <input type="date" name="tanggal" required>

    <h3>Penjualan Barang</h3>

    <div id="penjualan-items">
        <div class="item-row">
            <input type="text" name="items[0][nama_barang]" placeholder="Nama Barang" required>
            <input type="number" name="items[0][jumlah]" placeholder="Jumlah" required>
            <select name="items[0][jenis]">
                <option value="">Pilih Jenis</option>
                <option value="cash">Cash</option>
                <option value="invoice">Invoice</option>
                <option value="tf">Transfer</option>
            </select>
        </div>
    </div>

    <button type="button" onclick="tambahItem()">+ Tambah Item</button><br><br>
    <button type="submit">Simpan Penjualan</button>
</form>

<script>
let index = 1;
function tambahItem() {
    const div = document.createElement('div');
    div.className = 'item-row';
    div.innerHTML = `
        <input type="text" name="items[${index}][nama_barang]" placeholder="Nama Barang" required>
        <input type="number" name="items[${index}][jumlah]" placeholder="Jumlah" required>
        <select name="items[${index}][jenis]">
            <option value="">Pilih Jenis</option>
            <option value="cash">Cash</option>
            <option value="invoice">Invoice</option>
            <option value="tf">Transfer</option>
        </select>
    `;
    document.getElementById('penjualan-items').appendChild(div);
    index++;
}
</script>
