try {
    var infos = decodeURI($(location).attr('href')).split('?')
    if(infos[2] === undefined){
      window.location.replace("https://totoadd.github.io");
    }
    $('#pdp').attr('src', infos[2]);
    $("#text").html(`${infos[1]} t’as invité à ajouter Totoadd sur ton serveur.`)
    document.title = `Totoadd - Invitation de ${infos[1]}`;  
    console.log(infos[2])
  }catch(e){ // catches a malformed URI
    window.location.replace("https://totoadd.github.io");
  }