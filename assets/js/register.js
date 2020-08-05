if (!("serviceWorker" in navigator)) {
  console.log("Service Worker : Browser Tidak mendukung");
} else {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log(
        "serviceWorker : Pendaftaran Berhasil. Scope : ",
        registration.scope
      );
    })
    .catch((err) => {
      console.error("serviceWorker: Pendaftaran gagal. Error: ", err);
    });
}
