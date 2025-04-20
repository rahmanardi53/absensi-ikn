<form method="POST" action="/absensi">
  @csrf
  Tanggal: <input type="date" name="tanggal">
  ON Duty: <input type="time" name="on_duty">
  OFF Duty: <input type="time" name="off_duty">
  <button type="submit">Simpan</button>
</form>
