var infos = $(location).attr('href').split('?')

$("#text").html(`${infos[1]} t’as invité à ajouter Totoadd sur ton serveur.`)
$('#pdp').attr('src', infos[2]);