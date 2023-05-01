  // membuat variabel
  var name = "Komunitas"; //string
  var visitorCount = 50322;   //integer
  var isActive = true; //boolean
  var url = "https://www.uhamka.ac.id"; 

  // menampilkan variabel ke jendela dialog (alert)
  var yakin = confirm("Selamat datang di " + name);

  if(yakin){ //membuat kondisi
  document.write("Nama Situs: " + name + "<br>");
  document.write("Jumlah Pengunjung: " + visitorCount + "<br>");
  document.write("Status Aktif: " + isActive + "<br>");
  document.write("Alamat URL: " + url + "<br>");
  } else {
      window.location = url;
  }
